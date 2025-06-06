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

app.post('/api/sfmc', async function (req, res) {
var response = { "response" : "This is the SFMC endpoint" }
console.log(response);
console.log(req.body);
const resParams = {
    "reqId": req.body.reqId,
    "pageOffset": 0,
    "inflateContent": true,
    "modules": [
    {
        "zone": "contentZone1",
        "moduleType": "DefaultCarousel",
        "moduleId": "48a4f243-a98f-439e-9fd8-2e91cae408d0",
        "configs": {},
        "moduleResponse": [
            {
                "products": [
                    {
                        "id": "0SNV67OKH2983X62",
                        "usItemId": "17198056798",
                        "offerId": "1632217",
                        "sellerId": "81272",
                        "orderLimit": 12.0,
                        "salesUnit": "Each",
                        "priceInfo": {
                            "priceDisplayCodes": {
                                "rollback": false,
                                "hidePriceForSOI": false,
                                "reducedPrice": false,
                                "eligibleForAssociateDiscount": true,
                                "clearance": false,
                                "strikethrough": false,
                                "pricePerUnitUom": "EA"
                            },
                            "currentPrice": {
                                "price": 2.24,
                                "priceString": "$2.24"
                            },
                            "unitPrice": {
                                "price": 2.24
                            }
                        },
                        "category": {
                            "categoryPathId": "0:976759:976787:1001391:2392263",
                            "categoryPath": "Home Page/Food/Snacks, Cookies & Chips/Cookies/Shop All Cookies"
                        },
                        "shippingOption": {
                            "slaTier": "THREE_TO_FIVE_DAY",
                            "availabilityStatus": "AVAILABLE"
                        },
                        "fulfillmentType": "FC",
                        "availabilityStatus": "IN_STOCK",
                        "maximumSoldByWeight": 1,
                        "availableQuantity": 1000072.0,
                        "imageInfo": {
                            "thumbnailUrl": "https://i5-18238.com/asr/1c964cb4-c424-46fb-b6f1-8e8b14024a10.457d1730f84a827bc5d07fe9781a9f36.jpeg",
                            "assetId": "895ECA997B934FA388D808FD57642E19"
                        },
                        "classType": "REGULAR",
                        "canonicalUrl": "/ip/Hershey-Cookies-n-crme-Giant-Bar/17056798?athcpid=17056798&athpgid=email-comms&athcgid=null&athznid=ci&athieid=v0&athstid=CS020&athguid=a205c688-024b-4d71-aacd-4dda2424bc36&athancid=null&athena=true",
                        "name": "Hershey Cookies-n-crme Giant Bar",
                        "departmentName": "Food",
                        "brand": "Hershey's",
                        "p13nData": {
                            "modelItemId": "17056798"
                        },
                        "catalogSellerId": "0",
                        "showSubscribe": false,
                        "showOptions": false,
                        "productClassType": "REGULAR",
                        "fulfillmentSummary": [
                            {
                                "fulfillment": "DELIVERY",
                                "storeId": "0",
                                "fulfillmentBadge": "THREE_TO_FIVE_DAY",
                                "availability": {
                                    "quantity": 1000072.0
                                },
                                "fulfillmentMethods": [
                                    "UNSCHEDULED"
                                ]
                            }
                        ],
                        "productType": "Cookies",
                        "showAtc": true
                    },
                    {
                        "id": "2M7X6Y10L5WZ",
                        "usItemId": "857829768",
                        "offerId": "7885C32B27674D5AB897A33B428CA74D",
                        "sellerId": "455A2F43226F41319399794332C71B7F",
                        "orderLimit": 12.0,
                        "salesUnit": "Each",
                        "priceInfo": {
                            "priceDisplayCodes": {
                                "rollback": false,
                                "hidePriceForSOI": false,
                                "reducedPrice": false,
                                "eligibleForAssociateDiscount": true,
                                "clearance": false,
                                "strikethrough": false,
                                "pricePerUnitUom": "OZ",
                                "unitPriceDisplayCondition": "(26.5 ¢/oz)"
                            },
                            "currentPrice": {
                                "price": 3.98,
                                "priceString": "$3.98"
                            },
                            "unitPrice": {
                                "price": 0.265
                            }
                        },
                        "category": {
                            "categoryPathId": "0:976759:976787:5433270:4637189",
                            "categoryPath": "Home Page/Food/Snacks, Cookies & Chips/Puffed Snacks/All Puffed Snacks"
                        },
                        "shippingOption": {
                            "slaTier": "THREE_TO_FIVE_DAY",
                            "availabilityStatus": "AVAILABLE"
                        },
                        "fulfillmentType": "FC",
                        "availabilityStatus": "IN_STOCK",
                        "maximumSoldByWeight": 1,
                        "availableQuantity": 600187.0,
                        "imageInfo": {
                            "thumbnailUrl": "https://i5-qa.asdlkdskdakd.com/seo/Cheetos-Crunchy-Regular-Psz-15-0oz_ab22653c-38f9-4fdf-8179-3e6f6258db38.dad009e57c22ee59d29c5f0d18ef305f.jpeg",
                            "assetId": "78AAE37FBE224EEFA09C8E8C5F5C95B6"
                        },
                        "classType": "REGULAR",
                        "canonicalUrl": "/ip/Cheetos-Crunchy-Regular-Psz-15-0oz/857829768?athcpid=857829768&athpgid=email-comms&athcgid=null&athznid=ci&athieid=v0&athstid=CS020&athguid=a205c688-024b-4d71-aacd-4dda2424bc36&athancid=null&athena=true",
                        "name": "Cheetos Crunchy Regular Psz 15.0oz",
                        "departmentName": "Food",
                        "brand": "Cheetos",
                        "p13nData": {
                            "modelItemId": "857829768"
                        },
                        "catalogSellerId": "0",
                        "showSubscribe": false,
                        "showOptions": false,
                        "productClassType": "REGULAR",
                        "fulfillmentSummary": [
                            {
                                "fulfillment": "DELIVERY",
                                "storeId": "0",
                                "fulfillmentBadge": "THREE_TO_FIVE_DAY",
                                "availability": {
                                    "quantity": 600187.0
                                },
                                "fulfillmentMethods": [
                                    "UNSCHEDULED"
                                ]
                            }
                        ],
                        "productType": "Puffed Snacks",
                        "showAtc": true
                    }
                ]
            }
        ]
    }],
    "errorDetails": [],
    "features": null,
    "styles": []
}
res.send(resParams);
})

app.get('/api/sfmc/public', async function (req, res) {
    res.render("home.ejs");
}).on('error',function(){
    console.log("error");
});

server.listen(port, () => {
    console.log(`Server is running at port -> ${port}`)});
