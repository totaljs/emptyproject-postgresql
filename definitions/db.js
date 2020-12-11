require('dbms').init(CONF.database, ERROR('DBMS'));

// Audit logs
DBMS.audit(function($, data, code) {

	var model = {};
	model.schema = $.ID;                      // e.g. Products.insert

	if ($.user) {
		model.userid = $.user.id;
		model.user = $.user.name;
	}

	// model.role = $.user.role;
	model.code = code;                        // custom code
	model.ua = $.ua;                          // user-agent obtained from the schema
	model.ip = $.ip;                          // IP address
	model.dtcreated = NOW = new Date();

	if (data) {
		data.password = undefined;
		model.data = JSON.stringify(data);   // Data serialized to JSON
	}

	this.insert('tbl_log', model).nobind();  // .nobind() means that the result won't be added to response object
});