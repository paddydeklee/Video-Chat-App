"use strict";

// 1 require packages
var http = require("http"),
	express = require("express"),
	socketIo = require("socket.io");

// 1 create 
const app = express();
app.set("view engine", "jade");

app.use(express.static("./public"));

// 2 end response
app.get("/", (request, response) => {
	response.end("Hello world");
});

app.get("/home", (request, response) => {
	response.render("index", {title: "TITLE"});
});

// 1 listen on server - check server is listening
const server = new http.Server(app);
const io = socketIo(server);

io.on("connection", socket => {
	console.log("Client A connected!");
	socket.on("chat:add", data => {
		console.log(data);
		io.emit("chat:added", data);
	});
});

const port = 3000;
server.listen(port, () => {
	console.log(`server started on ${port}`);
});

// 2 use template engine
// testing commits
// hi from paddy's mac book pro