const Command = require("../../structures/Command.js"),
Discord = require("discord.js");

class Infos extends Command {
    constructor (client) {
        super(client, {
            name: "infos",
            enabled: true,
            aliases: [ "info", "botinfo" ],
            clientPermissions: [ "EMBED_LINKS" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {

        let totalSeconds = (this.client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        let guildsCounts = await this.client.shard.fetchClientValues("guilds.cache.size");
        let guildsCount = guildsCounts.reduce((p, count) => p + count);
        let channelsCounts = await this.client.shard.fetchClientValues("channels.cache.size");
        let channelsCount = message.client.channels.cache.size
        let usersCounts = await this.client.shard.fetchClientValues("users.cache.size");
        let usersCount = message.client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)
        let title = message.language.infos.statistics.title(this.client.shard.ids[0], false);
        
        let results = await this.client.shard.broadcastEval(() => {
            return [
                Math.round((process.memoryUsage().heapUsed / 1024 / 1024)),
                this.guilds.cache.size,
                this.channels.cache.size,
                this.shard.ids[0],
                Math.round(this.ws.ping)
            ];
        });

        let embed = new Discord.MessageEmbed()
        .setColor(data.color)
        .setFooter(data.footer)
        .setTitle(message.language.infos.title())
        .setDescription(message.language.infos.content(message.guild.name, data.guild.prefix))
        .setAuthor("InviteCount | v1.5.0", this.client.user.displayAvatarURL())
        .addField(message.language.infos.dev.title(), message.language.infos.dev.content(uptime), true)
        .addField(title, message.language.infos.statistics.content(guildsCount, channelsCount, usersCount), false)
        .addField(message.language.infos.link.title(), message.language.infos.link.content(), false)

        message.channel.send(embed);
    }

};

module.exports = Infos;