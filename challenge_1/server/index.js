const jsonServer = require("json-server");
const server = jsonServer.create(); // Returns an Express server, per doc
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Newly added, to serve static assets in public folder
const express = require("express");
server.use(express.static(__dirname + "/public"));

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running, at port 3000");
});