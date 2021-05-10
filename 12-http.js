const http = require("http");

const server = http.createServer((request, response) => {
	if (request.url === "/") {
		response.write("Hello World");
		response.end();
		// response.end("Hello World"); // shorter and alternative syntax
	}
	if (request.url === "/about") {
		response.write("A short history...");
		response.end();
		// response.end("A short history..."); // shorter and alternative syntax
	}
	response.end(
		`<h1>Oops, something went wrong!</h1><p>This is not the page that you are looking for.</p><a href="/">Back to home page</a>`
	);
});

server.listen(5000); // run server on port number: 5000
