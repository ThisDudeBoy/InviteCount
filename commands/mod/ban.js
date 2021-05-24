const Command = require("../../structures/Command.js"),
Discord = require("discord.js");

class Ban extends Command {
    constructor (client) {
        super(client, {
            name: "ban",
            enabled: true,
            aliases: [],
            clientPermissions: [ "EMBED_LINKS" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(message.language.ban.errors.missingPerms);
        const member = message.mentions.members.first();
        if (!member) return message.channel.send(message.language.ban.errors.nouser);
        let reason = args.slice(1).join(" ");
        if (!reason) {
            reason = "No Reason Specified"
        }
        const memberPosition = member.roles.highest.position;
		const moderationPosition = message.member.roles.highest.position;
		if(message.member.ownerID !== message.author.id && !(moderationPosition > memberPosition)){
			return message.channel.send(message.language.ban.errors.supperior);
        }

        if(!member.bannable) {
			return message.channel.send(message.language.ban.errors.noperm);
        }
        
        // await member.send(message.translate("moderation/kick:KICKED_DM", {
		// 	username: member.user.tag,
		// 	server: message.guild.name,
		// 	moderator: message.author.tag,
		// 	reason
        // })).catch(() => {});
        await member.send(message.language.ban.banneddm(message.guild.name, message.member.user.tag, reason)).catch(() => {});
        member.ban({reason: reason}).then(() => {
            const kickembed = new Discord.MessageEmbed()
            .setColor(data.color)
            .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL())
            .setDescription(message.language.ban.description)
            .setFooter(data.footer)
            message.channel.send(kickembed);
        }).catch(() => {});

    }
}

module.exports = Ban;