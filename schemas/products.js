NEWSCHEMA('Products', function(schema) {

	schema.action('list', {
		name: 'List of products',
		action: function($) {
			// Performs pagination automatically, sort and all checks
			DATA.list('tbl_product').autoquery($.query, 'id:String, name:String, price:Number, dtcreated:Date, dtupdated:Date', 'dtcreated_desc', 50).callback($);
			// Or you can use a simple query via:
			// DB().find('tbl_product').callback($);
		}
	});

	schema.action('read', {
		name: 'Read product',
		params: '*id:String',
		action: async function($) {

			var params = $.params;

			// Performs query
			// An error will be returned if no records cannot be read
			var item = await DATA.read('tbl_product').id(params.id).error('@(Product not found)').promise($);

			$.callback(item);
		}
	});

	schema.action('create', {
		name: 'Create product',
		input: '*name:String, *price:Number',
		action: function($, model) {

			// Assigns additional values
			model.id = UID();
			model.dtcreated = new Date();

			// Performs query
			DATA.insert('tbl_product', model).callback($.done(model.id));
		}
	});

	schema.action('update', {
		name: 'Update product',
		input: '*name:String, *price:Number',
		params: '*id:String',
		action: function($, model) {

			var params = $.params;

			// Assigns additional values
			model.dtupdated = new Date();

			// Performs update
			// An error will be returned if no records cannot be udpated
			DATA.modify('tbl_product', model).id(params.id).error('@(Product not found)').callback($.done(params.id));
		}
	});

	schema.action('remove', {
		name: 'Remove product',
		params: '*id:String',
		action: async function($) {

			var params = $.params;

			// An error will be returned if no records cannot be removed
			DATA.remove('tbl_product').id(params.id).error('@(Product not found)').callback($.done(params.id));
		}
	});

});