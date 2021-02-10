var http = require('http');

function on_Requets(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Piss off !!');
	response.end();


}

http.createServer(on_Requets).listen(7777);
