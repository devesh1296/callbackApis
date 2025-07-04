const axios = require('axios');
const uuid = require('uuid');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const http = require('http');
const cors = require('cors');
const {Server} = require("socket.io");
app.set("view engine","ejs");
app.use(express.static("public"));

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

let port = 3001;

app.get("/", async function (req, res) {
    res.send("OK");
})

app.post('/api/1.0/posts/:postId/messages', async function (req, res) {
console.log("In postId");
console.log(req.body);
var response = { "response" : "This is messages POST method for response from DFO(MAX)." }
console.log(response);
const resParams = {
    "id": req.body.id,
    "parentId": req.body.id,
    "postId": req.body.post.channelId,
    "isOwn": false,
    "messageId": req.body.replyToMessageId,
    "idOnExternalPlatform": req.body.replyToMessageIdOnExternalPlatform,
    "channelId": req.params.postId,
    "channel": {
        "id": req.params.postId,
        "originId": "",
        "type": "chat"
    },
    "createdAtIso": Date.now(),
    "receivedAt": Date.now(),
    "createdAt": Date.now(),
    "originCreatedAt": Date.now(),
    "title": req.body.title,
    "content": req.body.content,
    "sentiment": "neutral"
}
res.send(resParams);
})

app.post('/api/vccChat/agent/concludeChat', async function (req, res) {
console.log("In postId");
console.log(req.body);
var response = { "response" : "This is messages POST method for conclude chat." }
console.log(response);
const resParams = {
    "id": req.case.caseNumber,
    "threadId": req.threadId,
    "messageId": req.replyToMessageId,
    "skillId": req.skill.skillId,
    "channelId": req.post.channelId,
    "channel": {
        "id": req.post.channelId,
        "originId": "",
        "type": "chat"
    },
    "agentDetail": {
    "agentId": req.agentDetail.agentId,
    "agentName": req.agentDetail.agentName
    }
}
res.send(resParams);
})

app.post('/api/execute', async function (req, res) {
var str = "This is the SFMC execute endpoint"
console.log(str);
console.log(req.body);
const resParams = {foundSignupDate: "2023-10-01T00:00:00Z"}
res.send(resParams);
})

app.post('/api/save', async function (req, res) {
    var str = "This is the SFMC save endpoint"
    console.log(str);
    console.log(req.body);
    const resParams = "Saved"
    res.send(resParams);
})

app.post('/api/publish', async function (req, res) {
    var str = "This is the SFMC publish endpoint"
    console.log(str);
    console.log(req.body);
    const resParams = "Published"
    res.send(resParams);
})

server.listen(port, () => {
    console.log(`Server is running at port -> ${port}`)});
