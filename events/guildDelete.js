const Discord = require("discord.js");

module.exports = class {
    constructor (client) {
        this.client = client;
    }

    async run (guild) {

        let inviter = null;

        // Wait 2 seconds to be sure that a request have been sent to the dashboard
        await this.client.wait(2000);
        let knownGuild = this.client.knownGuilds.find((g) => g.id === guild.id);
        if(knownGuild){
            inviter = await this.client.users.fetch(knownGuild.user);
        } else {
            inviter = await this.client.users.fetch(guild.ownerID);
        }

        const guildDelete = JSON.stringify(new Discord.MessageEmbed()
        .setTitle("`➖` Serveur quitté !")
        .setDescription("<:cancel:739529403179991073> Malheureusement quelqu'un m'a expulsée sur **" + guild.name +"**.")
        .addField("• <:invites:756168551731036402> **Nom:**", guild.name) 
        .addField("• <:couronne:757208730239631370> **Propriétaire:** ", guild.owner.user.tag)
        .addField("• <:idguildjoin:745383975547306084> **ID du serveur:** ", guild.id)
        .addField("• <:memberguild:745388686337638460> **Membres:** ", guild.memberCount)
        .setColor("d90e0b")).replace(/[\/\(\)\']/g, "\\$&");

        let { removeLogs } = this.client.config;
        this.client.shard.broadcastEval(`
            let rLogs = this.channels.cache.get('${removeLogs}');
            if(rLogs) rLogs.send({ embed: JSON.parse('${guildDelete}')});
        `);
        
    }
};




      

      
