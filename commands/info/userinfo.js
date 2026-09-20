const Command = require("../../structures/Command.js"),
moment = require("moment"),
{ 
    ContainerBuilder, 
    TextDisplayBuilder, 
    SeparatorBuilder, 
    ActionRowBuilder, 
    ButtonBuilder, 
    ButtonStyle,
    SectionBuilder,
    ThumbnailBuilder,
    MessageFlags 
} = require("discord.js"),
componentsV2 = require("../../helpers/componentsV2.js");

class Userinfo extends Command {
    constructor (client) {
        super(client, {
            name: "userinfo",
            enabled: true,
            aliases: [ "ui" ],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        let user = message.mentions.users.first() || await this.client.resolveUser(args[0]) || message.author;
        let member = await message.guild.members.fetch(user.id).catch(() => {});
        let memberData = member ? await this.client.findOrCreateGuildMember({ id: member.id, guildID: member.guild.id }) : null;

        let fields = message.language.userinfo.fields;

        moment.locale(data.guild.language.substr(0, 2));

        let creationDate = moment(user.createdAt, "YYYYMMDD").fromNow();
        let joinDate = member ? moment(member.joinedAt, "YYYYMMDD").fromNow() : null;

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${message.language.userinfo.title(user)}`);
        
        const avatarUrl = user.displayAvatarURL({ dynamic: true, size: 256 });
        if (avatarUrl) {
            try {
                const titleSection = new SectionBuilder()
                    .addTextDisplayComponents(title)
                    .setThumbnailAccessory(
                        new ThumbnailBuilder()
                            .setURL(avatarUrl)
                            .setDescription('User Avatar')
                    );
                container.addSectionComponents(titleSection);
            } catch (e) {
                container.addTextDisplayComponents(title);
            }
        } else {
            container.addTextDisplayComponents(title);
        }

        container.addSeparatorComponents(new SeparatorBuilder());

        const botInfo = new TextDisplayBuilder()
            .setContent(`${fields.bot.title()}\n${fields.bot.content(user)}`);
        container.addTextDisplayComponents(botInfo);

        container.addSeparatorComponents(new SeparatorBuilder());

        const createdInfo = new TextDisplayBuilder()
            .setContent(`${fields.createdAt.title()}\n${creationDate.charAt(0).toUpperCase() + creationDate.substr(1, creationDate.length)}`);
        container.addTextDisplayComponents(createdInfo);

        if (member) {
            container.addSeparatorComponents(new SeparatorBuilder());

            let joinData = memberData.joinData || (memberData.invitedBy ? { type: "normal", invite: { inviter: memberData.invitedBy } } : { type: "unknown" });
            let joinWay = fields.joinWay.unknown(user);
            if (joinData.type === "normal") {
                let inviter = await this.client.users.fetch(joinData.invite.inviter).catch(() => null);
                if (inviter) joinWay = fields.joinWay.invite(inviter);
            } else if (joinData.type === "vanity") {
                joinWay = fields.joinWay.vanity();
            } else if (joinData.type === "oauth" || user.bot) {
                joinWay = fields.joinWay.oauth();
            }

            const joinedInfo = new TextDisplayBuilder()
                .setContent(`${fields.joinedAt.title()}\n${joinDate.charAt(0).toUpperCase() + joinDate.substr(1, joinDate.length)}`);
            container.addTextDisplayComponents(joinedInfo);

            container.addSeparatorComponents(new SeparatorBuilder());

            const invitesInfo = new TextDisplayBuilder()
                .setContent(`${fields.invites.title()}\n${fields.invites.content(memberData)}`);
            container.addTextDisplayComponents(invitesInfo);

            container.addSeparatorComponents(new SeparatorBuilder());

            const joinWayInfo = new TextDisplayBuilder()
                .setContent(`${fields.joinWay.title()}\n${joinWay}`);
            container.addTextDisplayComponents(joinWayInfo);

            container.addSeparatorComponents(new SeparatorBuilder());

            await message.guild.members.fetch();
            const members = [...message.guild.members.cache.values()].sort((a, b) => a.joinedTimestamp - b.joinedTimestamp);
            let joinPos = members.map((u) => u.id).indexOf(member.id);
            let previous = members[joinPos - 1] ? members[joinPos - 1].user : null;
            let next = members[joinPos + 1] ? members[joinPos + 1].user : null;

            const joinOrderInfo = new TextDisplayBuilder()
                .setContent(`${fields.joinOrder.title()}\n${fields.joinOrder.content(previous, next, user)}`);
            container.addTextDisplayComponents(joinOrderInfo);
        }

        container.addSeparatorComponents(new SeparatorBuilder());

        const buttonRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(componentsV2.encodeCustomId('close', ownerId))
                    .setLabel('Close')
                    .setStyle(ButtonStyle.Danger)
            );

        container.addActionRowComponents(buttonRow);

        const footer = new TextDisplayBuilder()
            .setContent(`-# ${data.footer}`);
        container.addTextDisplayComponents(footer);

        message.channel.send({ 
            components: [container], 
            flags: MessageFlags.IsComponentsV2 
        });
    }
};

module.exports = Userinfo;
