const Command = require("../../structures/Command.js"),
    Discord = require("discord.js");
class GiveawayReroll extends Command {
    constructor(client) {
        super(client, {
            name: "glogs",
            enabled: true,
            aliases: [],
            clientPermissions: ["EMBED_LINKS"],
            permLevel: 0
        });
    }

    async run(message, args, data) {
        if (!message.member.permissions.has("MANAGE_GUILD")) {
            return message.channel.send(message.language.errors.perms());
        }
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])

        if (!channel) return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription(message.language.configjoin.errors.channelNotFound(args[0])).setAuthor("🎁 Giveaway System", this.client.user.displayAvatarURL()))


        if (channel.type === "category") {
            return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription(message.language.configjoin.errors.channelNotFound(args[0])).setAuthor("🎁 Giveaway System", this.client.user.displayAvatarURL()))
        }
        if (channel.type === "voice") {
            return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription(message.language.configjoin.errors.channelNotFound(args[0])).setAuthor("🎁 Giveaway System", this.client.user.displayAvatarURL()))
        }

        data.guild.glogs = channel.id;
        await data.guild.save();
        message.channel.send(message.language.glogs.success());



    }

};

module.exports = GiveawayReroll;