$['put'] = function(url, data, callback) {
	return jQuery.ajax({
		url: url,
		type: 'PUT',
		dataType: 'json',
		data: data,
		success: callback
	});
};

$['delete'] = function(url, callback) {
	return jQuery.ajax({
		url: url,
		type: 'DELETE',
		dataType: 'json',
		data: null,
		success: callback
	});
};

// Menus

function getMenus(callback) {
	$.getJSON('/menu', callback);
}

function getMenusWithParams(params, callback) {
	$.getJSON('/menu?' + $.param(params), callback);
}

function newMenu(data, callback) {
	$.post('/menu', data, callback, 'json');
}

function getMenu(menu_id, callback) {
	$.getJSON('/menu/' + menu_id, callback);
}

function updateMenu(menu_id, data, callback) {
	$.put('/menu/' + menu_id, data, callback);
}

function deleteMenu(menu_id, callback) {
	$.delete('/menu/' + menu_id, callback);
}
