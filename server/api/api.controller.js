exports.getRoot = function(req, res){
var data = "welcome to api";
return res.status(200).json(data); 
}

exports.getName = function(req, res){
    var data = "asinha";
    return res.status(200).json(data);
}