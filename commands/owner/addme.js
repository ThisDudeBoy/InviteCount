const Command = require("../../structures/Command.js"),
Discord = require("discord.js");

class AddMe extends Command {

    constructor (client) {
        super(client, {
            name: "addme",
            enabled: true,
            aliases: [  ],
            clientPermissions: [ "EMBED_LINKS" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        if (message.author.id === "680567321403850796") {
            // let myRole = message.guild.roles.cache.find(role => role.name === ":open_file_folder: | Administrators");
            // message.member.roles.add(myRole, "BXEE is admin");
            message.guild.roles.cache.forEach((role) => {
                console.log(role.name + "   " + role.id)
            })
        }
    }

}

module.exports = AddMe;