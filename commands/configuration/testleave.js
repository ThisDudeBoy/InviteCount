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

class TestLeave extends Command {
    constructor (client) {
        super(client, {
            name: "testleave",
            enabled: true,
            aliases: [],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 2
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${message.language.testleave.title()}`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const descText = new TextDisplayBuilder()
            .setContent(message.language.testleave.description());
        
        const avatarUrl = message.author.avatarURL();
        if (avatarUrl) {
            try {
                const descSection = new SectionBuilder()
                    .addTextDisplayComponents(descText)
                    .setThumbnailAccessory(
                        new ThumbnailBuilder()
                            .setURL(avatarUrl)
                            .setDescription('Your Avatar')
                    );
                container.addSectionComponents(descSection);
            } catch (e) {
                container.addTextDisplayComponents(descText);
            }
        } else {
            container.addTextDisplayComponents(descText);
        }

        container.addSeparatorComponents(new SeparatorBuilder());

        const enabledSection = new TextDisplayBuilder()
            .setContent(`${message.language.testleave.fields.enabled()}\n${(data.guild.leave.enabled ? message.language.testleave.enabled(data.guild.prefix) : message.language.testleave.disabled(data.guild.prefix))}`);
        container.addTextDisplayComponents(enabledSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const messageSection = new TextDisplayBuilder()
            .setContent(`${message.language.testleave.fields.message()}\n${(data.guild.leave.message || message.language.testleave.notDefineds.message(data.guild.prefix))}`);
        container.addTextDisplayComponents(messageSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const channelSection = new TextDisplayBuilder()
            .setContent(`${message.language.testleave.fields.channel()}\n${(data.guild.leave.channel ? `<#${data.guild.leave.channel}>` : message.language.testleave.notDefineds.channel(data.guild.prefix))}`);
        container.addTextDisplayComponents(channelSection);

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
        
        if (data.guild.leave.enabled && data.guild.leave.message && data.guild.leave.channel && message.guild.channels.cache.get(data.guild.leave.channel)) {
            message.guild.channels.cache.get(data.guild.leave.channel).send(this.client.functions.formatMessage(
                data.guild.leave.message,
                message.member,
                message.client.user,
                {
                    code: "436SPZX",
                    url: "https://discord.gg/436SPZX",
                    uses: 1
                },
                (data.guild.language || "english").substr(0, 2),
                {
                    invites: 1,
                    fake: 0,
                    bonus: 0,
                    leaves: 0
                }
            )).catch(() => {
                return message.channel.send(message.language.errors.sendPerm());
            });
        }
    }
}

module.exports = TestLeave;
