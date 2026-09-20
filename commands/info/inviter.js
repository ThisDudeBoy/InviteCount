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

class Inviter extends Command {
    constructor (client) {
        super(client, {
            name: "inviter",
            enabled: true,
            aliases: [ "whoami", "invited" ],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);
        
        let member = await this.client.resolveMember(args.join(" "), message.guild) || message.member;
        let memberData = await this.client.findOrCreateGuildMember({ id: member.id, guildID: message.guild.id, bot: member.user.bot });
        
        let inviter = null;
        let inviterName = message.language.inviter.unknown();
        
        if (memberData.invitedBy) {
            try {
                inviter = await this.client.users.fetch(memberData.invitedBy);
                inviterName = inviter.username;
            } catch (err) {
                inviterName = message.language.inviter.notFound();
            }
        }

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
            .setContent(message.language.inviter.description(member, inviterName));
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

module.exports = Inviter;
