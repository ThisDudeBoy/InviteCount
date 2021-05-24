const Discord = require("discord.js");

module.exports = class {
    constructor (client) {
        this.client = client;
    }

    async run (channel) {
        let guildData = await this.client.findOrCreateGuild({ id: channel.guild.id });

        if (channel.id === guildData.join.channel) {
            guildData.join.enabled = false;
            guildData.markModified("join");
            await guildData.save();
        } else if (channel.id === guildData.leave.channel) {
            guildData.leave.enabled = false;
            guildData.markModified("leave");
            await guildData.save();
        }
    }

}