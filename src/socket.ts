import WebSocket from "ws";

const ws = new WebSocket("wss://localhost", { rejectUnauthorized: false });

ws.on("open", () => {
  console.log("Connected to WSS");
  ws.send("Hello from client");
});

ws.on("message", (msg) => {
  console.log("Received:", msg.toString());
});

ws.on("close", () => console.log("Closed connection"));
