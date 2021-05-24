const Command = require("../../structures/Command.js"),
Discord = require("discord.js");

class Credits extends Command {
    constructor (client) {
        super(client, {
            name: "credits",
            enabled: true,
            aliases: [ ],
            clientPermissions: [ "EMBED_LINKS" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {

        let embed = new Discord.MessageEmbed()
        .setColor(data.color)
        .setFooter(data.footer)
        .setTitle(message.language.credits.title())
        .setDescription(message.language.credits.content(message.guild.name, data.guild.prefix))
        .setAuthor("InviteCount | v1.5.0", this.client.user.displayAvatarURL())
        .addField(message.language.credits.dev.title(), message.language.credits.dev.content(), true)
        .addField(message.language.credits.statistics.title(), message.language.credits.statistics.content(), false)
        .addField(message.language.credits.link.title(), message.language.credits.link.content(), false)

        message.channel.send(embed);
    }

};

module.exports = Credits;