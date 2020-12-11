ON('ready', function() {

	// Loads configuration after the application is ready to use
	FUNC.refresh_config();

});

ON('service', function(counter) {

	// Configuration will be reloaded each 20 minutes
	if (counter % 20 === 0)
		FUNC.refresh_config();

});