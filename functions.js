function DescribeIdError (requestedIds, existingIds, idName, idRegex) {
	for (var i in requestedIds) {
		var parameter = requestedIds[i];
		if (parameter == '')
			continue;
		if (!parameter.match(idRegex))
			return 'An error occurred (Invalid' + idName + 'ID.Malformed) when calling the Describe' + idName + ' operation: Invalid id: "' + parameter + '"';
		if (existingIds.indexOf(parameter) == -1)
			return 'An error occurred (Invalid' + idName + 'ID.NotFound) when calling the Describe' + idName + ' operation: The ' + idName + ' ID "' + parameter + '" does not exist'
	}
	return false;
}

///// ec2:DescribeInstances
awsim['ec2']['operations']['DescribeInstances']['_options']['--instance-ids'] = () => {
	var state = awsim['ec2']['operations']['DescribeInstances']._state;
	var result = [];
	for (var i in state.Reservations)
		result.push(state.Reservations[i].Instances[0].InstanceId);
	return result;
};
awsim['ec2']['operations']['DescribeInstances']['_execute'] = (command) => {
	var state = awsim['ec2']['operations']['DescribeInstances']._state;

	if (command.options['instance-ids']) {
		if (error = DescribeIdError(command.options['instance-ids'], awsim['ec2']['operations']['DescribeInstances']['_options']['--instance-ids'](), 'Instance', /i-[0-9-a-f]{17}/g))
			return error;
		for (var reservation in state.Reservations)
			if (command.options['instance-ids'].indexOf(state.Reservations[reservation].Instances[0].InstanceId) == -1)
				delete state.Reservations[reservation];
		state.Reservations = state.Reservations.filter((n)=>n);
	}

	return '<pre>' + JSON.stringify(state, null, 1) + '</pre>';
};

///// dynamodb:DescribeTable
awsim['dynamodb']['operations']['DescribeTable']['_options']['--table-name'] = () => {
	var result = [];
	for (var key in awsim['dynamodb']['operations']['DescribeTable']['_state'])
		result.push(key.split(' ')[1]);
	return result;
};
awsim['dynamodb']['operations']['DescribeTable']['_execute'] = (command) => {
	console.log(command);
	if (command.options['table-name'] == undefined || command.options['table-name'].length > 1)
		return 'aws: error: argument --table-name: expected one argument';
	var table = awsim['dynamodb']['operations']['DescribeTable']['_state']['--table-name ' + command.options['table-name']];
	if (table == undefined)
		return 'An error occurred (ResourceNotFoundException) when calling the DescribeTable operation: Requested resource not found: Table: ' + command.options['table-name'] + ' not found';
	return '<pre>' + JSON.stringify(table, null, 1) + '</pre>';
};
