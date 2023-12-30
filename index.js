const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3001;

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Socket.IO logic for room creation and joining
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
});
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
