const http = require('http');
http.createServer(function(req,res){
	res.write("WOLF BITCHING BIIITCH");
	res.end();
}
).listen(3000);

console.log("WOLV biiitCHing on port 3000");
