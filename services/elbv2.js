awsim['elbv2'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2015-12-01",
    "endpointPrefix":"elasticloadbalancing",
    "protocol":"query",
    "serviceAbbreviation":"Elastic Load Balancing v2",
    "serviceFullName":"Elastic Load Balancing",
    "serviceId":"Elastic Load Balancing v2",
    "signatureVersion":"v4",
    "uid":"elasticloadbalancingv2-2015-12-01",
    "xmlNamespace":"http://elasticloadbalancing.amazonaws.com/doc/2015-12-01/"
  },
  "operations":{
    "AddListenerCertificates":{
      "name":"AddListenerCertificates",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddListenerCertificatesInput"},
      "output":{
        "shape":"AddListenerCertificatesOutput",
        "resultWrapper":"AddListenerCertificatesResult"
      },
      "errors":[
        {"shape":"ListenerNotFoundException"},
        {"shape":"TooManyCertificatesException"},
        {"shape":"CertificateNotFoundException"}
      ],
      "documentation":"<p>Adds the specified certificate to the specified secure listener.</p> <p>If the certificate was already added, the call is successful but the certificate is not added again.</p> <p>To list the certificates for your listener, use <a>DescribeListenerCertificates</a>. To remove certificates from your listener, use <a>RemoveListenerCertificates</a>.</p>"
    },
    "AddTags":{
      "name":"AddTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddTagsInput"},
      "output":{
        "shape":"AddTagsOutput",
        "resultWrapper":"AddTagsResult"
      },
      "errors":[
        {"shape":"DuplicateTagKeysException"},
        {"shape":"TooManyTagsException"},
        {"shape":"LoadBalancerNotFoundException"},
        {"shape":"TargetGroupNotFoundException"}
      ],
      "documentation":"<p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, and your target groups.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p> <p>To list the current tags for your resources, use <a>DescribeTags</a>. To remove tags from your resources, use <a>RemoveTags</a>.</p>"
    },
    "CreateListener":{
      "name":"CreateListener",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateListenerInput"},
      "output":{
        "shape":"CreateListenerOutput",
        "resultWrapper":"CreateListenerResult"
      },
      "errors":[
        {"shape":"DuplicateListenerException"},
        {"shape":"TooManyListenersException"},
        {"shape":"TooManyCertificatesException"},
        {"shape":"LoadBalancerNotFoundException"},
        {"shape":"TargetGroupNotFoundException"},
        {"shape":"TargetGroupAssociationLimitException"},
        {"shape":"InvalidConfigurationRequestException"},
        {"shape":"IncompatibleProtocolsException"},
        {"shape":"SSLPolicyNotFoundException"},
        {"shape":"CertificateNotFoundException"},
        {"shape":"UnsupportedProtocolException"},
        {"shape":"TooManyRegistrationsForTargetIdException"},
        {"shape":"TooManyTargetsException"},
        {"shape":"TooManyActionsException"},
        {"shape":"InvalidLoadBalancerActionException"}
      ],
      "documentation":"<p>Creates a listener for the specified Application Load Balancer or Network Load Balancer.</p> <p>To update a listener, use <a>ModifyListener</a>. When you are finished with a listener, you can delete it using <a>DeleteListener</a>. If you are finished with both the listener and the load balancer, you can delete them both using <a>DeleteLoadBalancer</a>.</p> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html\">Listeners for Your Application Load Balancers</a> in the <i>Application Load Balancers Guide</i> and <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html\">Listeners for Your Network Load Balancers</a> in the <i>Network Load Balancers Guide</i>.</p>"
    },
    "CreateLoadBalancer":{
      "name":"CreateLoadBalancer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateLoadBalancerInput"},
      "output":{
        "shape":"CreateLoadBalancerOutput",
        "resultWrapper":"CreateLoadBalancerResult"
      },
      "errors":[
        {"shape":"DuplicateLoadBalancerNameException"},
        {"shape":"TooManyLoadBalancersException"},
        {"shape":"InvalidConfigurationRequestException"},
        {"shape":"SubnetNotFoundException"},
        {"shape":"InvalidSubnetException"},
        {"shape":"InvalidSecurityGroupException"},
        {"shape":"InvalidSchemeException"},
        {"shape":"TooManyTagsException"},
        {"shape":"DuplicateTagKeysException"},
        {"shape":"ResourceInUseException"},
        {"shape":"AllocationIdNotFoundException"},
        {"shape":"AvailabilityZoneNotSupportedException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Creates an Application Load Balancer or a Network Load Balancer.</p> <p>When you create a load balancer, you can specify security groups, public subnets, IP address type, and tags. Otherwise, you could do so later using <a>SetSecurityGroups</a>, <a>SetSubnets</a>, <a>SetIpAddressType</a>, and <a>AddTags</a>.</p> <p>To create listeners for your load balancer, use <a>CreateListener</a>. To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>For limit information, see <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html\">Limits for Your Application Load Balancer</a> in the <i>Application Load Balancers Guide</i> and <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html\">Limits for Your Network Load Balancer</a> in the <i>Network Load Balancers Guide</i>.</p> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html\">Application Load Balancers</a> in the <i>Application Load Balancers Guide</i> and <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html\">Network Load Balancers</a> in the <i>Network Load Balancers Guide</i>.</p>"
    },
    "CreateRule":{
      "name":"CreateRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateRuleInput"},
      "output":{
        "shape":"CreateRuleOutput",
        "resultWrapper":"CreateRuleResult"
      },
      "errors":[
        {"shape":"PriorityInUseException"},
        {"shape":"TooManyTargetGroupsException"},
        {"shape":"TooManyRulesException"},
        {"shape":"TargetGroupAssociationLimitException"},
        {"shape":"IncompatibleProtocolsException"},
        {"shape":"ListenerNotFoundException"},
        {"shape":"TargetGroupNotFoundException"},
        {"shape":"InvalidConfigurationRequestException"},
        {"shape":"TooManyRegistrationsForTargetIdException"},
        {"shape":"TooManyTargetsException"},
        {"shape":"UnsupportedProtocolException"},
        {"shape":"TooManyActionsException"},
        {"shape":"InvalidLoadBalancerActionException"}
      ],
      "documentation":"<p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules\">Listener Rules</a> in the <i>Application Load Balancers Guide</i>.</p> <p>To view your current rules, use <a>DescribeRules</a>. To update a rule, use <a>ModifyRule</a>. To set the priorities of your rules, use <a>SetRulePriorities</a>. To delete a rule, use <a>DeleteRule</a>.</p>"
    },
    "CreateTargetGroup":{
      "name":"CreateTargetGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateTargetGroupInput"},
      "output":{
        "shape":"CreateTargetGroupOutput",
        "resultWrapper":"CreateTargetGroupResult"
      },
      "errors":[
        {"shape":"DuplicateTargetGroupNameException"},
        {"shape":"TooManyTargetGroupsException"},
        {"shape":"InvalidConfigurationRequestException"}
      ],
      "documentation":"<p>Creates a target group.</p> <p>To register targets with the target group, use <a>RegisterTargets</a>. To update the health check settings for the target group, use <a>ModifyTargetGroup</a>. To monitor the health of targets in the target group, use <a>DescribeTargetHealth</a>.</p> <p>To route traffic to the targets in a target group, specify the target group in an action using <a>CreateListener</a> or <a>CreateRule</a>.</p> <p>To delete a target group, use <a>DeleteTargetGroup</a>.</p> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html\">Target Groups for Your Application Load Balancers</a> in the <i>Application Load Balancers Guide</i> or <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html\">Target Groups for Your Network Load Balancers</a> in the <i>Network Load Balancers Guide</i>.</p>"
    },
    "DeleteListener":{
      "name":"DeleteListener",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteListenerInput"},
      "output":{
        "shape":"DeleteListenerOutput",
        "resultWrapper":"DeleteListenerResult"
      },
      "errors":[
        {"shape":"ListenerNotFoundException"}
      ],
      "documentation":"<p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached, using <a>DeleteLoadBalancer</a>.</p>"
    },
    "DeleteLoadBalancer":{
      "name":"DeleteLoadBalancer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteLoadBalancerInput"},
      "output":{
        "shape":"DeleteLoadBalancerOutput",
        "resultWrapper":"DeleteLoadBalancerResult"
      },
      "errors":[
        {"shape":"LoadBalancerNotFoundException"},
        {"shape":"OperationNotPermittedException"},
        {"shape":"ResourceInUseException"}
      ],
      "documentation":"<p>Deletes the specified Application Load Balancer or Network Load Balancer and its attached listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>"
    },
    "DeleteRule":{
      "name":"DeleteRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteRuleInput"},
      "output":{
        "shape":"DeleteRuleOutput",
        "resultWrapper":"DeleteRuleResult"
      },
      "errors":[
        {"shape":"RuleNotFoundException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Deletes the specified rule.</p>"
    },
    "DeleteTargetGroup":{
      "name":"DeleteTargetGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteTargetGroupInput"},
      "output":{
        "shape":"DeleteTargetGroupOutput",
        "resultWrapper":"DeleteTargetGroupResult"
      },
      "errors":[
        {"shape":"ResourceInUseException"}
      ],
      "documentation":"<p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks.</p>"
    },
    "DeregisterTargets":{
      "name":"DeregisterTargets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeregisterTargetsInput"},
      "output":{
        "shape":"DeregisterTargetsOutput",
        "resultWrapper":"DeregisterTargetsResult"
      },
      "errors":[
        {"shape":"TargetGroupNotFoundException"},
        {"shape":"InvalidTargetException"}
      ],
      "documentation":"<p>Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.</p>"
    },
    "DescribeAccountLimits":{
      "name":"DescribeAccountLimits",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeAccountLimitsInput"},
      "output":{
        "shape":"DescribeAccountLimitsOutput",
        "resultWrapper":"DescribeAccountLimitsResult"
      },
      "documentation":"<p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html\">Limits for Your Application Load Balancers</a> in the <i>Application Load Balancer Guide</i> or <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html\">Limits for Your Network Load Balancers</a> in the <i>Network Load Balancers Guide</i>.</p>"
    },
    "DescribeListenerCertificates":{
      "name":"DescribeListenerCertificates",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeListenerCertificatesInput"},
      "output":{
        "shape":"DescribeListenerCertificatesOutput",
        "resultWrapper":"DescribeListenerCertificatesResult"
      },
      "errors":[
        {"shape":"ListenerNotFoundException"}
      ],
      "documentation":"<p>Describes the certificates for the specified secure listener.</p>"
    },
    "DescribeListeners":{
      "name":"DescribeListeners",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeListenersInput"},
      "output":{
        "shape":"DescribeListenersOutput",
        "resultWrapper":"DescribeListenersResult"
      },
      "errors":[
        {"shape":"ListenerNotFoundException"},
        {"shape":"LoadBalancerNotFoundException"},
        {"shape":"UnsupportedProtocolException"}
      ],
      "documentation":"<p>Describes the specified listeners or the listeners for the specified Application Load Balancer or Network Load Balancer. You must specify either a load balancer or one or more listeners.</p>"
    },
    "DescribeLoadBalancerAttributes":{
      "name":"DescribeLoadBalancerAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeLoadBalancerAttributesInput"},
      "output":{
        "shape":"DescribeLoadBalancerAttributesOutput",
        "resultWrapper":"DescribeLoadBalancerAttributesResult"
      },
      "errors":[
        {"shape":"LoadBalancerNotFoundException"}
      ],
      "documentation":"<p>Describes the attributes for the specified Application Load Balancer or Network Load Balancer.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes\">Load Balancer Attributes</a> in the <i>Application Load Balancers Guide</i> or <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes\">Load Balancer Attributes</a> in the <i>Network Load Balancers Guide</i>.</p>"
    },
    "DescribeLoadBalancers":{
      "name":"DescribeLoadBalancers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeLoadBalancersInput"},
      "output":{
        "shape":"DescribeLoadBalancersOutput",
        "resultWrapper":"DescribeLoadBalancersResult"
      },
      "errors":[
        {"shape":"LoadBalancerNotFoundException"}
      ],
      "documentation":"<p>Describes the specified load balancers or all of your load balancers.</p> <p>To describe the listeners for a load balancer, use <a>DescribeListeners</a>. To describe the attributes for a load balancer, use <a>DescribeLoadBalancerAttributes</a>.</p>"
    },
    "DescribeRules":{
      "name":"DescribeRules",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeRulesInput"},
      "output":{
        "shape":"DescribeRulesOutput",
        "resultWrapper":"DescribeRulesResult"
      },
      "errors":[
        {"shape":"ListenerNotFoundException"},
        {"shape":"RuleNotFoundException"},
        {"shape":"UnsupportedProtocolException"}
      ],
      "documentation":"<p>Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.</p>"
    },
    "DescribeSSLPolicies":{
      "name":"DescribeSSLPolicies",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeSSLPoliciesInput"},
      "output":{
        "shape":"DescribeSSLPoliciesOutput",
        "resultWrapper":"DescribeSSLPoliciesResult"
      },
      "errors":[
        {"shape":"SSLPolicyNotFoundException"}
      ],
      "documentation":"<p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies\">Security Policies</a> in the <i>Application Load Balancers Guide</i>.</p>"
    },
    "DescribeTags":{
      "name":"DescribeTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTagsInput"},
      "output":{
        "shape":"DescribeTagsOutput",
        "resultWrapper":"DescribeTagsResult"
      },
      "errors":[
        {"shape":"LoadBalancerNotFoundException"},
        {"shape":"TargetGroupNotFoundException"},
        {"shape":"ListenerNotFoundException"},
        {"shape":"RuleNotFoundException"}
      ],
      "documentation":"<p>Describes the tags for the specified resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, and target groups.</p>"
    },
    "DescribeTargetGroupAttributes":{
      "name":"DescribeTargetGroupAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTargetGroupAttributesInput"},
      "output":{
        "shape":"DescribeTargetGroupAttributesOutput",
        "resultWrapper":"DescribeTargetGroupAttributesResult"
      },
      "errors":[
        {"shape":"TargetGroupNotFoundException"}
      ],
      "documentation":"<p>Describes the attributes for the specified target group.</p> <p>For more information, see <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes\">Target Group Attributes</a> in the <i>Application Load Balancers Guide</i> or <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes\">Target Group Attributes</a> in the <i>Network Load Balancers Guide</i>.</p>"
    },
    "DescribeTargetGroups":{
      "name":"DescribeTargetGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTargetGroupsInput"},
      "output":{
        "shape":"DescribeTargetGroupsOutput",
        "resultWrapper":"DescribeTargetGroupsResult"
      },
      "errors":[
        {"shape":"LoadBalancerNotFoundException"},
        {"shape":"TargetGroupNotFoundException"}
      ],
      "documentation":"<p>Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.</p> <p>To describe the targets for a target group, use <a>DescribeTargetHealth</a>. To describe the attributes of a target group, use <a>DescribeTargetGroupAttributes</a>.</p>"
    },
    "DescribeTargetHealth":{
      "name":"DescribeTargetHealth",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTargetHealthInput"},
      "output":{
        "shape":"DescribeTargetHealthOutput",
        "resultWrapper":"DescribeTargetHealthResult"
      },
      "errors":[
        {"shape":"InvalidTargetException"},
        {"shape":"TargetGroupNotFoundException"},
        {"shape":"HealthUnavailableException"}
      ],
      "documentation":"<p>Describes the health of the specified targets or all of your targets.</p>"
    },
    "ModifyListener":{
      "name":"ModifyListener",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyListenerInput"},
      "output":{
        "shape":"ModifyListenerOutput",
        "resultWrapper":"ModifyListenerResult"
      },
      "errors":[
        {"shape":"DuplicateListenerException"},
        {"shape":"TooManyListenersException"},
        {"shape":"TooManyCertificatesException"},
        {"shape":"ListenerNotFoundException"},
        {"shape":"TargetGroupNotFoundException"},
        {"shape":"TargetGroupAssociationLimitException"},
        {"shape":"IncompatibleProtocolsException"},
        {"shape":"SSLPolicyNotFoundException"},
        {"shape":"CertificateNotFoundException"},
        {"shape":"InvalidConfigurationRequestException"},
        {"shape":"UnsupportedProtocolException"},
        {"shape":"TooManyRegistrationsForTargetIdException"},
        {"shape":"TooManyTargetsException"},
        {"shape":"TooManyActionsException"},
        {"shape":"InvalidLoadBalancerActionException"}
      ],
      "documentation":"<p>Modifies the specified properties of the specified listener.</p> <p>Any properties that you do not specify retain their current values. However, changing the protocol from HTTPS to HTTP removes the security policy and SSL certificate properties. If you change the protocol from HTTP to HTTPS, you must add the security policy and server certificate.</p>"
    },
    "ModifyLoadBalancerAttributes":{
      "name":"ModifyLoadBalancerAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyLoadBalancerAttributesInput"},
      "output":{
        "shape":"ModifyLoadBalancerAttributesOutput",
        "resultWrapper":"ModifyLoadBalancerAttributesResult"
      },
      "errors":[
        {"shape":"LoadBalancerNotFoundException"},
        {"shape":"InvalidConfigurationRequestException"}
      ],
      "documentation":"<p>Modifies the specified attributes of the specified Application Load Balancer or Network Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>"
    },
    "ModifyRule":{
      "name":"ModifyRule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyRuleInput"},
      "output":{
        "shape":"ModifyRuleOutput",
        "resultWrapper":"ModifyRuleResult"
      },
      "errors":[
        {"shape":"TargetGroupAssociationLimitException"},
        {"shape":"IncompatibleProtocolsException"},
        {"shape":"RuleNotFoundException"},
        {"shape":"OperationNotPermittedException"},
        {"shape":"TooManyRegistrationsForTargetIdException"},
        {"shape":"TooManyTargetsException"},
        {"shape":"TargetGroupNotFoundException"},
        {"shape":"UnsupportedProtocolException"},
        {"shape":"TooManyActionsException"},
        {"shape":"InvalidLoadBalancerActionException"}
      ],
      "documentation":"<p>Modifies the specified rule.</p> <p>Any existing properties that you do not modify retain their current values.</p> <p>To modify the actions for the default rule, use <a>ModifyListener</a>.</p>"
    },
    "ModifyTargetGroup":{
      "name":"ModifyTargetGroup",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyTargetGroupInput"},
      "output":{
        "shape":"ModifyTargetGroupOutput",
        "resultWrapper":"ModifyTargetGroupResult"
      },
      "errors":[
        {"shape":"TargetGroupNotFoundException"},
        {"shape":"InvalidConfigurationRequestException"}
      ],
      "documentation":"<p>Modifies the health checks used when evaluating the health state of the targets in the specified target group.</p> <p>To monitor the health of the targets, use <a>DescribeTargetHealth</a>.</p>"
    },
    "ModifyTargetGroupAttributes":{
      "name":"ModifyTargetGroupAttributes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ModifyTargetGroupAttributesInput"},
      "output":{
        "shape":"ModifyTargetGroupAttributesOutput",
        "resultWrapper":"ModifyTargetGroupAttributesResult"
      },
      "errors":[
        {"shape":"TargetGroupNotFoundException"},
        {"shape":"InvalidConfigurationRequestException"}
      ],
      "documentation":"<p>Modifies the specified attributes of the specified target group.</p>"
    },
    "RegisterTargets":{
      "name":"RegisterTargets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RegisterTargetsInput"},
      "output":{
        "shape":"RegisterTargetsOutput",
        "resultWrapper":"RegisterTargetsResult"
      },
      "errors":[
        {"shape":"TargetGroupNotFoundException"},
        {"shape":"TooManyTargetsException"},
        {"shape":"InvalidTargetException"},
        {"shape":"TooManyRegistrationsForTargetIdException"}
      ],
      "documentation":"<p>Registers the specified targets with the specified target group.</p> <p>You can register targets by instance ID or by IP address. If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p> <p>To remove a target from a target group, use <a>DeregisterTargets</a>.</p>"
    },
    "RemoveListenerCertificates":{
      "name":"RemoveListenerCertificates",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemoveListenerCertificatesInput"},
      "output":{
        "shape":"RemoveListenerCertificatesOutput",
        "resultWrapper":"RemoveListenerCertificatesResult"
      },
      "errors":[
        {"shape":"ListenerNotFoundException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Removes the specified certificate from the specified secure listener.</p> <p>You can't remove the default certificate for a listener. To replace the default certificate, call <a>ModifyListener</a>.</p> <p>To list the certificates for your listener, use <a>DescribeListenerCertificates</a>.</p>"
    },
    "RemoveTags":{
      "name":"RemoveTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemoveTagsInput"},
      "output":{
        "shape":"RemoveTagsOutput",
        "resultWrapper":"RemoveTagsResult"
      },
      "errors":[
        {"shape":"LoadBalancerNotFoundException"},
        {"shape":"TargetGroupNotFoundException"},
        {"shape":"ListenerNotFoundException"},
        {"shape":"RuleNotFoundException"},
        {"shape":"TooManyTagsException"}
      ],
      "documentation":"<p>Removes the specified tags from the specified Elastic Load Balancing resource.</p> <p>To list the current tags for your resources, use <a>DescribeTags</a>.</p>"
    },
    "SetIpAddressType":{
      "name":"SetIpAddressType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SetIpAddressTypeInput"},
      "output":{
        "shape":"SetIpAddressTypeOutput",
        "resultWrapper":"SetIpAddressTypeResult"
      },
      "errors":[
        {"shape":"LoadBalancerNotFoundException"},
        {"shape":"InvalidConfigurationRequestException"},
        {"shape":"InvalidSubnetException"}
      ],
      "documentation":"<p>Sets the type of IP addresses used by the subnets of the specified Application Load Balancer or Network Load Balancer.</p> <p>Network Load Balancers must use <code>ipv4</code>.</p>"
    },
    "SetRulePriorities":{
      "name":"SetRulePriorities",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SetRulePrioritiesInput"},
      "output":{
        "shape":"SetRulePrioritiesOutput",
        "resultWrapper":"SetRulePrioritiesResult"
      },
      "errors":[
        {"shape":"RuleNotFoundException"},
        {"shape":"PriorityInUseException"},
        {"shape":"OperationNotPermittedException"}
      ],
      "documentation":"<p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>"
    },
    "SetSecurityGroups":{
      "name":"SetSecurityGroups",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SetSecurityGroupsInput"},
      "output":{
        "shape":"SetSecurityGroupsOutput",
        "resultWrapper":"SetSecurityGroupsResult"
      },
      "errors":[
        {"shape":"LoadBalancerNotFoundException"},
        {"shape":"InvalidConfigurationRequestException"},
        {"shape":"InvalidSecurityGroupException"}
      ],
      "documentation":"<p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer.</p>"
    },
    "SetSubnets":{
      "name":"SetSubnets",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SetSubnetsInput"},
      "output":{
        "shape":"SetSubnetsOutput",
        "resultWrapper":"SetSubnetsResult"
      },
      "errors":[
        {"shape":"LoadBalancerNotFoundException"},
        {"shape":"InvalidConfigurationRequestException"},
        {"shape":"SubnetNotFoundException"},
        {"shape":"InvalidSubnetException"},
        {"shape":"AllocationIdNotFoundException"},
        {"shape":"AvailabilityZoneNotSupportedException"}
      ],
      "documentation":"<p>Enables the Availability Zone for the specified public subnets for the specified Application Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>You can't change the subnets for a Network Load Balancer.</p>"
    }
  },
  "shapes":{
    "Action":{
      "type":"structure",
      "required":["Type"],
      "members":{
        "Type":{
          "shape":"ActionTypeEnum",
          "documentation":"<p>The type of action. Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>.</p>"
        },
        "TargetGroupArn":{
          "shape":"TargetGroupArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is <code>forward</code>.</p>"
        },
        "AuthenticateOidcConfig":{
          "shape":"AuthenticateOidcActionConfig",
          "documentation":"<p>[HTTPS listener] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.</p>"
        },
        "AuthenticateCognitoConfig":{
          "shape":"AuthenticateCognitoActionConfig",
          "documentation":"<p>[HTTPS listener] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.</p>"
        },
        "Order":{
          "shape":"ActionOrder",
          "documentation":"<p>The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first. The final action to be performed must be a <code>forward</code> or a <code>fixed-response</code> action.</p>"
        },
        "RedirectConfig":{
          "shape":"RedirectActionConfig",
          "documentation":"<p>[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.</p>"
        },
        "FixedResponseConfig":{
          "shape":"FixedResponseActionConfig",
          "documentation":"<p>[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.</p>"
        }
      },
      "documentation":"<p>Information about an action.</p>"
    },
    "ActionOrder":{
      "type":"integer",
      "max":50000,
      "min":1
    },
    "ActionTypeEnum":{
      "type":"string",
      "enum":[
        "forward",
        "authenticate-oidc",
        "authenticate-cognito",
        "redirect",
        "fixed-response"
      ]
    },
    "Actions":{
      "type":"list",
      "member":{"shape":"Action"}
    },
    "AddListenerCertificatesInput":{
      "type":"structure",
      "required":[
        "ListenerArn",
        "Certificates"
      ],
      "members":{
        "ListenerArn":{
          "shape":"ListenerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the listener.</p>"
        },
        "Certificates":{
          "shape":"CertificateList",
          "documentation":"<p>The certificate to add. You can specify one certificate per call.</p>"
        }
      }
    },
    "AddListenerCertificatesOutput":{
      "type":"structure",
      "members":{
        "Certificates":{
          "shape":"CertificateList",
          "documentation":"<p>Information about the certificates.</p>"
        }
      }
    },
    "AddTagsInput":{
      "type":"structure",
      "required":[
        "ResourceArns",
        "Tags"
      ],
      "members":{
        "ResourceArns":{
          "shape":"ResourceArns",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>The tags. Each resource can have a maximum of 10 tags.</p>"
        }
      }
    },
    "AddTagsOutput":{
      "type":"structure",
      "members":{
      }
    },
    "AllocationId":{"type":"string"},
    "AllocationIdNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified allocation ID does not exist.</p>",
      "error":{
        "code":"AllocationIdNotFound",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "AuthenticateCognitoActionAuthenticationRequestExtraParams":{
      "type":"map",
      "key":{"shape":"AuthenticateCognitoActionAuthenticationRequestParamName"},
      "value":{"shape":"AuthenticateCognitoActionAuthenticationRequestParamValue"}
    },
    "AuthenticateCognitoActionAuthenticationRequestParamName":{"type":"string"},
    "AuthenticateCognitoActionAuthenticationRequestParamValue":{"type":"string"},
    "AuthenticateCognitoActionConditionalBehaviorEnum":{
      "type":"string",
      "enum":[
        "deny",
        "allow",
        "authenticate"
      ]
    },
    "AuthenticateCognitoActionConfig":{
      "type":"structure",
      "required":[
        "UserPoolArn",
        "UserPoolClientId",
        "UserPoolDomain"
      ],
      "members":{
        "UserPoolArn":{
          "shape":"AuthenticateCognitoActionUserPoolArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the Amazon Cognito user pool.</p>"
        },
        "UserPoolClientId":{
          "shape":"AuthenticateCognitoActionUserPoolClientId",
          "documentation":"<p>The ID of the Amazon Cognito user pool client.</p>"
        },
        "UserPoolDomain":{
          "shape":"AuthenticateCognitoActionUserPoolDomain",
          "documentation":"<p>The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.</p>"
        },
        "SessionCookieName":{
          "shape":"AuthenticateCognitoActionSessionCookieName",
          "documentation":"<p>The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.</p>"
        },
        "Scope":{
          "shape":"AuthenticateCognitoActionScope",
          "documentation":"<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>"
        },
        "SessionTimeout":{
          "shape":"AuthenticateCognitoActionSessionTimeout",
          "documentation":"<p>The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).</p>"
        },
        "AuthenticationRequestExtraParams":{
          "shape":"AuthenticateCognitoActionAuthenticationRequestExtraParams",
          "documentation":"<p>The query parameters (up to 10) to include in the redirect request to the authorization endpoint.</p>"
        },
        "OnUnauthenticatedRequest":{
          "shape":"AuthenticateCognitoActionConditionalBehaviorEnum",
          "documentation":"<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Request parameters to use when integrating with Amazon Cognito to authenticate users.</p>"
    },
    "AuthenticateCognitoActionScope":{"type":"string"},
    "AuthenticateCognitoActionSessionCookieName":{"type":"string"},
    "AuthenticateCognitoActionSessionTimeout":{"type":"long"},
    "AuthenticateCognitoActionUserPoolArn":{"type":"string"},
    "AuthenticateCognitoActionUserPoolClientId":{"type":"string"},
    "AuthenticateCognitoActionUserPoolDomain":{"type":"string"},
    "AuthenticateOidcActionAuthenticationRequestExtraParams":{
      "type":"map",
      "key":{"shape":"AuthenticateOidcActionAuthenticationRequestParamName"},
      "value":{"shape":"AuthenticateOidcActionAuthenticationRequestParamValue"}
    },
    "AuthenticateOidcActionAuthenticationRequestParamName":{"type":"string"},
    "AuthenticateOidcActionAuthenticationRequestParamValue":{"type":"string"},
    "AuthenticateOidcActionAuthorizationEndpoint":{"type":"string"},
    "AuthenticateOidcActionClientId":{"type":"string"},
    "AuthenticateOidcActionClientSecret":{"type":"string"},
    "AuthenticateOidcActionConditionalBehaviorEnum":{
      "type":"string",
      "enum":[
        "deny",
        "allow",
        "authenticate"
      ]
    },
    "AuthenticateOidcActionConfig":{
      "type":"structure",
      "required":[
        "Issuer",
        "AuthorizationEndpoint",
        "TokenEndpoint",
        "UserInfoEndpoint",
        "ClientId",
        "ClientSecret"
      ],
      "members":{
        "Issuer":{
          "shape":"AuthenticateOidcActionIssuer",
          "documentation":"<p>The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>"
        },
        "AuthorizationEndpoint":{
          "shape":"AuthenticateOidcActionAuthorizationEndpoint",
          "documentation":"<p>The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>"
        },
        "TokenEndpoint":{
          "shape":"AuthenticateOidcActionTokenEndpoint",
          "documentation":"<p>The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>"
        },
        "UserInfoEndpoint":{
          "shape":"AuthenticateOidcActionUserInfoEndpoint",
          "documentation":"<p>The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>"
        },
        "ClientId":{
          "shape":"AuthenticateOidcActionClientId",
          "documentation":"<p>The OAuth 2.0 client identifier.</p>"
        },
        "ClientSecret":{
          "shape":"AuthenticateOidcActionClientSecret",
          "documentation":"<p>The OAuth 2.0 client secret.</p>"
        },
        "SessionCookieName":{
          "shape":"AuthenticateOidcActionSessionCookieName",
          "documentation":"<p>The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.</p>"
        },
        "Scope":{
          "shape":"AuthenticateOidcActionScope",
          "documentation":"<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>"
        },
        "SessionTimeout":{
          "shape":"AuthenticateOidcActionSessionTimeout",
          "documentation":"<p>The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).</p>"
        },
        "AuthenticationRequestExtraParams":{
          "shape":"AuthenticateOidcActionAuthenticationRequestExtraParams",
          "documentation":"<p>The query parameters (up to 10) to include in the redirect request to the authorization endpoint.</p>"
        },
        "OnUnauthenticatedRequest":{
          "shape":"AuthenticateOidcActionConditionalBehaviorEnum",
          "documentation":"<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.</p>"
    },
    "AuthenticateOidcActionIssuer":{"type":"string"},
    "AuthenticateOidcActionScope":{"type":"string"},
    "AuthenticateOidcActionSessionCookieName":{"type":"string"},
    "AuthenticateOidcActionSessionTimeout":{"type":"long"},
    "AuthenticateOidcActionTokenEndpoint":{"type":"string"},
    "AuthenticateOidcActionUserInfoEndpoint":{"type":"string"},
    "AvailabilityZone":{
      "type":"structure",
      "members":{
        "ZoneName":{
          "shape":"ZoneName",
          "documentation":"<p>The name of the Availability Zone.</p>"
        },
        "SubnetId":{
          "shape":"SubnetId",
          "documentation":"<p>The ID of the subnet.</p>"
        },
        "LoadBalancerAddresses":{
          "shape":"LoadBalancerAddresses",
          "documentation":"<p>[Network Load Balancers] The static IP address.</p>"
        }
      },
      "documentation":"<p>Information about an Availability Zone.</p>"
    },
    "AvailabilityZoneNotSupportedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified Availability Zone is not supported.</p>",
      "error":{
        "code":"AvailabilityZoneNotSupported",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "AvailabilityZones":{
      "type":"list",
      "member":{"shape":"AvailabilityZone"}
    },
    "CanonicalHostedZoneId":{"type":"string"},
    "Certificate":{
      "type":"structure",
      "members":{
        "CertificateArn":{
          "shape":"CertificateArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the certificate.</p>"
        },
        "IsDefault":{
          "shape":"Default",
          "documentation":"<p>Indicates whether the certificate is the default certificate.</p>"
        }
      },
      "documentation":"<p>Information about an SSL server certificate.</p>"
    },
    "CertificateArn":{"type":"string"},
    "CertificateList":{
      "type":"list",
      "member":{"shape":"Certificate"}
    },
    "CertificateNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified certificate does not exist.</p>",
      "error":{
        "code":"CertificateNotFound",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "Cipher":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"CipherName",
          "documentation":"<p>The name of the cipher.</p>"
        },
        "Priority":{
          "shape":"CipherPriority",
          "documentation":"<p>The priority of the cipher.</p>"
        }
      },
      "documentation":"<p>Information about a cipher used in a policy.</p>"
    },
    "CipherName":{"type":"string"},
    "CipherPriority":{"type":"integer"},
    "Ciphers":{
      "type":"list",
      "member":{"shape":"Cipher"}
    },
    "ConditionFieldName":{
      "type":"string",
      "max":64
    },
    "CreateListenerInput":{
      "type":"structure",
      "required":[
        "LoadBalancerArn",
        "Protocol",
        "Port",
        "DefaultActions"
      ],
      "members":{
        "LoadBalancerArn":{
          "shape":"LoadBalancerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the load balancer.</p>"
        },
        "Protocol":{
          "shape":"ProtocolEnum",
          "documentation":"<p>The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocol is TCP.</p>"
        },
        "Port":{
          "shape":"Port",
          "documentation":"<p>The port on which the load balancer is listening.</p>"
        },
        "SslPolicy":{
          "shape":"SslPolicyName",
          "documentation":"<p>[HTTPS listeners] The security policy that defines which ciphers and protocols are supported. The default is the current predefined security policy.</p>"
        },
        "Certificates":{
          "shape":"CertificateList",
          "documentation":"<p>[HTTPS listeners] The default SSL server certificate. You must provide exactly one default certificate. To create a certificate list, use <a>AddListenerCertificates</a>.</p>"
        },
        "DefaultActions":{
          "shape":"Actions",
          "documentation":"<p>The actions for the default rule. The rule must include one forward action or one or more fixed-response actions.</p> <p>If the action type is <code>forward</code>, you can specify a single target group. The protocol of the target group must be HTTP or HTTPS for an Application Load Balancer or TCP for a Network Load Balancer.</p> <p>[HTTPS listener] If the action type is <code>authenticate-oidc</code>, you can use an identity provider that is OpenID Connect (OIDC) compliant to authenticate users as they access your application.</p> <p>[HTTPS listener] If the action type is <code>authenticate-cognito</code>, you can use Amazon Cognito to authenticate users as they access your application.</p> <p>[Application Load Balancer] If the action type is <code>redirect</code>, you can redirect HTTP and HTTPS requests.</p> <p>[Application Load Balancer] If the action type is <code>fixed-response</code>, you can return a custom HTTP response.</p>"
        }
      }
    },
    "CreateListenerOutput":{
      "type":"structure",
      "members":{
        "Listeners":{
          "shape":"Listeners",
          "documentation":"<p>Information about the listener.</p>"
        }
      }
    },
    "CreateLoadBalancerInput":{
      "type":"structure",
      "required":["Name"],
      "members":{
        "Name":{
          "shape":"LoadBalancerName",
          "documentation":"<p>The name of the load balancer.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with \"internal-\".</p>"
        },
        "Subnets":{
          "shape":"Subnets",
          "documentation":"<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones.</p>"
        },
        "SubnetMappings":{
          "shape":"SubnetMappings",
          "documentation":"<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet.</p>"
        },
        "SecurityGroups":{
          "shape":"SecurityGroups",
          "documentation":"<p>[Application Load Balancers] The IDs of the security groups for the load balancer.</p>"
        },
        "Scheme":{
          "shape":"LoadBalancerSchemeEnum",
          "documentation":"<p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.</p> <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can only route requests from clients with access to the VPC for the load balancer.</p> <p>The default is an Internet-facing load balancer.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>One or more tags to assign to the load balancer.</p>"
        },
        "Type":{
          "shape":"LoadBalancerTypeEnum",
          "documentation":"<p>The type of load balancer. The default is <code>application</code>.</p>"
        },
        "IpAddressType":{
          "shape":"IpAddressType",
          "documentation":"<p>[Application Load Balancers] The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). Internal load balancers must use <code>ipv4</code>.</p>"
        }
      }
    },
    "CreateLoadBalancerOutput":{
      "type":"structure",
      "members":{
        "LoadBalancers":{
          "shape":"LoadBalancers",
          "documentation":"<p>Information about the load balancer.</p>"
        }
      }
    },
    "CreateRuleInput":{
      "type":"structure",
      "required":[
        "ListenerArn",
        "Conditions",
        "Priority",
        "Actions"
      ],
      "members":{
        "ListenerArn":{
          "shape":"ListenerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the listener.</p>"
        },
        "Conditions":{
          "shape":"RuleConditionList",
          "documentation":"<p>The conditions. Each condition specifies a field name and a single value.</p> <p>If the field name is <code>host-header</code>, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters. You can include up to three wildcard characters.</p> <ul> <li> <p>A-Z, a-z, 0-9</p> </li> <li> <p>- .</p> </li> <li> <p>* (matches 0 or more characters)</p> </li> <li> <p>? (matches exactly 1 character)</p> </li> </ul> <p>If the field name is <code>path-pattern</code>, you can specify a single path pattern. A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters. You can include up to three wildcard characters.</p> <ul> <li> <p>A-Z, a-z, 0-9</p> </li> <li> <p>_ - . $ / ~ \" ' @ : +</p> </li> <li> <p>&amp; (using &amp;amp;)</p> </li> <li> <p>* (matches 0 or more characters)</p> </li> <li> <p>? (matches exactly 1 character)</p> </li> </ul>"
        },
        "Priority":{
          "shape":"RulePriority",
          "documentation":"<p>The rule priority. A listener can't have multiple rules with the same priority.</p>"
        },
        "Actions":{
          "shape":"Actions",
          "documentation":"<p>The actions. Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>.</p> <p>If the action type is <code>forward</code>, you can specify a single target group.</p> <p>[HTTPS listener] If the action type is <code>authenticate-oidc</code>, you can use an identity provider that is OpenID Connect (OIDC) compliant to authenticate users as they access your application.</p> <p>[HTTPS listener] If the action type is <code>authenticate-cognito</code>, you can use Amazon Cognito to authenticate users as they access your application.</p> <p>[Application Load Balancer] If the action type is <code>redirect</code>, you can redirect HTTP and HTTPS requests.</p> <p>[Application Load Balancer] If the action type is <code>fixed-response</code>, you can return a custom HTTP response.</p>"
        }
      }
    },
    "CreateRuleOutput":{
      "type":"structure",
      "members":{
        "Rules":{
          "shape":"Rules",
          "documentation":"<p>Information about the rule.</p>"
        }
      }
    },
    "CreateTargetGroupInput":{
      "type":"structure",
      "required":[
        "Name",
        "Protocol",
        "Port",
        "VpcId"
      ],
      "members":{
        "Name":{
          "shape":"TargetGroupName",
          "documentation":"<p>The name of the target group.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.</p>"
        },
        "Protocol":{
          "shape":"ProtocolEnum",
          "documentation":"<p>The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocol is TCP.</p>"
        },
        "Port":{
          "shape":"Port",
          "documentation":"<p>The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target.</p>"
        },
        "VpcId":{
          "shape":"VpcId",
          "documentation":"<p>The identifier of the virtual private cloud (VPC).</p>"
        },
        "HealthCheckProtocol":{
          "shape":"ProtocolEnum",
          "documentation":"<p>The protocol the load balancer uses when performing health checks on targets. The TCP protocol is supported only if the protocol of the target group is TCP. For Application Load Balancers, the default is HTTP. For Network Load Balancers, the default is TCP.</p>"
        },
        "HealthCheckPort":{
          "shape":"HealthCheckPort",
          "documentation":"<p>The port the load balancer uses when performing health checks on targets. The default is <code>traffic-port</code>, which is the port on which each target receives traffic from the load balancer.</p>"
        },
        "HealthCheckPath":{
          "shape":"Path",
          "documentation":"<p>[HTTP/HTTPS health checks] The ping path that is the destination on the targets for health checks. The default is /.</p>"
        },
        "HealthCheckIntervalSeconds":{
          "shape":"HealthCheckIntervalSeconds",
          "documentation":"<p>The approximate amount of time, in seconds, between health checks of an individual target. For Application Load Balancers, the range is 5–300 seconds. For Network Load Balancers, the supported values are 10 or 30 seconds. The default is 30 seconds.</p>"
        },
        "HealthCheckTimeoutSeconds":{
          "shape":"HealthCheckTimeoutSeconds",
          "documentation":"<p>The amount of time, in seconds, during which no response from a target means a failed health check. For Application Load Balancers, the range is 2–60 seconds and the default is 5 seconds. For Network Load Balancers, this is 10 seconds for TCP and HTTPS health checks and 6 seconds for HTTP health checks.</p>"
        },
        "HealthyThresholdCount":{
          "shape":"HealthCheckThresholdCount",
          "documentation":"<p>The number of consecutive health checks successes required before considering an unhealthy target healthy. For Application Load Balancers, the default is 5. For Network Load Balancers, the default is 3.</p>"
        },
        "UnhealthyThresholdCount":{
          "shape":"HealthCheckThresholdCount",
          "documentation":"<p>The number of consecutive health check failures required before considering a target unhealthy. For Application Load Balancers, the default is 2. For Network Load Balancers, this value must be the same as the healthy threshold count.</p>"
        },
        "Matcher":{
          "shape":"Matcher",
          "documentation":"<p>[HTTP/HTTPS health checks] The HTTP codes to use when checking for a successful response from a target.</p>"
        },
        "TargetType":{
          "shape":"TargetTypeEnum",
          "documentation":"<p>The type of target that you must specify when registering targets with this target group. The possible values are <code>instance</code> (targets are specified by instance ID) or <code>ip</code> (targets are specified by IP address). The default is <code>instance</code>. You can't specify targets for a target group using both instance IDs and IP addresses.</p> <p>If the target type is <code>ip</code>, specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.</p>"
        }
      }
    },
    "CreateTargetGroupOutput":{
      "type":"structure",
      "members":{
        "TargetGroups":{
          "shape":"TargetGroups",
          "documentation":"<p>Information about the target group.</p>"
        }
      }
    },
    "CreatedTime":{"type":"timestamp"},
    "DNSName":{"type":"string"},
    "Default":{"type":"boolean"},
    "DeleteListenerInput":{
      "type":"structure",
      "required":["ListenerArn"],
      "members":{
        "ListenerArn":{
          "shape":"ListenerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the listener.</p>"
        }
      }
    },
    "DeleteListenerOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteLoadBalancerInput":{
      "type":"structure",
      "required":["LoadBalancerArn"],
      "members":{
        "LoadBalancerArn":{
          "shape":"LoadBalancerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the load balancer.</p>"
        }
      }
    },
    "DeleteLoadBalancerOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteRuleInput":{
      "type":"structure",
      "required":["RuleArn"],
      "members":{
        "RuleArn":{
          "shape":"RuleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the rule.</p>"
        }
      }
    },
    "DeleteRuleOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeleteTargetGroupInput":{
      "type":"structure",
      "required":["TargetGroupArn"],
      "members":{
        "TargetGroupArn":{
          "shape":"TargetGroupArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target group.</p>"
        }
      }
    },
    "DeleteTargetGroupOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DeregisterTargetsInput":{
      "type":"structure",
      "required":[
        "TargetGroupArn",
        "Targets"
      ],
      "members":{
        "TargetGroupArn":{
          "shape":"TargetGroupArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target group.</p>"
        },
        "Targets":{
          "shape":"TargetDescriptions",
          "documentation":"<p>The targets. If you specified a port override when you registered a target, you must specify both the target ID and the port when you deregister it.</p>"
        }
      }
    },
    "DeregisterTargetsOutput":{
      "type":"structure",
      "members":{
      }
    },
    "DescribeAccountLimitsInput":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results. (You received this marker from a previous call.)</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results to return with this call.</p>"
        }
      }
    },
    "DescribeAccountLimitsOutput":{
      "type":"structure",
      "members":{
        "Limits":{
          "shape":"Limits",
          "documentation":"<p>Information about the limits.</p>"
        },
        "NextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>"
        }
      }
    },
    "DescribeListenerCertificatesInput":{
      "type":"structure",
      "required":["ListenerArn"],
      "members":{
        "ListenerArn":{
          "shape":"ListenerArn",
          "documentation":"<p>The Amazon Resource Names (ARN) of the listener.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results. (You received this marker from a previous call.)</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results to return with this call.</p>"
        }
      }
    },
    "DescribeListenerCertificatesOutput":{
      "type":"structure",
      "members":{
        "Certificates":{
          "shape":"CertificateList",
          "documentation":"<p>Information about the certificates.</p>"
        },
        "NextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>"
        }
      }
    },
    "DescribeListenersInput":{
      "type":"structure",
      "members":{
        "LoadBalancerArn":{
          "shape":"LoadBalancerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the load balancer.</p>"
        },
        "ListenerArns":{
          "shape":"ListenerArns",
          "documentation":"<p>The Amazon Resource Names (ARN) of the listeners.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results. (You received this marker from a previous call.)</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results to return with this call.</p>"
        }
      }
    },
    "DescribeListenersOutput":{
      "type":"structure",
      "members":{
        "Listeners":{
          "shape":"Listeners",
          "documentation":"<p>Information about the listeners.</p>"
        },
        "NextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>"
        }
      }
    },
    "DescribeLoadBalancerAttributesInput":{
      "type":"structure",
      "required":["LoadBalancerArn"],
      "members":{
        "LoadBalancerArn":{
          "shape":"LoadBalancerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the load balancer.</p>"
        }
      }
    },
    "DescribeLoadBalancerAttributesOutput":{
      "type":"structure",
      "members":{
        "Attributes":{
          "shape":"LoadBalancerAttributes",
          "documentation":"<p>Information about the load balancer attributes.</p>"
        }
      }
    },
    "DescribeLoadBalancersInput":{
      "type":"structure",
      "members":{
        "LoadBalancerArns":{
          "shape":"LoadBalancerArns",
          "documentation":"<p>The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.</p>"
        },
        "Names":{
          "shape":"LoadBalancerNames",
          "documentation":"<p>The names of the load balancers.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results. (You received this marker from a previous call.)</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results to return with this call.</p>"
        }
      }
    },
    "DescribeLoadBalancersOutput":{
      "type":"structure",
      "members":{
        "LoadBalancers":{
          "shape":"LoadBalancers",
          "documentation":"<p>Information about the load balancers.</p>"
        },
        "NextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>"
        }
      }
    },
    "DescribeRulesInput":{
      "type":"structure",
      "members":{
        "ListenerArn":{
          "shape":"ListenerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the listener.</p>"
        },
        "RuleArns":{
          "shape":"RuleArns",
          "documentation":"<p>The Amazon Resource Names (ARN) of the rules.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results. (You received this marker from a previous call.)</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results to return with this call.</p>"
        }
      }
    },
    "DescribeRulesOutput":{
      "type":"structure",
      "members":{
        "Rules":{
          "shape":"Rules",
          "documentation":"<p>Information about the rules.</p>"
        },
        "NextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>"
        }
      }
    },
    "DescribeSSLPoliciesInput":{
      "type":"structure",
      "members":{
        "Names":{
          "shape":"SslPolicyNames",
          "documentation":"<p>The names of the policies.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results. (You received this marker from a previous call.)</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results to return with this call.</p>"
        }
      }
    },
    "DescribeSSLPoliciesOutput":{
      "type":"structure",
      "members":{
        "SslPolicies":{
          "shape":"SslPolicies",
          "documentation":"<p>Information about the policies.</p>"
        },
        "NextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>"
        }
      }
    },
    "DescribeTagsInput":{
      "type":"structure",
      "required":["ResourceArns"],
      "members":{
        "ResourceArns":{
          "shape":"ResourceArns",
          "documentation":"<p>The Amazon Resource Names (ARN) of the resources.</p>"
        }
      }
    },
    "DescribeTagsOutput":{
      "type":"structure",
      "members":{
        "TagDescriptions":{
          "shape":"TagDescriptions",
          "documentation":"<p>Information about the tags.</p>"
        }
      }
    },
    "DescribeTargetGroupAttributesInput":{
      "type":"structure",
      "required":["TargetGroupArn"],
      "members":{
        "TargetGroupArn":{
          "shape":"TargetGroupArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target group.</p>"
        }
      }
    },
    "DescribeTargetGroupAttributesOutput":{
      "type":"structure",
      "members":{
        "Attributes":{
          "shape":"TargetGroupAttributes",
          "documentation":"<p>Information about the target group attributes</p>"
        }
      }
    },
    "DescribeTargetGroupsInput":{
      "type":"structure",
      "members":{
        "LoadBalancerArn":{
          "shape":"LoadBalancerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the load balancer.</p>"
        },
        "TargetGroupArns":{
          "shape":"TargetGroupArns",
          "documentation":"<p>The Amazon Resource Names (ARN) of the target groups.</p>"
        },
        "Names":{
          "shape":"TargetGroupNames",
          "documentation":"<p>The names of the target groups.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>The marker for the next set of results. (You received this marker from a previous call.)</p>"
        },
        "PageSize":{
          "shape":"PageSize",
          "documentation":"<p>The maximum number of results to return with this call.</p>"
        }
      }
    },
    "DescribeTargetGroupsOutput":{
      "type":"structure",
      "members":{
        "TargetGroups":{
          "shape":"TargetGroups",
          "documentation":"<p>Information about the target groups.</p>"
        },
        "NextMarker":{
          "shape":"Marker",
          "documentation":"<p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>"
        }
      }
    },
    "DescribeTargetHealthInput":{
      "type":"structure",
      "required":["TargetGroupArn"],
      "members":{
        "TargetGroupArn":{
          "shape":"TargetGroupArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target group.</p>"
        },
        "Targets":{
          "shape":"TargetDescriptions",
          "documentation":"<p>The targets.</p>"
        }
      }
    },
    "DescribeTargetHealthOutput":{
      "type":"structure",
      "members":{
        "TargetHealthDescriptions":{
          "shape":"TargetHealthDescriptions",
          "documentation":"<p>Information about the health of the targets.</p>"
        }
      }
    },
    "Description":{"type":"string"},
    "DuplicateListenerException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A listener with the specified port already exists.</p>",
      "error":{
        "code":"DuplicateListener",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DuplicateLoadBalancerNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A load balancer with the specified name already exists.</p>",
      "error":{
        "code":"DuplicateLoadBalancerName",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DuplicateTagKeysException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A tag key was specified more than once.</p>",
      "error":{
        "code":"DuplicateTagKeys",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "DuplicateTargetGroupNameException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A target group with the specified name already exists.</p>",
      "error":{
        "code":"DuplicateTargetGroupName",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "FixedResponseActionConfig":{
      "type":"structure",
      "required":["StatusCode"],
      "members":{
        "MessageBody":{
          "shape":"FixedResponseActionMessage",
          "documentation":"<p>The message.</p>"
        },
        "StatusCode":{
          "shape":"FixedResponseActionStatusCode",
          "documentation":"<p>The HTTP response code (2XX, 4XX, or 5XX).</p>"
        },
        "ContentType":{
          "shape":"FixedResponseActionContentType",
          "documentation":"<p>The content type.</p> <p>Valid Values: text/plain | text/css | text/html | application/javascript | application/json</p>"
        }
      },
      "documentation":"<p>Information about an action that returns a custom HTTP response.</p>"
    },
    "FixedResponseActionContentType":{
      "type":"string",
      "max":32,
      "min":0
    },
    "FixedResponseActionMessage":{
      "type":"string",
      "max":1024,
      "min":0
    },
    "FixedResponseActionStatusCode":{
      "type":"string",
      "pattern":"^(2|4|5)\\d\\d$"
    },
    "HealthCheckIntervalSeconds":{
      "type":"integer",
      "max":300,
      "min":5
    },
    "HealthCheckPort":{"type":"string"},
    "HealthCheckThresholdCount":{
      "type":"integer",
      "max":10,
      "min":2
    },
    "HealthCheckTimeoutSeconds":{
      "type":"integer",
      "max":60,
      "min":2
    },
    "HealthUnavailableException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The health of the specified targets could not be retrieved due to an internal error.</p>",
      "error":{
        "code":"HealthUnavailable",
        "httpStatusCode":500
      },
      "exception":true
    },
    "HttpCode":{"type":"string"},
    "IncompatibleProtocolsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified configuration is not valid with this protocol.</p>",
      "error":{
        "code":"IncompatibleProtocols",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidConfigurationRequestException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The requested configuration is not valid.</p>",
      "error":{
        "code":"InvalidConfigurationRequest",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidLoadBalancerActionException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The requested action is not valid.</p>",
      "error":{
        "code":"InvalidLoadBalancerAction",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidSchemeException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The requested scheme is not valid.</p>",
      "error":{
        "code":"InvalidScheme",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidSecurityGroupException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified security group does not exist.</p>",
      "error":{
        "code":"InvalidSecurityGroup",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidSubnetException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified subnet is out of available addresses.</p>",
      "error":{
        "code":"InvalidSubnet",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "InvalidTargetException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified target does not exist, is not in the same VPC as the target group, or has an unsupported instance type.</p>",
      "error":{
        "code":"InvalidTarget",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "IpAddress":{"type":"string"},
    "IpAddressType":{
      "type":"string",
      "enum":[
        "ipv4",
        "dualstack"
      ]
    },
    "IsDefault":{"type":"boolean"},
    "Limit":{
      "type":"structure",
      "members":{
        "Name":{
          "shape":"Name",
          "documentation":"<p>The name of the limit. The possible values are:</p> <ul> <li> <p>application-load-balancers</p> </li> <li> <p>listeners-per-application-load-balancer</p> </li> <li> <p>listeners-per-network-load-balancer</p> </li> <li> <p>network-load-balancers</p> </li> <li> <p>rules-per-application-load-balancer</p> </li> <li> <p>target-groups</p> </li> <li> <p>targets-per-application-load-balancer</p> </li> <li> <p>targets-per-availability-zone-per-network-load-balancer</p> </li> <li> <p>targets-per-network-load-balancer</p> </li> </ul>"
        },
        "Max":{
          "shape":"Max",
          "documentation":"<p>The maximum value of the limit.</p>"
        }
      },
      "documentation":"<p>Information about an Elastic Load Balancing resource limit for your AWS account.</p>"
    },
    "Limits":{
      "type":"list",
      "member":{"shape":"Limit"}
    },
    "ListOfString":{
      "type":"list",
      "member":{"shape":"StringValue"}
    },
    "Listener":{
      "type":"structure",
      "members":{
        "ListenerArn":{
          "shape":"ListenerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the listener.</p>"
        },
        "LoadBalancerArn":{
          "shape":"LoadBalancerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the load balancer.</p>"
        },
        "Port":{
          "shape":"Port",
          "documentation":"<p>The port on which the load balancer is listening.</p>"
        },
        "Protocol":{
          "shape":"ProtocolEnum",
          "documentation":"<p>The protocol for connections from clients to the load balancer.</p>"
        },
        "Certificates":{
          "shape":"CertificateList",
          "documentation":"<p>The SSL server certificate. You must provide a certificate if the protocol is HTTPS.</p>"
        },
        "SslPolicy":{
          "shape":"SslPolicyName",
          "documentation":"<p>The security policy that defines which ciphers and protocols are supported. The default is the current predefined security policy.</p>"
        },
        "DefaultActions":{
          "shape":"Actions",
          "documentation":"<p>The default actions for the listener.</p>"
        }
      },
      "documentation":"<p>Information about a listener.</p>"
    },
    "ListenerArn":{"type":"string"},
    "ListenerArns":{
      "type":"list",
      "member":{"shape":"ListenerArn"}
    },
    "ListenerNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified listener does not exist.</p>",
      "error":{
        "code":"ListenerNotFound",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "Listeners":{
      "type":"list",
      "member":{"shape":"Listener"}
    },
    "LoadBalancer":{
      "type":"structure",
      "members":{
        "LoadBalancerArn":{
          "shape":"LoadBalancerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the load balancer.</p>"
        },
        "DNSName":{
          "shape":"DNSName",
          "documentation":"<p>The public DNS name of the load balancer.</p>"
        },
        "CanonicalHostedZoneId":{
          "shape":"CanonicalHostedZoneId",
          "documentation":"<p>The ID of the Amazon Route 53 hosted zone associated with the load balancer.</p>"
        },
        "CreatedTime":{
          "shape":"CreatedTime",
          "documentation":"<p>The date and time the load balancer was created.</p>"
        },
        "LoadBalancerName":{
          "shape":"LoadBalancerName",
          "documentation":"<p>The name of the load balancer.</p>"
        },
        "Scheme":{
          "shape":"LoadBalancerSchemeEnum",
          "documentation":"<p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.</p> <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can only route requests from clients with access to the VPC for the load balancer.</p>"
        },
        "VpcId":{
          "shape":"VpcId",
          "documentation":"<p>The ID of the VPC for the load balancer.</p>"
        },
        "State":{
          "shape":"LoadBalancerState",
          "documentation":"<p>The state of the load balancer.</p>"
        },
        "Type":{
          "shape":"LoadBalancerTypeEnum",
          "documentation":"<p>The type of load balancer.</p>"
        },
        "AvailabilityZones":{
          "shape":"AvailabilityZones",
          "documentation":"<p>The Availability Zones for the load balancer.</p>"
        },
        "SecurityGroups":{
          "shape":"SecurityGroups",
          "documentation":"<p>The IDs of the security groups for the load balancer.</p>"
        },
        "IpAddressType":{
          "shape":"IpAddressType",
          "documentation":"<p>The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses).</p>"
        }
      },
      "documentation":"<p>Information about a load balancer.</p>"
    },
    "LoadBalancerAddress":{
      "type":"structure",
      "members":{
        "IpAddress":{
          "shape":"IpAddress",
          "documentation":"<p>The static IP address.</p>"
        },
        "AllocationId":{
          "shape":"AllocationId",
          "documentation":"<p>[Network Load Balancers] The allocation ID of the Elastic IP address.</p>"
        }
      },
      "documentation":"<p>Information about a static IP address for a load balancer.</p>"
    },
    "LoadBalancerAddresses":{
      "type":"list",
      "member":{"shape":"LoadBalancerAddress"}
    },
    "LoadBalancerArn":{"type":"string"},
    "LoadBalancerArns":{
      "type":"list",
      "member":{"shape":"LoadBalancerArn"}
    },
    "LoadBalancerAttribute":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"LoadBalancerAttributeKey",
          "documentation":"<p>The name of the attribute.</p> <p>The following attributes are supported by both Application Load Balancers and Network Load Balancers:</p> <ul> <li> <p> <code>deletion_protection.enabled</code> - Indicates whether deletion protection is enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> </ul> <p>The following attributes are supported by only Application Load Balancers:</p> <ul> <li> <p> <code>access_logs.s3.enabled</code> - Indicates whether access logs are enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> <li> <p> <code>access_logs.s3.bucket</code> - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.</p> </li> <li> <p> <code>access_logs.s3.prefix</code> - The prefix for the location in the S3 bucket for the access logs.</p> </li> <li> <p> <code>idle_timeout.timeout_seconds</code> - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds.</p> </li> <li> <p> <code>routing.http2.enabled</code> - Indicates whether HTTP/2 is enabled. The value is <code>true</code> or <code>false</code>. The default is <code>true</code>.</p> </li> </ul> <p>The following attributes are supported by only Network Load Balancers:</p> <ul> <li> <p> <code>load_balancing.cross_zone.enabled</code> - Indicates whether cross-zone load balancing is enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> </ul>"
        },
        "Value":{
          "shape":"LoadBalancerAttributeValue",
          "documentation":"<p>The value of the attribute.</p>"
        }
      },
      "documentation":"<p>Information about a load balancer attribute.</p>"
    },
    "LoadBalancerAttributeKey":{
      "type":"string",
      "max":256,
      "pattern":"^[a-zA-Z0-9._]+$"
    },
    "LoadBalancerAttributeValue":{
      "type":"string",
      "max":1024
    },
    "LoadBalancerAttributes":{
      "type":"list",
      "member":{"shape":"LoadBalancerAttribute"},
      "max":20
    },
    "LoadBalancerName":{"type":"string"},
    "LoadBalancerNames":{
      "type":"list",
      "member":{"shape":"LoadBalancerName"}
    },
    "LoadBalancerNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified load balancer does not exist.</p>",
      "error":{
        "code":"LoadBalancerNotFound",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "LoadBalancerSchemeEnum":{
      "type":"string",
      "enum":[
        "internet-facing",
        "internal"
      ]
    },
    "LoadBalancerState":{
      "type":"structure",
      "members":{
        "Code":{
          "shape":"LoadBalancerStateEnum",
          "documentation":"<p>The state code. The initial state of the load balancer is <code>provisioning</code>. After the load balancer is fully set up and ready to route traffic, its state is <code>active</code>. If the load balancer could not be set up, its state is <code>failed</code>.</p>"
        },
        "Reason":{
          "shape":"StateReason",
          "documentation":"<p>A description of the state.</p>"
        }
      },
      "documentation":"<p>Information about the state of the load balancer.</p>"
    },
    "LoadBalancerStateEnum":{
      "type":"string",
      "enum":[
        "active",
        "provisioning",
        "active_impaired",
        "failed"
      ]
    },
    "LoadBalancerTypeEnum":{
      "type":"string",
      "enum":[
        "application",
        "network"
      ]
    },
    "LoadBalancers":{
      "type":"list",
      "member":{"shape":"LoadBalancer"}
    },
    "Marker":{"type":"string"},
    "Matcher":{
      "type":"structure",
      "required":["HttpCode"],
      "members":{
        "HttpCode":{
          "shape":"HttpCode",
          "documentation":"<p>The HTTP codes.</p> <p>For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200. You can specify multiple values (for example, \"200,202\") or a range of values (for example, \"200-299\").</p> <p>For Network Load Balancers, this is 200–399.</p>"
        }
      },
      "documentation":"<p>Information to use when checking for a successful response from a target.</p>"
    },
    "Max":{"type":"string"},
    "ModifyListenerInput":{
      "type":"structure",
      "required":["ListenerArn"],
      "members":{
        "ListenerArn":{
          "shape":"ListenerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the listener.</p>"
        },
        "Port":{
          "shape":"Port",
          "documentation":"<p>The port for connections from clients to the load balancer.</p>"
        },
        "Protocol":{
          "shape":"ProtocolEnum",
          "documentation":"<p>The protocol for connections from clients to the load balancer. Application Load Balancers support HTTP and HTTPS and Network Load Balancers support TCP.</p>"
        },
        "SslPolicy":{
          "shape":"SslPolicyName",
          "documentation":"<p>[HTTPS listeners] The security policy that defines which protocols and ciphers are supported. For more information, see <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies\">Security Policies</a> in the <i>Application Load Balancers Guide</i>.</p>"
        },
        "Certificates":{
          "shape":"CertificateList",
          "documentation":"<p>[HTTPS listeners] The default SSL server certificate. You must provide exactly one default certificate. To create a certificate list, use <a>AddListenerCertificates</a>.</p>"
        },
        "DefaultActions":{
          "shape":"Actions",
          "documentation":"<p>The actions for the default rule. The rule must include one forward action or one or more fixed-response actions.</p> <p>If the action type is <code>forward</code>, you can specify a single target group. The protocol of the target group must be HTTP or HTTPS for an Application Load Balancer or TCP for a Network Load Balancer.</p> <p>[HTTPS listener] If the action type is <code>authenticate-oidc</code>, you can use an identity provider that is OpenID Connect (OIDC) compliant to authenticate users as they access your application.</p> <p>[HTTPS listener] If the action type is <code>authenticate-cognito</code>, you can use Amazon Cognito to authenticate users as they access your application.</p> <p>[Application Load Balancer] If the action type is <code>redirect</code>, you can redirect HTTP and HTTPS requests.</p> <p>[Application Load Balancer] If the action type is <code>fixed-response</code>, you can return a custom HTTP response.</p>"
        }
      }
    },
    "ModifyListenerOutput":{
      "type":"structure",
      "members":{
        "Listeners":{
          "shape":"Listeners",
          "documentation":"<p>Information about the modified listener.</p>"
        }
      }
    },
    "ModifyLoadBalancerAttributesInput":{
      "type":"structure",
      "required":[
        "LoadBalancerArn",
        "Attributes"
      ],
      "members":{
        "LoadBalancerArn":{
          "shape":"LoadBalancerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the load balancer.</p>"
        },
        "Attributes":{
          "shape":"LoadBalancerAttributes",
          "documentation":"<p>The load balancer attributes.</p>"
        }
      }
    },
    "ModifyLoadBalancerAttributesOutput":{
      "type":"structure",
      "members":{
        "Attributes":{
          "shape":"LoadBalancerAttributes",
          "documentation":"<p>Information about the load balancer attributes.</p>"
        }
      }
    },
    "ModifyRuleInput":{
      "type":"structure",
      "required":["RuleArn"],
      "members":{
        "RuleArn":{
          "shape":"RuleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the rule.</p>"
        },
        "Conditions":{
          "shape":"RuleConditionList",
          "documentation":"<p>The conditions. Each condition specifies a field name and a single value.</p> <p>If the field name is <code>host-header</code>, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters. You can include up to three wildcard characters.</p> <ul> <li> <p>A-Z, a-z, 0-9</p> </li> <li> <p>- .</p> </li> <li> <p>* (matches 0 or more characters)</p> </li> <li> <p>? (matches exactly 1 character)</p> </li> </ul> <p>If the field name is <code>path-pattern</code>, you can specify a single path pattern. A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters. You can include up to three wildcard characters.</p> <ul> <li> <p>A-Z, a-z, 0-9</p> </li> <li> <p>_ - . $ / ~ \" ' @ : +</p> </li> <li> <p>&amp; (using &amp;amp;)</p> </li> <li> <p>* (matches 0 or more characters)</p> </li> <li> <p>? (matches exactly 1 character)</p> </li> </ul>"
        },
        "Actions":{
          "shape":"Actions",
          "documentation":"<p>The actions.</p> <p>If the action type is <code>forward</code>, you can specify a single target group.</p> <p>If the action type is <code>authenticate-oidc</code>, you can use an identity provider that is OpenID Connect (OIDC) compliant to authenticate users as they access your application.</p> <p>If the action type is <code>authenticate-cognito</code>, you can use Amazon Cognito to authenticate users as they access your application.</p>"
        }
      }
    },
    "ModifyRuleOutput":{
      "type":"structure",
      "members":{
        "Rules":{
          "shape":"Rules",
          "documentation":"<p>Information about the modified rule.</p>"
        }
      }
    },
    "ModifyTargetGroupAttributesInput":{
      "type":"structure",
      "required":[
        "TargetGroupArn",
        "Attributes"
      ],
      "members":{
        "TargetGroupArn":{
          "shape":"TargetGroupArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target group.</p>"
        },
        "Attributes":{
          "shape":"TargetGroupAttributes",
          "documentation":"<p>The attributes.</p>"
        }
      }
    },
    "ModifyTargetGroupAttributesOutput":{
      "type":"structure",
      "members":{
        "Attributes":{
          "shape":"TargetGroupAttributes",
          "documentation":"<p>Information about the attributes.</p>"
        }
      }
    },
    "ModifyTargetGroupInput":{
      "type":"structure",
      "required":["TargetGroupArn"],
      "members":{
        "TargetGroupArn":{
          "shape":"TargetGroupArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target group.</p>"
        },
        "HealthCheckProtocol":{
          "shape":"ProtocolEnum",
          "documentation":"<p>The protocol the load balancer uses when performing health checks on targets. The TCP protocol is supported only if the protocol of the target group is TCP.</p>"
        },
        "HealthCheckPort":{
          "shape":"HealthCheckPort",
          "documentation":"<p>The port the load balancer uses when performing health checks on targets.</p>"
        },
        "HealthCheckPath":{
          "shape":"Path",
          "documentation":"<p>[HTTP/HTTPS health checks] The ping path that is the destination for the health check request.</p>"
        },
        "HealthCheckIntervalSeconds":{
          "shape":"HealthCheckIntervalSeconds",
          "documentation":"<p>The approximate amount of time, in seconds, between health checks of an individual target. For Application Load Balancers, the range is 5–300 seconds. For Network Load Balancers, the supported values are 10 or 30 seconds.</p>"
        },
        "HealthCheckTimeoutSeconds":{
          "shape":"HealthCheckTimeoutSeconds",
          "documentation":"<p>[HTTP/HTTPS health checks] The amount of time, in seconds, during which no response means a failed health check.</p>"
        },
        "HealthyThresholdCount":{
          "shape":"HealthCheckThresholdCount",
          "documentation":"<p>The number of consecutive health checks successes required before considering an unhealthy target healthy.</p>"
        },
        "UnhealthyThresholdCount":{
          "shape":"HealthCheckThresholdCount",
          "documentation":"<p>The number of consecutive health check failures required before considering the target unhealthy. For Network Load Balancers, this value must be the same as the healthy threshold count.</p>"
        },
        "Matcher":{
          "shape":"Matcher",
          "documentation":"<p>[HTTP/HTTPS health checks] The HTTP codes to use when checking for a successful response from a target.</p>"
        }
      }
    },
    "ModifyTargetGroupOutput":{
      "type":"structure",
      "members":{
        "TargetGroups":{
          "shape":"TargetGroups",
          "documentation":"<p>Information about the modified target group.</p>"
        }
      }
    },
    "Name":{"type":"string"},
    "OperationNotPermittedException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>This operation is not allowed.</p>",
      "error":{
        "code":"OperationNotPermitted",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "PageSize":{
      "type":"integer",
      "max":400,
      "min":1
    },
    "Path":{
      "type":"string",
      "max":1024,
      "min":1
    },
    "Port":{
      "type":"integer",
      "max":65535,
      "min":1
    },
    "PriorityInUseException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified priority is in use.</p>",
      "error":{
        "code":"PriorityInUse",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "ProtocolEnum":{
      "type":"string",
      "enum":[
        "HTTP",
        "HTTPS",
        "TCP"
      ]
    },
    "RedirectActionConfig":{
      "type":"structure",
      "required":["StatusCode"],
      "members":{
        "Protocol":{
          "shape":"RedirectActionProtocol",
          "documentation":"<p>The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.</p>"
        },
        "Port":{
          "shape":"RedirectActionPort",
          "documentation":"<p>The port. You can specify a value from 1 to 65535 or #{port}.</p>"
        },
        "Host":{
          "shape":"RedirectActionHost",
          "documentation":"<p>The hostname. This component is not percent-encoded. The hostname can contain #{host}.</p>"
        },
        "Path":{
          "shape":"RedirectActionPath",
          "documentation":"<p>The absolute path, starting with the leading \"/\". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.</p>"
        },
        "Query":{
          "shape":"RedirectActionQuery",
          "documentation":"<p>The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading \"?\", as it is automatically added. You can specify any of the reserved keywords.</p>"
        },
        "StatusCode":{
          "shape":"RedirectActionStatusCodeEnum",
          "documentation":"<p>The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).</p>"
        }
      },
      "documentation":"<p>Information about a redirect action.</p> <p>A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.</p> <p>You can reuse URI components using the following reserved keywords:</p> <ul> <li> <p>#{protocol}</p> </li> <li> <p>#{host}</p> </li> <li> <p>#{port}</p> </li> <li> <p>#{path} (the leading \"/\" is removed)</p> </li> <li> <p>#{query}</p> </li> </ul> <p>For example, you can change the path to \"/new/#{path}\", the hostname to \"example.#{host}\", or the query to \"#{query}&amp;value=xyz\".</p>"
    },
    "RedirectActionHost":{
      "type":"string",
      "max":128,
      "min":1
    },
    "RedirectActionPath":{
      "type":"string",
      "max":128,
      "min":1
    },
    "RedirectActionPort":{"type":"string"},
    "RedirectActionProtocol":{
      "type":"string",
      "pattern":"^(HTTPS?|#\\{protocol\\})$"
    },
    "RedirectActionQuery":{
      "type":"string",
      "max":128,
      "min":0
    },
    "RedirectActionStatusCodeEnum":{
      "type":"string",
      "enum":[
        "HTTP_301",
        "HTTP_302"
      ]
    },
    "RegisterTargetsInput":{
      "type":"structure",
      "required":[
        "TargetGroupArn",
        "Targets"
      ],
      "members":{
        "TargetGroupArn":{
          "shape":"TargetGroupArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target group.</p>"
        },
        "Targets":{
          "shape":"TargetDescriptions",
          "documentation":"<p>The targets.</p>"
        }
      }
    },
    "RegisterTargetsOutput":{
      "type":"structure",
      "members":{
      }
    },
    "RemoveListenerCertificatesInput":{
      "type":"structure",
      "required":[
        "ListenerArn",
        "Certificates"
      ],
      "members":{
        "ListenerArn":{
          "shape":"ListenerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the listener.</p>"
        },
        "Certificates":{
          "shape":"CertificateList",
          "documentation":"<p>The certificate to remove. You can specify one certificate per call.</p>"
        }
      }
    },
    "RemoveListenerCertificatesOutput":{
      "type":"structure",
      "members":{
      }
    },
    "RemoveTagsInput":{
      "type":"structure",
      "required":[
        "ResourceArns",
        "TagKeys"
      ],
      "members":{
        "ResourceArns":{
          "shape":"ResourceArns",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource.</p>"
        },
        "TagKeys":{
          "shape":"TagKeys",
          "documentation":"<p>The tag keys for the tags to remove.</p>"
        }
      }
    },
    "RemoveTagsOutput":{
      "type":"structure",
      "members":{
      }
    },
    "ResourceArn":{"type":"string"},
    "ResourceArns":{
      "type":"list",
      "member":{"shape":"ResourceArn"}
    },
    "ResourceInUseException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A specified resource is in use.</p>",
      "error":{
        "code":"ResourceInUse",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "Rule":{
      "type":"structure",
      "members":{
        "RuleArn":{
          "shape":"RuleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the rule.</p>"
        },
        "Priority":{
          "shape":"String",
          "documentation":"<p>The priority.</p>"
        },
        "Conditions":{
          "shape":"RuleConditionList",
          "documentation":"<p>The conditions.</p>"
        },
        "Actions":{
          "shape":"Actions",
          "documentation":"<p>The actions.</p>"
        },
        "IsDefault":{
          "shape":"IsDefault",
          "documentation":"<p>Indicates whether this is the default rule.</p>"
        }
      },
      "documentation":"<p>Information about a rule.</p>"
    },
    "RuleArn":{"type":"string"},
    "RuleArns":{
      "type":"list",
      "member":{"shape":"RuleArn"}
    },
    "RuleCondition":{
      "type":"structure",
      "members":{
        "Field":{
          "shape":"ConditionFieldName",
          "documentation":"<p>The name of the field. The possible values are <code>host-header</code> and <code>path-pattern</code>.</p>"
        },
        "Values":{
          "shape":"ListOfString",
          "documentation":"<p>The condition value.</p> <p>If the field name is <code>host-header</code>, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters. You can include up to three wildcard characters.</p> <ul> <li> <p>A-Z, a-z, 0-9</p> </li> <li> <p>- .</p> </li> <li> <p>* (matches 0 or more characters)</p> </li> <li> <p>? (matches exactly 1 character)</p> </li> </ul> <p>If the field name is <code>path-pattern</code>, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters. You can include up to three wildcard characters.</p> <ul> <li> <p>A-Z, a-z, 0-9</p> </li> <li> <p>_ - . $ / ~ \" ' @ : +</p> </li> <li> <p>&amp; (using &amp;amp;)</p> </li> <li> <p>* (matches 0 or more characters)</p> </li> <li> <p>? (matches exactly 1 character)</p> </li> </ul>"
        }
      },
      "documentation":"<p>Information about a condition for a rule.</p>"
    },
    "RuleConditionList":{
      "type":"list",
      "member":{"shape":"RuleCondition"}
    },
    "RuleNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified rule does not exist.</p>",
      "error":{
        "code":"RuleNotFound",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "RulePriority":{
      "type":"integer",
      "max":50000,
      "min":1
    },
    "RulePriorityList":{
      "type":"list",
      "member":{"shape":"RulePriorityPair"}
    },
    "RulePriorityPair":{
      "type":"structure",
      "members":{
        "RuleArn":{
          "shape":"RuleArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the rule.</p>"
        },
        "Priority":{
          "shape":"RulePriority",
          "documentation":"<p>The rule priority.</p>"
        }
      },
      "documentation":"<p>Information about the priorities for the rules for a listener.</p>"
    },
    "Rules":{
      "type":"list",
      "member":{"shape":"Rule"}
    },
    "SSLPolicyNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified SSL policy does not exist.</p>",
      "error":{
        "code":"SSLPolicyNotFound",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "SecurityGroupId":{"type":"string"},
    "SecurityGroups":{
      "type":"list",
      "member":{"shape":"SecurityGroupId"}
    },
    "SetIpAddressTypeInput":{
      "type":"structure",
      "required":[
        "LoadBalancerArn",
        "IpAddressType"
      ],
      "members":{
        "LoadBalancerArn":{
          "shape":"LoadBalancerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the load balancer.</p>"
        },
        "IpAddressType":{
          "shape":"IpAddressType",
          "documentation":"<p>The IP address type. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). Internal load balancers must use <code>ipv4</code>.</p>"
        }
      }
    },
    "SetIpAddressTypeOutput":{
      "type":"structure",
      "members":{
        "IpAddressType":{
          "shape":"IpAddressType",
          "documentation":"<p>The IP address type.</p>"
        }
      }
    },
    "SetRulePrioritiesInput":{
      "type":"structure",
      "required":["RulePriorities"],
      "members":{
        "RulePriorities":{
          "shape":"RulePriorityList",
          "documentation":"<p>The rule priorities.</p>"
        }
      }
    },
    "SetRulePrioritiesOutput":{
      "type":"structure",
      "members":{
        "Rules":{
          "shape":"Rules",
          "documentation":"<p>Information about the rules.</p>"
        }
      }
    },
    "SetSecurityGroupsInput":{
      "type":"structure",
      "required":[
        "LoadBalancerArn",
        "SecurityGroups"
      ],
      "members":{
        "LoadBalancerArn":{
          "shape":"LoadBalancerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the load balancer.</p>"
        },
        "SecurityGroups":{
          "shape":"SecurityGroups",
          "documentation":"<p>The IDs of the security groups.</p>"
        }
      }
    },
    "SetSecurityGroupsOutput":{
      "type":"structure",
      "members":{
        "SecurityGroupIds":{
          "shape":"SecurityGroups",
          "documentation":"<p>The IDs of the security groups associated with the load balancer.</p>"
        }
      }
    },
    "SetSubnetsInput":{
      "type":"structure",
      "required":["LoadBalancerArn"],
      "members":{
        "LoadBalancerArn":{
          "shape":"LoadBalancerArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the load balancer.</p>"
        },
        "Subnets":{
          "shape":"Subnets",
          "documentation":"<p>The IDs of the public subnets. You must specify subnets from at least two Availability Zones. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p>"
        },
        "SubnetMappings":{
          "shape":"SubnetMappings",
          "documentation":"<p>The IDs of the public subnets. You must specify subnets from at least two Availability Zones. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>You cannot specify Elastic IP addresses for your subnets.</p>"
        }
      }
    },
    "SetSubnetsOutput":{
      "type":"structure",
      "members":{
        "AvailabilityZones":{
          "shape":"AvailabilityZones",
          "documentation":"<p>Information about the subnet and Availability Zone.</p>"
        }
      }
    },
    "SslPolicies":{
      "type":"list",
      "member":{"shape":"SslPolicy"}
    },
    "SslPolicy":{
      "type":"structure",
      "members":{
        "SslProtocols":{
          "shape":"SslProtocols",
          "documentation":"<p>The protocols.</p>"
        },
        "Ciphers":{
          "shape":"Ciphers",
          "documentation":"<p>The ciphers.</p>"
        },
        "Name":{
          "shape":"SslPolicyName",
          "documentation":"<p>The name of the policy.</p>"
        }
      },
      "documentation":"<p>Information about a policy used for SSL negotiation.</p>"
    },
    "SslPolicyName":{"type":"string"},
    "SslPolicyNames":{
      "type":"list",
      "member":{"shape":"SslPolicyName"}
    },
    "SslProtocol":{"type":"string"},
    "SslProtocols":{
      "type":"list",
      "member":{"shape":"SslProtocol"}
    },
    "StateReason":{"type":"string"},
    "String":{"type":"string"},
    "StringValue":{"type":"string"},
    "SubnetId":{"type":"string"},
    "SubnetMapping":{
      "type":"structure",
      "members":{
        "SubnetId":{
          "shape":"SubnetId",
          "documentation":"<p>The ID of the subnet.</p>"
        },
        "AllocationId":{
          "shape":"AllocationId",
          "documentation":"<p>[Network Load Balancers] The allocation ID of the Elastic IP address.</p>"
        }
      },
      "documentation":"<p>Information about a subnet mapping.</p>"
    },
    "SubnetMappings":{
      "type":"list",
      "member":{"shape":"SubnetMapping"}
    },
    "SubnetNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified subnet does not exist.</p>",
      "error":{
        "code":"SubnetNotFound",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "Subnets":{
      "type":"list",
      "member":{"shape":"SubnetId"}
    },
    "Tag":{
      "type":"structure",
      "required":["Key"],
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
      "documentation":"<p>Information about a tag.</p>"
    },
    "TagDescription":{
      "type":"structure",
      "members":{
        "ResourceArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource.</p>"
        },
        "Tags":{
          "shape":"TagList",
          "documentation":"<p>Information about the tags.</p>"
        }
      },
      "documentation":"<p>The tags associated with a resource.</p>"
    },
    "TagDescriptions":{
      "type":"list",
      "member":{"shape":"TagDescription"}
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
    "TagList":{
      "type":"list",
      "member":{"shape":"Tag"},
      "min":1
    },
    "TagValue":{
      "type":"string",
      "max":256,
      "min":0,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TargetDescription":{
      "type":"structure",
      "required":["Id"],
      "members":{
        "Id":{
          "shape":"TargetId",
          "documentation":"<p>The ID of the target. If the target type of the target group is <code>instance</code>, specify an instance ID. If the target type is <code>ip</code>, specify an IP address.</p>"
        },
        "Port":{
          "shape":"Port",
          "documentation":"<p>The port on which the target is listening.</p>"
        },
        "AvailabilityZone":{
          "shape":"ZoneName",
          "documentation":"<p>An Availability Zone or <code>all</code>. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.</p> <p>This parameter is not supported if the target type of the target group is <code>instance</code>. If the IP address is in a subnet of the VPC for the target group, the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside the VPC, this parameter is required.</p> <p>With an Application Load Balancer, if the IP address is outside the VPC for the target group, the only supported value is <code>all</code>.</p>"
        }
      },
      "documentation":"<p>Information about a target.</p>"
    },
    "TargetDescriptions":{
      "type":"list",
      "member":{"shape":"TargetDescription"}
    },
    "TargetGroup":{
      "type":"structure",
      "members":{
        "TargetGroupArn":{
          "shape":"TargetGroupArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target group.</p>"
        },
        "TargetGroupName":{
          "shape":"TargetGroupName",
          "documentation":"<p>The name of the target group.</p>"
        },
        "Protocol":{
          "shape":"ProtocolEnum",
          "documentation":"<p>The protocol to use for routing traffic to the targets.</p>"
        },
        "Port":{
          "shape":"Port",
          "documentation":"<p>The port on which the targets are listening.</p>"
        },
        "VpcId":{
          "shape":"VpcId",
          "documentation":"<p>The ID of the VPC for the targets.</p>"
        },
        "HealthCheckProtocol":{
          "shape":"ProtocolEnum",
          "documentation":"<p>The protocol to use to connect with the target.</p>"
        },
        "HealthCheckPort":{
          "shape":"HealthCheckPort",
          "documentation":"<p>The port to use to connect with the target.</p>"
        },
        "HealthCheckIntervalSeconds":{
          "shape":"HealthCheckIntervalSeconds",
          "documentation":"<p>The approximate amount of time, in seconds, between health checks of an individual target.</p>"
        },
        "HealthCheckTimeoutSeconds":{
          "shape":"HealthCheckTimeoutSeconds",
          "documentation":"<p>The amount of time, in seconds, during which no response means a failed health check.</p>"
        },
        "HealthyThresholdCount":{
          "shape":"HealthCheckThresholdCount",
          "documentation":"<p>The number of consecutive health checks successes required before considering an unhealthy target healthy.</p>"
        },
        "UnhealthyThresholdCount":{
          "shape":"HealthCheckThresholdCount",
          "documentation":"<p>The number of consecutive health check failures required before considering the target unhealthy.</p>"
        },
        "HealthCheckPath":{
          "shape":"Path",
          "documentation":"<p>The destination for the health check request.</p>"
        },
        "Matcher":{
          "shape":"Matcher",
          "documentation":"<p>The HTTP codes to use when checking for a successful response from a target.</p>"
        },
        "LoadBalancerArns":{
          "shape":"LoadBalancerArns",
          "documentation":"<p>The Amazon Resource Names (ARN) of the load balancers that route traffic to this target group.</p>"
        },
        "TargetType":{
          "shape":"TargetTypeEnum",
          "documentation":"<p>The type of target that you must specify when registering targets with this target group. The possible values are <code>instance</code> (targets are specified by instance ID) or <code>ip</code> (targets are specified by IP address).</p>"
        }
      },
      "documentation":"<p>Information about a target group.</p>"
    },
    "TargetGroupArn":{"type":"string"},
    "TargetGroupArns":{
      "type":"list",
      "member":{"shape":"TargetGroupArn"}
    },
    "TargetGroupAssociationLimitException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You've reached the limit on the number of load balancers per target group.</p>",
      "error":{
        "code":"TargetGroupAssociationLimit",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "TargetGroupAttribute":{
      "type":"structure",
      "members":{
        "Key":{
          "shape":"TargetGroupAttributeKey",
          "documentation":"<p>The name of the attribute.</p> <p>The following attributes are supported by both Application Load Balancers and Network Load Balancers:</p> <ul> <li> <p> <code>deregistration_delay.timeout_seconds</code> - The amount of time, in seconds, for Elastic Load Balancing to wait before changing the state of a deregistering target from <code>draining</code> to <code>unused</code>. The range is 0-3600 seconds. The default value is 300 seconds.</p> </li> </ul> <p>The following attributes are supported by only Application Load Balancers:</p> <ul> <li> <p> <code>slow_start.duration_seconds</code> - The time period, in seconds, during which a newly registered target receives a linearly increasing share of the traffic to the target group. After this time period ends, the target receives its full share of traffic. The range is 30-900 seconds (15 minutes). Slow start mode is disabled by default.</p> </li> <li> <p> <code>stickiness.enabled</code> - Indicates whether sticky sessions are enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> <li> <p> <code>stickiness.type</code> - The type of sticky sessions. The possible value is <code>lb_cookie</code>.</p> </li> <li> <p> <code>stickiness.lb_cookie.duration_seconds</code> - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).</p> </li> </ul> <p>The following attributes are supported by only Network Load Balancers:</p> <ul> <li> <p> <code>proxy_protocol_v2.enabled</code> - Indicates whether Proxy Protocol version 2 is enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> </ul>"
        },
        "Value":{
          "shape":"TargetGroupAttributeValue",
          "documentation":"<p>The value of the attribute.</p>"
        }
      },
      "documentation":"<p>Information about a target group attribute.</p>"
    },
    "TargetGroupAttributeKey":{
      "type":"string",
      "max":256,
      "pattern":"^[a-zA-Z0-9._]+$"
    },
    "TargetGroupAttributeValue":{"type":"string"},
    "TargetGroupAttributes":{
      "type":"list",
      "member":{"shape":"TargetGroupAttribute"}
    },
    "TargetGroupName":{"type":"string"},
    "TargetGroupNames":{
      "type":"list",
      "member":{"shape":"TargetGroupName"}
    },
    "TargetGroupNotFoundException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified target group does not exist.</p>",
      "error":{
        "code":"TargetGroupNotFound",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "TargetGroups":{
      "type":"list",
      "member":{"shape":"TargetGroup"}
    },
    "TargetHealth":{
      "type":"structure",
      "members":{
        "State":{
          "shape":"TargetHealthStateEnum",
          "documentation":"<p>The state of the target.</p>"
        },
        "Reason":{
          "shape":"TargetHealthReasonEnum",
          "documentation":"<p>The reason code. If the target state is <code>healthy</code>, a reason code is not provided.</p> <p>If the target state is <code>initial</code>, the reason code can be one of the following values:</p> <ul> <li> <p> <code>Elb.RegistrationInProgress</code> - The target is in the process of being registered with the load balancer.</p> </li> <li> <p> <code>Elb.InitialHealthChecking</code> - The load balancer is still sending the target the minimum number of health checks required to determine its health status.</p> </li> </ul> <p>If the target state is <code>unhealthy</code>, the reason code can be one of the following values:</p> <ul> <li> <p> <code>Target.ResponseCodeMismatch</code> - The health checks did not return an expected HTTP code.</p> </li> <li> <p> <code>Target.Timeout</code> - The health check requests timed out.</p> </li> <li> <p> <code>Target.FailedHealthChecks</code> - The health checks failed because the connection to the target timed out, the target response was malformed, or the target failed the health check for an unknown reason.</p> </li> <li> <p> <code>Elb.InternalError</code> - The health checks failed due to an internal error.</p> </li> </ul> <p>If the target state is <code>unused</code>, the reason code can be one of the following values:</p> <ul> <li> <p> <code>Target.NotRegistered</code> - The target is not registered with the target group.</p> </li> <li> <p> <code>Target.NotInUse</code> - The target group is not used by any load balancer or the target is in an Availability Zone that is not enabled for its load balancer.</p> </li> <li> <p> <code>Target.IpUnusable</code> - The target IP address is reserved for use by a load balancer.</p> </li> <li> <p> <code>Target.InvalidState</code> - The target is in the stopped or terminated state.</p> </li> </ul> <p>If the target state is <code>draining</code>, the reason code can be the following value:</p> <ul> <li> <p> <code>Target.DeregistrationInProgress</code> - The target is in the process of being deregistered and the deregistration delay period has not expired.</p> </li> </ul>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>A description of the target health that provides additional details. If the state is <code>healthy</code>, a description is not provided.</p>"
        }
      },
      "documentation":"<p>Information about the current health of a target.</p>"
    },
    "TargetHealthDescription":{
      "type":"structure",
      "members":{
        "Target":{
          "shape":"TargetDescription",
          "documentation":"<p>The description of the target.</p>"
        },
        "HealthCheckPort":{
          "shape":"HealthCheckPort",
          "documentation":"<p>The port to use to connect with the target.</p>"
        },
        "TargetHealth":{
          "shape":"TargetHealth",
          "documentation":"<p>The health information for the target.</p>"
        }
      },
      "documentation":"<p>Information about the health of a target.</p>"
    },
    "TargetHealthDescriptions":{
      "type":"list",
      "member":{"shape":"TargetHealthDescription"}
    },
    "TargetHealthReasonEnum":{
      "type":"string",
      "enum":[
        "Elb.RegistrationInProgress",
        "Elb.InitialHealthChecking",
        "Target.ResponseCodeMismatch",
        "Target.Timeout",
        "Target.FailedHealthChecks",
        "Target.NotRegistered",
        "Target.NotInUse",
        "Target.DeregistrationInProgress",
        "Target.InvalidState",
        "Target.IpUnusable",
        "Elb.InternalError"
      ]
    },
    "TargetHealthStateEnum":{
      "type":"string",
      "enum":[
        "initial",
        "healthy",
        "unhealthy",
        "unused",
        "draining",
        "unavailable"
      ]
    },
    "TargetId":{"type":"string"},
    "TargetTypeEnum":{
      "type":"string",
      "enum":[
        "instance",
        "ip"
      ]
    },
    "TooManyActionsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You've reached the limit on the number of actions per rule.</p>",
      "error":{
        "code":"TooManyActions",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "TooManyCertificatesException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You've reached the limit on the number of certificates per load balancer.</p>",
      "error":{
        "code":"TooManyCertificates",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "TooManyListenersException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You've reached the limit on the number of listeners per load balancer.</p>",
      "error":{
        "code":"TooManyListeners",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "TooManyLoadBalancersException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You've reached the limit on the number of load balancers for your AWS account.</p>",
      "error":{
        "code":"TooManyLoadBalancers",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "TooManyRegistrationsForTargetIdException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You've reached the limit on the number of times a target can be registered with a load balancer.</p>",
      "error":{
        "code":"TooManyRegistrationsForTargetId",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "TooManyRulesException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You've reached the limit on the number of rules per load balancer.</p>",
      "error":{
        "code":"TooManyRules",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "TooManyTagsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You've reached the limit on the number of tags per load balancer.</p>",
      "error":{
        "code":"TooManyTags",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "TooManyTargetGroupsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You've reached the limit on the number of target groups for your AWS account.</p>",
      "error":{
        "code":"TooManyTargetGroups",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "TooManyTargetsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You've reached the limit on the number of targets.</p>",
      "error":{
        "code":"TooManyTargets",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "UnsupportedProtocolException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The specified protocol is not supported.</p>",
      "error":{
        "code":"UnsupportedProtocol",
        "httpStatusCode":400,
        "senderFault":true
      },
      "exception":true
    },
    "VpcId":{"type":"string"},
    "ZoneName":{"type":"string"}
  },
  "documentation":"<fullname>Elastic Load Balancing</fullname> <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer. You configure a target group with a protocol and port number for connections from the load balancer to the targets, and with health check settings to be used when checking the health status of the targets.</p> <p>Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers.</p> <p>An Application Load Balancer makes routing and load balancing decisions at the application layer (HTTP/HTTPS). A Network Load Balancer makes routing and load balancing decisions at the transport layer (TCP). Both Application Load Balancers and Network Load Balancers can route requests to one or more ports on each EC2 instance or container instance in your virtual private cloud (VPC).</p> <p>A Classic Load Balancer makes routing and load balancing decisions either at the transport layer (TCP/SSL) or the application layer (HTTP/HTTPS), and supports either EC2-Classic or a VPC. For more information, see the <a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/\">Elastic Load Balancing User Guide</a>.</p> <p>This reference covers the 2015-12-01 API, which supports Application Load Balancers and Network Load Balancers. The 2012-06-01 API supports Classic Load Balancers.</p> <p>To get started, complete the following tasks:</p> <ol> <li> <p>Create a load balancer using <a>CreateLoadBalancer</a>.</p> </li> <li> <p>Create a target group using <a>CreateTargetGroup</a>.</p> </li> <li> <p>Register targets for the target group using <a>RegisterTargets</a>.</p> </li> <li> <p>Create one or more listeners for your load balancer using <a>CreateListener</a>.</p> </li> </ol> <p>To delete a load balancer and its related resources, complete the following tasks:</p> <ol> <li> <p>Delete the load balancer using <a>DeleteLoadBalancer</a>.</p> </li> <li> <p>Delete the target group using <a>DeleteTargetGroup</a>.</p> </li> </ol> <p>All Elastic Load Balancing operations are idempotent, which means that they complete at most one time. If you repeat an operation, it succeeds.</p>"
}
