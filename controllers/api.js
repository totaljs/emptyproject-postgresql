exports.install = function() {

	ROUTE('GET     /', index);

	// Products
	ROUTE('GET     /api/products/        *Products --> list');
	ROUTE('GET     /api/products/{id}/   *Products --> read');
	ROUTE('POST    /api/products/        *Products --> create');
	ROUTE('PUT     /api/products/{id}/   *Products --> update');
	ROUTE('DELETE  /api/products/{id}/   *Products --> remove');

};

function index() {
	this.plain('PostgreSQL API example');
}