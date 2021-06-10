const Command = require("../../structures/Command.js"),
    Discord = require("discord.js");
class gend extends Command {
    constructor(client) {
        super(client, {
            name: "gend",
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
        const messageID = args[0];
        if (!messageID) {
            return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription("<:error:851490719934840872> |  Please provide a valid message ID.").setAuthor("🎁 Giveaway System", this.client.user.displayAvatarURL()))

        }
        try {
            let toend = message.client.giveawaysManager.giveaways.find(g => g.messageID === messageID)
            if (toend) {
                message.client.giveawaysManager.edit(messageID, {
                    setEndTimestamp: Date.now()
                });
                const numberOfSecondsMax = message.client.giveawaysManager.options.updateCountdownEvery / 1000;
                return message.channel.send("⌚ Giveaway will be ended in " + numberOfSecondsMax + "s...")
            } else {
                return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription("<:error:851490719934840872> |  No giveaway found with this ID.").setAuthor("🎁 Giveaway System", this.client.user.displayAvatarURL()))

            }
        } catch (err) {

            return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription("<:error:851490719934840872> |  No giveaway found with this ID.").setAuthor("🎁 Giveaway System", this.client.user.displayAvatarURL()))

        }



    }

};

module.exports = gend;