awsim['gamelift'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-10-01",
    "endpointPrefix":"gamelift",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"Amazon GameLift",
    "serviceId":"GameLift",
    "signatureVersion":"v4",
    "targetPrefix":"GameLift",
    "uid":"gamelift-2015-10-01"
  },
  "operations":{
    "AcceptMatch":{
      "name":"AcceptMatch",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AcceptMatchInput"},
      "output":{"shape":"AcceptMatchOutput"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnsupportedRegionException"}
      ],
      "documentation":"<p>Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit. </p> <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for your game to get acceptance from all players in the ticket. Acceptances are only valid for tickets when they are in this status; all other acceptances result in an error.</p> <p>To register acceptance, specify the ticket ID, a response, and one or more players. Once all players have registered acceptance, the matchmaking tickets advance to status <code>PLACING</code>, where a new game session is created for the match. </p> <p>If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. The matchmaking tickets are then handled in one of two ways: For tickets where all players accepted the match, the ticket status is returned to <code>SEARCHING</code> to find a new match. For tickets where one or more players failed to accept the match, the ticket status is set to <code>FAILED</code>, and processing is terminated. A new matchmaking request for these players can be submitted as needed. </p> <p>Matchmaking-related operations include:</p> <ul> <li> <p> <a>StartMatchmaking</a> </p> </li> <li> <p> <a>DescribeMatchmaking</a> </p> </li> <li> <p> <a>StopMatchmaking</a> </p> </li> <li> <p> <a>AcceptMatch</a> </p> </li> <li> <p> <a>StartMatchBackfill</a> </p> </li> </ul>"
    },
    "CreateAlias":{
      "name":"CreateAlias",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateAliasInput"},
      "output":{"shape":"CreateAliasOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ConflictException"},
        {"shape":"InternalServiceException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. By using a fleet alias instead of a specific fleet ID, you can switch gameplay and players to a new fleet without changing your game client or other game components. For example, for games in production, using an alias allows you to seamlessly redirect your player base to a new game server update. </p> <p>Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site. </p> <p>To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID, which you can reference when creating a game session. You can reassign an alias to another fleet by calling <code>UpdateAlias</code>.</p> <p>Alias-related operations include:</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>"
    },
    "CreateBuild":{
      "name":"CreateBuild",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateBuildInput"},
      "output":{"shape":"CreateBuildOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"ConflictException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Creates a new Amazon GameLift build record for your game server binary files and points to the location of your game server build files in an Amazon Simple Storage Service (Amazon S3) location. </p> <p>Game server binaries must be combined into a <code>.zip</code> file for use with Amazon GameLift. See <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html\">Uploading Your Game</a> for more information. </p> <important> <p>To create new builds quickly and easily, use the AWS CLI command <b> <a href=\"http://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html\">upload-build</a> </b>. This helper command uploads your build and creates a new build record in one step, and automatically handles the necessary permissions. See <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html\"> Upload Build Files to Amazon GameLift</a> for more help.</p> </important> <p>The <code>CreateBuild</code> operation should be used only when you need to manually upload your build files, as in the following scenarios:</p> <ul> <li> <p>Store a build file in an Amazon S3 bucket under your own AWS account. To use this option, you must first give Amazon GameLift access to that Amazon S3 bucket. See <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build\"> Create a Build with Files in Amazon S3</a> for detailed help. To create a new build record using files in your Amazon S3 bucket, call <code>CreateBuild</code> and specify a build name, operating system, and the storage location of your game build.</p> </li> <li> <p>Upload a build file directly to Amazon GameLift's Amazon S3 account. To use this option, you first call <code>CreateBuild</code> with a build name and operating system. This action creates a new build record and returns an Amazon S3 storage location (bucket and key only) and temporary access credentials. Use the credentials to manually upload your build file to the storage location (see the Amazon S3 topic <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html\">Uploading Objects</a>). You can upload files to a location only once. </p> </li> </ul> <p>If successful, this operation creates a new build record with a unique build ID and places it in <code>INITIALIZED</code> status. You can use <a>DescribeBuild</a> to check the status of your build. A build must be in <code>READY</code> status before it can be used to create fleets.</p> <p>Build-related operations include:</p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>"
    },
    "CreateFleet":{
      "name":"CreateFleet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateFleetInput"},
      "output":{"shape":"CreateFleetOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"LimitExceededException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Creates a new fleet to run your game servers. A fleet is a set of Amazon Elastic Compute Cloud (Amazon EC2) instances, each of which can run multiple server processes to host game sessions. You set up a fleet to use instances with certain hardware specifications (see <a href=\"http://aws.amazon.com/ec2/instance-types/\">Amazon EC2 Instance Types</a> for more information), and deploy your game build to run on each instance. </p> <p>To create a new fleet, you must specify the following: (1) a fleet name, (2) the build ID of a successfully uploaded game build, (3) an EC2 instance type, and (4) a run-time configuration, which describes the server processes to run on each instance in the fleet. If you don't specify a fleet type (on-demand or spot), the new fleet uses on-demand instances by default.</p> <p>You can also configure the new fleet with the following settings:</p> <ul> <li> <p>Fleet description</p> </li> <li> <p>Access permissions for inbound traffic</p> </li> <li> <p>Fleet-wide game session protection</p> </li> <li> <p>Resource usage limits</p> </li> </ul> <ul> <li> <p>VPC peering connection (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html\">VPC Peering with Amazon GameLift Fleets</a>)</p> </li> </ul> <p>If you use Amazon CloudWatch for metrics, you can add the new fleet to a metric group. By adding multiple fleets to a metric group, you can view aggregated metrics for all the fleets in the group. </p> <p>If the <code>CreateFleet</code> call is successful, Amazon GameLift performs the following tasks. You can track the process of a fleet by checking the fleet status or by monitoring fleet creation events:</p> <ul> <li> <p>Creates a fleet record. Status: <code>NEW</code>.</p> </li> <li> <p>Begins writing events to the fleet event log, which can be accessed in the Amazon GameLift console.</p> <p>Sets the fleet's target capacity to 1 (desired instances), which triggers Amazon GameLift to start one new EC2 instance.</p> </li> <li> <p>Downloads the game build to the new instance and installs it. Statuses: <code>DOWNLOADING</code>, <code>VALIDATING</code>, <code>BUILDING</code>. </p> </li> <li> <p>Starts launching server processes on the instance. If the fleet is configured to run multiple server processes per instance, Amazon GameLift staggers each launch by a few seconds. Status: <code>ACTIVATING</code>.</p> </li> <li> <p>Sets the fleet's status to <code>ACTIVE</code> as soon as one server process is ready to host a game session.</p> </li> </ul> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "CreateGameSession":{
      "name":"CreateGameSession",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateGameSessionInput"},
      "output":{"shape":"CreateGameSessionOutput"},
      "errors":[
        {"shape":"ConflictException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidFleetStatusException"},
        {"shape":"TerminalRoutingStrategyException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"FleetCapacityExceededException"},
        {"shape":"LimitExceededException"},
        {"shape":"IdempotentParameterMismatchException"}
      ],
      "documentation":"<p>Creates a multiplayer game session for players. This action creates a game session record and assigns an available server process in the specified fleet to host the game session. A fleet must have an <code>ACTIVE</code> status before a game session can be created in it.</p> <p>To create a game session, specify either fleet ID or alias ID and indicate a maximum number of players to allow in the game session. You can also provide a name and game-specific properties for this game session. If successful, a <a>GameSession</a> object is returned containing the game session properties and other settings you specified.</p> <p> <b>Idempotency tokens.</b> You can add a token that uniquely identifies game session requests. This is useful for ensuring that game session requests are idempotent. Multiple requests with the same idempotency token are processed only once; subsequent requests return the original result. All response values are the same with the exception of game session status, which may change.</p> <p> <b>Resource creation limits.</b> If you are creating a game session on a fleet with a resource creation limit policy in force, then you must specify a creator ID. Without this ID, Amazon GameLift has no way to evaluate the policy for this new game session request.</p> <p> <b>Player acceptance policy.</b> By default, newly created game sessions are open to new players. You can restrict new player access by using <a>UpdateGameSession</a> to change the game session's player session creation policy.</p> <p> <b>Game session logs.</b> Logs are retained for all active game sessions for 14 days. To access the logs, call <a>GetGameSessionLogUrl</a> to download the log files.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p>Game-session-related operations include:</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "CreateGameSessionQueue":{
      "name":"CreateGameSessionQueue",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateGameSessionQueueInput"},
      "output":{"shape":"CreateGameSessionQueueOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"LimitExceededException"}
      ],
      "documentation":"<p>Establishes a new queue for processing requests to place new game sessions. A queue identifies where new game sessions can be hosted -- by specifying a list of destinations (fleets or aliases) -- and how long requests can wait in the queue before timing out. You can set up a queue to try to place game sessions on fleets in multiple regions. To add placement requests to a queue, call <a>StartGameSessionPlacement</a> and reference the queue name.</p> <p> <b>Destination order.</b> When processing a request for a game session, Amazon GameLift tries each destination in order until it finds one with available resources to host the new game session. A queue's default order is determined by how destinations are listed. The default order is overridden when a game session placement request provides player latency information. Player latency information enables Amazon GameLift to prioritize destinations where players report the lowest average latency, as a result placing the new game session where the majority of players will have the best possible gameplay experience.</p> <p> <b>Player latency policies.</b> For placement requests containing player latency information, use player latency policies to protect individual players from very high latencies. With a latency cap, even when a destination can deliver a low latency for most players, the game is not placed where any individual player is reporting latency higher than a policy's maximum. A queue can have multiple latency policies, which are enforced consecutively starting with the policy with the lowest latency cap. Use multiple policies to gradually relax latency controls; for example, you might set a policy with a low latency cap for the first 60 seconds, a second policy with a higher cap for the next 60 seconds, etc. </p> <p>To create a new queue, provide a name, timeout value, a list of destinations and, if desired, a set of latency policies. If successful, a new queue object is returned.</p> <p>Queue-related operations include:</p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>"
    },
    "CreateMatchmakingConfiguration":{
      "name":"CreateMatchmakingConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateMatchmakingConfigurationInput"},
      "output":{"shape":"CreateMatchmakingConfigurationOutput"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"LimitExceededException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnsupportedRegionException"}
      ],
      "documentation":"<p>Defines a new matchmaking configuration for use with FlexMatch. A matchmaking configuration sets out guidelines for matching players and getting the matches into games. You can set up multiple matchmaking configurations to handle the scenarios needed for your game. Each matchmaking ticket (<a>StartMatchmaking</a> or <a>StartMatchBackfill</a>) specifies a configuration for the match and provides player attributes to support the configuration being used. </p> <p>To create a matchmaking configuration, at a minimum you must specify the following: configuration name; a rule set that governs how to evaluate players and find acceptable matches; a game session queue to use when placing a new game session for the match; and the maximum time allowed for a matchmaking attempt.</p> <p> <b>Player acceptance</b> -- In each configuration, you have the option to require that all players accept participation in a proposed match. To enable this feature, set <i>AcceptanceRequired</i> to true and specify a time limit for player acceptance. Players have the option to accept or reject a proposed match, and a match does not move ahead to game session placement unless all matched players accept. </p> <p> <b>Matchmaking status notification</b> -- There are two ways to track the progress of matchmaking tickets: (1) polling ticket status with <a>DescribeMatchmaking</a>; or (2) receiving notifications with Amazon Simple Notification Service (SNS). To use notifications, you first need to set up an SNS topic to receive the notifications, and provide the topic ARN in the matchmaking configuration (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/match-notification.html\"> Setting up Notifications for Matchmaking</a>). Since notifications promise only \"best effort\" delivery, we recommend calling <code>DescribeMatchmaking</code> if no notifications are received within 30 seconds.</p> <p>Operations related to match configurations and rule sets include:</p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> </ul>"
    },
    "CreateMatchmakingRuleSet":{
      "name":"CreateMatchmakingRuleSet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateMatchmakingRuleSetInput"},
      "output":{"shape":"CreateMatchmakingRuleSetOutput"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnsupportedRegionException"}
      ],
      "documentation":"<p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams, and sets the parameters for acceptable player matches, such as minimum skill level or character type. Rule sets are used in matchmaking configurations, which define how matchmaking requests are handled. Each <a>MatchmakingConfiguration</a> uses one rule set; you can set up multiple rule sets to handle the scenarios that suit your game (such as for different game modes), and create a separate matchmaking configuration for each rule set. See additional information on rule set content in the <a>MatchmakingRuleSet</a> structure. For help creating rule sets, including useful examples, see the topic <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/match-intro.html\"> Adding FlexMatch to Your Game</a>.</p> <p>Once created, matchmaking rule sets cannot be changed or deleted, so we recommend checking the rule set syntax using <a>ValidateMatchmakingRuleSet</a> before creating the rule set.</p> <p>To create a matchmaking rule set, provide the set of rules and a unique name. Rule sets must be defined in the same region as the matchmaking configuration they will be used with. Rule sets cannot be edited or deleted. If you need to change a rule set, create a new one with the necessary edits and then update matchmaking configurations to use the new rule set.</p> <p>Operations related to match configurations and rule sets include:</p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> </ul>"
    },
    "CreatePlayerSession":{
      "name":"CreatePlayerSession",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreatePlayerSessionInput"},
      "output":{"shape":"CreatePlayerSessionOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidGameSessionStatusException"},
        {"shape":"GameSessionFullException"},
        {"shape":"TerminalRoutingStrategyException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Adds a player to a game session and creates a player session record. Before a player can be added, a game session must have an <code>ACTIVE</code> status, have a creation policy of <code>ALLOW_ALL</code>, and have an open player slot. To add a group of players to a game session, use <a>CreatePlayerSessions</a>.</p> <p>To create a player session, specify a game session ID, player ID, and optionally a string of player data. If successful, the player is added to the game session and a new <a>PlayerSession</a> object is returned. Player sessions cannot be updated. </p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p>Player-session-related operations include:</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "CreatePlayerSessions":{
      "name":"CreatePlayerSessions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreatePlayerSessionsInput"},
      "output":{"shape":"CreatePlayerSessionsOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidGameSessionStatusException"},
        {"shape":"GameSessionFullException"},
        {"shape":"TerminalRoutingStrategyException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Adds a group of players to a game session. This action is useful with a team matching feature. Before players can be added, a game session must have an <code>ACTIVE</code> status, have a creation policy of <code>ALLOW_ALL</code>, and have an open player slot. To add a single player to a game session, use <a>CreatePlayerSession</a>.</p> <p>To create player sessions, specify a game session ID, a list of player IDs, and optionally a set of player data strings. If successful, the players are added to the game session and a set of new <a>PlayerSession</a> objects is returned. Player sessions cannot be updated.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p>Player-session-related operations include:</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "CreateVpcPeeringAuthorization":{
      "name":"CreateVpcPeeringAuthorization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateVpcPeeringAuthorizationInput"},
      "output":{"shape":"CreateVpcPeeringAuthorizationOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your AWS account. VPC peering enables the game servers on your fleet to communicate directly with other AWS resources. Once you've received authorization, call <a>CreateVpcPeeringConnection</a> to establish the peering connection. For more information, see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html\">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>You can peer with VPCs that are owned by any AWS account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different regions.</p> <p>To request authorization to create a connection, call this operation from the AWS account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the AWS account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p> <p>To request authorization to delete a connection, call this operation from the AWS account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the AWS account that you use to manage Amazon GameLift. </p> <p>The authorization remains valid for 24 hours unless it is canceled by a call to <a>DeleteVpcPeeringAuthorization</a>. You must create or delete the peering connection while the authorization is valid. </p> <p>VPC peering connection operations include:</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>"
    },
    "CreateVpcPeeringConnection":{
      "name":"CreateVpcPeeringConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateVpcPeeringConnectionInput"},
      "output":{"shape":"CreateVpcPeeringConnectionOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an AWS account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other AWS resources. You can peer with VPCs in any AWS account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different regions. For more information, see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html\">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>Before calling this operation to establish the peering connection, you first need to call <a>CreateVpcPeeringAuthorization</a> and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc. </p> <p>To establish the connection, call this operation from the AWS account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The AWS account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a <a>VpcPeeringConnection</a> request is created. You can use continuous polling to track the request's status using <a>DescribeVpcPeeringConnections</a>, or by monitoring fleet events for success or failure using <a>DescribeFleetEvents</a>. </p> <p>VPC peering connection operations include:</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>"
    },
    "DeleteAlias":{
      "name":"DeleteAlias",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteAliasInput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Deletes an alias. This action removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.</p> <p>Alias-related operations include:</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>"
    },
    "DeleteBuild":{
      "name":"DeleteBuild",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteBuildInput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>Deletes a build. This action permanently deletes the build record and any uploaded build files.</p> <p>To delete a build, specify its ID. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.</p> <p>Build-related operations include:</p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>"
    },
    "DeleteFleet":{
      "name":"DeleteFleet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteFleetInput"},
      "errors":[
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"InvalidFleetStatusException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>Deletes everything related to a fleet. Before deleting a fleet, you must set the fleet's desired capacity to zero. See <a>UpdateFleetCapacity</a>.</p> <p>This action removes the fleet's resources and the fleet record. Once a fleet is deleted, you can no longer use that fleet.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "DeleteGameSessionQueue":{
      "name":"DeleteGameSessionQueue",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteGameSessionQueueInput"},
      "output":{"shape":"DeleteGameSessionQueueOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Deletes a game session queue. This action means that any <a>StartGameSessionPlacement</a> requests that reference this queue will fail. To delete a queue, specify the queue name.</p> <p>Queue-related operations include:</p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>"
    },
    "DeleteMatchmakingConfiguration":{
      "name":"DeleteMatchmakingConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteMatchmakingConfigurationInput"},
      "output":{"shape":"DeleteMatchmakingConfigurationOutput"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnsupportedRegionException"}
      ],
      "documentation":"<p>Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.</p> <p>Operations related to match configurations and rule sets include:</p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> </ul>"
    },
    "DeleteScalingPolicy":{
      "name":"DeleteScalingPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteScalingPolicyInput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Deletes a fleet scaling policy. This action means that the policy is no longer in force and removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.</p> <p>To temporarily suspend scaling policies, call <a>StopFleetActions</a>. This operation suspends all policies for the fleet.</p> <p>Operations related to fleet capacity scaling include:</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "DeleteVpcPeeringAuthorization":{
      "name":"DeleteVpcPeeringAuthorization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteVpcPeeringAuthorizationInput"},
      "output":{"shape":"DeleteVpcPeeringAuthorizationOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Cancels a pending VPC peering authorization for the specified VPC. If the authorization has already been used to create a peering connection, call <a>DeleteVpcPeeringConnection</a> to remove the connection. </p> <p>VPC peering connection operations include:</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>"
    },
    "DeleteVpcPeeringConnection":{
      "name":"DeleteVpcPeeringConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteVpcPeeringConnectionInput"},
      "output":{"shape":"DeleteVpcPeeringConnectionOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete. You can check for an authorization by calling <a>DescribeVpcPeeringAuthorizations</a> or request a new one using <a>CreateVpcPeeringAuthorization</a>. </p> <p>Once a valid authorization exists, call this operation from the AWS account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed. </p> <p>VPC peering connection operations include:</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>"
    },
    "DescribeAlias":{
      "name":"DescribeAlias",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeAliasInput"},
      "output":{"shape":"DescribeAliasOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use <code>ResolveAlias</code>. </p> <p>To get alias properties, specify the alias ID. If successful, the requested alias record is returned.</p> <p>Alias-related operations include:</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>"
    },
    "DescribeBuild":{
      "name":"DescribeBuild",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeBuildInput"},
      "output":{"shape":"DescribeBuildOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Retrieves properties for a build. To request a build record, specify a build ID. If successful, an object containing the build properties is returned.</p> <p>Build-related operations include:</p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>"
    },
    "DescribeEC2InstanceLimits":{
      "name":"DescribeEC2InstanceLimits",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeEC2InstanceLimitsInput"},
      "output":{"shape":"DescribeEC2InstanceLimitsOutput"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Retrieves the following information for the specified EC2 instance type:</p> <ul> <li> <p>maximum number of instances allowed per AWS account (service limit)</p> </li> <li> <p>current usage level for the AWS account</p> </li> </ul> <p>Service limits vary depending on region. Available regions for Amazon GameLift can be found in the AWS Management Console for Amazon GameLift (see the drop-down list in the upper right corner).</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "DescribeFleetAttributes":{
      "name":"DescribeFleetAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeFleetAttributesInput"},
      "output":{"shape":"DescribeFleetAttributesOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Retrieves fleet properties, including metadata, status, and configuration, for one or more fleets. You can request attributes for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>FleetAttributes</a> object is returned for each requested fleet ID. When specifying a list of fleet IDs, attribute objects are returned only for fleets that currently exist. </p> <note> <p>Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "DescribeFleetCapacity":{
      "name":"DescribeFleetCapacity",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeFleetCapacityInput"},
      "output":{"shape":"DescribeFleetCapacityOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Retrieves the current status of fleet capacity for one or more fleets. This information includes the number of instances that have been requested for the fleet and the number currently active. You can request capacity for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>FleetCapacity</a> object is returned for each requested fleet ID. When specifying a list of fleet IDs, attribute objects are returned only for fleets that currently exist. </p> <note> <p>Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "DescribeFleetEvents":{
      "name":"DescribeFleetEvents",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeFleetEventsInput"},
      "output":{"shape":"DescribeFleetEventsOutput"},
      "errors":[
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>Retrieves entries from the specified fleet's event log. You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a collection of event log entries matching the request are returned.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "DescribeFleetPortSettings":{
      "name":"DescribeFleetPortSettings",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeFleetPortSettingsInput"},
      "output":{"shape":"DescribeFleetPortSettingsOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Retrieves the inbound connection permissions for a fleet. Connection permissions include a range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. To get a fleet's inbound connection permissions, specify a fleet ID. If successful, a collection of <a>IpPermission</a> objects is returned for the requested fleet ID. If the requested fleet has been deleted, the result set is empty.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "DescribeFleetUtilization":{
      "name":"DescribeFleetUtilization",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeFleetUtilizationInput"},
      "output":{"shape":"DescribeFleetUtilizationOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Retrieves utilization statistics for one or more fleets. You can request utilization data for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>FleetUtilization</a> object is returned for each requested fleet ID. When specifying a list of fleet IDs, utilization objects are returned only for fleets that currently exist. </p> <note> <p>Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "DescribeGameSessionDetails":{
      "name":"DescribeGameSessionDetails",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeGameSessionDetailsInput"},
      "output":{"shape":"DescribeGameSessionDetailsOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TerminalRoutingStrategyException"}
      ],
      "documentation":"<p>Retrieves properties, including the protection policy in force, for one or more game sessions. This action can be used in several ways: (1) provide a <code>GameSessionId</code> or <code>GameSessionArn</code> to request details for a specific game session; (2) provide either a <code>FleetId</code> or an <code>AliasId</code> to request properties for all game sessions running on a fleet. </p> <p>To get game session record(s), specify just one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>GameSessionDetail</a> object is returned for each session matching the request.</p> <p>Game-session-related operations include:</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "DescribeGameSessionPlacement":{
      "name":"DescribeGameSessionPlacement",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeGameSessionPlacementInput"},
      "output":{"shape":"DescribeGameSessionPlacementOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Retrieves properties and current status of a game session placement request. To get game session placement details, specify the placement ID. If successful, a <a>GameSessionPlacement</a> object is returned.</p> <p>Game-session-related operations include:</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "DescribeGameSessionQueues":{
      "name":"DescribeGameSessionQueues",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeGameSessionQueuesInput"},
      "output":{"shape":"DescribeGameSessionQueuesOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>GameSessionQueue</a> object is returned for each requested queue. When specifying a list of queues, objects are returned only for queues that currently exist in the region.</p> <p>Queue-related operations include:</p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>"
    },
    "DescribeGameSessions":{
      "name":"DescribeGameSessions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeGameSessionsInput"},
      "output":{"shape":"DescribeGameSessionsOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TerminalRoutingStrategyException"}
      ],
      "documentation":"<p>Retrieves a set of one or more game sessions. Request a specific game session or request all game sessions on a fleet. Alternatively, use <a>SearchGameSessions</a> to request a set of active game sessions that are filtered by certain criteria. To retrieve protection policy settings for game sessions, use <a>DescribeGameSessionDetails</a>.</p> <p>To get game sessions, specify one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>GameSession</a> object is returned for each game session matching the request.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p>Game-session-related operations include:</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "DescribeInstances":{
      "name":"DescribeInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeInstancesInput"},
      "output":{"shape":"DescribeInstancesOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Retrieves information about a fleet's instances, including instance IDs. Use this action to get details on all instances in the fleet or get details on one specific instance.</p> <p>To get a specific instance, specify fleet ID and instance ID. To get all instances in a fleet, specify a fleet ID only. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, an <a>Instance</a> object is returned for each result.</p>"
    },
    "DescribeMatchmaking":{
      "name":"DescribeMatchmaking",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeMatchmakingInput"},
      "output":{"shape":"DescribeMatchmakingOutput"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnsupportedRegionException"}
      ],
      "documentation":"<p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including status and--once a successful match is made--acquire connection information for the resulting new game session. </p> <p>You can use this operation to track the progress of matchmaking requests (through polling) as an alternative to using event notifications. See more details on tracking matchmaking requests through polling or notifications in <a>StartMatchmaking</a>. </p> <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists.</p> <p>Matchmaking-related operations include:</p> <ul> <li> <p> <a>StartMatchmaking</a> </p> </li> <li> <p> <a>DescribeMatchmaking</a> </p> </li> <li> <p> <a>StopMatchmaking</a> </p> </li> <li> <p> <a>AcceptMatch</a> </p> </li> <li> <p> <a>StartMatchBackfill</a> </p> </li> </ul>"
    },
    "DescribeMatchmakingConfigurations":{
      "name":"DescribeMatchmakingConfigurations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeMatchmakingConfigurationsInput"},
      "output":{"shape":"DescribeMatchmakingConfigurationsOutput"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnsupportedRegionException"}
      ],
      "documentation":"<p>Retrieves the details of FlexMatch matchmaking configurations. with this operation, you have the following options: (1) retrieve all existing configurations, (2) provide the names of one or more configurations to retrieve, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned. </p> <p>Operations related to match configurations and rule sets include:</p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> </ul>"
    },
    "DescribeMatchmakingRuleSets":{
      "name":"DescribeMatchmakingRuleSets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeMatchmakingRuleSetsInput"},
      "output":{"shape":"DescribeMatchmakingRuleSetsOutput"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"InternalServiceException"},
        {"shape":"NotFoundException"},
        {"shape":"UnsupportedRegionException"}
      ],
      "documentation":"<p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name. </p> <p>Operations related to match configurations and rule sets include:</p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> </ul>"
    },
    "DescribePlayerSessions":{
      "name":"DescribePlayerSessions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribePlayerSessionsInput"},
      "output":{"shape":"DescribePlayerSessionsOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Retrieves properties for one or more player sessions. This action can be used in several ways: (1) provide a <code>PlayerSessionId</code> to request properties for a specific player session; (2) provide a <code>GameSessionId</code> to request properties for all player sessions in the specified game session; (3) provide a <code>PlayerId</code> to request properties for all player sessions of a specified player. </p> <p>To get game session record(s), specify only one of the following: a player session ID, a game session ID, or a player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>PlayerSession</a> object is returned for each session matching the request.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p>Player-session-related operations include:</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "DescribeRuntimeConfiguration":{
      "name":"DescribeRuntimeConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeRuntimeConfigurationInput"},
      "output":{"shape":"DescribeRuntimeConfigurationOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>Retrieves the current run-time configuration for the specified fleet. The run-time configuration tells Amazon GameLift how to launch server processes on instances in the fleet.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "DescribeScalingPolicies":{
      "name":"DescribeScalingPolicies",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeScalingPoliciesInput"},
      "output":{"shape":"DescribeScalingPoliciesOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Retrieves all scaling policies applied to a fleet.</p> <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of <a>ScalingPolicy</a> objects is returned for the fleet.</p> <p>A fleet may have all of its scaling policies suspended (<a>StopFleetActions</a>). This action does not affect the status of the scaling policies, which remains ACTIVE. To see whether a fleet's scaling policies are in force or suspended, call <a>DescribeFleetAttributes</a> and check the stopped actions.</p> <p>Operations related to fleet capacity scaling include:</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "DescribeVpcPeeringAuthorizations":{
      "name":"DescribeVpcPeeringAuthorizations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeVpcPeeringAuthorizationsInput"},
      "output":{"shape":"DescribeVpcPeeringAuthorizationsOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Retrieves valid VPC peering authorizations that are pending for the AWS account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account. </p> <p>VPC peering connection operations include:</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>"
    },
    "DescribeVpcPeeringConnections":{
      "name":"DescribeVpcPeeringConnections",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeVpcPeeringConnectionsInput"},
      "output":{"shape":"DescribeVpcPeeringConnectionsOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID. </p> <p>To retrieve connection information, call this operation from the AWS account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect. </p> <p>VPC peering connection operations include:</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>"
    },
    "GetGameSessionLogUrl":{
      "name":"GetGameSessionLogUrl",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetGameSessionLogUrlInput"},
      "output":{"shape":"GetGameSessionLogUrlOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.</p> <note> <p>See the <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift\">AWS Service Limits</a> page for maximum log file sizes. Log files that exceed this limit are not saved.</p> </note> <p>Game-session-related operations include:</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "GetInstanceAccess":{
      "name":"GetInstanceAccess",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetInstanceAccessInput"},
      "output":{"shape":"GetInstanceAccessOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or watching activity in real time. </p> <p>Access requires credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the AWS CLI, saving the secret can be handled as part of the GetInstanceAccess request. (See the example later in this topic). For more information on remote access, see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html\">Remotely Accessing an Instance</a>.</p> <p>To request access to a specific instance, specify the IDs of the instance and the fleet it belongs to. If successful, an <a>InstanceAccess</a> object is returned containing the instance's IP address and a set of credentials.</p>"
    },
    "ListAliases":{
      "name":"ListAliases",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListAliasesInput"},
      "output":{"shape":"ListAliasesOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Retrieves all aliases for this AWS account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.</p> <note> <p>Returned aliases are not listed in any particular order.</p> </note> <p>Alias-related operations include:</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>"
    },
    "ListBuilds":{
      "name":"ListBuilds",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListBuildsInput"},
      "output":{"shape":"ListBuildsOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Retrieves build records for all builds associated with the AWS account in use. You can limit results to builds that are in a specific status by using the <code>Status</code> parameter. Use the pagination parameters to retrieve results in a set of sequential pages. </p> <note> <p>Build records are not listed in any particular order.</p> </note> <p>Build-related operations include:</p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>"
    },
    "ListFleets":{
      "name":"ListFleets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListFleetsInput"},
      "output":{"shape":"ListFleetsOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Retrieves a collection of fleet records for this AWS account. You can filter the result set by build ID. Use the pagination parameters to retrieve results in sequential pages.</p> <note> <p>Fleet records are not listed in any particular order.</p> </note> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "PutScalingPolicy":{
      "name":"PutScalingPolicy",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutScalingPolicyInput"},
      "output":{"shape":"PutScalingPolicyOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling. </p> <p>Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences.</p> <p>You can temporarily suspend all scaling policies for a fleet by calling <a>StopFleetActions</a> with the fleet action AUTO_SCALING. To resume scaling policies, call <a>StartFleetActions</a> with the same fleet action. To stop just one scaling policy--or to permanently remove it, you must delete the policy with <a>DeleteScalingPolicy</a>.</p> <p>Learn more about how to work with auto-scaling in <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html\">Set Up Fleet Automatic Scaling</a>.</p> <p> <b>Target-based policy</b> </p> <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target. </p> <p>For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer. </p> <p>To create or update a target-based policy, specify a fleet ID and name, and set the policy type to \"TargetBased\". Specify the metric to track (PercentAvailableGameSessions) and reference a <a>TargetConfiguration</a> object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p> <p> <b>Rule-based policy</b> </p> <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action. </p> <p>For example, a policy may make the following statement: \"If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%.\"</p> <p>A policy's rule statement has the following structure:</p> <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code> <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then <code>[ScalingAdjustmentType]</code> to/by <code>[ScalingAdjustment]</code>.</p> <p>To implement the example, the rule statement would look like this:</p> <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code> <code>[20]</code> for <code>[15]</code> minutes, then <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p> <p>To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to \"RuleBased\". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p> <p>Operations related to fleet capacity scaling include:</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "RequestUploadCredentials":{
      "name":"RequestUploadCredentials",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RequestUploadCredentialsInput"},
      "output":{"shape":"RequestUploadCredentialsOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see <a>CreateBuild</a>.</p> <p>To request new credentials, specify the build ID as returned with an initial <code>CreateBuild</code> request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.</p>"
    },
    "ResolveAlias":{
      "name":"ResolveAlias",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ResolveAliasInput"},
      "output":{"shape":"ResolveAliasOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"TerminalRoutingStrategyException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Retrieves the fleet ID that a specified alias is currently pointing to.</p> <p>Alias-related operations include:</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>"
    },
    "SearchGameSessions":{
      "name":"SearchGameSessions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SearchGameSessionsInput"},
      "output":{"shape":"SearchGameSessionsOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"NotFoundException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"TerminalRoutingStrategyException"}
      ],
      "documentation":"<p>Retrieves all active game sessions that match a set of search criteria and sorts them in a specified order. You can search or sort by the following game session attributes:</p> <ul> <li> <p> <b>gameSessionId</b> -- Unique identifier for the game session. You can use either a <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p> </li> <li> <p> <b>gameSessionName</b> -- Name assigned to a game session. This value is set when requesting a new game session with <a>CreateGameSession</a> or updating with <a>UpdateGameSession</a>. Game session names do not need to be unique to a game session.</p> </li> <li> <p> <b>gameSessionProperties</b> -- Custom data defined in a game session's <code>GameProperty</code> parameter. <code>GameProperty</code> values are stored as key:value pairs; the filter expression must indicate the key and a string to search the data values for. For example, to search for game sessions with custom data containing the key:value pair \"gameMode:brawl\", specify the following: <code>gameSessionProperties.gameMode = \"brawl\"</code>. All custom data values are searched as strings.</p> </li> <li> <p> <b>maximumSessions</b> -- Maximum number of player sessions allowed for a game session. This value is set when requesting a new game session with <a>CreateGameSession</a> or updating with <a>UpdateGameSession</a>.</p> </li> <li> <p> <b>creationTimeMillis</b> -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.</p> </li> <li> <p> <b>playerSessionCount</b> -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.</p> </li> <li> <p> <b>hasAvailablePlayerSessions</b> -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join. </p> </li> </ul> <note> <p>Returned values for <code>playerSessionCount</code> and <code>hasAvailablePlayerSessions</code> change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join. </p> </note> <p>To search or sort, specify either a fleet ID or an alias ID, and provide a search filter expression, a sort expression, or both. If successful, a collection of <a>GameSession</a> objects matching the request is returned. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>You can search for game sessions one fleet at a time only. To find game sessions across multiple fleets, you must search each fleet separately and combine the results. This search feature finds only game sessions that are in <code>ACTIVE</code> status. To locate games in statuses other than active, use <a>DescribeGameSessionDetails</a>.</p> <p>Game-session-related operations include:</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "StartFleetActions":{
      "name":"StartFleetActions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartFleetActionsInput"},
      "output":{"shape":"StartFleetActionsOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Resumes activity on a fleet that was suspended with <a>StopFleetActions</a>. Currently, this operation is used to restart a fleet's auto-scaling activity. </p> <p>To start fleet actions, specify the fleet ID and the type of actions to restart. When auto-scaling fleet actions are restarted, Amazon GameLift once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet were never stopped, this operation will have no effect. You can view a fleet's stopped actions using <a>DescribeFleetAttributes</a>.</p> <p>Operations related to fleet capacity scaling include:</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "StartGameSessionPlacement":{
      "name":"StartGameSessionPlacement",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartGameSessionPlacementInput"},
      "output":{"shape":"StartGameSessionPlacementOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Places a request for a new game session in a queue (see <a>CreateGameSessionQueue</a>). When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out.</p> <p>A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request.</p> <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order.</p> <p>Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each region's average lag for all players and reorders to get the best game play across all players. </p> <p>To place a new game session request, specify the following:</p> <ul> <li> <p>The queue name and a set of game session properties and settings</p> </li> <li> <p>A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request</p> </li> <li> <p>(Optional) A set of IDs and player data for each player you want to join to the new game session</p> </li> <li> <p>Latency data for all players (if you want to optimize game play for the players)</p> </li> </ul> <p>If successful, a new game session placement is created.</p> <p>To track the status of a placement request, call <a>DescribeGameSessionPlacement</a> and check the request's status. If the status is <code>FULFILLED</code>, a new game session has been created and a game session ARN and region are referenced. If the placement request times out, you can resubmit the request or retry it with a different queue. </p> <p>Game-session-related operations include:</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "StartMatchBackfill":{
      "name":"StartMatchBackfill",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartMatchBackfillInput"},
      "output":{"shape":"StartMatchBackfillOutput"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnsupportedRegionException"}
      ],
      "documentation":"<p>Finds new players to fill open slots in an existing game session. This operation can be used to add players to matched games that start with fewer than the maximum number of players or to replace players when they drop out. By backfilling with the same matchmaker used to create the original match, you ensure that new players meet the match criteria and maintain a consistent experience throughout the game session. You can backfill a match anytime after a game session has been created. </p> <p>To request a match backfill, specify a unique ticket ID, the existing game session's ARN, a matchmaking configuration, and a set of data that describes all current players in the game session. If successful, a match backfill ticket is created and returned with status set to QUEUED. The ticket is placed in the matchmaker's ticket pool and processed. Track the status of the ticket to respond as needed. For more detail how to set up backfilling, see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/match-backfill.html\"> Backfill Existing Games with FlexMatch</a>. </p> <p>The process of finding backfill matches is essentially identical to the initial matchmaking process. The matchmaker searches the pool and groups tickets together to form potential matches, allowing only one backfill ticket per potential match. Once the a match is formed, the matchmaker creates player sessions for the new players. All tickets in the match are updated with the game session's connection information, and the <a>GameSession</a> object is updated to include matchmaker data on the new players. For more detail on how match backfill requests are processed, see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/match-intro.html\"> How Amazon GameLift FlexMatch Works</a>. </p> <p>Matchmaking-related operations include:</p> <ul> <li> <p> <a>StartMatchmaking</a> </p> </li> <li> <p> <a>DescribeMatchmaking</a> </p> </li> <li> <p> <a>StopMatchmaking</a> </p> </li> <li> <p> <a>AcceptMatch</a> </p> </li> <li> <p> <a>StartMatchBackfill</a> </p> </li> </ul>"
    },
    "StartMatchmaking":{
      "name":"StartMatchmaking",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartMatchmakingInput"},
      "output":{"shape":"StartMatchmakingOutput"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnsupportedRegionException"}
      ],
      "documentation":"<p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules, and starts a new game for the matched players. Each matchmaking request specifies the type of match to build (team configuration, rules for an acceptable match, etc.). The request also specifies the players to find a match for and where to host the new game session for optimal performance. A matchmaking request might start with a single player or a group of players who want to play together. FlexMatch finds additional players as needed to fill the match. Match type, rules, and the queue used to place a new game session are defined in a <code>MatchmakingConfiguration</code>. For complete information on setting up and using FlexMatch, see the topic <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/match-intro.html\"> Adding FlexMatch to Your Game</a>.</p> <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include a set of player attributes relevant for the matchmaking configuration. If successful, a matchmaking ticket is returned with status set to <code>QUEUED</code>. Track the status of the ticket to respond as needed and acquire game session connection information for successfully completed matches.</p> <p> <b>Tracking ticket status</b> -- A couple of options are available for tracking the status of matchmaking requests: </p> <ul> <li> <p>Polling -- Call <code>DescribeMatchmaking</code>. This operation returns the full ticket object, including current status and (for completed tickets) game session connection info. We recommend polling no more than once every 10 seconds.</p> </li> <li> <p>Notifications -- Get event notifications for changes in ticket status using Amazon Simple Notification Service (SNS). Notifications are easy to set up (see <a>CreateMatchmakingConfiguration</a>) and typically deliver match status changes faster and more efficiently than polling. We recommend that you use polling to back up to notifications (since delivery is not guaranteed) and call <code>DescribeMatchmaking</code> only when notifications are not received within 30 seconds.</p> </li> </ul> <p> <b>Processing a matchmaking request</b> -- FlexMatch handles a matchmaking request as follows: </p> <ol> <li> <p>Your client code submits a <code>StartMatchmaking</code> request for one or more players and tracks the status of the request ticket. </p> </li> <li> <p>FlexMatch uses this ticket and others in process to build an acceptable match. When a potential match is identified, all tickets in the proposed match are advanced to the next status. </p> </li> <li> <p>If the match requires player acceptance (set in the matchmaking configuration), the tickets move into status <code>REQUIRES_ACCEPTANCE</code>. This status triggers your client code to solicit acceptance from all players in every ticket involved in the match, and then call <a>AcceptMatch</a> for each player. If any player rejects or fails to accept the match before a specified timeout, the proposed match is dropped (see <code>AcceptMatch</code> for more details).</p> </li> <li> <p>Once a match is proposed and accepted, the matchmaking tickets move into status <code>PLACING</code>. FlexMatch locates resources for a new game session using the game session queue (set in the matchmaking configuration) and creates the game session based on the match data. </p> </li> <li> <p>When the match is successfully placed, the matchmaking tickets move into <code>COMPLETED</code> status. Connection information (including game session endpoint and player session) is added to the matchmaking tickets. Matched players can use the connection information to join the game. </p> </li> </ol> <p>Matchmaking-related operations include:</p> <ul> <li> <p> <a>StartMatchmaking</a> </p> </li> <li> <p> <a>DescribeMatchmaking</a> </p> </li> <li> <p> <a>StopMatchmaking</a> </p> </li> <li> <p> <a>AcceptMatch</a> </p> </li> <li> <p> <a>StartMatchBackfill</a> </p> </li> </ul>"
    },
    "StopFleetActions":{
      "name":"StopFleetActions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopFleetActionsInput"},
      "output":{"shape":"StopFleetActionsOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"}
      ],
      "documentation":"<p>Suspends activity on a fleet. Currently, this operation is used to stop a fleet's auto-scaling activity. It is used to temporarily stop scaling events triggered by the fleet's scaling policies. The policies can be retained and auto-scaling activity can be restarted using <a>StartFleetActions</a>. You can view a fleet's stopped actions using <a>DescribeFleetAttributes</a>.</p> <p>To stop fleet actions, specify the fleet ID and the type of actions to suspend. When auto-scaling fleet actions are stopped, Amazon GameLift no longer initiates scaling events except to maintain the fleet's desired instances setting (<a>FleetCapacity</a>. Changes to the fleet's capacity must be done manually using <a>UpdateFleetCapacity</a>. </p>"
    },
    "StopGameSessionPlacement":{
      "name":"StopGameSessionPlacement",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopGameSessionPlacementInput"},
      "output":{"shape":"StopGameSessionPlacementOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Cancels a game session placement that is in <code>PENDING</code> status. To stop a placement, provide the placement ID values. If successful, the placement is moved to <code>CANCELLED</code> status.</p> <p>Game-session-related operations include:</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "StopMatchmaking":{
      "name":"StopMatchmaking",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopMatchmakingInput"},
      "output":{"shape":"StopMatchmakingOutput"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnsupportedRegionException"}
      ],
      "documentation":"<p>Cancels a matchmaking ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to <code>CANCELLED</code>.</p> <p>Matchmaking-related operations include:</p> <ul> <li> <p> <a>StartMatchmaking</a> </p> </li> <li> <p> <a>DescribeMatchmaking</a> </p> </li> <li> <p> <a>StopMatchmaking</a> </p> </li> <li> <p> <a>AcceptMatch</a> </p> </li> <li> <p> <a>StartMatchBackfill</a> </p> </li> </ul>"
    },
    "UpdateAlias":{
      "name":"UpdateAlias",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateAliasInput"},
      "output":{"shape":"UpdateAliasOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.</p> <p>Alias-related operations include:</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>"
    },
    "UpdateBuild":{
      "name":"UpdateBuild",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateBuildInput"},
      "output":{"shape":"UpdateBuildOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"}
      ],
      "documentation":"<p>Updates metadata in a build record, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.</p> <p>Build-related operations include:</p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>"
    },
    "UpdateFleetAttributes":{
      "name":"UpdateFleetAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateFleetAttributesInput"},
      "output":{"shape":"UpdateFleetAttributesOutput"},
      "errors":[
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"InvalidFleetStatusException"},
        {"shape":"LimitExceededException"},
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Updates fleet properties, including name and description, for a fleet. To update metadata, specify the fleet ID and the property values that you want to change. If successful, the fleet ID for the updated fleet is returned.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "UpdateFleetCapacity":{
      "name":"UpdateFleetCapacity",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateFleetCapacityInput"},
      "output":{"shape":"UpdateFleetCapacityOutput"},
      "errors":[
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"LimitExceededException"},
        {"shape":"InvalidFleetStatusException"},
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Updates capacity settings for a fleet. Use this action to specify the number of EC2 instances (hosts) that you want this fleet to contain. Before calling this action, you may want to call <a>DescribeEC2InstanceLimits</a> to get the maximum capacity based on the fleet's EC2 instance type.</p> <p>Specify minimum and maximum number of instances. Amazon GameLift will not change fleet capacity to values fall outside of this range. This is particularly important when using auto-scaling (see <a>PutScalingPolicy</a>) to allow capacity to adjust based on player demand while imposing limits on automatic adjustments.</p> <p>To update fleet capacity, specify the fleet ID and the number of instances you want the fleet to host. If successful, Amazon GameLift starts or terminates instances so that the fleet's active instance count matches the desired instance count. You can view a fleet's current capacity information by calling <a>DescribeFleetCapacity</a>. If the desired instance count is higher than the instance type's limit, the \"Limit Exceeded\" exception occurs.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "UpdateFleetPortSettings":{
      "name":"UpdateFleetPortSettings",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateFleetPortSettingsInput"},
      "output":{"shape":"UpdateFleetPortSettingsOutput"},
      "errors":[
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"InvalidFleetStatusException"},
        {"shape":"LimitExceededException"},
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Updates port settings for a fleet. To update settings, specify the fleet ID to be updated and list the permissions you want to update. List the permissions you want to add in <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in <code>InboundPermissionRevocations</code>. Permissions to be removed must match existing fleet permissions. If successful, the fleet ID for the updated fleet is returned.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "UpdateGameSession":{
      "name":"UpdateGameSession",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateGameSessionInput"},
      "output":{"shape":"UpdateGameSessionOutput"},
      "errors":[
        {"shape":"NotFoundException"},
        {"shape":"ConflictException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnauthorizedException"},
        {"shape":"InvalidGameSessionStatusException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>Updates game session properties. This includes the session name, maximum player count, protection policy, which controls whether or not an active game session can be terminated during a scale-down event, and the player session creation policy, which controls whether or not new players can join the session. To update a game session, specify the game session ID and the values you want to change. If successful, an updated <a>GameSession</a> object is returned. </p> <p>Game-session-related operations include:</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "UpdateGameSessionQueue":{
      "name":"UpdateGameSessionQueue",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateGameSessionQueueInput"},
      "output":{"shape":"UpdateGameSessionQueueOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"UnauthorizedException"}
      ],
      "documentation":"<p>Updates settings for a game session queue, which determines how new game session requests in the queue are processed. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. </p> <p>Queue-related operations include:</p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>"
    },
    "UpdateMatchmakingConfiguration":{
      "name":"UpdateMatchmakingConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateMatchmakingConfigurationInput"},
      "output":{"shape":"UpdateMatchmakingConfigurationOutput"},
      "errors":[
        {"shape":"InvalidRequestException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"UnsupportedRegionException"}
      ],
      "documentation":"<p>Updates settings for a FlexMatch matchmaking configuration. To update settings, specify the configuration name to be updated and provide the new settings. </p> <p>Operations related to match configurations and rule sets include:</p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> </ul>"
    },
    "UpdateRuntimeConfiguration":{
      "name":"UpdateRuntimeConfiguration",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateRuntimeConfigurationInput"},
      "output":{"shape":"UpdateRuntimeConfigurationOutput"},
      "errors":[
        {"shape":"UnauthorizedException"},
        {"shape":"NotFoundException"},
        {"shape":"InternalServiceException"},
        {"shape":"InvalidRequestException"},
        {"shape":"InvalidFleetStatusException"}
      ],
      "documentation":"<p>Updates the current run-time configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on instances in the fleet. You can update a fleet's run-time configuration at any time after the fleet is created; it does not need to be in an <code>ACTIVE</code> status.</p> <p>To update run-time configuration, specify the fleet ID and provide a <code>RuntimeConfiguration</code> object with the updated collection of server process configurations.</p> <p>Each instance in a Amazon GameLift fleet checks regularly for an updated run-time configuration and changes how it launches server processes to comply with the latest version. Existing server processes are not affected by the update; they continue to run until they end, while Amazon GameLift simply adds new server processes to fit the current run-time configuration. As a result, the run-time configuration changes are applied gradually as existing processes shut down and new processes are launched in Amazon GameLift's normal process recycling activity.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "ValidateMatchmakingRuleSet":{
      "name":"ValidateMatchmakingRuleSet",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ValidateMatchmakingRuleSetInput"},
      "output":{"shape":"ValidateMatchmakingRuleSetOutput"},
      "errors":[
        {"shape":"InternalServiceException"},
        {"shape":"UnsupportedRegionException"},
        {"shape":"InvalidRequestException"}
      ],
      "documentation":"<p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set uses syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set string.</p> <p>Operations related to match configurations and rule sets include:</p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> </ul>"
    }
  },
  "shapes":{
    "AcceptMatchInput":{
      "type":"structure",
      "required":[
        "TicketId",
        "PlayerIds",
        "AcceptanceType"
      ],
      "members":{
        "TicketId":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking ticket. The ticket must be in status <code>REQUIRES_ACCEPTANCE</code>; otherwise this request will fail.</p>"
        },
        "PlayerIds":{
          "shape":"StringList",
          "documentation":"<p>Unique identifier for a player delivering the response. This parameter can include one or multiple player IDs.</p>"
        },
        "AcceptanceType":{
          "shape":"AcceptanceType",
          "documentation":"<p>Player response to the proposed match.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "AcceptMatchOutput":{
      "type":"structure",
      "members":{
      }
    },
    "AcceptanceType":{
      "type":"string",
      "enum":[
        "ACCEPT",
        "REJECT"
      ]
    },
    "Alias":{
      "type":"structure",
      "members":{
        "AliasId":{
          "shape":"AliasId",
          "documentation":"<p>Unique identifier for an alias; alias IDs are unique within a region.</p>"
        },
        "Name":{
          "shape":"NonBlankAndLengthConstraintString",
          "documentation":"<p>Descriptive label that is associated with an alias. Alias names do not need to be unique.</p>"
        },
        "AliasArn":{
          "shape":"ArnStringModel",
          "documentation":"<p>Unique identifier for an alias; alias ARNs are unique across all regions.</p>"
        },
        "Description":{
          "shape":"FreeText",
          "documentation":"<p>Human-readable description of an alias.</p>"
        },
        "RoutingStrategy":{
          "shape":"RoutingStrategy",
          "documentation":"<p>Alias configuration for the alias, including routing type and settings.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "LastUpdatedTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this data object was last modified. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        }
      },
      "documentation":"<p>Properties describing a fleet alias.</p> <p>Alias-related operations include:</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>"
    },
    "AliasId":{
      "type":"string",
      "pattern":"^alias-\\S+"
    },
    "AliasList":{
      "type":"list",
      "member":{"shape":"Alias"}
    },
    "ArnStringModel":{
      "type":"string",
      "max":256,
      "min":1,
      "pattern":"[a-zA-Z0-9:/-]+"
    },
    "AttributeValue":{
      "type":"structure",
      "members":{
        "S":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>For single string values. Maximum string length is 100 characters.</p>"
        },
        "N":{
          "shape":"DoubleObject",
          "documentation":"<p>For number values, expressed as double.</p>"
        },
        "SL":{
          "shape":"StringList",
          "documentation":"<p>For a list of up to 10 strings. Maximum length for each string is 100 characters. Duplicate values are not recognized; all occurrences of the repeated value after the first of a repeated value are ignored.</p>"
        },
        "SDM":{
          "shape":"StringDoubleMap",
          "documentation":"<p>For a map of up to 10 data type:value pairs. Maximum length for each string value is 100 characters. </p>"
        }
      },
      "documentation":"<p>Values for use in <a>Player</a> attribute key:value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array or data map. Each <code>AttributeValue</code> object can use only one of the available properties.</p>"
    },
    "AwsCredentials":{
      "type":"structure",
      "members":{
        "AccessKeyId":{
          "shape":"NonEmptyString",
          "documentation":"<p>Temporary key allowing access to the Amazon GameLift S3 account.</p>"
        },
        "SecretAccessKey":{
          "shape":"NonEmptyString",
          "documentation":"<p>Temporary secret key allowing access to the Amazon GameLift S3 account.</p>"
        },
        "SessionToken":{
          "shape":"NonEmptyString",
          "documentation":"<p>Token used to associate a specific build ID with the files uploaded using these credentials.</p>"
        }
      },
      "documentation":"<p>Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a>RequestUploadCredentials</a>.</p>",
      "sensitive":true
    },
    "BooleanModel":{"type":"boolean"},
    "Build":{
      "type":"structure",
      "members":{
        "BuildId":{
          "shape":"BuildId",
          "documentation":"<p>Unique identifier for a build.</p>"
        },
        "Name":{
          "shape":"FreeText",
          "documentation":"<p>Descriptive label that is associated with a build. Build names do not need to be unique. It can be set using <a>CreateBuild</a> or <a>UpdateBuild</a>.</p>"
        },
        "Version":{
          "shape":"FreeText",
          "documentation":"<p>Version that is associated with this build. Version strings do not need to be unique. This value can be set using <a>CreateBuild</a> or <a>UpdateBuild</a>.</p>"
        },
        "Status":{
          "shape":"BuildStatus",
          "documentation":"<p>Current status of the build.</p> <p>Possible build statuses include the following:</p> <ul> <li> <p> <b>INITIALIZED</b> -- A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value. </p> </li> <li> <p> <b>READY</b> -- The game build has been successfully uploaded. You can now create new fleets for this build.</p> </li> <li> <p> <b>FAILED</b> -- The game build upload failed. You cannot create new fleets for this build. </p> </li> </ul>"
        },
        "SizeOnDisk":{
          "shape":"PositiveLong",
          "documentation":"<p>File size of the uploaded game build, expressed in bytes. When the build status is <code>INITIALIZED</code>, this value is 0.</p>"
        },
        "OperatingSystem":{
          "shape":"OperatingSystem",
          "documentation":"<p>Operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        }
      },
      "documentation":"<p>Properties describing a game build.</p> <p>Build-related operations include:</p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>"
    },
    "BuildId":{
      "type":"string",
      "pattern":"^build-\\S+"
    },
    "BuildList":{
      "type":"list",
      "member":{"shape":"Build"}
    },
    "BuildStatus":{
      "type":"string",
      "enum":[
        "INITIALIZED",
        "READY",
        "FAILED"
      ]
    },
    "ComparisonOperatorType":{
      "type":"string",
      "enum":[
        "GreaterThanOrEqualToThreshold",
        "GreaterThanThreshold",
        "LessThanThreshold",
        "LessThanOrEqualToThreshold"
      ]
    },
    "ConflictException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.</p>",
      "exception":true
    },
    "CreateAliasInput":{
      "type":"structure",
      "required":[
        "Name",
        "RoutingStrategy"
      ],
      "members":{
        "Name":{
          "shape":"NonBlankAndLengthConstraintString",
          "documentation":"<p>Descriptive label that is associated with an alias. Alias names do not need to be unique.</p>"
        },
        "Description":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Human-readable description of an alias.</p>"
        },
        "RoutingStrategy":{
          "shape":"RoutingStrategy",
          "documentation":"<p>Object that specifies the fleet and routing type to use for the alias.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "CreateAliasOutput":{
      "type":"structure",
      "members":{
        "Alias":{
          "shape":"Alias",
          "documentation":"<p>Object that describes the newly created alias record.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "CreateBuildInput":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a build. Build names do not need to be unique. You can use <a>UpdateBuild</a> to change this value later. </p>"
        },
        "Version":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Version that is associated with this build. Version strings do not need to be unique. You can use <a>UpdateBuild</a> to change this value later. </p>"
        },
        "StorageLocation":{
          "shape":"S3Location",
          "documentation":"<p>Information indicating where your game build files are stored. Use this parameter only when creating a build with files stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key, as well as a role ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket must be in the same region that you want to create a new build in.</p>"
        },
        "OperatingSystem":{
          "shape":"OperatingSystem",
          "documentation":"<p>Operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build. If your game build contains multiple executables, they all must run on the same operating system. If an operating system is not specified when creating a build, Amazon GameLift uses the default value (WINDOWS_2012). This value cannot be changed later.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "CreateBuildOutput":{
      "type":"structure",
      "members":{
        "Build":{
          "shape":"Build",
          "documentation":"<p>The newly created build record, including a unique build ID and status. </p>"
        },
        "UploadCredentials":{
          "shape":"AwsCredentials",
          "documentation":"<p>This element is returned only when the operation is called without a storage location. It contains credentials to use when you are uploading a build file to an Amazon S3 bucket that is owned by Amazon GameLift. Credentials have a limited life span. To refresh these credentials, call <a>RequestUploadCredentials</a>. </p>"
        },
        "StorageLocation":{
          "shape":"S3Location",
          "documentation":"<p>Amazon S3 location for your game build file, including bucket name and key.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "CreateFleetInput":{
      "type":"structure",
      "required":[
        "Name",
        "BuildId",
        "EC2InstanceType"
      ],
      "members":{
        "Name":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>"
        },
        "Description":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Human-readable description of a fleet.</p>"
        },
        "BuildId":{
          "shape":"BuildId",
          "documentation":"<p>Unique identifier for a build to be deployed on the new fleet. The build must have been successfully uploaded to Amazon GameLift and be in a <code>READY</code> status. This fleet setting cannot be changed once the fleet is created.</p>"
        },
        "ServerLaunchPath":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>This parameter is no longer used. Instead, specify a server launch path using the <code>RuntimeConfiguration</code> parameter. (Requests that specify a server launch path and launch parameters instead of a run-time configuration will continue to work.)</p>"
        },
        "ServerLaunchParameters":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>This parameter is no longer used. Instead, specify server launch parameters in the <code>RuntimeConfiguration</code> parameter. (Requests that specify a server launch path and launch parameters instead of a run-time configuration will continue to work.)</p>"
        },
        "LogPaths":{
          "shape":"StringList",
          "documentation":"<p>This parameter is no longer used. Instead, to specify where Amazon GameLift should store log files once a server process shuts down, use the Amazon GameLift server API <code>ProcessReady()</code> and specify one or more directory paths in <code>logParameters</code>. See more information in the <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api-ref.html#gamelift-sdk-server-api-ref-dataypes-process\">Server API Reference</a>. </p>"
        },
        "EC2InstanceType":{
          "shape":"EC2InstanceType",
          "documentation":"<p>Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See <a href=\"http://aws.amazon.com/ec2/instance-types/\">Amazon EC2 Instance Types</a> for detailed descriptions.</p>"
        },
        "EC2InboundPermissions":{
          "shape":"IpPermissionsList",
          "documentation":"<p>Range of IP addresses and port settings that permit inbound traffic to access server processes running on the fleet. If no inbound permissions are set, including both IP address range and port range, the server processes in the fleet cannot accept connections. You can specify one or more sets of permissions for a fleet.</p>"
        },
        "NewGameSessionProtectionPolicy":{
          "shape":"ProtectionPolicy",
          "documentation":"<p>Game session protection policy to apply to all instances in this fleet. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy using <a>UpdateFleetAttributes</a>, but this change will only affect sessions created after the policy change. You can also set protection for individual instances using <a>UpdateGameSession</a>.</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>"
        },
        "RuntimeConfiguration":{
          "shape":"RuntimeConfiguration",
          "documentation":"<p>Instructions for launching server processes on each instance in the fleet. The run-time configuration for a fleet has a collection of server process configurations, one for each type of server process to run on an instance. A server process configuration specifies the location of the server executable, launch parameters, and the number of concurrent processes with that configuration to maintain on each instance. A CreateFleet request must include a run-time configuration with at least one server process configuration; otherwise the request fails with an invalid request exception. (This parameter replaces the parameters <code>ServerLaunchPath</code> and <code>ServerLaunchParameters</code>; requests that contain values for these parameters instead of a run-time configuration will continue to work.) </p>"
        },
        "ResourceCreationLimitPolicy":{
          "shape":"ResourceCreationLimitPolicy",
          "documentation":"<p>Policy that limits the number of game sessions an individual player can create over a span of time for this fleet.</p>"
        },
        "MetricGroups":{
          "shape":"MetricGroupList",
          "documentation":"<p>Name of a metric group to add this fleet to. A metric group tracks metrics across all fleets in the group. Use an existing metric group name to add this fleet to the group, or use a new name to create a new metric group. A fleet can only be included in one metric group at a time.</p>"
        },
        "PeerVpcAwsAccountId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your Account ID in the AWS Management Console under account settings.</p>"
        },
        "PeerVpcId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same region where your fleet is deployed. To get VPC information, including IDs, use the Virtual Private Cloud service tools, including the VPC Dashboard in the AWS Management Console.</p>"
        },
        "FleetType":{
          "shape":"FleetType",
          "documentation":"<p>Indicates whether to use on-demand instances or spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations, based on the instance type selected for this fleet. You can acquire on-demand instances at any time for a fixed price and keep them as long as you need them. Spot instances have lower prices, but spot pricing is variable, and while in use they can be interrupted (with a two-minute notification). Learn more about Amazon GameLift spot instances with at <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html\"> Choose Computing Resources</a>. </p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "CreateFleetOutput":{
      "type":"structure",
      "members":{
        "FleetAttributes":{
          "shape":"FleetAttributes",
          "documentation":"<p>Properties for the newly created fleet.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "CreateGameSessionInput":{
      "type":"structure",
      "required":["MaximumPlayerSessionCount"],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to create a game session in. Each request must reference either a fleet ID or alias ID, but not both.</p>"
        },
        "AliasId":{
          "shape":"AliasId",
          "documentation":"<p>Unique identifier for an alias associated with the fleet to create a game session in. Each request must reference either a fleet ID or alias ID, but not both.</p>"
        },
        "MaximumPlayerSessionCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Maximum number of players that can be connected simultaneously to the game session.</p>"
        },
        "Name":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>"
        },
        "GameProperties":{
          "shape":"GamePropertyList",
          "documentation":"<p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>).</p>"
        },
        "CreatorId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a player or entity creating the game session. This ID is used to enforce a resource protection policy (if one exists) that limits the number of concurrent active game sessions one player can have.</p>"
        },
        "GameSessionId":{
          "shape":"IdStringModel",
          "documentation":"<p> <i>This parameter is no longer preferred. Please use <code>IdempotencyToken</code> instead.</i> Custom string that uniquely identifies a request for a new game session. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID. (A game session ARN has the following format: <code>arn:aws:gamelift:&lt;region&gt;::gamesession/&lt;fleet ID&gt;/&lt;custom ID string or idempotency token&gt;</code>.) </p>"
        },
        "IdempotencyToken":{
          "shape":"IdStringModel",
          "documentation":"<p>Custom string that uniquely identifies a request for a new game session. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID. (A game session ARN has the following format: <code>arn:aws:gamelift:&lt;region&gt;::gamesession/&lt;fleet ID&gt;/&lt;custom ID string or idempotency token&gt;</code>.) Idempotency tokens remain in use for 30 days after a game session has ended; game session objects are retained for this time period and then deleted.</p>"
        },
        "GameSessionData":{
          "shape":"GameSessionData",
          "documentation":"<p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>).</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "CreateGameSessionOutput":{
      "type":"structure",
      "members":{
        "GameSession":{
          "shape":"GameSession",
          "documentation":"<p>Object that describes the newly created game session record.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "CreateGameSessionQueueInput":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"GameSessionQueueName",
          "documentation":"<p>Descriptive label that is associated with game session queue. Queue names must be unique within each region.</p>"
        },
        "TimeoutInSeconds":{
          "shape":"WholeNumber",
          "documentation":"<p>Maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>"
        },
        "PlayerLatencyPolicies":{
          "shape":"PlayerLatencyPolicyList",
          "documentation":"<p>Collection of latency policies to apply when processing game sessions placement requests with player latency information. Multiple policies are evaluated in order of the maximum latency value, starting with the lowest latency values. With just one policy, it is enforced at the start of the game session placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period. For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the remainder of the placement. A player latency policy must set a value for MaximumIndividualPlayerLatencyMilliseconds; if none is set, this API requests will fail.</p>"
        },
        "Destinations":{
          "shape":"GameSessionQueueDestinationList",
          "documentation":"<p>List of fleets that can be used to fulfill game session placement requests in the queue. Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "CreateGameSessionQueueOutput":{
      "type":"structure",
      "members":{
        "GameSessionQueue":{
          "shape":"GameSessionQueue",
          "documentation":"<p>Object that describes the newly created game session queue.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "CreateMatchmakingConfigurationInput":{
      "type":"structure",
      "required":[
        "Name",
        "GameSessionQueueArns",
        "RequestTimeoutSeconds",
        "AcceptanceRequired",
        "RuleSetName"
      ],
      "members":{
        "Name":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking configuration. This name is used to identify the configuration associated with a matchmaking request or ticket.</p>"
        },
        "Description":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Meaningful description of the matchmaking configuration. </p>"
        },
        "GameSessionQueueArns":{
          "shape":"QueueArnsList",
          "documentation":"<p>Amazon Resource Name (<a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html\">ARN</a>) that is assigned to a game session queue and uniquely identifies it. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. These queues are used when placing game sessions for matches that are created with this matchmaking configuration. Queues can be located in any region.</p>"
        },
        "RequestTimeoutSeconds":{
          "shape":"MatchmakingRequestTimeoutInteger",
          "documentation":"<p>Maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that time out can be resubmitted as needed.</p>"
        },
        "AcceptanceTimeoutSeconds":{
          "shape":"MatchmakingAcceptanceTimeoutInteger",
          "documentation":"<p>Length of time (in seconds) to wait for players to accept a proposed match. If any player rejects the match or fails to accept before the timeout, the ticket continues to look for an acceptable match.</p>"
        },
        "AcceptanceRequired":{
          "shape":"BooleanModel",
          "documentation":"<p>Flag that determines whether or not a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE.</p>"
        },
        "RuleSetName":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking rule set to use with this configuration. A matchmaking configuration can only use rule sets that are defined in the same region.</p>"
        },
        "NotificationTarget":{
          "shape":"SnsArnStringModel",
          "documentation":"<p>SNS topic ARN that is set up to receive matchmaking notifications.</p>"
        },
        "AdditionalPlayerCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match.</p>"
        },
        "CustomEventData":{
          "shape":"CustomEventData",
          "documentation":"<p>Information to attached to all events related to the matchmaking configuration. </p>"
        },
        "GameProperties":{
          "shape":"GamePropertyList",
          "documentation":"<p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object that is created for a successful match. </p>"
        },
        "GameSessionData":{
          "shape":"GameSessionData",
          "documentation":"<p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object that is created for a successful match.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "CreateMatchmakingConfigurationOutput":{
      "type":"structure",
      "members":{
        "Configuration":{
          "shape":"MatchmakingConfiguration",
          "documentation":"<p>Object that describes the newly created matchmaking configuration.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "CreateMatchmakingRuleSetInput":{
      "type":"structure",
      "required":[
        "Name",
        "RuleSetBody"
      ],
      "members":{
        "Name":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking rule set. This name is used to identify the rule set associated with a matchmaking configuration.</p>"
        },
        "RuleSetBody":{
          "shape":"RuleSetBody",
          "documentation":"<p>Collection of matchmaking rules, formatted as a JSON string. (Note that comments are not allowed in JSON, but most elements support a description field.)</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "CreateMatchmakingRuleSetOutput":{
      "type":"structure",
      "required":["RuleSet"],
      "members":{
        "RuleSet":{
          "shape":"MatchmakingRuleSet",
          "documentation":"<p>Object that describes the newly created matchmaking rule set.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "CreatePlayerSessionInput":{
      "type":"structure",
      "required":[
        "GameSessionId",
        "PlayerId"
      ],
      "members":{
        "GameSessionId":{
          "shape":"ArnStringModel",
          "documentation":"<p>Unique identifier for the game session to add a player to.</p>"
        },
        "PlayerId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a player. Player IDs are developer-defined.</p>"
        },
        "PlayerData":{
          "shape":"PlayerData",
          "documentation":"<p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "CreatePlayerSessionOutput":{
      "type":"structure",
      "members":{
        "PlayerSession":{
          "shape":"PlayerSession",
          "documentation":"<p>Object that describes the newly created player session record.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "CreatePlayerSessionsInput":{
      "type":"structure",
      "required":[
        "GameSessionId",
        "PlayerIds"
      ],
      "members":{
        "GameSessionId":{
          "shape":"ArnStringModel",
          "documentation":"<p>Unique identifier for the game session to add players to.</p>"
        },
        "PlayerIds":{
          "shape":"PlayerIdList",
          "documentation":"<p>List of unique identifiers for the players to be added.</p>"
        },
        "PlayerDataMap":{
          "shape":"PlayerDataMap",
          "documentation":"<p>Map of string pairs, each specifying a player ID and a set of developer-defined information related to the player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game. Player data strings for player IDs not included in the <code>PlayerIds</code> parameter are ignored. </p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "CreatePlayerSessionsOutput":{
      "type":"structure",
      "members":{
        "PlayerSessions":{
          "shape":"PlayerSessionList",
          "documentation":"<p>Collection of player session objects created for the added players.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "CreateVpcPeeringAuthorizationInput":{
      "type":"structure",
      "required":[
        "GameLiftAwsAccountId",
        "PeerVpcId"
      ],
      "members":{
        "GameLiftAwsAccountId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for the AWS account that you use to manage your Amazon GameLift fleet. You can find your Account ID in the AWS Management Console under account settings.</p>"
        },
        "PeerVpcId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same region where your fleet is deployed. To get VPC information, including IDs, use the Virtual Private Cloud service tools, including the VPC Dashboard in the AWS Management Console.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "CreateVpcPeeringAuthorizationOutput":{
      "type":"structure",
      "members":{
        "VpcPeeringAuthorization":{
          "shape":"VpcPeeringAuthorization",
          "documentation":"<p>Details on the requested VPC peering authorization, including expiration.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "CreateVpcPeeringConnectionInput":{
      "type":"structure",
      "required":[
        "FleetId",
        "PeerVpcAwsAccountId",
        "PeerVpcId"
      ],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet. This tells Amazon GameLift which GameLift VPC to peer with. </p>"
        },
        "PeerVpcAwsAccountId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your Account ID in the AWS Management Console under account settings.</p>"
        },
        "PeerVpcId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same region where your fleet is deployed. To get VPC information, including IDs, use the Virtual Private Cloud service tools, including the VPC Dashboard in the AWS Management Console.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "CreateVpcPeeringConnectionOutput":{
      "type":"structure",
      "members":{
      }
    },
    "CustomEventData":{
      "type":"string",
      "max":256,
      "min":0
    },
    "DeleteAliasInput":{
      "type":"structure",
      "required":["AliasId"],
      "members":{
        "AliasId":{
          "shape":"AliasId",
          "documentation":"<p>Unique identifier for a fleet alias. Specify the alias you want to delete.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DeleteBuildInput":{
      "type":"structure",
      "required":["BuildId"],
      "members":{
        "BuildId":{
          "shape":"BuildId",
          "documentation":"<p>Unique identifier for a build to delete.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DeleteFleetInput":{
      "type":"structure",
      "required":["FleetId"],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to be deleted.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DeleteGameSessionQueueInput":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"GameSessionQueueName",
          "documentation":"<p>Descriptive label that is associated with game session queue. Queue names must be unique within each region.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DeleteGameSessionQueueOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteMatchmakingConfigurationInput":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking configuration</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DeleteMatchmakingConfigurationOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteScalingPolicyInput":{
      "type":"structure",
      "required":[
        "Name",
        "FleetId"
      ],
      "members":{
        "Name":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a scaling policy. Policy names do not need to be unique.</p>"
        },
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to be deleted.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DeleteVpcPeeringAuthorizationInput":{
      "type":"structure",
      "required":[
        "GameLiftAwsAccountId",
        "PeerVpcId"
      ],
      "members":{
        "GameLiftAwsAccountId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for the AWS account that you use to manage your Amazon GameLift fleet. You can find your Account ID in the AWS Management Console under account settings.</p>"
        },
        "PeerVpcId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same region where your fleet is deployed. To get VPC information, including IDs, use the Virtual Private Cloud service tools, including the VPC Dashboard in the AWS Management Console.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DeleteVpcPeeringAuthorizationOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteVpcPeeringConnectionInput":{
      "type":"structure",
      "required":[
        "FleetId",
        "VpcPeeringConnectionId"
      ],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet. This value must match the fleet ID referenced in the VPC peering connection record.</p>"
        },
        "VpcPeeringConnectionId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a VPC peering connection. This value is included in the <a>VpcPeeringConnection</a> object, which can be retrieved by calling <a>DescribeVpcPeeringConnections</a>.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DeleteVpcPeeringConnectionOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeAliasInput":{
      "type":"structure",
      "required":["AliasId"],
      "members":{
        "AliasId":{
          "shape":"AliasId",
          "documentation":"<p>Unique identifier for a fleet alias. Specify the alias you want to retrieve.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeAliasOutput":{
      "type":"structure",
      "members":{
        "Alias":{
          "shape":"Alias",
          "documentation":"<p>Object that contains the requested alias.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeBuildInput":{
      "type":"structure",
      "required":["BuildId"],
      "members":{
        "BuildId":{
          "shape":"BuildId",
          "documentation":"<p>Unique identifier for a build to retrieve properties for.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeBuildOutput":{
      "type":"structure",
      "members":{
        "Build":{
          "shape":"Build",
          "documentation":"<p>Set of properties describing the requested build.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeEC2InstanceLimitsInput":{
      "type":"structure",
      "members":{
        "EC2InstanceType":{
          "shape":"EC2InstanceType",
          "documentation":"<p>Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See <a href=\"http://aws.amazon.com/ec2/instance-types/\">Amazon EC2 Instance Types</a> for detailed descriptions. Leave this parameter blank to retrieve limits for all types.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeEC2InstanceLimitsOutput":{
      "type":"structure",
      "members":{
        "EC2InstanceLimits":{
          "shape":"EC2InstanceLimitList",
          "documentation":"<p>Object that contains the maximum number of instances for the specified instance type.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeFleetAttributesInput":{
      "type":"structure",
      "members":{
        "FleetIds":{
          "shape":"FleetIdList",
          "documentation":"<p>Unique identifier for a fleet(s) to retrieve attributes for. To request attributes for all fleets, leave this parameter empty.</p>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeFleetAttributesOutput":{
      "type":"structure",
      "members":{
        "FleetAttributes":{
          "shape":"FleetAttributesList",
          "documentation":"<p>Collection of objects containing attribute metadata for each requested fleet ID.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeFleetCapacityInput":{
      "type":"structure",
      "members":{
        "FleetIds":{
          "shape":"FleetIdList",
          "documentation":"<p>Unique identifier for a fleet(s) to retrieve capacity information for. To request capacity information for all fleets, leave this parameter empty.</p>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeFleetCapacityOutput":{
      "type":"structure",
      "members":{
        "FleetCapacity":{
          "shape":"FleetCapacityList",
          "documentation":"<p>Collection of objects containing capacity information for each requested fleet ID. Leave this parameter empty to retrieve capacity information for all fleets.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeFleetEventsInput":{
      "type":"structure",
      "required":["FleetId"],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to get event logs for.</p>"
        },
        "StartTime":{
          "shape":"Timestamp",
          "documentation":"<p>Earliest date to retrieve event logs for. If no start time is specified, this call returns entries starting from when the fleet was created to the specified end time. Format is a number expressed in Unix time as milliseconds (ex: \"1469498468.057\").</p>"
        },
        "EndTime":{
          "shape":"Timestamp",
          "documentation":"<p>Most recent date to retrieve event logs for. If no end time is specified, this call returns entries from the specified start time up to the present. Format is a number expressed in Unix time as milliseconds (ex: \"1469498468.057\").</p>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeFleetEventsOutput":{
      "type":"structure",
      "members":{
        "Events":{
          "shape":"EventList",
          "documentation":"<p>Collection of objects containing event log entries for the specified fleet.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeFleetPortSettingsInput":{
      "type":"structure",
      "required":["FleetId"],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to retrieve port settings for.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeFleetPortSettingsOutput":{
      "type":"structure",
      "members":{
        "InboundPermissions":{
          "shape":"IpPermissionsList",
          "documentation":"<p>Object that contains port settings for the requested fleet ID.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeFleetUtilizationInput":{
      "type":"structure",
      "members":{
        "FleetIds":{
          "shape":"FleetIdList",
          "documentation":"<p>Unique identifier for a fleet(s) to retrieve utilization data for. To request utilization data for all fleets, leave this parameter empty.</p>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeFleetUtilizationOutput":{
      "type":"structure",
      "members":{
        "FleetUtilization":{
          "shape":"FleetUtilizationList",
          "documentation":"<p>Collection of objects containing utilization information for each requested fleet ID.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeGameSessionDetailsInput":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to retrieve all game sessions active on the fleet.</p>"
        },
        "GameSessionId":{
          "shape":"ArnStringModel",
          "documentation":"<p>Unique identifier for the game session to retrieve.</p>"
        },
        "AliasId":{
          "shape":"AliasId",
          "documentation":"<p>Unique identifier for an alias associated with the fleet to retrieve all game sessions for.</p>"
        },
        "StatusFilter":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Game session status to filter results on. Possible game session statuses include <code>ACTIVE</code>, <code>TERMINATED</code>, <code>ACTIVATING</code> and <code>TERMINATING</code> (the last two are transitory). </p>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeGameSessionDetailsOutput":{
      "type":"structure",
      "members":{
        "GameSessionDetails":{
          "shape":"GameSessionDetailList",
          "documentation":"<p>Collection of objects containing game session properties and the protection policy currently in force for each session matching the request.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeGameSessionPlacementInput":{
      "type":"structure",
      "required":["PlacementId"],
      "members":{
        "PlacementId":{
          "shape":"IdStringModel",
          "documentation":"<p>Unique identifier for a game session placement to retrieve.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeGameSessionPlacementOutput":{
      "type":"structure",
      "members":{
        "GameSessionPlacement":{
          "shape":"GameSessionPlacement",
          "documentation":"<p>Object that describes the requested game session placement.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeGameSessionQueuesInput":{
      "type":"structure",
      "members":{
        "Names":{
          "shape":"GameSessionQueueNameList",
          "documentation":"<p>List of queue names to retrieve information for. To request settings for all queues, leave this parameter empty.</p>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeGameSessionQueuesOutput":{
      "type":"structure",
      "members":{
        "GameSessionQueues":{
          "shape":"GameSessionQueueList",
          "documentation":"<p>Collection of objects that describes the requested game session queues.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeGameSessionsInput":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to retrieve all game sessions for.</p>"
        },
        "GameSessionId":{
          "shape":"ArnStringModel",
          "documentation":"<p>Unique identifier for the game session to retrieve. You can use either a <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p>"
        },
        "AliasId":{
          "shape":"AliasId",
          "documentation":"<p>Unique identifier for an alias associated with the fleet to retrieve all game sessions for. </p>"
        },
        "StatusFilter":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Game session status to filter results on. Possible game session statuses include <code>ACTIVE</code>, <code>TERMINATED</code>, <code>ACTIVATING</code>, and <code>TERMINATING</code> (the last two are transitory). </p>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeGameSessionsOutput":{
      "type":"structure",
      "members":{
        "GameSessions":{
          "shape":"GameSessionList",
          "documentation":"<p>Collection of objects containing game session properties for each session matching the request.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeInstancesInput":{
      "type":"structure",
      "required":["FleetId"],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to retrieve instance information for.</p>"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>Unique identifier for an instance to retrieve. Specify an instance ID or leave blank to retrieve all instances in the fleet.</p>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeInstancesOutput":{
      "type":"structure",
      "members":{
        "Instances":{
          "shape":"InstanceList",
          "documentation":"<p>Collection of objects containing properties for each instance returned.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeMatchmakingConfigurationsInput":{
      "type":"structure",
      "members":{
        "Names":{
          "shape":"MatchmakingIdList",
          "documentation":"<p>Unique identifier for a matchmaking configuration(s) to retrieve. To request all existing configurations, leave this parameter empty.</p>"
        },
        "RuleSetName":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking rule set. Use this parameter to retrieve all matchmaking configurations that use this rule set.</p>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is limited to 10.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeMatchmakingConfigurationsOutput":{
      "type":"structure",
      "members":{
        "Configurations":{
          "shape":"MatchmakingConfigurationList",
          "documentation":"<p>Collection of requested matchmaking configuration objects.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeMatchmakingInput":{
      "type":"structure",
      "required":["TicketIds"],
      "members":{
        "TicketIds":{
          "shape":"MatchmakingIdList",
          "documentation":"<p>Unique identifier for a matchmaking ticket. You can include up to 10 ID values. </p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeMatchmakingOutput":{
      "type":"structure",
      "members":{
        "TicketList":{
          "shape":"MatchmakingTicketList",
          "documentation":"<p>Collection of existing matchmaking ticket objects matching the request.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeMatchmakingRuleSetsInput":{
      "type":"structure",
      "members":{
        "Names":{
          "shape":"MatchmakingRuleSetNameList",
          "documentation":"<p>Unique identifier for a matchmaking rule set. This name is used to identify the rule set associated with a matchmaking configuration.</p>"
        },
        "Limit":{
          "shape":"RuleSetLimit",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeMatchmakingRuleSetsOutput":{
      "type":"structure",
      "required":["RuleSets"],
      "members":{
        "RuleSets":{
          "shape":"MatchmakingRuleSetList",
          "documentation":"<p>Collection of requested matchmaking rule set objects. </p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribePlayerSessionsInput":{
      "type":"structure",
      "members":{
        "GameSessionId":{
          "shape":"ArnStringModel",
          "documentation":"<p>Unique identifier for the game session to retrieve player sessions for.</p>"
        },
        "PlayerId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a player to retrieve player sessions for.</p>"
        },
        "PlayerSessionId":{
          "shape":"PlayerSessionId",
          "documentation":"<p>Unique identifier for a player session to retrieve.</p>"
        },
        "PlayerSessionStatusFilter":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Player session status to filter results on.</p> <p>Possible player session statuses include the following:</p> <ul> <li> <p> <b>RESERVED</b> -- The player session request has been received, but the player has not yet connected to the server process and/or been validated. </p> </li> <li> <p> <b>ACTIVE</b> -- The player has been validated by the server process and is currently connected.</p> </li> <li> <p> <b>COMPLETED</b> -- The player connection has been dropped.</p> </li> <li> <p> <b>TIMEDOUT</b> -- A player session request was received, but the player did not connect and/or was not validated within the timeout limit (60 seconds).</p> </li> </ul>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. If a player session ID is specified, this parameter is ignored.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value. If a player session ID is specified, this parameter is ignored.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribePlayerSessionsOutput":{
      "type":"structure",
      "members":{
        "PlayerSessions":{
          "shape":"PlayerSessionList",
          "documentation":"<p>Collection of objects containing properties for each player session that matches the request.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeRuntimeConfigurationInput":{
      "type":"structure",
      "required":["FleetId"],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to get the run-time configuration for.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeRuntimeConfigurationOutput":{
      "type":"structure",
      "members":{
        "RuntimeConfiguration":{
          "shape":"RuntimeConfiguration",
          "documentation":"<p>Instructions describing how server processes should be launched and maintained on each instance in the fleet.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeScalingPoliciesInput":{
      "type":"structure",
      "required":["FleetId"],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to retrieve scaling policies for.</p>"
        },
        "StatusFilter":{
          "shape":"ScalingStatusType",
          "documentation":"<p>Scaling policy status to filter results on. A scaling policy is only in force when in an <code>ACTIVE</code> status.</p> <ul> <li> <p> <b>ACTIVE</b> -- The scaling policy is currently in force.</p> </li> <li> <p> <b>UPDATEREQUESTED</b> -- A request to update the scaling policy has been received.</p> </li> <li> <p> <b>UPDATING</b> -- A change is being made to the scaling policy.</p> </li> <li> <p> <b>DELETEREQUESTED</b> -- A request to delete the scaling policy has been received.</p> </li> <li> <p> <b>DELETING</b> -- The scaling policy is being deleted.</p> </li> <li> <p> <b>DELETED</b> -- The scaling policy has been deleted.</p> </li> <li> <p> <b>ERROR</b> -- An error occurred in creating the policy. It should be removed and recreated.</p> </li> </ul>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeScalingPoliciesOutput":{
      "type":"structure",
      "members":{
        "ScalingPolicies":{
          "shape":"ScalingPolicyList",
          "documentation":"<p>Collection of objects containing the scaling policies matching the request.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DescribeVpcPeeringAuthorizationsInput":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeVpcPeeringAuthorizationsOutput":{
      "type":"structure",
      "members":{
        "VpcPeeringAuthorizations":{
          "shape":"VpcPeeringAuthorizationList",
          "documentation":"<p>Collection of objects that describe all valid VPC peering operations for the current AWS account.</p>"
        }
      }
    },
    "DescribeVpcPeeringConnectionsInput":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "DescribeVpcPeeringConnectionsOutput":{
      "type":"structure",
      "members":{
        "VpcPeeringConnections":{
          "shape":"VpcPeeringConnectionList",
          "documentation":"<p>Collection of VPC peering connection records that match the request.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "DesiredPlayerSession":{
      "type":"structure",
      "members":{
        "PlayerId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a player to associate with the player session.</p>"
        },
        "PlayerData":{
          "shape":"PlayerData",
          "documentation":"<p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.</p>"
        }
      },
      "documentation":"<p>Player information for use when creating player sessions using a game session placement request with <a>StartGameSessionPlacement</a>.</p>"
    },
    "DesiredPlayerSessionList":{
      "type":"list",
      "member":{"shape":"DesiredPlayerSession"}
    },
    "Double":{"type":"double"},
    "DoubleObject":{"type":"double"},
    "EC2InstanceCounts":{
      "type":"structure",
      "members":{
        "DESIRED":{
          "shape":"WholeNumber",
          "documentation":"<p>Ideal number of active instances in the fleet.</p>"
        },
        "MINIMUM":{
          "shape":"WholeNumber",
          "documentation":"<p>Minimum value allowed for the fleet's instance count.</p>"
        },
        "MAXIMUM":{
          "shape":"WholeNumber",
          "documentation":"<p>Maximum value allowed for the fleet's instance count.</p>"
        },
        "PENDING":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of instances in the fleet that are starting but not yet active.</p>"
        },
        "ACTIVE":{
          "shape":"WholeNumber",
          "documentation":"<p>Actual number of active instances in the fleet.</p>"
        },
        "IDLE":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of active instances in the fleet that are not currently hosting a game session.</p>"
        },
        "TERMINATING":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of instances in the fleet that are no longer active but haven't yet been terminated.</p>"
        }
      },
      "documentation":"<p>Current status of fleet capacity. The number of active instances should match or be in the process of matching the number of desired instances. Pending and terminating counts are non-zero only if fleet capacity is adjusting to an <a>UpdateFleetCapacity</a> request, or if access to resources is temporarily affected.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "EC2InstanceLimit":{
      "type":"structure",
      "members":{
        "EC2InstanceType":{
          "shape":"EC2InstanceType",
          "documentation":"<p>Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See <a href=\"http://aws.amazon.com/ec2/instance-types/\">Amazon EC2 Instance Types</a> for detailed descriptions.</p>"
        },
        "CurrentInstances":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of instances of the specified type that are currently in use by this AWS account.</p>"
        },
        "InstanceLimit":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of instances allowed.</p>"
        }
      },
      "documentation":"<p>Maximum number of instances allowed based on the Amazon Elastic Compute Cloud (Amazon EC2) instance type. Instance limits can be retrieved by calling <a>DescribeEC2InstanceLimits</a>.</p>"
    },
    "EC2InstanceLimitList":{
      "type":"list",
      "member":{"shape":"EC2InstanceLimit"}
    },
    "EC2InstanceType":{
      "type":"string",
      "enum":[
        "t2.micro",
        "t2.small",
        "t2.medium",
        "t2.large",
        "c3.large",
        "c3.xlarge",
        "c3.2xlarge",
        "c3.4xlarge",
        "c3.8xlarge",
        "c4.large",
        "c4.xlarge",
        "c4.2xlarge",
        "c4.4xlarge",
        "c4.8xlarge",
        "r3.large",
        "r3.xlarge",
        "r3.2xlarge",
        "r3.4xlarge",
        "r3.8xlarge",
        "r4.large",
        "r4.xlarge",
        "r4.2xlarge",
        "r4.4xlarge",
        "r4.8xlarge",
        "r4.16xlarge",
        "m3.medium",
        "m3.large",
        "m3.xlarge",
        "m3.2xlarge",
        "m4.large",
        "m4.xlarge",
        "m4.2xlarge",
        "m4.4xlarge",
        "m4.10xlarge"
      ]
    },
    "Event":{
      "type":"structure",
      "members":{
        "EventId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a fleet event.</p>"
        },
        "ResourceId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for an event resource, such as a fleet ID.</p>"
        },
        "EventCode":{
          "shape":"EventCode",
          "documentation":"<p>Type of event being logged. The following events are currently in use:</p> <p> <b>Fleet creation events:</b> </p> <ul> <li> <p>FLEET_CREATED -- A fleet record was successfully created with a status of <code>NEW</code>. Event messaging includes the fleet ID.</p> </li> <li> <p>FLEET_STATE_DOWNLOADING -- Fleet status changed from <code>NEW</code> to <code>DOWNLOADING</code>. The compressed build has started downloading to a fleet instance for installation.</p> </li> <li> <p> FLEET_BINARY_DOWNLOAD_FAILED -- The build failed to download to the fleet instance.</p> </li> <li> <p>FLEET_CREATION_EXTRACTING_BUILD – The game server build was successfully downloaded to an instance, and the build files are now being extracted from the uploaded build and saved to an instance. Failure at this stage prevents a fleet from moving to <code>ACTIVE</code> status. Logs for this stage display a list of the files that are extracted and saved on the instance. Access the logs by using the URL in <i>PreSignedLogUrl</i>.</p> </li> <li> <p>FLEET_CREATION_RUNNING_INSTALLER – The game server build files were successfully extracted, and the Amazon GameLift is now running the build's install script (if one is included). Failure in this stage prevents a fleet from moving to <code>ACTIVE</code> status. Logs for this stage list the installation steps and whether or not the install completed successfully. Access the logs by using the URL in <i>PreSignedLogUrl</i>. </p> </li> <li> <p>FLEET_CREATION_VALIDATING_RUNTIME_CONFIG -- The build process was successful, and the Amazon GameLift is now verifying that the game server launch paths, which are specified in the fleet's run-time configuration, exist. If any listed launch path exists, Amazon GameLift tries to launch a game server process and waits for the process to report ready. Failures in this stage prevent a fleet from moving to <code>ACTIVE</code> status. Logs for this stage list the launch paths in the run-time configuration and indicate whether each is found. Access the logs by using the URL in <i>PreSignedLogUrl</i>. </p> </li> <li> <p>FLEET_STATE_VALIDATING -- Fleet status changed from <code>DOWNLOADING</code> to <code>VALIDATING</code>.</p> </li> <li> <p> FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND -- Validation of the run-time configuration failed because the executable specified in a launch path does not exist on the instance.</p> </li> <li> <p>FLEET_STATE_BUILDING -- Fleet status changed from <code>VALIDATING</code> to <code>BUILDING</code>.</p> </li> <li> <p>FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE -- Validation of the run-time configuration failed because the executable specified in a launch path failed to run on the fleet instance.</p> </li> <li> <p>FLEET_STATE_ACTIVATING -- Fleet status changed from <code>BUILDING</code> to <code>ACTIVATING</code>. </p> </li> <li> <p> FLEET_ACTIVATION_FAILED - The fleet failed to successfully complete one of the steps in the fleet activation process. This event code indicates that the game build was successfully downloaded to a fleet instance, built, and validated, but was not able to start a server process. A possible reason for failure is that the game server is not reporting \"process ready\" to the Amazon GameLift service.</p> </li> <li> <p>FLEET_STATE_ACTIVE -- The fleet's status changed from <code>ACTIVATING</code> to <code>ACTIVE</code>. The fleet is now ready to host game sessions.</p> </li> </ul> <p> <b>VPC peering events:</b> </p> <ul> <li> <p>FLEET_VPC_PEERING_SUCCEEDED -- A VPC peering connection has been established between the VPC for an Amazon GameLift fleet and a VPC in your AWS account.</p> </li> <li> <p>FLEET_VPC_PEERING_FAILED -- A requested VPC peering connection has failed. Event details and status information (see <a>DescribeVpcPeeringConnections</a>) provide additional detail. A common reason for peering failure is that the two VPCs have overlapping CIDR blocks of IPv4 addresses. To resolve this, change the CIDR block for the VPC in your AWS account. For more information on VPC peering failures, see <a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html\">http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html</a> </p> </li> <li> <p>FLEET_VPC_PEERING_DELETED -- A VPC peering connection has been successfully deleted.</p> </li> </ul> <p> <b>Spot instance events:</b> </p> <ul> <li> <p> INSTANCE_INTERRUPTED -- A spot instance was interrupted by EC2 with a two-minute notification.</p> </li> </ul> <p> <b>Other fleet events:</b> </p> <ul> <li> <p>FLEET_SCALING_EVENT -- A change was made to the fleet's capacity settings (desired instances, minimum/maximum scaling limits). Event messaging includes the new capacity settings.</p> </li> <li> <p>FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED -- A change was made to the fleet's game session protection policy setting. Event messaging includes both the old and new policy setting. </p> </li> <li> <p>FLEET_DELETED -- A request to delete a fleet was initiated.</p> </li> <li> <p> GENERIC_EVENT -- An unspecified event has occurred.</p> </li> </ul>"
        },
        "Message":{
          "shape":"NonEmptyString",
          "documentation":"<p>Additional information related to the event.</p>"
        },
        "EventTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this event occurred. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "PreSignedLogUrl":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Location of stored logs with additional detail that is related to the event. This is useful for debugging issues. The URL is valid for 15 minutes. You can also access fleet creation logs through the Amazon GameLift console.</p>"
        }
      },
      "documentation":"<p>Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.</p>"
    },
    "EventCode":{
      "type":"string",
      "enum":[
        "GENERIC_EVENT",
        "FLEET_CREATED",
        "FLEET_DELETED",
        "FLEET_SCALING_EVENT",
        "FLEET_STATE_DOWNLOADING",
        "FLEET_STATE_VALIDATING",
        "FLEET_STATE_BUILDING",
        "FLEET_STATE_ACTIVATING",
        "FLEET_STATE_ACTIVE",
        "FLEET_STATE_ERROR",
        "FLEET_INITIALIZATION_FAILED",
        "FLEET_BINARY_DOWNLOAD_FAILED",
        "FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND",
        "FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE",
        "FLEET_VALIDATION_TIMED_OUT",
        "FLEET_ACTIVATION_FAILED",
        "FLEET_ACTIVATION_FAILED_NO_INSTANCES",
        "FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED",
        "SERVER_PROCESS_INVALID_PATH",
        "SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT",
        "SERVER_PROCESS_PROCESS_READY_TIMEOUT",
        "SERVER_PROCESS_CRASHED",
        "SERVER_PROCESS_TERMINATED_UNHEALTHY",
        "SERVER_PROCESS_FORCE_TERMINATED",
        "SERVER_PROCESS_PROCESS_EXIT_TIMEOUT",
        "GAME_SESSION_ACTIVATION_TIMEOUT",
        "FLEET_CREATION_EXTRACTING_BUILD",
        "FLEET_CREATION_RUNNING_INSTALLER",
        "FLEET_CREATION_VALIDATING_RUNTIME_CONFIG",
        "FLEET_VPC_PEERING_SUCCEEDED",
        "FLEET_VPC_PEERING_FAILED",
        "FLEET_VPC_PEERING_DELETED",
        "INSTANCE_INTERRUPTED"
      ]
    },
    "EventList":{
      "type":"list",
      "member":{"shape":"Event"}
    },
    "FleetAction":{
      "type":"string",
      "enum":["AUTO_SCALING"]
    },
    "FleetActionList":{
      "type":"list",
      "member":{"shape":"FleetAction"},
      "max":1,
      "min":1
    },
    "FleetAttributes":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet.</p>"
        },
        "FleetArn":{
          "shape":"ArnStringModel",
          "documentation":"<p>Identifier for a fleet that is unique across all regions.</p>"
        },
        "FleetType":{
          "shape":"FleetType",
          "documentation":"<p>Indicates whether the fleet uses on-demand or spot instances. A spot instance in use may be interrupted with a two-minute notification.</p>"
        },
        "InstanceType":{
          "shape":"EC2InstanceType",
          "documentation":"<p>EC2 instance type indicating the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. See <a href=\"http://aws.amazon.com/ec2/instance-types/\">Amazon EC2 Instance Types</a> for detailed descriptions.</p>"
        },
        "Description":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Human-readable description of the fleet.</p>"
        },
        "Name":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "TerminationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "Status":{
          "shape":"FleetStatus",
          "documentation":"<p>Current status of the fleet.</p> <p>Possible fleet statuses include the following:</p> <ul> <li> <p> <b>NEW</b> -- A new fleet has been defined and desired instances is set to 1. </p> </li> <li> <p> <b>DOWNLOADING/VALIDATING/BUILDING/ACTIVATING</b> -- Amazon GameLift is setting up the new fleet, creating new instances with the game build and starting server processes.</p> </li> <li> <p> <b>ACTIVE</b> -- Hosts can now accept game sessions.</p> </li> <li> <p> <b>ERROR</b> -- An error occurred when downloading, validating, building, or activating the fleet.</p> </li> <li> <p> <b>DELETING</b> -- Hosts are responding to a delete fleet request.</p> </li> <li> <p> <b>TERMINATED</b> -- The fleet no longer exists.</p> </li> </ul>"
        },
        "BuildId":{
          "shape":"BuildId",
          "documentation":"<p>Unique identifier for a build.</p>"
        },
        "ServerLaunchPath":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Path to a game server executable in the fleet's build, specified for fleets created before 2016-08-04 (or AWS SDK v. 0.12.16). Server launch paths for fleets created after this date are specified in the fleet's <a>RuntimeConfiguration</a>.</p>"
        },
        "ServerLaunchParameters":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Game server launch parameters specified for fleets created before 2016-08-04 (or AWS SDK v. 0.12.16). Server launch parameters for fleets created after this date are specified in the fleet's <a>RuntimeConfiguration</a>.</p>"
        },
        "LogPaths":{
          "shape":"StringList",
          "documentation":"<p>Location of default log files. When a server process is shut down, Amazon GameLift captures and stores any log files in this location. These logs are in addition to game session logs; see more on game session logs in the <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-api-server-code\">Amazon GameLift Developer Guide</a>. If no default log path for a fleet is specified, Amazon GameLift automatically uploads logs that are stored on each instance at <code>C:\\game\\logs</code> (for Windows) or <code>/local/game/logs</code> (for Linux). Use the Amazon GameLift console to access stored logs. </p>"
        },
        "NewGameSessionProtectionPolicy":{
          "shape":"ProtectionPolicy",
          "documentation":"<p>Type of game session protection to set for all new instances started in the fleet.</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>"
        },
        "OperatingSystem":{
          "shape":"OperatingSystem",
          "documentation":"<p>Operating system of the fleet's computing resources. A fleet's operating system depends on the OS specified for the build that is deployed on this fleet.</p>"
        },
        "ResourceCreationLimitPolicy":{
          "shape":"ResourceCreationLimitPolicy",
          "documentation":"<p>Fleet policy to limit the number of game sessions an individual player can create over a span of time.</p>"
        },
        "MetricGroups":{
          "shape":"MetricGroupList",
          "documentation":"<p>Names of metric groups that this fleet is included in. In Amazon CloudWatch, you can view metrics for an individual fleet or aggregated metrics for fleets that are in a fleet metric group. A fleet can be included in only one metric group at a time.</p>"
        },
        "StoppedActions":{
          "shape":"FleetActionList",
          "documentation":"<p>List of fleet actions that have been suspended using <a>StopFleetActions</a>. This includes auto-scaling.</p>"
        }
      },
      "documentation":"<p>General properties describing a fleet.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "FleetAttributesList":{
      "type":"list",
      "member":{"shape":"FleetAttributes"}
    },
    "FleetCapacity":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet.</p>"
        },
        "InstanceType":{
          "shape":"EC2InstanceType",
          "documentation":"<p>Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See <a href=\"http://aws.amazon.com/ec2/instance-types/\">Amazon EC2 Instance Types</a> for detailed descriptions.</p>"
        },
        "InstanceCounts":{
          "shape":"EC2InstanceCounts",
          "documentation":"<p>Current status of fleet capacity.</p>"
        }
      },
      "documentation":"<p>Information about the fleet's capacity. Fleet capacity is measured in EC2 instances. By default, new fleets have a capacity of one instance, but can be updated as needed. The maximum number of instances for a fleet is determined by the fleet's instance type.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "FleetCapacityExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>The specified fleet has no available instances to fulfill a <code>CreateGameSession</code> request. Clients can retry such requests immediately or after a waiting period.</p>",
      "exception":true
    },
    "FleetCapacityList":{
      "type":"list",
      "member":{"shape":"FleetCapacity"}
    },
    "FleetId":{
      "type":"string",
      "pattern":"^fleet-\\S+"
    },
    "FleetIdList":{
      "type":"list",
      "member":{"shape":"FleetId"},
      "min":1
    },
    "FleetStatus":{
      "type":"string",
      "enum":[
        "NEW",
        "DOWNLOADING",
        "VALIDATING",
        "BUILDING",
        "ACTIVATING",
        "ACTIVE",
        "DELETING",
        "ERROR",
        "TERMINATED"
      ]
    },
    "FleetType":{
      "type":"string",
      "enum":[
        "ON_DEMAND",
        "SPOT"
      ]
    },
    "FleetUtilization":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet.</p>"
        },
        "ActiveServerProcessCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of server processes in an <code>ACTIVE</code> status currently running across all instances in the fleet</p>"
        },
        "ActiveGameSessionCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of active game sessions currently being hosted on all instances in the fleet.</p>"
        },
        "CurrentPlayerSessionCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of active player sessions currently being hosted on all instances in the fleet.</p>"
        },
        "MaximumPlayerSessionCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Maximum players allowed across all game sessions currently being hosted on all instances in the fleet.</p>"
        }
      },
      "documentation":"<p>Current status of fleet utilization, including the number of game and player sessions being hosted.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "FleetUtilizationList":{
      "type":"list",
      "member":{"shape":"FleetUtilization"}
    },
    "Float":{"type":"float"},
    "FreeText":{"type":"string"},
    "GameProperty":{
      "type":"structure",
      "required":[
        "Key",
        "Value"
      ],
      "members":{
        "Key":{
          "shape":"GamePropertyKey",
          "documentation":"<p>Game property identifier.</p>"
        },
        "Value":{
          "shape":"GamePropertyValue",
          "documentation":"<p>Game property value.</p>"
        }
      },
      "documentation":"<p>Set of key-value pairs that contain information about a game session. When included in a game session request, these properties communicate details to be used when setting up the new game session, such as to specify a game mode, level, or map. Game properties are passed to the game server process when initiating a new game session; the server process uses the properties as appropriate. For more information, see the <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create\"> Amazon GameLift Developer Guide</a>.</p>"
    },
    "GamePropertyKey":{
      "type":"string",
      "max":32
    },
    "GamePropertyList":{
      "type":"list",
      "member":{"shape":"GameProperty"},
      "max":16
    },
    "GamePropertyValue":{
      "type":"string",
      "max":96
    },
    "GameSession":{
      "type":"structure",
      "members":{
        "GameSessionId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for the game session. A game session ARN has the following format: <code>arn:aws:gamelift:&lt;region&gt;::gamesession/&lt;fleet ID&gt;/&lt;custom ID string or idempotency token&gt;</code>.</p>"
        },
        "Name":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>"
        },
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet that the game session is running on.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "TerminationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "CurrentPlayerSessionCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of players currently in the game session.</p>"
        },
        "MaximumPlayerSessionCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Maximum number of players that can be connected simultaneously to the game session.</p>"
        },
        "Status":{
          "shape":"GameSessionStatus",
          "documentation":"<p>Current status of the game session. A game session must have an <code>ACTIVE</code> status to have player sessions.</p>"
        },
        "StatusReason":{
          "shape":"GameSessionStatusReason",
          "documentation":"<p>Provides additional information about game session status. <code>INTERRUPTED</code> indicates that the game session was hosted on a spot instance that was reclaimed, causing the active game session to be terminated.</p>"
        },
        "GameProperties":{
          "shape":"GamePropertyList",
          "documentation":"<p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>). You can search for active game sessions based on this custom data with <a>SearchGameSessions</a>.</p>"
        },
        "IpAddress":{
          "shape":"IpAddress",
          "documentation":"<p>IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>"
        },
        "Port":{
          "shape":"PortNumber",
          "documentation":"<p>Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>"
        },
        "PlayerSessionCreationPolicy":{
          "shape":"PlayerSessionCreationPolicy",
          "documentation":"<p>Indicates whether or not the game session is accepting new players.</p>"
        },
        "CreatorId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a player. This ID is used to enforce a resource protection policy (if one exists), that limits the number of game sessions a player can create.</p>"
        },
        "GameSessionData":{
          "shape":"GameSessionData",
          "documentation":"<p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>).</p>"
        },
        "MatchmakerData":{
          "shape":"MatchmakerData",
          "documentation":"<p>Information about the matchmaking process that was used to create the game session. It is in JSON syntax, formatted as a string. In addition the matchmaking configuration used, it contains data on all players assigned to the match, including player attributes and team assignments. For more details on matchmaker data, see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/match-server.html#match-server-data\">Match Data</a>. Matchmaker data is useful when requesting match backfills, and is updated whenever new players are added during a successful backfill (see <a>StartMatchBackfill</a>). </p>"
        }
      },
      "documentation":"<p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <p>Game-session-related operations include:</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "GameSessionActivationTimeoutSeconds":{
      "type":"integer",
      "max":600,
      "min":1
    },
    "GameSessionConnectionInfo":{
      "type":"structure",
      "members":{
        "GameSessionArn":{
          "shape":"ArnStringModel",
          "documentation":"<p>Amazon Resource Name (<a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html\">ARN</a>) that is assigned to a game session and uniquely identifies it.</p>"
        },
        "IpAddress":{
          "shape":"StringModel",
          "documentation":"<p>IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>"
        },
        "Port":{
          "shape":"PositiveInteger",
          "documentation":"<p>Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>"
        },
        "MatchedPlayerSessions":{
          "shape":"MatchedPlayerSessionList",
          "documentation":"<p>Collection of player session IDs, one for each player ID that was included in the original matchmaking request. </p>"
        }
      },
      "documentation":"<p>Connection information for the new game session that is created with matchmaking. (with <a>StartMatchmaking</a>). Once a match is set, the FlexMatch engine places the match and creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the <a>MatchmakingTicket</a>, which can be retrieved by calling <a>DescribeMatchmaking</a>.</p>"
    },
    "GameSessionData":{
      "type":"string",
      "max":4096,
      "min":1
    },
    "GameSessionDetail":{
      "type":"structure",
      "members":{
        "GameSession":{
          "shape":"GameSession",
          "documentation":"<p>Object that describes a game session.</p>"
        },
        "ProtectionPolicy":{
          "shape":"ProtectionPolicy",
          "documentation":"<p>Current status of protection for the game session.</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>"
        }
      },
      "documentation":"<p>A game session's properties plus the protection policy currently in force.</p>"
    },
    "GameSessionDetailList":{
      "type":"list",
      "member":{"shape":"GameSessionDetail"}
    },
    "GameSessionFullException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>The game instance is currently full and cannot allow the requested player(s) to join. Clients can retry such requests immediately or after a waiting period.</p>",
      "exception":true
    },
    "GameSessionList":{
      "type":"list",
      "member":{"shape":"GameSession"}
    },
    "GameSessionPlacement":{
      "type":"structure",
      "members":{
        "PlacementId":{
          "shape":"IdStringModel",
          "documentation":"<p>Unique identifier for a game session placement.</p>"
        },
        "GameSessionQueueName":{
          "shape":"GameSessionQueueName",
          "documentation":"<p>Descriptive label that is associated with game session queue. Queue names must be unique within each region.</p>"
        },
        "Status":{
          "shape":"GameSessionPlacementState",
          "documentation":"<p>Current status of the game session placement request.</p> <ul> <li> <p> <b>PENDING</b> -- The placement request is currently in the queue waiting to be processed.</p> </li> <li> <p> <b>FULFILLED</b> -- A new game session and player sessions (if requested) have been successfully created. Values for <i>GameSessionArn</i> and <i>GameSessionRegion</i> are available. </p> </li> <li> <p> <b>CANCELLED</b> -- The placement request was canceled with a call to <a>StopGameSessionPlacement</a>.</p> </li> <li> <p> <b>TIMED_OUT</b> -- A new game session was not successfully created before the time limit expired. You can resubmit the placement request as needed.</p> </li> </ul>"
        },
        "GameProperties":{
          "shape":"GamePropertyList",
          "documentation":"<p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>).</p>"
        },
        "MaximumPlayerSessionCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Maximum number of players that can be connected simultaneously to the game session.</p>"
        },
        "GameSessionName":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>"
        },
        "GameSessionId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for the game session. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>).</p>"
        },
        "GameSessionArn":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Identifier for the game session created by this placement request. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>). This identifier is unique across all regions. You can use this value as a <code>GameSessionId</code> value as needed.</p>"
        },
        "GameSessionRegion":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Name of the region where the game session created by this placement request is running. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>).</p>"
        },
        "PlayerLatencies":{
          "shape":"PlayerLatencyList",
          "documentation":"<p>Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS regions.</p>"
        },
        "StartTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this request was placed in the queue. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "EndTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this request was completed, canceled, or timed out.</p>"
        },
        "IpAddress":{
          "shape":"IpAddress",
          "documentation":"<p>IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>). </p>"
        },
        "Port":{
          "shape":"PortNumber",
          "documentation":"<p>Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value is set once the new game session is placed (placement status is <code>FULFILLED</code>).</p>"
        },
        "PlacedPlayerSessions":{
          "shape":"PlacedPlayerSessionList",
          "documentation":"<p>Collection of information on player sessions created in response to the game session placement request. These player sessions are created only once a new game session is successfully placed (placement status is <code>FULFILLED</code>). This information includes the player ID (as provided in the placement request) and the corresponding player session ID. Retrieve full player sessions by calling <a>DescribePlayerSessions</a> with the player session ID.</p>"
        },
        "GameSessionData":{
          "shape":"GameSessionData",
          "documentation":"<p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>).</p>"
        },
        "MatchmakerData":{
          "shape":"MatchmakerData",
          "documentation":"<p>Information on the matchmaking process for this game. Data is in JSON syntax, formatted as a string. It identifies the matchmaking configuration used to create the match, and contains data on all players assigned to the match, including player attributes and team assignments. For more details on matchmaker data, see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/match-server.html#match-server-data\">Match Data</a>.</p>"
        }
      },
      "documentation":"<p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul>"
    },
    "GameSessionPlacementState":{
      "type":"string",
      "enum":[
        "PENDING",
        "FULFILLED",
        "CANCELLED",
        "TIMED_OUT"
      ]
    },
    "GameSessionQueue":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"GameSessionQueueName",
          "documentation":"<p>Descriptive label that is associated with game session queue. Queue names must be unique within each region.</p>"
        },
        "GameSessionQueueArn":{
          "shape":"ArnStringModel",
          "documentation":"<p>Amazon Resource Name (<a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html\">ARN</a>) that is assigned to a game session queue and uniquely identifies it. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>"
        },
        "TimeoutInSeconds":{
          "shape":"WholeNumber",
          "documentation":"<p>Maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>"
        },
        "PlayerLatencyPolicies":{
          "shape":"PlayerLatencyPolicyList",
          "documentation":"<p>Collection of latency policies to apply when processing game sessions placement requests with player latency information. Multiple policies are evaluated in order of the maximum latency value, starting with the lowest latency values. With just one policy, it is enforced at the start of the game session placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period. For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the remainder of the placement. </p>"
        },
        "Destinations":{
          "shape":"GameSessionQueueDestinationList",
          "documentation":"<p>List of fleets that can be used to fulfill game session placement requests in the queue. Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order.</p>"
        }
      },
      "documentation":"<p>Configuration of a queue that is used to process game session placement requests. The queue configuration identifies several game features:</p> <ul> <li> <p>The destinations where a new game session can potentially be hosted. Amazon GameLift tries these destinations in an order based on either the queue's default order or player latency information, if provided in a placement request. With latency information, Amazon GameLift can place game sessions where the majority of players are reporting the lowest possible latency. </p> </li> <li> <p>The length of time that placement requests can wait in the queue before timing out. </p> </li> <li> <p>A set of optional latency policies that protect individual players from high latencies, preventing game sessions from being placed where any individual player is reporting latency higher than a policy's maximum.</p> </li> </ul> <p>Queue-related operations include:</p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>"
    },
    "GameSessionQueueDestination":{
      "type":"structure",
      "members":{
        "DestinationArn":{
          "shape":"ArnStringModel",
          "documentation":"<p>Amazon Resource Name (ARN) assigned to fleet or fleet alias. ARNs, which include a fleet ID or alias ID and a region name, provide a unique identifier across all regions. </p>"
        }
      },
      "documentation":"<p>Fleet designated in a game session queue. Requests for new game sessions in the queue are fulfilled by starting a new game session on any destination configured for a queue. </p> <p>Queue-related operations include:</p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>"
    },
    "GameSessionQueueDestinationList":{
      "type":"list",
      "member":{"shape":"GameSessionQueueDestination"}
    },
    "GameSessionQueueList":{
      "type":"list",
      "member":{"shape":"GameSessionQueue"}
    },
    "GameSessionQueueName":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9-]+"
    },
    "GameSessionQueueNameList":{
      "type":"list",
      "member":{"shape":"GameSessionQueueName"}
    },
    "GameSessionStatus":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "ACTIVATING",
        "TERMINATED",
        "TERMINATING",
        "ERROR"
      ]
    },
    "GameSessionStatusReason":{
      "type":"string",
      "enum":["INTERRUPTED"]
    },
    "GetGameSessionLogUrlInput":{
      "type":"structure",
      "required":["GameSessionId"],
      "members":{
        "GameSessionId":{
          "shape":"ArnStringModel",
          "documentation":"<p>Unique identifier for the game session to get logs for.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "GetGameSessionLogUrlOutput":{
      "type":"structure",
      "members":{
        "PreSignedUrl":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Location of the requested game session logs, available for download.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "GetInstanceAccessInput":{
      "type":"structure",
      "required":[
        "FleetId",
        "InstanceId"
      ],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet that contains the instance you want access to. The fleet can be in any of the following statuses: <code>ACTIVATING</code>, <code>ACTIVE</code>, or <code>ERROR</code>. Fleets with an <code>ERROR</code> status may be accessible for a short time before they are deleted.</p>"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>Unique identifier for an instance you want to get access to. You can access an instance in any status.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "GetInstanceAccessOutput":{
      "type":"structure",
      "members":{
        "InstanceAccess":{
          "shape":"InstanceAccess",
          "documentation":"<p>Object that contains connection information for a fleet instance, including IP address and access credentials.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "IdStringModel":{
      "type":"string",
      "max":48,
      "min":1,
      "pattern":"[a-zA-Z0-9-]+"
    },
    "IdempotentParameterMismatchException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>A game session with this custom ID string already exists in this fleet. Resolve this conflict before retrying this request.</p>",
      "exception":true
    },
    "Instance":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet that the instance is in.</p>"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>Unique identifier for an instance.</p>"
        },
        "IpAddress":{
          "shape":"IpAddress",
          "documentation":"<p>IP address assigned to the instance.</p>"
        },
        "OperatingSystem":{
          "shape":"OperatingSystem",
          "documentation":"<p>Operating system that is running on this instance. </p>"
        },
        "Type":{
          "shape":"EC2InstanceType",
          "documentation":"<p>EC2 instance type that defines the computing resources of this instance. </p>"
        },
        "Status":{
          "shape":"InstanceStatus",
          "documentation":"<p>Current status of the instance. Possible statuses include the following:</p> <ul> <li> <p> <b>PENDING</b> -- The instance is in the process of being created and launching server processes as defined in the fleet's run-time configuration. </p> </li> <li> <p> <b>ACTIVE</b> -- The instance has been successfully created and at least one server process has successfully launched and reported back to Amazon GameLift that it is ready to host a game session. The instance is now considered ready to host game sessions. </p> </li> <li> <p> <b>TERMINATING</b> -- The instance is in the process of shutting down. This may happen to reduce capacity during a scaling down event or to recycle resources in the event of a problem.</p> </li> </ul>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        }
      },
      "documentation":"<p>Properties that describe an instance of a virtual computing resource that hosts one or more game servers. A fleet may contain zero or more instances.</p>"
    },
    "InstanceAccess":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet containing the instance being accessed.</p>"
        },
        "InstanceId":{
          "shape":"InstanceId",
          "documentation":"<p>Unique identifier for an instance being accessed.</p>"
        },
        "IpAddress":{
          "shape":"IpAddress",
          "documentation":"<p>IP address assigned to the instance.</p>"
        },
        "OperatingSystem":{
          "shape":"OperatingSystem",
          "documentation":"<p>Operating system that is running on the instance.</p>"
        },
        "Credentials":{
          "shape":"InstanceCredentials",
          "documentation":"<p>Credentials required to access the instance.</p>"
        }
      },
      "documentation":"<p>Information required to remotely connect to a fleet instance. Access is requested by calling <a>GetInstanceAccess</a>. </p>"
    },
    "InstanceCredentials":{
      "type":"structure",
      "members":{
        "UserName":{
          "shape":"NonEmptyString",
          "documentation":"<p>User login string.</p>"
        },
        "Secret":{
          "shape":"NonEmptyString",
          "documentation":"<p>Secret string. For Windows instances, the secret is a password for use with Windows Remote Desktop. For Linux instances, it is a private key (which must be saved as a <code>.pem</code> file) for use with SSH.</p>"
        }
      },
      "documentation":"<p>Set of credentials required to remotely access a fleet instance. Access credentials are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object.</p>",
      "sensitive":true
    },
    "InstanceId":{
      "type":"string",
      "pattern":"[a-zA-Z0-9\\.-]+"
    },
    "InstanceList":{
      "type":"list",
      "member":{"shape":"Instance"}
    },
    "InstanceStatus":{
      "type":"string",
      "enum":[
        "PENDING",
        "ACTIVE",
        "TERMINATING"
      ]
    },
    "Integer":{"type":"integer"},
    "InternalServiceException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.</p>",
      "exception":true,
      "fault":true
    },
    "InvalidFleetStatusException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>The requested operation would cause a conflict with the current state of a resource associated with the request and/or the fleet. Resolve the conflict before retrying.</p>",
      "exception":true
    },
    "InvalidGameSessionStatusException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>The requested operation would cause a conflict with the current state of a resource associated with the request and/or the game instance. Resolve the conflict before retrying.</p>",
      "exception":true
    },
    "InvalidRequestException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.</p>",
      "exception":true
    },
    "IpAddress":{"type":"string"},
    "IpPermission":{
      "type":"structure",
      "required":[
        "FromPort",
        "ToPort",
        "IpRange",
        "Protocol"
      ],
      "members":{
        "FromPort":{
          "shape":"PortNumber",
          "documentation":"<p>Starting value for a range of allowed port numbers.</p>"
        },
        "ToPort":{
          "shape":"PortNumber",
          "documentation":"<p>Ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than <code>FromPort</code>.</p>"
        },
        "IpRange":{
          "shape":"NonBlankString",
          "documentation":"<p>Range of allowed IP addresses. This value must be expressed in CIDR notation. Example: \"<code>000.000.000.000/[subnet mask]</code>\" or optionally the shortened version \"<code>0.0.0.0/[subnet mask]</code>\".</p>"
        },
        "Protocol":{
          "shape":"IpProtocol",
          "documentation":"<p>Network communication protocol used by the fleet.</p>"
        }
      },
      "documentation":"<p>A range of IP addresses and port settings that allow inbound traffic to connect to server processes on Amazon GameLift. Each game session hosted on a fleet is assigned a unique combination of IP address and port number, which must fall into the fleet's allowed ranges. This combination is included in the <a>GameSession</a> object. </p>"
    },
    "IpPermissionsList":{
      "type":"list",
      "member":{"shape":"IpPermission"},
      "max":50
    },
    "IpProtocol":{
      "type":"string",
      "enum":[
        "TCP",
        "UDP"
      ]
    },
    "LatencyMap":{
      "type":"map",
      "key":{"shape":"NonEmptyString"},
      "value":{"shape":"PositiveInteger"}
    },
    "LimitExceededException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>The requested operation would cause the resource to exceed the allowed service limit. Resolve the issue before retrying.</p>",
      "exception":true
    },
    "ListAliasesInput":{
      "type":"structure",
      "members":{
        "RoutingStrategyType":{
          "shape":"RoutingStrategyType",
          "documentation":"<p>Type of routing to filter results on. Use this parameter to retrieve only aliases of a certain type. To retrieve all aliases, leave this parameter empty.</p> <p>Possible routing types include the following:</p> <ul> <li> <p> <b>SIMPLE</b> -- The alias resolves to one specific fleet. Use this type when routing to active fleets.</p> </li> <li> <p> <b>TERMINAL</b> -- The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the <a>RoutingStrategy</a> message embedded.</p> </li> </ul>"
        },
        "Name":{
          "shape":"NonEmptyString",
          "documentation":"<p>Descriptive label that is associated with an alias. Alias names do not need to be unique.</p>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>"
        },
        "NextToken":{
          "shape":"NonEmptyString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "ListAliasesOutput":{
      "type":"structure",
      "members":{
        "Aliases":{
          "shape":"AliasList",
          "documentation":"<p>Collection of alias records that match the list request.</p>"
        },
        "NextToken":{
          "shape":"NonEmptyString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "ListBuildsInput":{
      "type":"structure",
      "members":{
        "Status":{
          "shape":"BuildStatus",
          "documentation":"<p>Build status to filter results by. To retrieve all builds, leave this parameter empty.</p> <p>Possible build statuses include the following:</p> <ul> <li> <p> <b>INITIALIZED</b> -- A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value. </p> </li> <li> <p> <b>READY</b> -- The game build has been successfully uploaded. You can now create new fleets for this build.</p> </li> <li> <p> <b>FAILED</b> -- The game build upload failed. You cannot create new fleets for this build. </p> </li> </ul>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>"
        },
        "NextToken":{
          "shape":"NonEmptyString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "ListBuildsOutput":{
      "type":"structure",
      "members":{
        "Builds":{
          "shape":"BuildList",
          "documentation":"<p>Collection of build records that match the request.</p>"
        },
        "NextToken":{
          "shape":"NonEmptyString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "ListFleetsInput":{
      "type":"structure",
      "members":{
        "BuildId":{
          "shape":"BuildId",
          "documentation":"<p>Unique identifier for a build to return fleets for. Use this parameter to return only fleets using the specified build. To retrieve all fleets, leave this parameter empty.</p>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "ListFleetsOutput":{
      "type":"structure",
      "members":{
        "FleetIds":{
          "shape":"FleetIdList",
          "documentation":"<p>Set of fleet IDs matching the list request. You can retrieve additional information about all returned fleets by passing this result set to a call to <a>DescribeFleetAttributes</a>, <a>DescribeFleetCapacity</a>, or <a>DescribeFleetUtilization</a>.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "MatchedPlayerSession":{
      "type":"structure",
      "members":{
        "PlayerId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a player </p>"
        },
        "PlayerSessionId":{
          "shape":"PlayerSessionId",
          "documentation":"<p>Unique identifier for a player session</p>"
        }
      },
      "documentation":"<p>Represents a new player session that is created as a result of a successful FlexMatch match. A successful match automatically creates new player sessions for every player ID in the original matchmaking request. </p> <p>When players connect to the match's game session, they must include both player ID and player session ID in order to claim their assigned player slot.</p>"
    },
    "MatchedPlayerSessionList":{
      "type":"list",
      "member":{"shape":"MatchedPlayerSession"}
    },
    "MatchmakerData":{
      "type":"string",
      "max":390000,
      "min":1
    },
    "MatchmakingAcceptanceTimeoutInteger":{
      "type":"integer",
      "max":600,
      "min":1
    },
    "MatchmakingConfiguration":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking configuration. This name is used to identify the configuration associated with a matchmaking request or ticket.</p>"
        },
        "Description":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with matchmaking configuration.</p>"
        },
        "GameSessionQueueArns":{
          "shape":"QueueArnsList",
          "documentation":"<p>Amazon Resource Name (<a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html\">ARN</a>) that is assigned to a game session queue and uniquely identifies it. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. These queues are used when placing game sessions for matches that are created with this matchmaking configuration. Queues can be located in any region.</p>"
        },
        "RequestTimeoutSeconds":{
          "shape":"MatchmakingRequestTimeoutInteger",
          "documentation":"<p>Maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that time out can be resubmitted as needed.</p>"
        },
        "AcceptanceTimeoutSeconds":{
          "shape":"MatchmakingAcceptanceTimeoutInteger",
          "documentation":"<p>Length of time (in seconds) to wait for players to accept a proposed match. If any player rejects the match or fails to accept before the timeout, the ticket continues to look for an acceptable match.</p>"
        },
        "AcceptanceRequired":{
          "shape":"BooleanModel",
          "documentation":"<p>Flag that determines whether or not a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE.</p>"
        },
        "RuleSetName":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking rule set to use with this configuration. A matchmaking configuration can only use rule sets that are defined in the same region.</p>"
        },
        "NotificationTarget":{
          "shape":"SnsArnStringModel",
          "documentation":"<p>SNS topic ARN that is set up to receive matchmaking notifications.</p>"
        },
        "AdditionalPlayerCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match.</p>"
        },
        "CustomEventData":{
          "shape":"CustomEventData",
          "documentation":"<p>Information to attached to all events related to the matchmaking configuration. </p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "GameProperties":{
          "shape":"GamePropertyList",
          "documentation":"<p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object that is created for a successful match. </p>"
        },
        "GameSessionData":{
          "shape":"GameSessionData",
          "documentation":"<p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object that is created for a successful match. </p>"
        }
      },
      "documentation":"<p>Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration.</p>"
    },
    "MatchmakingConfigurationList":{
      "type":"list",
      "member":{"shape":"MatchmakingConfiguration"}
    },
    "MatchmakingConfigurationStatus":{
      "type":"string",
      "enum":[
        "CANCELLED",
        "COMPLETED",
        "FAILED",
        "PLACING",
        "QUEUED",
        "REQUIRES_ACCEPTANCE",
        "SEARCHING",
        "TIMED_OUT"
      ]
    },
    "MatchmakingIdList":{
      "type":"list",
      "member":{"shape":"MatchmakingIdStringModel"}
    },
    "MatchmakingIdStringModel":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"[a-zA-Z0-9-\\.]+"
    },
    "MatchmakingRequestTimeoutInteger":{
      "type":"integer",
      "max":43200,
      "min":1
    },
    "MatchmakingRuleSet":{
      "type":"structure",
      "required":["RuleSetBody"],
      "members":{
        "RuleSetName":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking rule set</p>"
        },
        "RuleSetBody":{
          "shape":"RuleSetBody",
          "documentation":"<p>Collection of matchmaking rules, formatted as a JSON string. (Note that comments14 are not allowed in JSON, but most elements support a description field.)</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        }
      },
      "documentation":"<p>Set of rule statements, used with FlexMatch, that determine how to build a certain kind of player match. Each rule set describes a type of group to be created and defines the parameters for acceptable player matches. Rule sets are used in <a>MatchmakingConfiguration</a> objects.</p> <p>A rule set may define the following elements for a match. For detailed information and examples showing how to construct a rule set, see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html\">Build a FlexMatch Rule Set</a>. </p> <ul> <li> <p>Teams -- Required. A rule set must define one or multiple teams for the match and set minimum and maximum team sizes. For example, a rule set might describe a 4x4 match that requires all eight slots to be filled. </p> </li> <li> <p>Player attributes -- Optional. These attributes specify a set of player characteristics to evaluate when looking for a match. Matchmaking requests that use a rule set with player attributes must provide the corresponding attribute values. For example, an attribute might specify a player's skill or level.</p> </li> <li> <p>Rules -- Optional. Rules define how to evaluate potential players for a match based on player attributes. A rule might specify minimum requirements for individual players, teams, or entire matches. For example, a rule might require each player to meet a certain skill level, each team to have at least one player in a certain role, or the match to have a minimum average skill level. or may describe an entire group--such as all teams must be evenly matched or have at least one player in a certain role. </p> </li> <li> <p>Expansions -- Optional. Expansions allow you to relax the rules after a period of time when no acceptable matches are found. This feature lets you balance getting players into games in a reasonable amount of time instead of making them wait indefinitely for the best possible match. For example, you might use an expansion to increase the maximum skill variance between players after 30 seconds.</p> </li> </ul>"
    },
    "MatchmakingRuleSetList":{
      "type":"list",
      "member":{"shape":"MatchmakingRuleSet"}
    },
    "MatchmakingRuleSetNameList":{
      "type":"list",
      "member":{"shape":"MatchmakingIdStringModel"},
      "max":10,
      "min":1
    },
    "MatchmakingTicket":{
      "type":"structure",
      "members":{
        "TicketId":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking ticket.</p>"
        },
        "ConfigurationName":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Name of the <a>MatchmakingConfiguration</a> that is used with this ticket. Matchmaking configurations determine how players are grouped into a match and how a new game session is created for the match.</p>"
        },
        "Status":{
          "shape":"MatchmakingConfigurationStatus",
          "documentation":"<p>Current status of the matchmaking request.</p> <ul> <li> <p> <b>QUEUED</b> -- The matchmaking request has been received and is currently waiting to be processed.</p> </li> <li> <p> <b>SEARCHING</b> -- The matchmaking request is currently being processed. </p> </li> <li> <p> <b>REQUIRES_ACCEPTANCE</b> -- A match has been proposed and the players must accept the match (see <a>AcceptMatch</a>). This status is used only with requests that use a matchmaking configuration with a player acceptance requirement.</p> </li> <li> <p> <b>PLACING</b> -- The FlexMatch engine has matched players and is in the process of placing a new game session for the match.</p> </li> <li> <p> <b>COMPLETED</b> -- Players have been matched and a game session is ready to host the players. A ticket in this state contains the necessary connection information for players.</p> </li> <li> <p> <b>FAILED</b> -- The matchmaking request was not completed. Tickets with players who fail to accept a proposed match are placed in <code>FAILED</code> status.</p> </li> <li> <p> <b>CANCELLED</b> -- The matchmaking request was canceled with a call to <a>StopMatchmaking</a>.</p> </li> <li> <p> <b>TIMED_OUT</b> -- The matchmaking request was not successful within the duration specified in the matchmaking configuration. </p> </li> </ul> <note> <p>Matchmaking requests that fail to successfully complete (statuses FAILED, CANCELLED, TIMED_OUT) can be resubmitted as new requests with new ticket IDs.</p> </note>"
        },
        "StatusReason":{
          "shape":"StringModel",
          "documentation":"<p>Code to explain the current status. For example, a status reason may indicate when a ticket has returned to <code>SEARCHING</code> status after a proposed match fails to receive player acceptances.</p>"
        },
        "StatusMessage":{
          "shape":"StringModel",
          "documentation":"<p>Additional information about the current status.</p>"
        },
        "StartTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this matchmaking request was received. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "EndTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this matchmaking request stopped being processed due to success, failure, or cancellation. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "Players":{
          "shape":"PlayerList",
          "documentation":"<p>A set of <code>Player</code> objects, each representing a player to find matches for. Players are identified by a unique player ID and may include latency data for use during matchmaking. If the ticket is in status <code>COMPLETED</code>, the <code>Player</code> objects include the team the players were assigned to in the resulting match.</p>"
        },
        "GameSessionConnectionInfo":{
          "shape":"GameSessionConnectionInfo",
          "documentation":"<p>Identifier and connection information of the game session created for the match. This information is added to the ticket only after the matchmaking request has been successfully completed.</p>"
        },
        "EstimatedWaitTime":{
          "shape":"WholeNumber",
          "documentation":"<p>Average amount of time (in seconds) that players are currently waiting for a match. If there is not enough recent data, this property may be empty.</p>"
        }
      },
      "documentation":"<p>Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by calling <a>DescribeMatchmaking</a> with the ticket ID.</p>"
    },
    "MatchmakingTicketList":{
      "type":"list",
      "member":{"shape":"MatchmakingTicket"}
    },
    "MaxConcurrentGameSessionActivations":{
      "type":"integer",
      "max":2147483647,
      "min":1
    },
    "MetricGroup":{
      "type":"string",
      "max":255,
      "min":1
    },
    "MetricGroupList":{
      "type":"list",
      "member":{"shape":"MetricGroup"},
      "max":1
    },
    "MetricName":{
      "type":"string",
      "enum":[
        "ActivatingGameSessions",
        "ActiveGameSessions",
        "ActiveInstances",
        "AvailableGameSessions",
        "AvailablePlayerSessions",
        "CurrentPlayerSessions",
        "IdleInstances",
        "PercentAvailableGameSessions",
        "PercentIdleInstances",
        "QueueDepth",
        "WaitTime"
      ]
    },
    "NonBlankAndLengthConstraintString":{
      "type":"string",
      "max":1024,
      "min":1,
      "pattern":".*\\S.*"
    },
    "NonBlankString":{
      "type":"string",
      "pattern":"[^\\s]+"
    },
    "NonEmptyString":{
      "type":"string",
      "min":1
    },
    "NonZeroAndMaxString":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "NotFoundException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>A service resource associated with the request could not be found. Clients should not retry such requests.</p>",
      "exception":true
    },
    "OperatingSystem":{
      "type":"string",
      "enum":[
        "WINDOWS_2012",
        "AMAZON_LINUX"
      ]
    },
    "PlacedPlayerSession":{
      "type":"structure",
      "members":{
        "PlayerId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a player that is associated with this player session.</p>"
        },
        "PlayerSessionId":{
          "shape":"PlayerSessionId",
          "documentation":"<p>Unique identifier for a player session.</p>"
        }
      },
      "documentation":"<p>Information about a player session that was created as part of a <a>StartGameSessionPlacement</a> request. This object contains only the player ID and player session ID. To retrieve full details on a player session, call <a>DescribePlayerSessions</a> with the player session ID.</p> <p>Player-session-related operations include:</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "PlacedPlayerSessionList":{
      "type":"list",
      "member":{"shape":"PlacedPlayerSession"}
    },
    "Player":{
      "type":"structure",
      "members":{
        "PlayerId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a player</p>"
        },
        "PlayerAttributes":{
          "shape":"PlayerAttributeMap",
          "documentation":"<p>Collection of key:value pairs containing player information for use in matchmaking. Player attribute keys must match the <i>playerAttributes</i> used in a matchmaking rule set. Example: <code>\"PlayerAttributes\": {\"skill\": {\"N\": \"23\"}, \"gameMode\": {\"S\": \"deathmatch\"}}</code>.</p>"
        },
        "Team":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Name of the team that the player is assigned to in a match. Team names are defined in a matchmaking rule set.</p>"
        },
        "LatencyInMs":{
          "shape":"LatencyMap",
          "documentation":"<p>Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS regions. If this property is present, FlexMatch considers placing the match only in regions for which latency is reported. </p> <p>If a matchmaker has a rule that evaluates player latency, players must report latency in order to be matched. If no latency is reported in this scenario, FlexMatch assumes that no regions are available to the player and the ticket is not matchable. </p>"
        }
      },
      "documentation":"<p>Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed.</p>"
    },
    "PlayerAttributeMap":{
      "type":"map",
      "key":{"shape":"NonZeroAndMaxString"},
      "value":{"shape":"AttributeValue"}
    },
    "PlayerData":{
      "type":"string",
      "max":2048,
      "min":1
    },
    "PlayerDataMap":{
      "type":"map",
      "key":{"shape":"NonZeroAndMaxString"},
      "value":{"shape":"PlayerData"}
    },
    "PlayerIdList":{
      "type":"list",
      "member":{"shape":"NonZeroAndMaxString"},
      "max":25,
      "min":1
    },
    "PlayerLatency":{
      "type":"structure",
      "members":{
        "PlayerId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a player associated with the latency data.</p>"
        },
        "RegionIdentifier":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Name of the region that is associated with the latency value.</p>"
        },
        "LatencyInMilliseconds":{
          "shape":"Float",
          "documentation":"<p>Amount of time that represents the time lag experienced by the player when connected to the specified region.</p>"
        }
      },
      "documentation":"<p>Regional latency information for a player, used when requesting a new game session with <a>StartGameSessionPlacement</a>. This value indicates the amount of time lag that exists when the player is connected to a fleet in the specified region. The relative difference between a player's latency values for multiple regions are used to determine which fleets are best suited to place a new game session for the player. </p>"
    },
    "PlayerLatencyList":{
      "type":"list",
      "member":{"shape":"PlayerLatency"}
    },
    "PlayerLatencyPolicy":{
      "type":"structure",
      "members":{
        "MaximumIndividualPlayerLatencyMilliseconds":{
          "shape":"WholeNumber",
          "documentation":"<p>The maximum latency value that is allowed for any player, in milliseconds. All policies must have a value set for this property.</p>"
        },
        "PolicyDurationSeconds":{
          "shape":"WholeNumber",
          "documentation":"<p>The length of time, in seconds, that the policy is enforced while placing a new game session. A null value for this property means that the policy is enforced until the queue times out.</p>"
        }
      },
      "documentation":"<p>Queue setting that determines the highest latency allowed for individual players when placing a game session. When a latency policy is in force, a game session cannot be placed at any destination in a region where a player is reporting latency higher than the cap. Latency policies are only enforced when the placement request contains player latency information.</p> <p>Queue-related operations include:</p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>"
    },
    "PlayerLatencyPolicyList":{
      "type":"list",
      "member":{"shape":"PlayerLatencyPolicy"}
    },
    "PlayerList":{
      "type":"list",
      "member":{"shape":"Player"}
    },
    "PlayerSession":{
      "type":"structure",
      "members":{
        "PlayerSessionId":{
          "shape":"PlayerSessionId",
          "documentation":"<p>Unique identifier for a player session.</p>"
        },
        "PlayerId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a player that is associated with this player session.</p>"
        },
        "GameSessionId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for the game session that the player session is connected to.</p>"
        },
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet that the player's game session is running on.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "TerminationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "Status":{
          "shape":"PlayerSessionStatus",
          "documentation":"<p>Current status of the player session.</p> <p>Possible player session statuses include the following:</p> <ul> <li> <p> <b>RESERVED</b> -- The player session request has been received, but the player has not yet connected to the server process and/or been validated. </p> </li> <li> <p> <b>ACTIVE</b> -- The player has been validated by the server process and is currently connected.</p> </li> <li> <p> <b>COMPLETED</b> -- The player connection has been dropped.</p> </li> <li> <p> <b>TIMEDOUT</b> -- A player session request was received, but the player did not connect and/or was not validated within the timeout limit (60 seconds).</p> </li> </ul>"
        },
        "IpAddress":{
          "shape":"IpAddress",
          "documentation":"<p>IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>"
        },
        "Port":{
          "shape":"PortNumber",
          "documentation":"<p>Port number for the game session. To connect to a Amazon GameLift server process, an app needs both the IP address and port number.</p>"
        },
        "PlayerData":{
          "shape":"PlayerData",
          "documentation":"<p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game. </p>"
        }
      },
      "documentation":"<p>Properties describing a player session. Player session objects are created either by creating a player session for a specific game session, or as part of a game session placement. A player session represents either a player reservation for a game session (status <code>RESERVED</code>) or actual player activity in a game session (status <code>ACTIVE</code>). A player session object (including player data) is automatically passed to a game session when the player connects to the game session and is validated.</p> <p>When a player disconnects, the player session status changes to <code>COMPLETED</code>. Once the session ends, the player session object is retained for 30 days and then removed.</p> <p>Player-session-related operations include:</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>"
    },
    "PlayerSessionCreationPolicy":{
      "type":"string",
      "enum":[
        "ACCEPT_ALL",
        "DENY_ALL"
      ]
    },
    "PlayerSessionId":{
      "type":"string",
      "pattern":"^psess-\\S+"
    },
    "PlayerSessionList":{
      "type":"list",
      "member":{"shape":"PlayerSession"}
    },
    "PlayerSessionStatus":{
      "type":"string",
      "enum":[
        "RESERVED",
        "ACTIVE",
        "COMPLETED",
        "TIMEDOUT"
      ]
    },
    "PolicyType":{
      "type":"string",
      "enum":[
        "RuleBased",
        "TargetBased"
      ]
    },
    "PortNumber":{
      "type":"integer",
      "max":60000,
      "min":1
    },
    "PositiveInteger":{
      "type":"integer",
      "min":1
    },
    "PositiveLong":{
      "type":"long",
      "min":1
    },
    "ProtectionPolicy":{
      "type":"string",
      "enum":[
        "NoProtection",
        "FullProtection"
      ]
    },
    "PutScalingPolicyInput":{
      "type":"structure",
      "required":[
        "Name",
        "FleetId",
        "MetricName"
      ],
      "members":{
        "Name":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a scaling policy. Policy names do not need to be unique. A fleet can have only one scaling policy with the same name.</p>"
        },
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to apply this policy to. The fleet cannot be in any of the following statuses: ERROR or DELETING.</p>"
        },
        "ScalingAdjustment":{
          "shape":"Integer",
          "documentation":"<p>Amount of adjustment to make, based on the scaling adjustment type.</p>"
        },
        "ScalingAdjustmentType":{
          "shape":"ScalingAdjustmentType",
          "documentation":"<p>Type of adjustment to make to a fleet's instance count (see <a>FleetCapacity</a>):</p> <ul> <li> <p> <b>ChangeInCapacity</b> -- add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.</p> </li> <li> <p> <b>ExactCapacity</b> -- set the instance count to the scaling adjustment value.</p> </li> <li> <p> <b>PercentChangeInCapacity</b> -- increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down; for example, a value of \"-10\" scales the fleet down by 10%.</p> </li> </ul>"
        },
        "Threshold":{
          "shape":"Double",
          "documentation":"<p>Metric value used to trigger a scaling event.</p>"
        },
        "ComparisonOperator":{
          "shape":"ComparisonOperatorType",
          "documentation":"<p>Comparison operator to use when measuring the metric against the threshold value.</p>"
        },
        "EvaluationPeriods":{
          "shape":"PositiveInteger",
          "documentation":"<p>Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.</p>"
        },
        "MetricName":{
          "shape":"MetricName",
          "documentation":"<p>Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For detailed descriptions of fleet metrics, see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html\">Monitor Amazon GameLift with Amazon CloudWatch</a>. </p> <ul> <li> <p> <b>ActivatingGameSessions</b> -- Game sessions in the process of being created.</p> </li> <li> <p> <b>ActiveGameSessions</b> -- Game sessions that are currently running.</p> </li> <li> <p> <b>ActiveInstances</b> -- Fleet instances that are currently running at least one game session.</p> </li> <li> <p> <b>AvailableGameSessions</b> -- Additional game sessions that fleet could host simultaneously, given current capacity.</p> </li> <li> <p> <b>AvailablePlayerSessions</b> -- Empty player slots in currently active game sessions. This includes game sessions that are not currently accepting players. Reserved player slots are not included.</p> </li> <li> <p> <b>CurrentPlayerSessions</b> -- Player slots in active game sessions that are being used by a player or are reserved for a player. </p> </li> <li> <p> <b>IdleInstances</b> -- Active instances that are currently hosting zero game sessions. </p> </li> <li> <p> <b>PercentAvailableGameSessions</b> -- Unused percentage of the total number of game sessions that a fleet could host simultaneously, given current capacity. Use this metric for a target-based scaling policy.</p> </li> <li> <p> <b>PercentIdleInstances</b> -- Percentage of the total number of active instances that are hosting zero game sessions.</p> </li> <li> <p> <b>QueueDepth</b> -- Pending game session placement requests, in any queue, where the current fleet is the top-priority destination.</p> </li> <li> <p> <b>WaitTime</b> -- Current wait time for pending game session placement requests, in any queue, where the current fleet is the top-priority destination. </p> </li> </ul>"
        },
        "PolicyType":{
          "shape":"PolicyType",
          "documentation":"<p>Type of scaling policy to create. For a target-based policy, set the parameter <i>MetricName</i> to 'PercentAvailableGameSessions' and specify a <i>TargetConfiguration</i>. For a rule-based policy set the following parameters: <i>MetricName</i>, <i>ComparisonOperator</i>, <i>Threshold</i>, <i>EvaluationPeriods</i>, <i>ScalingAdjustmentType</i>, and <i>ScalingAdjustment</i>.</p>"
        },
        "TargetConfiguration":{
          "shape":"TargetConfiguration",
          "documentation":"<p>Object that contains settings for a target-based scaling policy.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "PutScalingPolicyOutput":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a scaling policy. Policy names do not need to be unique.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "QueueArnsList":{
      "type":"list",
      "member":{"shape":"ArnStringModel"}
    },
    "RequestUploadCredentialsInput":{
      "type":"structure",
      "required":["BuildId"],
      "members":{
        "BuildId":{
          "shape":"BuildId",
          "documentation":"<p>Unique identifier for a build to get credentials for.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "RequestUploadCredentialsOutput":{
      "type":"structure",
      "members":{
        "UploadCredentials":{
          "shape":"AwsCredentials",
          "documentation":"<p>AWS credentials required when uploading a game build to the storage location. These credentials have a limited lifespan and are valid only for the build they were issued for.</p>"
        },
        "StorageLocation":{
          "shape":"S3Location",
          "documentation":"<p>Amazon S3 path and key, identifying where the game build files are stored.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "ResolveAliasInput":{
      "type":"structure",
      "required":["AliasId"],
      "members":{
        "AliasId":{
          "shape":"AliasId",
          "documentation":"<p>Unique identifier for the alias you want to resolve.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "ResolveAliasOutput":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Fleet identifier that is associated with the requested alias.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "ResourceCreationLimitPolicy":{
      "type":"structure",
      "members":{
        "NewGameSessionsPerCreator":{
          "shape":"WholeNumber",
          "documentation":"<p>Maximum number of game sessions that an individual can create during the policy period. </p>"
        },
        "PolicyPeriodInMinutes":{
          "shape":"WholeNumber",
          "documentation":"<p>Time span used in evaluating the resource creation limit policy. </p>"
        }
      },
      "documentation":"<p>Policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: \"An individual player can create a maximum number of new game sessions within a specified time period\".</p> <p>The policy is evaluated when a player tries to create a new game session. For example, with a policy of 10 new game sessions and a time period of 60 minutes, on receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than 10 game sessions in the past 60 minutes.</p>"
    },
    "RoutingStrategy":{
      "type":"structure",
      "members":{
        "Type":{
          "shape":"RoutingStrategyType",
          "documentation":"<p>Type of routing strategy.</p> <p>Possible routing types include the following:</p> <ul> <li> <p> <b>SIMPLE</b> -- The alias resolves to one specific fleet. Use this type when routing to active fleets.</p> </li> <li> <p> <b>TERMINAL</b> -- The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the <a>RoutingStrategy</a> message embedded.</p> </li> </ul>"
        },
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet that the alias points to.</p>"
        },
        "Message":{
          "shape":"FreeText",
          "documentation":"<p>Message text to be used with a terminal routing strategy.</p>"
        }
      },
      "documentation":"<p>Routing configuration for a fleet alias.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "RoutingStrategyType":{
      "type":"string",
      "enum":[
        "SIMPLE",
        "TERMINAL"
      ]
    },
    "RuleSetBody":{
      "type":"string",
      "max":65535,
      "min":1
    },
    "RuleSetLimit":{
      "type":"integer",
      "max":10,
      "min":1
    },
    "RuntimeConfiguration":{
      "type":"structure",
      "members":{
        "ServerProcesses":{
          "shape":"ServerProcessList",
          "documentation":"<p>Collection of server process configurations that describe which server processes to run on each instance in a fleet.</p>"
        },
        "MaxConcurrentGameSessionActivations":{
          "shape":"MaxConcurrentGameSessionActivations",
          "documentation":"<p>Maximum number of game sessions with status <code>ACTIVATING</code> to allow on an instance simultaneously. This setting limits the amount of instance resources that can be used for new game activations at any one time.</p>"
        },
        "GameSessionActivationTimeoutSeconds":{
          "shape":"GameSessionActivationTimeoutSeconds",
          "documentation":"<p>Maximum amount of time (in seconds) that a game session can remain in status <code>ACTIVATING</code>. If the game session is not active before the timeout, activation is terminated and the game session status is changed to <code>TERMINATED</code>.</p>"
        }
      },
      "documentation":"<p>A collection of server process configurations that describe what processes to run on each instance in a fleet. All fleets must have a run-time configuration. Each instance in the fleet launches the server processes specified in the run-time configuration and launches new ones as existing processes end. Each instance regularly checks for an updated run-time configuration and follows the new instructions. </p> <p>The run-time configuration enables the instances in a fleet to run multiple processes simultaneously. Potential scenarios are as follows: (1) Run multiple processes of a single game server executable to maximize usage of your hosting resources. (2) Run one or more processes of different build executables, such as your game server executable and a related program, or two or more different versions of a game server. (3) Run multiple processes of a single game server but with different launch parameters, for example to run one process on each instance in debug mode.</p> <p>A Amazon GameLift instance is limited to 50 processes running simultaneously. A run-time configuration must specify fewer than this limit. To calculate the total number of processes specified in a run-time configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <code> <a>ServerProcess</a> </code> object in the run-time configuration.</p> <p>Fleet-related operations include:</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "S3Location":{
      "type":"structure",
      "members":{
        "Bucket":{
          "shape":"NonEmptyString",
          "documentation":"<p>Amazon S3 bucket identifier. This is the name of your S3 bucket.</p>"
        },
        "Key":{
          "shape":"NonEmptyString",
          "documentation":"<p>Name of the zip file containing your build files. </p>"
        },
        "RoleArn":{
          "shape":"NonEmptyString",
          "documentation":"<p>Amazon Resource Name (<a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html\">ARN</a>) for the access role that allows Amazon GameLift to access your S3 bucket.</p>"
        }
      },
      "documentation":"<p>Location in Amazon Simple Storage Service (Amazon S3) where build files can be stored for access by Amazon GameLift. This location is specified in a <a>CreateBuild</a> request. For more details, see the <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build\">Create a Build with Files in Amazon S3</a>.</p>"
    },
    "ScalingAdjustmentType":{
      "type":"string",
      "enum":[
        "ChangeInCapacity",
        "ExactCapacity",
        "PercentChangeInCapacity"
      ]
    },
    "ScalingPolicy":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet that is associated with this scaling policy.</p>"
        },
        "Name":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a scaling policy. Policy names do not need to be unique.</p>"
        },
        "Status":{
          "shape":"ScalingStatusType",
          "documentation":"<p>Current status of the scaling policy. The scaling policy can be in force only when in an <code>ACTIVE</code> status. Scaling policies can be suspended for individual fleets (see <a>StopFleetActions</a>; if suspended for a fleet, the policy status does not change. View a fleet's stopped actions by calling <a>DescribeFleetCapacity</a>.</p> <ul> <li> <p> <b>ACTIVE</b> -- The scaling policy can be used for auto-scaling a fleet.</p> </li> <li> <p> <b>UPDATE_REQUESTED</b> -- A request to update the scaling policy has been received.</p> </li> <li> <p> <b>UPDATING</b> -- A change is being made to the scaling policy.</p> </li> <li> <p> <b>DELETE_REQUESTED</b> -- A request to delete the scaling policy has been received.</p> </li> <li> <p> <b>DELETING</b> -- The scaling policy is being deleted.</p> </li> <li> <p> <b>DELETED</b> -- The scaling policy has been deleted.</p> </li> <li> <p> <b>ERROR</b> -- An error occurred in creating the policy. It should be removed and recreated.</p> </li> </ul>"
        },
        "ScalingAdjustment":{
          "shape":"Integer",
          "documentation":"<p>Amount of adjustment to make, based on the scaling adjustment type.</p>"
        },
        "ScalingAdjustmentType":{
          "shape":"ScalingAdjustmentType",
          "documentation":"<p>Type of adjustment to make to a fleet's instance count (see <a>FleetCapacity</a>):</p> <ul> <li> <p> <b>ChangeInCapacity</b> -- add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.</p> </li> <li> <p> <b>ExactCapacity</b> -- set the instance count to the scaling adjustment value.</p> </li> <li> <p> <b>PercentChangeInCapacity</b> -- increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down.</p> </li> </ul>"
        },
        "ComparisonOperator":{
          "shape":"ComparisonOperatorType",
          "documentation":"<p>Comparison operator to use when measuring a metric against the threshold value.</p>"
        },
        "Threshold":{
          "shape":"Double",
          "documentation":"<p>Metric value used to trigger a scaling event.</p>"
        },
        "EvaluationPeriods":{
          "shape":"PositiveInteger",
          "documentation":"<p>Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.</p>"
        },
        "MetricName":{
          "shape":"MetricName",
          "documentation":"<p>Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For detailed descriptions of fleet metrics, see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html\">Monitor Amazon GameLift with Amazon CloudWatch</a>. </p> <ul> <li> <p> <b>ActivatingGameSessions</b> -- Game sessions in the process of being created.</p> </li> <li> <p> <b>ActiveGameSessions</b> -- Game sessions that are currently running.</p> </li> <li> <p> <b>ActiveInstances</b> -- Fleet instances that are currently running at least one game session.</p> </li> <li> <p> <b>AvailableGameSessions</b> -- Additional game sessions that fleet could host simultaneously, given current capacity.</p> </li> <li> <p> <b>AvailablePlayerSessions</b> -- Empty player slots in currently active game sessions. This includes game sessions that are not currently accepting players. Reserved player slots are not included.</p> </li> <li> <p> <b>CurrentPlayerSessions</b> -- Player slots in active game sessions that are being used by a player or are reserved for a player. </p> </li> <li> <p> <b>IdleInstances</b> -- Active instances that are currently hosting zero game sessions. </p> </li> <li> <p> <b>PercentAvailableGameSessions</b> -- Unused percentage of the total number of game sessions that a fleet could host simultaneously, given current capacity. Use this metric for a target-based scaling policy.</p> </li> <li> <p> <b>PercentIdleInstances</b> -- Percentage of the total number of active instances that are hosting zero game sessions.</p> </li> <li> <p> <b>QueueDepth</b> -- Pending game session placement requests, in any queue, where the current fleet is the top-priority destination.</p> </li> <li> <p> <b>WaitTime</b> -- Current wait time for pending game session placement requests, in any queue, where the current fleet is the top-priority destination. </p> </li> </ul>"
        },
        "PolicyType":{
          "shape":"PolicyType",
          "documentation":"<p>Type of scaling policy to create. For a target-based policy, set the parameter <i>MetricName</i> to 'PercentAvailableGameSessions' and specify a <i>TargetConfiguration</i>. For a rule-based policy set the following parameters: <i>MetricName</i>, <i>ComparisonOperator</i>, <i>Threshold</i>, <i>EvaluationPeriods</i>, <i>ScalingAdjustmentType</i>, and <i>ScalingAdjustment</i>.</p>"
        },
        "TargetConfiguration":{
          "shape":"TargetConfiguration",
          "documentation":"<p>Object that contains settings for a target-based scaling policy.</p>"
        }
      },
      "documentation":"<p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.</p> <p>Operations related to fleet capacity scaling include:</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "ScalingPolicyList":{
      "type":"list",
      "member":{"shape":"ScalingPolicy"}
    },
    "ScalingStatusType":{
      "type":"string",
      "enum":[
        "ACTIVE",
        "UPDATE_REQUESTED",
        "UPDATING",
        "DELETE_REQUESTED",
        "DELETING",
        "DELETED",
        "ERROR"
      ]
    },
    "SearchGameSessionsInput":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to search for active game sessions. Each request must reference either a fleet ID or alias ID, but not both.</p>"
        },
        "AliasId":{
          "shape":"AliasId",
          "documentation":"<p>Unique identifier for an alias associated with the fleet to search for active game sessions. Each request must reference either a fleet ID or alias ID, but not both.</p>"
        },
        "FilterExpression":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>String containing the search criteria for the session search. If no filter expression is included, the request returns results for all game sessions in the fleet that are in <code>ACTIVE</code> status.</p> <p>A filter expression can contain one or multiple conditions. Each condition consists of the following:</p> <ul> <li> <p> <b>Operand</b> -- Name of a game session attribute. Valid values are <code>gameSessionName</code>, <code>gameSessionId</code>, <code>gameSessionProperties</code>, <code>maximumSessions</code>, <code>creationTimeMillis</code>, <code>playerSessionCount</code>, <code>hasAvailablePlayerSessions</code>.</p> </li> <li> <p> <b>Comparator</b> -- Valid comparators are: <code>=</code>, <code>&lt;&gt;</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. </p> </li> <li> <p> <b>Value</b> -- Value to be searched for. Values may be numbers, boolean values (true/false) or strings depending on the operand. String values are case sensitive and must be enclosed in single quotes. Special characters must be escaped. Boolean and string values can only be used with the comparators <code>=</code> and <code>&lt;&gt;</code>. For example, the following filter expression searches on <code>gameSessionName</code>: \"<code>FilterExpression\": \"gameSessionName = 'Matt\\\\'s Awesome Game 1'\"</code>. </p> </li> </ul> <p>To chain multiple conditions in a single expression, use the logical keywords <code>AND</code>, <code>OR</code>, and <code>NOT</code> and parentheses as needed. For example: <code>x AND y AND NOT z</code>, <code>NOT (x OR y)</code>.</p> <p>Session search evaluates conditions from left to right using the following precedence rules:</p> <ol> <li> <p> <code>=</code>, <code>&lt;&gt;</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code> </p> </li> <li> <p>Parentheses</p> </li> <li> <p>NOT</p> </li> <li> <p>AND</p> </li> <li> <p>OR</p> </li> </ol> <p>For example, this filter expression retrieves game sessions hosting at least ten players that have an open player slot: <code>\"maximumSessions&gt;=10 AND hasAvailablePlayerSessions=true\"</code>. </p>"
        },
        "SortExpression":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Instructions on how to sort the search results. If no sort expression is included, the request returns results in random order. A sort expression consists of the following elements:</p> <ul> <li> <p> <b>Operand</b> -- Name of a game session attribute. Valid values are <code>gameSessionName</code>, <code>gameSessionId</code>, <code>gameSessionProperties</code>, <code>maximumSessions</code>, <code>creationTimeMillis</code>, <code>playerSessionCount</code>, <code>hasAvailablePlayerSessions</code>.</p> </li> <li> <p> <b>Order</b> -- Valid sort orders are <code>ASC</code> (ascending) and <code>DESC</code> (descending).</p> </li> </ul> <p>For example, this sort expression returns the oldest active sessions first: <code>\"SortExpression\": \"creationTimeMillis ASC\"</code>. Results with a null value for the sort operand are returned at the end of the list.</p>"
        },
        "Limit":{
          "shape":"PositiveInteger",
          "documentation":"<p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. The maximum number of results returned is 20, even if this value is not set or is set higher than 20. </p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "SearchGameSessionsOutput":{
      "type":"structure",
      "members":{
        "GameSessions":{
          "shape":"GameSessionList",
          "documentation":"<p>Collection of objects containing game session properties for each session matching the request.</p>"
        },
        "NextToken":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "ServerProcess":{
      "type":"structure",
      "required":[
        "LaunchPath",
        "ConcurrentExecutions"
      ],
      "members":{
        "LaunchPath":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Location of the server executable in a game build. All game builds are installed on instances at the root : for Windows instances <code>C:\\game</code>, and for Linux instances <code>/local/game</code>. A Windows game build with an executable file located at <code>MyGame\\latest\\server.exe</code> must have a launch path of \"<code>C:\\game\\MyGame\\latest\\server.exe</code>\". A Linux game build with an executable file located at <code>MyGame/latest/server.exe</code> must have a launch path of \"<code>/local/game/MyGame/latest/server.exe</code>\". </p>"
        },
        "Parameters":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Optional list of parameters to pass to the server executable on launch.</p>"
        },
        "ConcurrentExecutions":{
          "shape":"PositiveInteger",
          "documentation":"<p>Number of server processes using this configuration to run concurrently on an instance.</p>"
        }
      },
      "documentation":"<p>A set of instructions for launching server processes on each instance in a fleet. Each instruction set identifies the location of the server executable, optional launch parameters, and the number of server processes with this configuration to maintain concurrently on the instance. Server process configurations make up a fleet's <code> <a>RuntimeConfiguration</a> </code>.</p>"
    },
    "ServerProcessList":{
      "type":"list",
      "member":{"shape":"ServerProcess"},
      "max":50,
      "min":1
    },
    "SnsArnStringModel":{
      "type":"string",
      "max":300,
      "min":0,
      "pattern":"[a-zA-Z0-9:_/-]*"
    },
    "StartFleetActionsInput":{
      "type":"structure",
      "required":[
        "FleetId",
        "Actions"
      ],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet</p>"
        },
        "Actions":{
          "shape":"FleetActionList",
          "documentation":"<p>List of actions to restart on the fleet.</p>"
        }
      }
    },
    "StartFleetActionsOutput":{
      "type":"structure",
      "members":{
      }
    },
    "StartGameSessionPlacementInput":{
      "type":"structure",
      "required":[
        "PlacementId",
        "GameSessionQueueName",
        "MaximumPlayerSessionCount"
      ],
      "members":{
        "PlacementId":{
          "shape":"IdStringModel",
          "documentation":"<p>Unique identifier to assign to the new game session placement. This value is developer-defined. The value must be unique across all regions and cannot be reused unless you are resubmitting a canceled or timed-out placement request.</p>"
        },
        "GameSessionQueueName":{
          "shape":"GameSessionQueueName",
          "documentation":"<p>Name of the queue to use to place the new game session.</p>"
        },
        "GameProperties":{
          "shape":"GamePropertyList",
          "documentation":"<p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>).</p>"
        },
        "MaximumPlayerSessionCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Maximum number of players that can be connected simultaneously to the game session.</p>"
        },
        "GameSessionName":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>"
        },
        "PlayerLatencies":{
          "shape":"PlayerLatencyList",
          "documentation":"<p>Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS regions. This information is used to try to place the new game session where it can offer the best possible gameplay experience for the players. </p>"
        },
        "DesiredPlayerSessions":{
          "shape":"DesiredPlayerSessionList",
          "documentation":"<p>Set of information on each player to create a player session for.</p>"
        },
        "GameSessionData":{
          "shape":"GameSessionData",
          "documentation":"<p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>).</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "StartGameSessionPlacementOutput":{
      "type":"structure",
      "members":{
        "GameSessionPlacement":{
          "shape":"GameSessionPlacement",
          "documentation":"<p>Object that describes the newly created game session placement. This object includes all the information provided in the request, as well as start/end time stamps and placement status. </p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "StartMatchBackfillInput":{
      "type":"structure",
      "required":[
        "ConfigurationName",
        "GameSessionArn",
        "Players"
      ],
      "members":{
        "TicketId":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of a UUID. Use this identifier to track the match backfill ticket status and retrieve match results.</p>"
        },
        "ConfigurationName":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Name of the matchmaker to use for this request. The name of the matchmaker that was used with the original game session is listed in the <a>GameSession</a> object, <code>MatchmakerData</code> property. This property contains a matchmaking configuration ARN value, which includes the matchmaker name. (In the ARN value \"arn:aws:gamelift:us-west-2:111122223333:matchmakingconfiguration/MM-4v4\", the matchmaking configuration name is \"MM-4v4\".) Use only the name for this parameter.</p>"
        },
        "GameSessionArn":{
          "shape":"ArnStringModel",
          "documentation":"<p>Amazon Resource Name (<a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html\">ARN</a>) that is assigned to a game session and uniquely identifies it. </p>"
        },
        "Players":{
          "shape":"PlayerList",
          "documentation":"<p>Match information on all players that are currently assigned to the game session. This information is used by the matchmaker to find new players and add them to the existing game.</p> <ul> <li> <p>PlayerID, PlayerAttributes, Team -\\\\- This information is maintained in the <a>GameSession</a> object, <code>MatchmakerData</code> property, for all players who are currently assigned to the game session. The matchmaker data is in JSON syntax, formatted as a string. For more details, see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/match-server.html#match-server-data\"> Match Data</a>. </p> </li> <li> <p>LatencyInMs -\\\\- If the matchmaker uses player latency, include a latency value, in milliseconds, for the region that the game session is currently in. Do not include latency values for any other region.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "StartMatchBackfillOutput":{
      "type":"structure",
      "members":{
        "MatchmakingTicket":{
          "shape":"MatchmakingTicket",
          "documentation":"<p>Ticket representing the backfill matchmaking request. This object includes the information in the request, ticket status, and match results as generated during the matchmaking process.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "StartMatchmakingInput":{
      "type":"structure",
      "required":[
        "ConfigurationName",
        "Players"
      ],
      "members":{
        "TicketId":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of a UUID. Use this identifier to track the matchmaking ticket status and retrieve match results.</p>"
        },
        "ConfigurationName":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Name of the matchmaking configuration to use for this request. Matchmaking configurations must exist in the same region as this request.</p>"
        },
        "Players":{
          "shape":"PlayerList",
          "documentation":"<p>Information on each player to be matched. This information must include a player ID, and may contain player attributes and latency data to be used in the matchmaking process. After a successful match, <code>Player</code> objects contain the name of the team the player is assigned to.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "StartMatchmakingOutput":{
      "type":"structure",
      "members":{
        "MatchmakingTicket":{
          "shape":"MatchmakingTicket",
          "documentation":"<p>Ticket representing the matchmaking request. This object include the information included in the request, ticket status, and match results as generated during the matchmaking process.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "StopFleetActionsInput":{
      "type":"structure",
      "required":[
        "FleetId",
        "Actions"
      ],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet</p>"
        },
        "Actions":{
          "shape":"FleetActionList",
          "documentation":"<p>List of actions to suspend on the fleet. </p>"
        }
      }
    },
    "StopFleetActionsOutput":{
      "type":"structure",
      "members":{
      }
    },
    "StopGameSessionPlacementInput":{
      "type":"structure",
      "required":["PlacementId"],
      "members":{
        "PlacementId":{
          "shape":"IdStringModel",
          "documentation":"<p>Unique identifier for a game session placement to cancel.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "StopGameSessionPlacementOutput":{
      "type":"structure",
      "members":{
        "GameSessionPlacement":{
          "shape":"GameSessionPlacement",
          "documentation":"<p>Object that describes the canceled game session placement, with <code>CANCELLED</code> status and an end time stamp. </p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "StopMatchmakingInput":{
      "type":"structure",
      "required":["TicketId"],
      "members":{
        "TicketId":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking ticket.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "StopMatchmakingOutput":{
      "type":"structure",
      "members":{
      }
    },
    "StringDoubleMap":{
      "type":"map",
      "key":{"shape":"NonZeroAndMaxString"},
      "value":{"shape":"DoubleObject"}
    },
    "StringList":{
      "type":"list",
      "member":{"shape":"NonZeroAndMaxString"}
    },
    "StringModel":{"type":"string"},
    "TargetConfiguration":{
      "type":"structure",
      "required":["TargetValue"],
      "members":{
        "TargetValue":{
          "shape":"Double",
          "documentation":"<p>Desired value to use with a target-based scaling policy. The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).</p>"
        }
      },
      "documentation":"<p>Settings for a target-based scaling policy (see <a>ScalingPolicy</a>. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value. </p> <p>Operations related to fleet capacity scaling include:</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>"
    },
    "TerminalRoutingStrategyException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>The service is unable to resolve the routing for a particular alias because it has a terminal <a>RoutingStrategy</a> associated with it. The message returned in this exception is the message defined in the routing strategy itself. Such requests should only be retried if the routing strategy for the specified alias is modified. </p>",
      "exception":true
    },
    "Timestamp":{"type":"timestamp"},
    "UnauthorizedException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>The client failed authentication. Clients should not retry such requests.</p>",
      "exception":true
    },
    "UnsupportedRegionException":{
      "type":"structure",
      "members":{
        "Message":{"shape":"NonEmptyString"}
      },
      "documentation":"<p>The requested operation is not supported in the region specified.</p>",
      "exception":true
    },
    "UpdateAliasInput":{
      "type":"structure",
      "required":["AliasId"],
      "members":{
        "AliasId":{
          "shape":"AliasId",
          "documentation":"<p>Unique identifier for a fleet alias. Specify the alias you want to update.</p>"
        },
        "Name":{
          "shape":"NonBlankAndLengthConstraintString",
          "documentation":"<p>Descriptive label that is associated with an alias. Alias names do not need to be unique.</p>"
        },
        "Description":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Human-readable description of an alias.</p>"
        },
        "RoutingStrategy":{
          "shape":"RoutingStrategy",
          "documentation":"<p>Object that specifies the fleet and routing type to use for the alias.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "UpdateAliasOutput":{
      "type":"structure",
      "members":{
        "Alias":{
          "shape":"Alias",
          "documentation":"<p>Object that contains the updated alias configuration.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "UpdateBuildInput":{
      "type":"structure",
      "required":["BuildId"],
      "members":{
        "BuildId":{
          "shape":"BuildId",
          "documentation":"<p>Unique identifier for a build to update.</p>"
        },
        "Name":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a build. Build names do not need to be unique. </p>"
        },
        "Version":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Version that is associated with this build. Version strings do not need to be unique.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "UpdateBuildOutput":{
      "type":"structure",
      "members":{
        "Build":{
          "shape":"Build",
          "documentation":"<p>Object that contains the updated build record.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "UpdateFleetAttributesInput":{
      "type":"structure",
      "required":["FleetId"],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to update attribute metadata for.</p>"
        },
        "Name":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>"
        },
        "Description":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Human-readable description of a fleet.</p>"
        },
        "NewGameSessionProtectionPolicy":{
          "shape":"ProtectionPolicy",
          "documentation":"<p>Game session protection policy to apply to all new instances created in this fleet. Instances that already exist are not affected. You can set protection for individual instances using <a>UpdateGameSession</a>.</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>"
        },
        "ResourceCreationLimitPolicy":{
          "shape":"ResourceCreationLimitPolicy",
          "documentation":"<p>Policy that limits the number of game sessions an individual player can create over a span of time. </p>"
        },
        "MetricGroups":{
          "shape":"MetricGroupList",
          "documentation":"<p>Names of metric groups to include this fleet in. Amazon CloudWatch uses a fleet metric group is to aggregate metrics from multiple fleets. Use an existing metric group name to add this fleet to the group. Or use a new name to create a new metric group. A fleet can only be included in one metric group at a time.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "UpdateFleetAttributesOutput":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet that was updated.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "UpdateFleetCapacityInput":{
      "type":"structure",
      "required":["FleetId"],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to update capacity for.</p>"
        },
        "DesiredInstances":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of EC2 instances you want this fleet to host.</p>"
        },
        "MinSize":{
          "shape":"WholeNumber",
          "documentation":"<p>Minimum value allowed for the fleet's instance count. Default if not set is 0.</p>"
        },
        "MaxSize":{
          "shape":"WholeNumber",
          "documentation":"<p>Maximum value allowed for the fleet's instance count. Default if not set is 1.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "UpdateFleetCapacityOutput":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet that was updated.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "UpdateFleetPortSettingsInput":{
      "type":"structure",
      "required":["FleetId"],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to update port settings for.</p>"
        },
        "InboundPermissionAuthorizations":{
          "shape":"IpPermissionsList",
          "documentation":"<p>Collection of port settings to be added to the fleet record.</p>"
        },
        "InboundPermissionRevocations":{
          "shape":"IpPermissionsList",
          "documentation":"<p>Collection of port settings to be removed from the fleet record.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "UpdateFleetPortSettingsOutput":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet that was updated.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "UpdateGameSessionInput":{
      "type":"structure",
      "required":["GameSessionId"],
      "members":{
        "GameSessionId":{
          "shape":"ArnStringModel",
          "documentation":"<p>Unique identifier for the game session to update.</p>"
        },
        "MaximumPlayerSessionCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Maximum number of players that can be connected simultaneously to the game session.</p>"
        },
        "Name":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>"
        },
        "PlayerSessionCreationPolicy":{
          "shape":"PlayerSessionCreationPolicy",
          "documentation":"<p>Policy determining whether or not the game session accepts new players.</p>"
        },
        "ProtectionPolicy":{
          "shape":"ProtectionPolicy",
          "documentation":"<p>Game session protection policy to apply to this game session only.</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "UpdateGameSessionOutput":{
      "type":"structure",
      "members":{
        "GameSession":{
          "shape":"GameSession",
          "documentation":"<p>Object that contains the updated game session metadata.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "UpdateGameSessionQueueInput":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"GameSessionQueueName",
          "documentation":"<p>Descriptive label that is associated with game session queue. Queue names must be unique within each region.</p>"
        },
        "TimeoutInSeconds":{
          "shape":"WholeNumber",
          "documentation":"<p>Maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>"
        },
        "PlayerLatencyPolicies":{
          "shape":"PlayerLatencyPolicyList",
          "documentation":"<p>Collection of latency policies to apply when processing game sessions placement requests with player latency information. Multiple policies are evaluated in order of the maximum latency value, starting with the lowest latency values. With just one policy, it is enforced at the start of the game session placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period. For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the remainder of the placement. When updating policies, provide a complete collection of policies.</p>"
        },
        "Destinations":{
          "shape":"GameSessionQueueDestinationList",
          "documentation":"<p>List of fleets that can be used to fulfill game session placement requests in the queue. Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order. When updating this list, provide a complete list of destinations.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "UpdateGameSessionQueueOutput":{
      "type":"structure",
      "members":{
        "GameSessionQueue":{
          "shape":"GameSessionQueue",
          "documentation":"<p>Object that describes the newly updated game session queue.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "UpdateMatchmakingConfigurationInput":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking configuration to update.</p>"
        },
        "Description":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Descriptive label that is associated with matchmaking configuration.</p>"
        },
        "GameSessionQueueArns":{
          "shape":"QueueArnsList",
          "documentation":"<p>Amazon Resource Name (<a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html\">ARN</a>) that is assigned to a game session queue and uniquely identifies it. Format is <code>arn:aws:gamelift:&lt;region&gt;::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. These queues are used when placing game sessions for matches that are created with this matchmaking configuration. Queues can be located in any region.</p>"
        },
        "RequestTimeoutSeconds":{
          "shape":"MatchmakingRequestTimeoutInteger",
          "documentation":"<p>Maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that time out can be resubmitted as needed.</p>"
        },
        "AcceptanceTimeoutSeconds":{
          "shape":"MatchmakingAcceptanceTimeoutInteger",
          "documentation":"<p>Length of time (in seconds) to wait for players to accept a proposed match. If any player rejects the match or fails to accept before the timeout, the ticket continues to look for an acceptable match.</p>"
        },
        "AcceptanceRequired":{
          "shape":"BooleanModel",
          "documentation":"<p>Flag that determines whether or not a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE.</p>"
        },
        "RuleSetName":{
          "shape":"MatchmakingIdStringModel",
          "documentation":"<p>Unique identifier for a matchmaking rule set to use with this configuration. A matchmaking configuration can only use rule sets that are defined in the same region.</p>"
        },
        "NotificationTarget":{
          "shape":"SnsArnStringModel",
          "documentation":"<p>SNS topic ARN that is set up to receive matchmaking notifications. See <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/match-notification.html\"> Setting up Notifications for Matchmaking</a> for more information.</p>"
        },
        "AdditionalPlayerCount":{
          "shape":"WholeNumber",
          "documentation":"<p>Number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match.</p>"
        },
        "CustomEventData":{
          "shape":"CustomEventData",
          "documentation":"<p>Information to attached to all events related to the matchmaking configuration. </p>"
        },
        "GameProperties":{
          "shape":"GamePropertyList",
          "documentation":"<p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object that is created for a successful match. </p>"
        },
        "GameSessionData":{
          "shape":"GameSessionData",
          "documentation":"<p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession\">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object that is created for a successful match. </p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "UpdateMatchmakingConfigurationOutput":{
      "type":"structure",
      "members":{
        "Configuration":{
          "shape":"MatchmakingConfiguration",
          "documentation":"<p>Object that describes the updated matchmaking configuration.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "UpdateRuntimeConfigurationInput":{
      "type":"structure",
      "required":[
        "FleetId",
        "RuntimeConfiguration"
      ],
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet to update run-time configuration for.</p>"
        },
        "RuntimeConfiguration":{
          "shape":"RuntimeConfiguration",
          "documentation":"<p>Instructions for launching server processes on each instance in the fleet. The run-time configuration for a fleet has a collection of server process configurations, one for each type of server process to run on an instance. A server process configuration specifies the location of the server executable, launch parameters, and the number of concurrent processes with that configuration to maintain on each instance.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "UpdateRuntimeConfigurationOutput":{
      "type":"structure",
      "members":{
        "RuntimeConfiguration":{
          "shape":"RuntimeConfiguration",
          "documentation":"<p>The run-time configuration currently in force. If the update was successful, this object matches the one in the request.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "ValidateMatchmakingRuleSetInput":{
      "type":"structure",
      "required":["RuleSetBody"],
      "members":{
        "RuleSetBody":{
          "shape":"RuleSetBody",
          "documentation":"<p>Collection of matchmaking rules to validate, formatted as a JSON string.</p>"
        }
      },
      "documentation":"<p>Represents the input for a request action.</p>"
    },
    "ValidateMatchmakingRuleSetOutput":{
      "type":"structure",
      "members":{
        "Valid":{
          "shape":"BooleanModel",
          "documentation":"<p>Response indicating whether or not the rule set is valid.</p>"
        }
      },
      "documentation":"<p>Represents the returned data in response to a request action.</p>"
    },
    "VpcPeeringAuthorization":{
      "type":"structure",
      "members":{
        "GameLiftAwsAccountId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for the AWS account that you use to manage your Amazon GameLift fleet. You can find your Account ID in the AWS Management Console under account settings.</p>"
        },
        "PeerVpcAwsAccountId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p/>"
        },
        "PeerVpcId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same region where your fleet is deployed. To get VPC information, including IDs, use the Virtual Private Cloud service tools, including the VPC Dashboard in the AWS Management Console.</p>"
        },
        "CreationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this authorization was issued. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        },
        "ExpirationTime":{
          "shape":"Timestamp",
          "documentation":"<p>Time stamp indicating when this authorization expires (24 hours after issuance). Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\").</p>"
        }
      },
      "documentation":"<p>Represents an authorization for a VPC peering connection between the VPC for an Amazon GameLift fleet and another VPC on an account you have access to. This authorization must exist and be valid for the peering connection to be established. Authorizations are valid for 24 hours after they are issued.</p> <p>VPC peering connection operations include:</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>"
    },
    "VpcPeeringAuthorizationList":{
      "type":"list",
      "member":{"shape":"VpcPeeringAuthorization"}
    },
    "VpcPeeringConnection":{
      "type":"structure",
      "members":{
        "FleetId":{
          "shape":"FleetId",
          "documentation":"<p>Unique identifier for a fleet. This ID determines the ID of the Amazon GameLift VPC for your fleet.</p>"
        },
        "IpV4CidrBlock":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>CIDR block of IPv4 addresses assigned to the VPC peering connection for the GameLift VPC. The peered VPC also has an IPv4 CIDR block associated with it; these blocks cannot overlap or the peering connection cannot be created. </p>"
        },
        "VpcPeeringConnectionId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier that is automatically assigned to the connection record. This ID is referenced in VPC peering connection events, and is used when deleting a connection with <a>DeleteVpcPeeringConnection</a>. </p>"
        },
        "Status":{
          "shape":"VpcPeeringConnectionStatus",
          "documentation":"<p>Object that contains status information about the connection. Status indicates if a connection is pending, successful, or failed.</p>"
        },
        "PeerVpcId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same region where your fleet is deployed. To get VPC information, including IDs, use the Virtual Private Cloud service tools, including the VPC Dashboard in the AWS Management Console.</p>"
        },
        "GameLiftVpcId":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Unique identifier for the VPC that contains the Amazon GameLift fleet for this connection. This VPC is managed by Amazon GameLift and does not appear in your AWS account. </p>"
        }
      },
      "documentation":"<p>Represents a peering connection between a VPC on one of your AWS accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <p>VPC peering connection operations include:</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>"
    },
    "VpcPeeringConnectionList":{
      "type":"list",
      "member":{"shape":"VpcPeeringConnection"}
    },
    "VpcPeeringConnectionStatus":{
      "type":"structure",
      "members":{
        "Code":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Code indicating the status of a VPC peering connection.</p>"
        },
        "Message":{
          "shape":"NonZeroAndMaxString",
          "documentation":"<p>Additional messaging associated with the connection status. </p>"
        }
      },
      "documentation":"<p>Represents status information for a VPC peering connection. Status is associated with a <a>VpcPeeringConnection</a> object. Status codes and messages are provided from EC2 (see <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html\">VpcPeeringConnectionStateReason</a>). Connection status information is also communicated as a fleet <a>Event</a>.</p>"
    },
    "WholeNumber":{
      "type":"integer",
      "min":0
    }
  },
  "documentation":"<fullname>Amazon GameLift Service</fullname> <p> Amazon GameLift is a managed service for developers who need a scalable, dedicated server solution for their multiplayer games. Use Amazon GameLift for these tasks: (1) set up computing resources and deploy your game servers, (2) run game sessions and get players into games, (3) automatically scale your resources to meet player demand and manage costs, and (4) track in-depth metrics on game server performance and player usage.</p> <p>The Amazon GameLift service API includes two important function sets:</p> <ul> <li> <p> <b>Manage game sessions and player access</b> -- Retrieve information on available game sessions; create new game sessions; send player requests to join a game session.</p> </li> <li> <p> <b>Configure and manage game server resources</b> -- Manage builds, fleets, queues, and aliases; set auto-scaling policies; retrieve logs and metrics.</p> </li> </ul> <p>This reference guide describes the low-level service API for Amazon GameLift. You can use the API functionality with these tools: </p> <ul> <li> <p>The Amazon Web Services software development kit (<a href=\"http://aws.amazon.com/tools/#sdk\">AWS SDK</a>) is available in <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-supported.html#gamelift-supported-clients\">multiple languages</a> including C++ and C#. Use the SDK to access the API programmatically from an application, such as a game client.</p> </li> <li> <p>The <a href=\"http://aws.amazon.com/cli/\">AWS command-line interface</a> (CLI) tool is primarily useful for handling administrative actions, such as setting up and managing Amazon GameLift settings and resources. You can use the AWS CLI to manage all of your AWS services.</p> </li> <li> <p>The <a href=\"https://console.aws.amazon.com/gamelift/home\">AWS Management Console</a> for Amazon GameLift provides a web interface to manage your Amazon GameLift settings and resources. The console includes a dashboard for tracking key resources, including builds and fleets, and displays usage and performance metrics for your games as customizable graphs.</p> </li> <li> <p>Amazon GameLift Local is a tool for testing your game's integration with Amazon GameLift before deploying it on the service. This tools supports a subset of key API actions, which can be called from either the AWS CLI or programmatically. See <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing-local.html\">Testing an Integration</a>.</p> </li> </ul> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/\"> Developer Guide</a> -- Read about Amazon GameLift features and how to use them. </p> </li> <li> <p> <a href=\"https://gamedev.amazon.com/forums/tutorials\">Tutorials</a> -- Get started fast with walkthroughs and sample projects.</p> </li> <li> <p> <a href=\"http://aws.amazon.com/blogs/gamedev/\">GameDev Blog</a> -- Stay up to date with new features and techniques.</p> </li> <li> <p> <a href=\"https://gamedev.amazon.com/forums/spaces/123/gamelift-discussion.html\">GameDev Forums</a> -- Connect with the GameDev community.</p> </li> <li> <p> <a href=\"http://aws.amazon.com/releasenotes/Amazon-GameLift/\">Release notes</a> and <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/doc-history.html\">document history</a> -- Stay current with updates to the Amazon GameLift service, SDKs, and documentation. </p> </li> </ul> <p> <b>API SUMMARY</b> </p> <p>This list offers a functional overview of the Amazon GameLift service API.</p> <p> <b>Managing Games and Players</b> </p> <p>Use these actions to start new game sessions, find existing game sessions, track game session status and other information, and enable player access to game sessions.</p> <ul> <li> <p> <b>Discover existing game sessions</b> </p> <ul> <li> <p> <a>SearchGameSessions</a> -- Retrieve all available game sessions or search for game sessions that match a set of criteria. </p> </li> </ul> </li> <li> <p> <b>Start new game sessions</b> </p> <ul> <li> <p>Start new games with Queues to find the best available hosting resources across multiple regions, minimize player latency, and balance game session activity for efficiency and cost effectiveness. </p> <ul> <li> <p> <a>StartGameSessionPlacement</a> -- Request a new game session placement and add one or more players to it.</p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> -- Get details on a placement request, including status.</p> </li> <li> <p> <a>StopGameSessionPlacement</a> -- Cancel a placement request. </p> </li> </ul> </li> <li> <p> <a>CreateGameSession</a> -- Start a new game session on a specific fleet. <i>Available in Amazon GameLift Local.</i> </p> </li> </ul> </li> <li> <p> <b>Match players to game sessions with FlexMatch matchmaking</b> </p> <ul> <li> <p> <a>StartMatchmaking</a> -- Request matchmaking for one players or a group who want to play together. </p> </li> <li> <p> <a>StartMatchBackfill</a> - Request additional player matches to fill empty slots in an existing game session. </p> </li> <li> <p> <a>DescribeMatchmaking</a> -- Get details on a matchmaking request, including status.</p> </li> <li> <p> <a>AcceptMatch</a> -- Register that a player accepts a proposed match, for matches that require player acceptance. </p> </li> <li> <p> <a>StopMatchmaking</a> -- Cancel a matchmaking request. </p> </li> </ul> </li> <li> <p> <b>Manage game session data</b> </p> <ul> <li> <p> <a>DescribeGameSessions</a> -- Retrieve metadata for one or more game sessions, including length of time active and current player count. <i>Available in Amazon GameLift Local.</i> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> -- Retrieve metadata and the game session protection setting for one or more game sessions.</p> </li> <li> <p> <a>UpdateGameSession</a> -- Change game session settings, such as maximum player count and join policy.</p> </li> <li> <p> <a>GetGameSessionLogUrl</a> -- Get the location of saved logs for a game session.</p> </li> </ul> </li> <li> <p> <b>Manage player sessions</b> </p> <ul> <li> <p> <a>CreatePlayerSession</a> -- Send a request for a player to join a game session. <i>Available in Amazon GameLift Local.</i> </p> </li> <li> <p> <a>CreatePlayerSessions</a> -- Send a request for multiple players to join a game session. <i>Available in Amazon GameLift Local.</i> </p> </li> <li> <p> <a>DescribePlayerSessions</a> -- Get details on player activity, including status, playing time, and player data. <i>Available in Amazon GameLift Local.</i> </p> </li> </ul> </li> </ul> <p> <b>Setting Up and Managing Game Servers</b> </p> <p>When setting up Amazon GameLift resources for your game, you first <a href=\"http://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html\">create a game build</a> and upload it to Amazon GameLift. You can then use these actions to configure and manage a fleet of resources to run your game servers, scale capacity to meet player demand, access performance and utilization metrics, and more.</p> <ul> <li> <p> <b>Manage game builds</b> </p> <ul> <li> <p> <a>CreateBuild</a> -- Create a new build using files stored in an Amazon S3 bucket. To create a build and upload files from a local path, use the AWS CLI command <code>upload-build</code>.</p> </li> <li> <p> <a>ListBuilds</a> -- Get a list of all builds uploaded to a Amazon GameLift region.</p> </li> <li> <p> <a>DescribeBuild</a> -- Retrieve information associated with a build.</p> </li> <li> <p> <a>UpdateBuild</a> -- Change build metadata, including build name and version.</p> </li> <li> <p> <a>DeleteBuild</a> -- Remove a build from Amazon GameLift.</p> </li> </ul> </li> <li> <p> <b>Manage fleets</b> </p> <ul> <li> <p> <a>CreateFleet</a> -- Configure and activate a new fleet to run a build's game servers.</p> </li> <li> <p> <a>ListFleets</a> -- Get a list of all fleet IDs in a Amazon GameLift region (all statuses).</p> </li> <li> <p> <a>DeleteFleet</a> -- Terminate a fleet that is no longer running game servers or hosting players.</p> </li> <li> <p>View / update fleet configurations.</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> / <a>UpdateFleetAttributes</a> -- View or change a fleet's metadata and settings for game session protection and resource creation limits.</p> </li> <li> <p> <a>DescribeFleetPortSettings</a> / <a>UpdateFleetPortSettings</a> -- View or change the inbound permissions (IP address and port setting ranges) allowed for a fleet.</p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> / <a>UpdateRuntimeConfiguration</a> -- View or change what server processes (and how many) to run on each instance in a fleet.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>Control fleet capacity</b> </p> <ul> <li> <p> <a>DescribeEC2InstanceLimits</a> -- Retrieve maximum number of instances allowed for the current AWS account and the current usage level.</p> </li> <li> <p> <a>DescribeFleetCapacity</a> / <a>UpdateFleetCapacity</a> -- Retrieve the capacity settings and the current number of instances in a fleet; adjust fleet capacity settings to scale up or down.</p> </li> <li> <p>Autoscale -- Manage auto-scaling rules and apply them to a fleet.</p> <ul> <li> <p> <a>PutScalingPolicy</a> -- Create a new auto-scaling policy, or update an existing one.</p> </li> <li> <p> <a>DescribeScalingPolicies</a> -- Retrieve an existing auto-scaling policy.</p> </li> <li> <p> <a>DeleteScalingPolicy</a> -- Delete an auto-scaling policy and stop it from affecting a fleet's capacity.</p> </li> <li> <p> <a>StartFleetActions</a> -- Restart a fleet's auto-scaling policies.</p> </li> <li> <p> <a>StopFleetActions</a> -- Suspend a fleet's auto-scaling policies.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>Manage VPC peering connections for fleets</b> </p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> -- Authorize a peering connection to one of your VPCs.</p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> -- Retrieve valid peering connection authorizations. </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> -- Delete a peering connection authorization.</p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> -- Establish a peering connection between the VPC for a Amazon GameLift fleet and one of your VPCs.</p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> -- Retrieve information on active or pending VPC peering connections with a Amazon GameLift fleet.</p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> -- Delete a VPC peering connection with a Amazon GameLift fleet.</p> </li> </ul> </li> <li> <p> <b>Access fleet activity statistics</b> </p> <ul> <li> <p> <a>DescribeFleetUtilization</a> -- Get current data on the number of server processes, game sessions, and players currently active on a fleet.</p> </li> <li> <p> <a>DescribeFleetEvents</a> -- Get a fleet's logged events for a specified time span.</p> </li> <li> <p> <a>DescribeGameSessions</a> -- Retrieve metadata associated with one or more game sessions, including length of time active and current player count.</p> </li> </ul> </li> <li> <p> <b>Remotely access an instance</b> </p> <ul> <li> <p> <a>DescribeInstances</a> -- Get information on each instance in a fleet, including instance ID, IP address, and status.</p> </li> <li> <p> <a>GetInstanceAccess</a> -- Request access credentials needed to remotely connect to a specified instance in a fleet.</p> </li> </ul> </li> <li> <p> <b>Manage fleet aliases</b> </p> <ul> <li> <p> <a>CreateAlias</a> -- Define a new alias and optionally assign it to a fleet.</p> </li> <li> <p> <a>ListAliases</a> -- Get all fleet aliases defined in a Amazon GameLift region.</p> </li> <li> <p> <a>DescribeAlias</a> -- Retrieve information on an existing alias.</p> </li> <li> <p> <a>UpdateAlias</a> -- Change settings for a alias, such as redirecting it from one fleet to another.</p> </li> <li> <p> <a>DeleteAlias</a> -- Remove an alias from the region.</p> </li> <li> <p> <a>ResolveAlias</a> -- Get the fleet ID that a specified alias points to.</p> </li> </ul> </li> <li> <p> <b>Manage game session queues</b> </p> <ul> <li> <p> <a>CreateGameSessionQueue</a> -- Create a queue for processing requests for new game sessions. </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> -- Retrieve game session queues defined in a Amazon GameLift region.</p> </li> <li> <p> <a>UpdateGameSessionQueue</a> -- Change the configuration of a game session queue.</p> </li> <li> <p> <a>DeleteGameSessionQueue</a> -- Remove a game session queue from the region.</p> </li> </ul> </li> <li> <p> <b>Manage FlexMatch resources</b> </p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> -- Create a matchmaking configuration with instructions for building a player group and placing in a new game session. </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> -- Retrieve matchmaking configurations defined a Amazon GameLift region.</p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> -- Change settings for matchmaking configuration. queue.</p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> -- Remove a matchmaking configuration from the region.</p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> -- Create a set of rules to use when searching for player matches. </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> -- Retrieve matchmaking rule sets defined in a Amazon GameLift region.</p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> -- Verify syntax for a set of matchmaking rules. </p> </li> </ul> </li> </ul>"
}
