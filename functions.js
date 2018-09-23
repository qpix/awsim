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
