const Command = require("../../structures/Command.js"),
Discord = require("discord.js");

class Kick extends Command {
    constructor (client) {
        super(client, {
            name: "kick",
            enabled: true,
            aliases: [],
            clientPermissions: [ "EMBED_LINKS" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(message.language.kick.errors.missingPerms);
        const member = message.mentions.members.first();
        if (!member) return message.channel.send(message.language.kick.errors.nouser);
        let reason = args.slice(1).join(" ");
        if (!reason) {
            reason = "No Reason Specified"
        }
        const memberPosition = member.roles.highest.position;
		const moderationPosition = message.member.roles.highest.position;
		if(message.member.ownerID !== message.author.id && !(moderationPosition > memberPosition)){
			return message.channel.send(message.language.kick.errors.supperior);
        }

        if(!member.kickable) {
			return message.channel.send(message.language.kick.errors.noperm);
        }
        
        // await member.send(message.translate("moderation/kick:KICKED_DM", {
		// 	username: member.user.tag,
		// 	server: message.guild.name,
		// 	moderator: message.author.tag,
		// 	reason
        // })).catch(() => {});
        await member.send(message.language.kick.banneddm(message.guild.name, message.member.user.tag, reason)).catch((error) => {console.log(error)});
        member.kick(reason).then(() => {
            const kickembed = new Discord.MessageEmbed()
            .setColor(data.color)
            .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL())
            .setDescription(message.language.kick.description)
            .setFooter(data.footer)
            message.channel.send(kickembed);
        }).catch((error) => {console.log(error)});

    }
}

module.exports = Kick;