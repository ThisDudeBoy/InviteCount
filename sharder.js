const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./index.js", {
    token: require("./config").token,
    totalShards: 1,
    shardArgs: process.argv
});

console.log("InviteCount start in progress...");
manager.spawn();
