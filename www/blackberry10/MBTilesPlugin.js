/*
Declaration of the variable MBTilesPlugin to have acces to the plugin
*/
var MBTilesPlugin = function()
{
};

/*
function open
open the given database sqlite
params : {name : 'name of database', type : 'file' or 'db'}
return : success or error callback
*/
MBTilesPlugin.prototype.open = function(input, onSuccess, onError)
{
	return cordova.exec(onSuccess, onError, "com.makina.offline.mbtiles", "open",  {input: [input]});
};

/*
function getMetadata
get the metadata of the database opened
return : success or error callback
*/
MBTilesPlugin.prototype.getMetadata = function(onSuccess, onError)
{
	return cordova.exec(onSuccess, onError, "com.makina.offline.mbtiles", "get_metadata", {input: []});
};

/*
function getMinZoom
get the min zoom of the database opened
return : success or error callback
*/
MBTilesPlugin.prototype.getMinZoom = function(onSuccess, onError)
{
	return cordova.exec(onSuccess, onError, "com.makina.offline.mbtiles", "get_min_zoom", {input: []});
};

/*
function getMaxZoom
get the max zoom of the database opened
return : success or error callback
*/
MBTilesPlugin.prototype.getMaxZoom = function(onSuccess, onError)
{
	return cordova.exec(onSuccess, onError, "com.makina.offline.mbtiles", "get_max_zoom", {input: []});
};

/*
function getTile
get tile in base 64 of the database opened with params
params : {z:'z', x:'x', y:'y'} // coord
return : success or error callback
*/
MBTilesPlugin.prototype.getTile = function(input, onSuccess, onError)
{
	return cordova.exec(onSuccess, onError, "com.makina.offline.mbtiles", "get_tile", {input: [input]});
};

/*
function exectuteStatment
execute query in the database opened
params : {query:'query', params:{'param', 'param', 'param'}} 
return : success or error callback
*/
MBTilesPlugin.prototype.exectuteStatment = function(input, onSuccess, onError)
{
	return cordova.exec(onSuccess, onError, "com.makina.offline.mbtiles", "execute_statment", {input: [input]});
};
	
module.exports = MBTilesPlugin;
