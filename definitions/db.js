require('dbms').init(CONF.database, ERROR('DBMS'));

// Loads app configuration from database
FUNC.refresh_config = function(callback) {
	DBMS().find('cl_config').fields('id,type,value').data(function(response) {

		// The method below expects Array Object { id:String, type:String, value: string }
		// Value is automatically converted to defined type by the framework
		// More in documentation: Total.js/Globals section
		LOADCONFIG(response);

		callback && callback();
	});
};

ON('ready', function() {

	// Loads configuration after the application is ready to use
	FUNC.refresh_config();

});

ON('service', function(counter) {

	// Configuration will be reloaded each 20 minutes
	if (counter % 20 === 0)
		FUNC.refresh_config();

});