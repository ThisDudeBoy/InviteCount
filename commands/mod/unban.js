const Command = require("../../structures/Command.js"),
Discord = require("discord.js");

class UnBan extends Command {
    constructor (client) {
        super(client, {
            name: "unban",
            enabled: true,
            aliases: [],
            clientPermissions: [ "EMBED_LINKS" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(message.language.kick.errors.missingPerms);
       
        let banneduser = args.slice(0).join(" ");
        if (!banneduser || isNaN(banneduser) || banneduser.length !== 18) {
            return message.channel.send(message.language.unban.noid);
        }

        const banned = await message.guild.fetchBans();
		if(!banned.some((e) => e.user.id === banneduser)){
			return message.channel.send(message.language.unban.noban)
		}

        message.guild.members.unban(banneduser)
        .then(user => {
            const debanembed = new Discord.MessageEmbed()
            .setColor(data.color)
            .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL())
            .setDescription(message.language.unban.success(user.tag))
            .setFooter(data.footer)
            message.channel.send(debanembed);
        })
        .catch(console.error);

    }
}

module.exports = UnBan;