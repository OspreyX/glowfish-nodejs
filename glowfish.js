var request = require('request'),
	fs = require('fs');

var endpoint = "https://api.glowfi.sh/v1/";
var Glower = function(sid, token){
	this.sid = sid;
	this.token = token;
	
	this.set_name 				= "default";
	
	this.fail_if_mistakes		= "false";
	this.delete_previous_data	= "false";
	this.save_data				= "false";
	this.stats					= "false";
	this.hold					= "false";
	this.update					= "false";
	
	this.max_number				= "-1";
	this.accuracy				= "false";
	this.group_max_number		= "-1";
}

Glower.prototype.train = function(data_set, response, callback){
	data_set = data_set || {};
	response = response || {};
	callback = callback || function(err, response){};

	this.request(endpoint + "train/", {
		"data_set": data_set,
		"response": response
	}, callback);
}

Glower.prototype.train_csv = function(data_set, response, callback){
	data_set = data_set || null;
	response = response || null;
	callback = callback || function(err, response){};

	this.request(endpoint + "train/csv/", {
		"data_set": {
			value: fs.createReadStream(data_set),
			options: {
				filename: "data_set.csv"
			}
		},
		"response": fs.createReadStream(response)
	}, callback);
}

Glower.prototype.predict = function(data_set, callback){
	data_set = data_set || {};
	callback = callback || function(err, response){};

	this.request(endpoint + "predict/", {
		"data_set": data_set
	}, callback);
}

Glower.prototype.predict_csv = function(data_set, callback){
	data_set = data_set || null;
	callback = callback || function(err, response){};

	this.request(endpoint + "predict/csv/", {
		"data_set": fs.createReadStream(data_set)
	}, callback);
}

Glower.prototype.cluster = function(data_set, callback){
	data_set = data_set || {};
	callback = callback || function(err, response){};

	this.request(endpoint + "cluster/", {
		"data_set": data_set
	}, callback);
}

Glower.prototype.cluster_csv = function(data_set, callback){
	data_set = data_set || null;
	callback = callback || function(err, response){};

	this.request(endpoint + "cluster/csv/", {
		"data_set": fs.createReadStream(data_set)
	}, callback);
}

Glower.prototype.feature_select = function(data_set, response, callback){
	data_set = data_set || {};
	response = response || {};
	callback = callback || function(err, response){};

	this.request(endpoint + "feature_select/", {
		"data_set": data_set,
		"response": response
	}, callback);
}

Glower.prototype.feature_select_csv = function(data_set, response, callback){
	data_set = data_set || null;
	response = response || null;
	callback = callback || function(err, response){};

	this.request(endpoint + "feature_select/csv/", {
		"data_set": fs.createReadStream(data_set),
		"response": fs.createReadStream(response)
	}, callback);
}

Glower.prototype.request = function(uri, form_data, callback){
	data = form_data || {};
	data['fail_if_mistakes'] = this.fail_if_mistakes;
	data['delete_previous_data'] = this.delete_previous_data;
	data['save_data'] = this.save_data;
	data['stats'] = this.stats;
	data['hold'] = this.hold;
	data['update'] = this.update;
	data['max_number'] = this.max_number;
	data['accuracy'] = this.accuracy;
	data['group_max_number'] = this.group_max_number;

	var glower = this;
	request.post({
		url: uri,
		formData: data,
		auth: {
			"user": glower.sid,
			"password": glower.token
		}
	}, function(err, response, body){
		if(!err){
			try {
				var json = JSON.parse(body);
				callback(null, json);
			} catch(e){
				console.log(body);
			}
		} else {
			callback(err, null);
		}
	});
}
	
module.exports = Glower;