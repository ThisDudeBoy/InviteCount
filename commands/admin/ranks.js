const Command = require("../../structures/Command.js"),
Discord = require("discord.js"),
stringSimilarity = require("string-similarity");

class Ranks extends Command {
    constructor (client) {
        super(client, {
            name: "ranks",
            enabled: true,
            aliases: [ "ra" ],
            clientPermissions: [ "EMBED_LINKS" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        return message.channel.send("**Reward Roles** when someone invites x people feature has been disabled because it’s against discord ToS.\nSo you are no longer able to automatically add a role to a member when he reaches x invites.\nNeed more informations ? https://discord.gg/f7f2P2q");
        let embed = new Discord.MessageEmbed()
        .setColor(data.color)
        .setFooter(data.footer);

        let ranks = data.guild.ranks.sort((a,b) => b.inviteCount - a.inviteCount);
        if(ranks.length === 0){
            embed.setAuthor(message.language.ranks.no.title())
            .setDescription(message.language.ranks.no.description(data.guild.prefix));
            return message.channel.send(embed);
        }

        let description = message.language.ranks.description()+"\n\n";
        ranks.forEach((rank) => {
            let role = message.guild.roles.cache.get(rank.roleID);
            if(!role) return;
            description += message.language.ranks.formatRank(role, rank.inviteCount);
        });

        embed.setAuthor(message.language.ranks.title(message.guild.name))
        .setDescription(description);
        message.channel.send(embed);
    }

};

module.exports = Ranks;