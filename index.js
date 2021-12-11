const { Message } = require("discord.js");

const util = require("util"),
fs = require("fs"),
readdir = util.promisify(fs.readdir),
mongoose = require("mongoose");
Discord = require("discord.js");

// Load ManageInvite class
const ManageInvite = require("./structures/Client"),
client = new ManageInvite();




const init = async () => {
  let a = await client.db.get('giveaways')
         if (a === null) await client.db.set('giveaways', []);
        
    // Search for all commands
    let directories = await readdir("./commands/");
    directories.forEach(async (dir) => {
        let commands = await readdir("./commands/"+dir+"/");
        commands.filter((cmd) => cmd.split(".").pop() === "js").forEach((cmd) => {
            const response = client.loadCommand("./commands/"+dir, cmd);
            if(response){
                client.logger.log(response, "error");
            }
        });
    });

    // Then we load events, which will include our message and ready event.
    const evtFiles = await readdir("./events/");
    evtFiles.forEach((file) => {
        const eventName = file.split(".")[0];
        const event = new (require(`./events/${file}`))(client);
        client.on(eventName, (...args) => event.run(...args));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
     const GFiles = await readdir("./giveaways-events/");
    console.log(`Loading a total of ${GFiles.length} events.`);
    GFiles.forEach((file) => {
        const eventName = file.split(".")[0];
        console.log(`Loading giveaways Event: ${eventName}`);
        const event = require(`./giveaways-events/${file}`);
        client.giveawaysManager.on(eventName, (...args) => event.execute(...args, client));
        delete require.cache[require.resolve(`./giveaways-events/${file}`)];
    });
    client.login(client.config.token); // Log in to the discord api

    // connect to mongoose database
    mongoose.connect(client.config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => {
        client.logger.log("Unable to connect to the Mongodb database. Error:"+err, "error");
    });

    // Gets commands permission
    client.levelCache = {};
    for (let i = 0; i < client.permLevels.length; i++) {
      const thisLevel = client.permLevels[parseInt(i, 10)];
      client.levelCache[thisLevel.name] = thisLevel.level;
    }

        

    client.on("shardReady", (shardID) => {
    
        if (shardID === 2){
                const poststats = async () => {
                    const BOATS = require('boats.js');
                    const fetch = require('node-fetch');
                let guildsCounts = await client.shard.fetchClientValues("guilds.cache.size");
                let guildsCountss = guildsCounts[0] + guildsCounts[1] + guildsCounts[2];
                fetch(`https://infinitybotlist.com/api/bots/577236734245470228/`, {
                    method: "POST",
                    headers: {
                        Authorization: "*****",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "servers": guildsCountss,
                        "shards": '1337'
                    })
                })
         }
         poststats();

        }
        const shardlog = new Discord.WebhookClient('756874584149459065', '**');
        const postMessage = `<:online:757044247269605386> | Shard #${shardID} is ready!`;
        shardlog.send(postMessage);
    });
    client.on("shardDisconnect", (shardID) => {
        const shardlog = new Discord.WebhookClient('756874584149459065', '**');
        const postMessage = `<a:loading:753232044485509268> | Shard #${shardID} is disconnected...`;
        shardlog.send(postMessage);
        
    });
    client.on("shardReconnecting", (shardID) => {
        const shardlog = new Discord.WebhookClient('756874584149459065', '**');
        const postMessage = `<:inactif:757044197336285252> | Shard #${shardID} is reconnecting...`;
        shardlog.send(postMessage);
    });
    client.on("shardResume", (shardID) => {
        const shardlog = new Discord.WebhookClient('756874584149459065', '**');
        const postMessage = `<:online:757044247269605386> | Shard #${shardID} has resumed!`;
        shardlog.send(postMessage);
    });
};
init();
   

// if there are errors, log them
client.on("disconnect", () => client.logger.log("Bot is disconnecting...", "warn"))
    .on("reconnecting", () => client.logger.log("Bot reconnecting...", "log"))
    .on("error", (e) => client.logger.log(e, "error"))
    .on("warn", (info) => client.logger.log(info, "warn"));

// if there is an unhandledRejection, log them
process.on("unhandledRejection", (err) => {
    console.error(err);
});
