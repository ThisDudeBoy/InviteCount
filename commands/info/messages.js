const Command = require("../../structures/Command.js"),
    moment = require('moment'),
    Discord = require("discord.js");
class Invite extends Command {
    constructor(client) {
        super(client, {
            name: "messages",
            enabled: true,
            aliases: [],
            clientPermissions: ["EMBED_LINKS"],
            permLevel: 0
        });
    }

    async run(message, args, data) {


        let member = await this.client.resolveMember(args.join(" "), message.guild) || message.member;
        let memberData = await this.client.findOrCreateGuildMember({ id: member.id, guildID: message.guild.id, bot: member.user.bot });


        let nextRank = null;


        let embed = new Discord.MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setDescription(`<:horloge3:851486762928701551> Statistics since ${moment(message.guild.me.joinedTimestamp).locale(data.guild.language.substr(0, 2)).fromNow()}\n<:channel:851482936787730472> You have sent \`${memberData.messagesCount}\` on this server`)
            .setColor(data.color)
            .setFooter(data.footer, message.client.user.displayAvatarURL({ dynamic: true, size: 512 }))

        message.channel.send(embed);
    }

};

module.exports = Invite;