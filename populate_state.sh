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

	echo Adding subcommand with required option: aws $1 $CLI_SUB_COMMAND $3
	echo "awsim['$1']['operations']['$2']['_state']['$3'] = JSON.parse(atob('$(aws $1 $CLI_SUB_COMMAND $3 | base64)'));" >> state.js
}

rm state.js
add_sub_command ec2 DescribeVpcs
add_sub_command ec2 DescribeRegions
add_sub_command ec2 DescribeSubnets
add_sub_command ec2 DescribeVolumes
add_sub_command ec2 DescribeAddresses
add_sub_command ec2 DescribeInstances
add_sub_command ec2 DescribeKeyPairs
add_sub_command ec2 DescribeNatGateways
add_sub_command ec2 DescribeNetworkAcls
add_sub_command ec2 DescribeRouteTables
add_sub_command ec2 DescribeSecurityGroups
add_sub_command ec2 DescribeLaunchTemplates
add_sub_command ec2 DescribePlacementGroups
add_sub_command ec2 DescribeInternetGateways
add_sub_command ec2 DescribeAvailabilityZones
add_sub_command ec2 DescribeNetworkInterfaces
#DESCRIBE_TABLE
prepare_sub_command_with_required_option dynamodb DescribeTable
add_sub_command_with_required_option dynamodb DescribeTable '--table-name WebServerDB'
