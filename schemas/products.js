NEWSCHEMA('Products', function(schema) {

	schema.define('name', 'String(50)', true);
	schema.define('price', Number);

	schema.setQuery(function($) {

		// Performs automatically pagination, sort and all checks
		DBMS().list('tbl_product').autofill($, 'dtcreated:Date,dtupdated:Date', 'id', 'dtcreated_desc', 50);

		// Or you can use a simple query via:
		// DBMS().find('tbl_product').callback($.callback);

	});

	schema.setRead(function($) {

		// Performs query
		// 404 error will be returned if the no records won't be updated
		DBMS().read('tbl_product').id($.id).error(404).callback($.callback);

	});

	schema.setInsert(function($, model) {

		// Assigns additional values
		model.id = UID();
		model.dtcreated = new Date();

		// Performs query
		DBMS().insert('tbl_product').audit($, model).callback($.done());

	});

	schema.setUpdate(function($, model) {

		// Assigns additional values
		model.dtupdated = new Date();

		// Performs query
		// 404 error will be returned if the no records won't be updated
		DBMS().modify('tbl_product').id($.id).audit($, model).error(404).callback($.done());

	});

	schema.setRemove(function($) {

		// 404 error will be returned if the no records won't be updated
		DBMS().remove('tbl_product').id($.id).audit($).error(404).callback($.done());

	});

});