const Command = require("../../structures/Command.js"),
Discord = require("discord.js");

class Test extends Command {

    constructor (client) {
        super(client, {
            name: "test",
            enabled: true,
            aliases: [  ],
            clientPermissions: [ "EMBED_LINKS" ],
            permLevel: 4
        });
    }

    async run (message, args, data) {
        var channel = message.mentions.channels.first();
        if (channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')){
            message.reply("Perm oui");
        }else {
            message.reply("Not Perm");
        }
    }

}

module.exports = Test;