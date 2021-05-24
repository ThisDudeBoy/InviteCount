const Command = require("../../structures/Command.js"),
Discord = require("discord.js");

class Help extends Command {
    constructor (client) {
        super(client, {
            name: "help",
            enabled: true,
            aliases: [ "h", "aide" ],
            clientPermissions: [ "EMBED_LINKS" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
   
        let embed = new Discord.MessageEmbed()
            .setTitle(message.language.help.title())
            .setDescription(message.language.help.description(message.guild.name, data.guild.prefix))
            .addField(message.language.help.admin.title(), message.language.help.admin.content(data.guild.prefix))
            .addField(message.language.help.moderation.title(), message.language.help.moderation.content(data.guild.prefix))
            .addField(message.language.help.ranks.title(), message.language.help.ranks.content(data.guild.prefix))
            .addField(message.language.help.joinDM.title(), message.language.help.joinDM.content(data.guild.prefix));

            embed.addField(message.language.help.join.title(), message.language.help.join.content(data.guild.prefix))
            .setColor(data.color)
            .setFooter(data.footer);

        message.channel.send(embed);
    }
}

module.exports = Help;