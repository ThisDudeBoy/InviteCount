const Command = require("../../structures/Command.js"),
Discord = require("discord.js");

class Support extends Command {
    constructor (client) {
        super(client, {
            name: "support",
            enabled: true,
            aliases: [ "s" ],
            clientPermissions: [ "EMBED_LINKS" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {

        let embed = new Discord.MessageEmbed()
        .setAuthor("InviteCount", this.client.user.displayAvatarURL())
        .setDescription(message.language.support.content(this.client.user.id))
        .setColor(this.client.config.color)
        .setFooter(message.language.support.requested(message.author.username), message.author.displayAvatarURL());
        message.channel.send(embed);

    }

};

module.exports = Support;