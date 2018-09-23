var suggester = document.getElementById('suggester');

suggester.print = function() {
	this.innerHTML = '';
	this.toggableWindowRefresh();

	for (var i = 1; i < this.toggableCommands.length; i++) {
		var row = document.createElement('tr');

		if (i == this.toggableCurrent)
			row.className = 'active';
		else
			row.className = 'passive';

		var command = document.createElement('td');
		command.className = 'command';
		command.innerHTML = '&nbsp;' + this.toggableCommands[i].command.slice(-1) + '&nbsp;';
		row.appendChild(command);

		if (this.toggableCommands[i].description) {
			var description = document.createElement('td');
			description.className = 'description';
			description.innerHTML = '&nbsp;' + this.toggableCommands[i].description + '&nbsp;';
			row.appendChild(description);
		}

		if (this.toggableWindowTop <= i && i <= this.toggableWindowBottom)
			this.appendChild(row);
	}
}

suggester.toggableWindowRefresh = function() {
	if (this.toggableCurrent <= this.toggableWindowTop) {
		this.toggableWindowTop = this.toggableCurrent - 1;
		if (this.toggableWindowTop < 1)
			this.toggableWindowTop = 1
		this.toggableWindowBottom = this.toggableWindowTop + 6;
	}
	else if (this.toggableWindowBottom <= this.toggableCurrent) {
		this.toggableWindowBottom = this.toggableCurrent + 1;
		if (this.toggableCommands.length <= this.toggableWindowBottom)
			this.toggableWindowBottom = this.toggableCommands.length - 1;
		this.toggableWindowTop = this.toggableWindowBottom - 6;
	}
};

suggester.GoUp = function() {
	this.toggableCurrent -= 1;

	if (this.toggableCurrent == -1)
		this.toggableCurrent = this.toggableCommands.length - 1;

	return this.toggableCommands[this.toggableCurrent].command.join(' ');
}

suggester.GoDown = function() {
	this.toggableCurrent += 1;

	if (this.toggableCurrent == this.toggableCommands.length)
		this.toggableCurrent = 0;

	return this.toggableCommands[this.toggableCurrent].command.join(' ');
}

suggester.update = function (command) {
	this.style.top = prompt.offsetTop + 15 + 'px';
	this.style.left = prompt.offsetLeft + 7.3 * prompt.selectionStart + 'px';

	this.toggableCommands = [{command:command}];
	this.toggableCurrent = 0;
	this.toggableWindowTop = 1;
	this.toggableWindowBottom = 7;

	if (command.length == 0 || command.length == 1 && command[0] == '') {
		descriptor.clear();
		return;
	}
	else if (command.length == 1) {
		var availableCommands = awsim._ListCommands();
		for (var i = 0; i < availableCommands.length; i++)
			if (availableCommands[i].search(command[0]) == 0)
				this.toggableCommands.push({command:[availableCommands[i]]});
		return;
	}
	else if (command.length == 2) {
		var availableOperations = awsim._ListOperations(command[0]);
		for (var i = 0; i < availableOperations.length; i++)
			if (availableOperations[i].search(command[1]) == 0)
				this.toggableCommands.push({command:[command[0],availableOperations[i]]});
		descriptor.update(awsim._GetCommandDocumentation(command[0]));
		return;
	}
	else {
		var currentOption = false;
		for (var i = 2; i < command.length; i++) {
			if (command[i].search('-') == 0 || i == 2) {
				if (i == command.length - 1) { //USER IS ENTERING A OPTION
					var availableOperationOptions = awsim._ListOperationOptions(command[0], command[1]);
					for (var x = 0; x < availableOperationOptions.length; x++) {
						if (availableOperationOptions[x].search(command[i]) == 0) {
							var toggable = command.slice(0);
							toggable.pop();
							toggable.push(availableOperationOptions[x]);
							this.toggableCommands.push({
								command: toggable,
								description: awsim._GetOperationOptionDescription(command[0], command[1], availableOperationOptions[x])
							});
						}
					}
					descriptor.update(awsim._GetOperationDocumentation(command[0], command[1]));
					return;
				}
				else {
					currentOption = command[i];
				}
			}
			else {
				if (i == command.length - 1 && currentOption) {
					var availableOperationOptionValues = awsim._ListOperationOptionValues(command[0], command[1], currentOption);
					for (var x = 0; x < availableOperationOptionValues.length; x++) {
						if (availableOperationOptionValues[x].search(command[i]) == 0) {
							var toggable = command.slice(0);
							toggable.pop();
							toggable.push(availableOperationOptionValues[x]);
							this.toggableCommands.push({command:toggable});
						}
					}
					descriptor.update(awsim._GetOperationOptionDocumentation(command[0], command[1], currentOption));
					return;
				}
			}
		}
	}
}
