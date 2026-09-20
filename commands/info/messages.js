const Command = require("../../structures/Command.js"),
    moment = require('moment'),
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

class Messages extends Command {
    constructor(client) {
        super(client, {
            name: "messages",
            enabled: true,
            aliases: [],
            clientPermissions: ["EmbedLinks"],
            permLevel: 0
        });
    }

    async run(message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        let member = await this.client.resolveMember(args.join(" "), message.guild) || message.member;
        let memberData = await this.client.findOrCreateGuildMember({ id: member.id, guildID: message.guild.id, bot: member.user.bot });

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

        const statsText = new TextDisplayBuilder()
            .setContent(`**Statistics since ${moment(message.guild.members.me.joinedTimestamp).locale(data.guild.language.substr(0, 2)).fromNow()}**\nYou have sent **${memberData.messagesCount}** messages on this server`);
        container.addTextDisplayComponents(statsText);

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

module.exports = Messages;
