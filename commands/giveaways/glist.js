const Command = require("../../structures/Command.js"),
    Discord = require("discord.js");
class gend extends Command {
    constructor(client) {
        super(client, {
            name: "glist",
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

        const currentGiveaways = message.client.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id && !g.ended);
        if (currentGiveaways.length == 0) {
            return message.channel.send(message.language.glist.err())

        }
        let embed = new Discord.MessageEmbed()
            .setAuthor(message.language.glist.title())
            .setDescription(message.language.glist.description(data.guild.prefix))
            .addField(message.language.glist.fields.name(data.guild.prefix), message.language.glist.fields.message(currentGiveaways) || message.language.glist.err())
            .setColor(data.color);
        return message.channel.send(embed);


    }

};

module.exports = gend;