import { Server } from "socket.io";

const SocketHandler = (res, req) => {
  if (res.socket.server.io) {
    console.log("socket already running ");
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => {
      connect.log("server is connected");

      socket.on("join-room", (roomId, userId) => {
        console.log(`a new user ${userId} joined room ${userId}`);
        console.log("come to my zone");
        socket.join(roomId);
        socket.broadcast.to(roomId).emit("user-connected", userId);
      });
    });
  }
  res.send();
};

export default SocketHandler;
