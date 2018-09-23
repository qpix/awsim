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

rm state.js
add_sub_command ec2 DescribeInstances
add_sub_command ec2 DescribeInternetGateways
add_sub_command ec2 DescribeKeyPairs
add_sub_command ec2 DescribeRouteTables
add_sub_command ec2 DescribeSecurityGroups
add_sub_command ec2 DescribeSubnets
add_sub_command ec2 DescribeVpcs
