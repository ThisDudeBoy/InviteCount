const Command = require("../../structures/Command.js"),
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

class Invite extends Command {
    constructor (client) {
        super(client, {
            name: "invite",
            enabled: true,
            aliases: [ "invites", "rank" ],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);
        
        let member = await this.client.resolveMember(args.join(" "), message.guild) || message.member;
        let memberData = await this.client.findOrCreateGuildMember({ id: member.id, guildID: message.guild.id, bot: member.user.bot });
        let guildData = await this.client.findOrCreateGuild({ id: message.guild.id });
        
        let nextRank = null;
        guildData.ranks.forEach((rank) => {
            let superior = (rank.inviteCount >= (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake));
            let found = member.guild.roles.cache.get(rank.roleID);
            let superiorFound = (nextRank ? rank.inviteCount < nextRank.inviteCount : true);
            if (superior && found && superiorFound) nextRank = rank;
        });

        let description = message.language.invite.description(member, memberData, (member.id === message.member.id), nextRank, (nextRank ? message.guild.roles.cache.get(nextRank.roleID) : null));

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${componentsV2.sanitizeMention(member.user.tag)}`);
        
        const avatarUrl = member.user.displayAvatarURL({ dynamic: true, size: 256 });
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

        const descText = new TextDisplayBuilder()
            .setContent(description);
        container.addTextDisplayComponents(descText);

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

module.exports = Invite;
