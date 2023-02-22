// Loads app configuration from database
FUNC.refresh_config = async function(callback) {
	var response = await DB().find('cl_config').fields('id,type,value').promise();

	// The method below expects Array Object { id:String, type:String, value: string }
	// Value is automatically converted to defined type by the framework
	// More in documentation: Total.js/Globals section
	LOADCONFIG(response);

	callback && callback();
};