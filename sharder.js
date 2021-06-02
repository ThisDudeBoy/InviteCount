const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./index.js", {
    token: require("./config").token,
    totalShards: 1,
    shardArgs: process.argv
});

manager.on('shardCreate', shard => console.log(`InviteCount Shard #${shard.id} lauched !`));
manager.spawn();
