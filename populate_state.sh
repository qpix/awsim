#!/bin/bash

function add_sub_command {
	CLI_SUB_COMMAND=$2
	for X in {A..Z}
	do
		CLI_SUB_COMMAND=$(echo $CLI_SUB_COMMAND | sed "s/$X/-$(echo $X | tr '[:upper:]' '[:lower:]')/g")
	done
	CLI_SUB_COMMAND=$(echo $CLI_SUB_COMMAND | sed 's/^-//')

	echo Adding subcommand: aws $1 $CLI_SUB_COMMAND
	echo "awsim['$1']['operations']['$2']['_state'] = JSON.parse(atob('$(aws $1 $CLI_SUB_COMMAND | base64)'));" >> state.js
	echo "awsim['$1']['operations']['$2']['_options'] = {};" >> state.js
	echo "awsim['$1']['operations']['$2']['_execute'] = function(CommandObject) { return JSON.stringify(awsim['$1']['operations']['$2']['_state'], null, 1); };" >> state.js
}

function prepare_sub_command_with_required_option {
	echo 'Preparing subcommand with required option:' $1 $2
	echo "awsim['$1']['operations']['$2']['_options'] = {};" >> state.js
	echo "awsim['$1']['operations']['$2']['_state'] = {};" >> state.js
}

function add_sub_command_with_required_option {
	CLI_SUB_COMMAND=$2
	for X in {A..Z}
	do
		CLI_SUB_COMMAND=$(echo $CLI_SUB_COMMAND | sed "s/$X/-$(echo $X | tr '[:upper:]' '[:lower:]')/g")
	done
	CLI_SUB_COMMAND=$(echo $CLI_SUB_COMMAND | sed 's/^-//')

	echo Adding subcommand with required option: aws $1 $CLI_SUB_COMMAND $3 $4
	echo "awsim['$1']['operations']['$2']['_state']['$3 $4'] = JSON.parse(atob('$(aws $1 $CLI_SUB_COMMAND $3 $4 | base64)'));" >> state.js
	echo "\
awsim['$1']['operations']['$2']['_options']['$3'] = () => {\
        var result = [];\
        for (var key in awsim['$1']['operations']['$2']['_state'])\
                result.push(key.split(' ')[1]);\
        return result;\
};\
awsim['$1']['operations']['$2']['_execute'] = (command) => {\
	var optionName = '$3'.replace('--','');\
        if (command.options[optionName] == undefined || command.options[optionName][0] == undefined || command.options[optionName].length > 1)\
                return 'aws: error: argument $3: expected one argument';\
	var optionValue = command['options'][optionName][0];\
        var resource = awsim['$1']['operations']['$2']['_state']['$3 ' + optionValue];\
        if (resource == undefined)\
                return 'An error occurred (ResourceNotFoundException) when calling the $2 operation: Requested resource not found: ' + optionValue + ' not found';\
        return '<pre>' + JSON.stringify(resource, null, 1) + '</pre>';\
};" >> state.js
}

rm state.js
#!#!#! EC2
add_sub_command					ec2 DescribeVpcs
add_sub_command					ec2 DescribeRegions
add_sub_command					ec2 DescribeSubnets
add_sub_command					ec2 DescribeVolumes
add_sub_command					ec2 DescribeAddresses
add_sub_command					ec2 DescribeInstances
add_sub_command					ec2 DescribeInternetGateways
add_sub_command					ec2 DescribeKeyPairs
add_sub_command					ec2 DescribeNatGateways
add_sub_command					ec2 DescribeNetworkAcls
add_sub_command					ec2 DescribeRouteTables
add_sub_command					ec2 DescribeSecurityGroups
add_sub_command					ec2 DescribeLaunchTemplates
add_sub_command					ec2 DescribePlacementGroups
add_sub_command					ec2 DescribeInternetGateways
add_sub_command					ec2 DescribeAvailabilityZones
add_sub_command					ec2 DescribeNetworkInterfaces

#!#!#! IAM
add_sub_command					iam ListAccessKeys
add_sub_command					iam ListInstanceProfiles
add_sub_command					iam ListUsers
add_sub_command					iam ListRoles

prepare_sub_command_with_required_option	iam ListAttachedRolePolicies
add_sub_command_with_required_option		iam ListAttachedRolePolicies --role-name WebServerRole
prepare_sub_command_with_required_option	iam ListInstanceProfilesForRole
add_sub_command_with_required_option		iam ListInstanceProfilesForRole --role-name WebServerRole
prepare_sub_command_with_required_option	iam ListRolePolicies
add_sub_command_with_required_option		iam ListRolePolicies --role-name WebServerRole

#!#!#! ELBV2
add_sub_command					elbv2 DescribeLoadBalancers
add_sub_command					elbv2 DescribeTargetGroups

prepare_sub_command_with_required_option	elbv2 DescribeLoadBalancerAttributes
add_sub_command_with_required_option		elbv2 DescribeLoadBalancerAttributes --load-balancer-arn arn:aws:elasticloadbalancing:us-east-1:338556236700:loadbalancer/app/WebServerLoadBalancer/0f8cb492fbba1e0c
prepare_sub_command_with_required_option 	elbv2 DescribeTargetGroupAttributes
add_sub_command_with_required_option 		elbv2 DescribeTargetGroupAttributes --target-group-arn arn:aws:elasticloadbalancing:us-east-1:338556236700:targetgroup/WebServerTargetGroup/a62d8d55c2e2d2e5

#!#!#! AUTOSCALING
add_sub_command					autoscaling DescribeAutoScalingGroups
add_sub_command					autoscaling DescribeAutoScalingInstances
add_sub_command					autoscaling DescribeLaunchConfigurations

prepare_sub_command_with_required_option	autoscaling DescribeLoadBalancerTargetGroups
add_sub_command_with_required_option		autoscaling DescribeLoadBalancerTargetGroups --auto-scaling-group-name WebServerAutoScalingGroup
prepare_sub_command_with_required_option	autoscaling DescribeLoadBalancers
add_sub_command_with_required_option		autoscaling DescribeLoadBalancers --auto-scaling-group-name WebServerAutoScalingGroup

#!#!#! DYNAMODB
add_sub_command dynamodb ListTables

prepare_sub_command_with_required_option dynamodb DescribeTable
add_sub_command_with_required_option		dynamodb DescribeTable --table-name VerySecretTable
add_sub_command_with_required_option		dynamodb DescribeTable --table-name WebServerDB
