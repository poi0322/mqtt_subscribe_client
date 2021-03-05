require('log-timestamp');
var mqtt = require('mqtt');

var client = mqtt.connect("mqtt://localhost:1883", {
        username: 'guest',
        password: 'guest',
        protocolId: 'MQIsdp',
        protocolVersion: 3
    }
);

client.subscribe('message');

client.on('message', function (topic, message) {
    console.log(message.toString());
});

client.on('connect', function () {
    console.log("Connected");
});

client.on('error', function () {
    console.log("error occurred");
});
