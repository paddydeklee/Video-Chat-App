"use srtict";

// 1 require packages
var http = require("http"),
	express = require("express");

// 1 create 
const app = express();
app.set("view engine", "jade");

// 2 middleware pipeline
app.use((request, response, next) =>{
	console.log("In middleware 1");
	next();
	console.log("out of middleware 1");
});

app.use(express.static("./public"));

app.use((request, response, next) => {
	console.log("---- In middleware 2");
	next();
	console.log("---- out of middleware 2");
});

// 2 end response
app.get("/", (request, response) => {
	response.end("Hello world");
});

// 1 listen on server - check server is listening
const server = new http.Server(app);

const port = 3000;
server.listen(port, () => {
	console.log(`server started on ${port}`);
});

// 2 use template engine
// testing commits
