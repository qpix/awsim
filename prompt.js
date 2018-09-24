var prompt = document.getElementById('prompt');
prompt.commandHistory = [];
prompt.commandHistoryPointer = 0;
prompt.addEventListener('keyup', function (event) {
	if (event.keyCode == 13) {
		promptText.style.display = 'none';
		this.readonly = true;
		suggester.update(['']);
		suggester.print();
		output.print('aws&gt; '+ prompt.value);

		var command = CreateCommandArray(this.value);
		this.value = '';
		this.commandHistory.unshift(command);
		setTimeout(function () {
			output.print(awsim._ExecuteCommand(command));
			promptText.style.display = 'inline-block';
			this.readonly = false;
		}, 2500);
	}
	else if (event.keyCode == 38) {
		if (this.value == '' || this.commandHistoryPointer >= 0) {
			this.commandHistoryPointer += 1;
			if (this.commandHistoryPointer == this.commandHistory.length)
				this.commandHistoryPointer -= 1;
			this.value = this.commandHistory[this.commandHistoryPointer].join(' ');
		}
		else {
			this.value = suggester.GoUp();
		}
	}
	else if (event.keyCode == 40) {
		if (this.commandHistoryPointer >= 0) {
			this.commandHistoryPointer -= 1;
			if (this.commandHistoryPointer < 0)
				this.value = '';
			else
				this.value = this.commandHistory[this.commandHistoryPointer].join(' ');
		}
		else {
			this.value = suggester.GoDown();
		}
	}
	else {
		this.commandHistoryPointer = -1;
		suggester.update(CreateCommandArray(this.value));
	}
	suggester.print();
});
