function Sprint() {
	this.name = ko.observable('');
	this.dates = ko.observableArray([]);
	this.finishedList = ko.observable('');
	this.lists = ko.observableArray([]);
	this.standupMeeting = ko.observable();
};

function SprintDayDefinition(data) {
	this.day = ko.observable(data.day);
	this.isWorkDay = ko.observable(data.isWorkDay);
}

function SprintViewModel() {
	// Data
	var self = this;
	self.sprint = new Sprint();
	self.currentList = ko.observable('');
	// Operations
	self.addSprint = function() {
		// add here
		alert("did it");
		// reset
		self.sprint = new Sprint();
	};

	self.addSprintDay = function(date, isWorkDay, isActive) {
		self.sprint.dates.push(new SprintDayDefinition({ day: date, isWorkDay: isWorkDay }));
	};

	self.clearDays = function() {
		self.sprint.dates.removeAll();
	};

	self.addSprintList = function() {
		self.sprint.lists.push({ name: self.currentList() });
		self.currentList("");
	};

	self.removeSprintList = function(sprintList) {
		self.sprint.lists.remove(sprintList);
	};
};

var sprintViewModel = new SprintViewModel();
ko.applyBindings(sprintViewModel);