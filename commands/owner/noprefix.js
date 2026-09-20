const Command = require("../../structures/Command.js"),
{ 
    ContainerBuilder, 
    TextDisplayBuilder, 
    SeparatorBuilder, 
    ActionRowBuilder, 
    ButtonBuilder, 
    ButtonStyle,
    MessageFlags 
} = require("discord.js"),
componentsV2 = require("../../helpers/componentsV2.js");

class NoPrefix extends Command {
    constructor (client) {
        super(client, {
            name: "noprefix",
            enabled: true,
            aliases: [ "np", "nopre" ],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 5
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        if (!this.client.config.owners.includes(message.author.id)) {
            return message.channel.send(componentsV2.errorEmbed('Error', 'This command can only be used by the bot owner.'));
        }

        const action = args[0]?.toLowerCase();

        if (!action || !['enable', 'disable', 'status'].includes(action)) {
            const container = new ContainerBuilder()
                .setAccentColor(color);

            const title = new TextDisplayBuilder()
                .setContent(`## No Prefix Mode`);
            container.addTextDisplayComponents(title);

            container.addSeparatorComponents(new SeparatorBuilder());

            const currentStatus = data.guild.noPrefix ? 'Enabled' : 'Disabled';
            const descText = new TextDisplayBuilder()
                .setContent(`**Current Status:** ${currentStatus}\n\n**Usage:**\n\`${data.guild.prefix}noprefix enable\` - Enable no prefix mode\n\`${data.guild.prefix}noprefix disable\` - Disable no prefix mode\n\`${data.guild.prefix}noprefix status\` - Check current status\n\n**Note:** When enabled, users can use commands without the prefix.`);
            container.addTextDisplayComponents(descText);

            container.addSeparatorComponents(new SeparatorBuilder());

            const buttonRow = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId(componentsV2.encodeCustomId('noprefix_enable', ownerId))
                        .setLabel('Enable')
                        .setStyle(ButtonStyle.Success)
                        .setDisabled(data.guild.noPrefix === true),
                    new ButtonBuilder()
                        .setCustomId(componentsV2.encodeCustomId('noprefix_disable', ownerId))
                        .setLabel('Disable')
                        .setStyle(ButtonStyle.Secondary)
                        .setDisabled(data.guild.noPrefix === false),
                    new ButtonBuilder()
                        .setCustomId(componentsV2.encodeCustomId('close', ownerId))
                        .setLabel('Close')
                        .setStyle(ButtonStyle.Danger)
                );

            container.addActionRowComponents(buttonRow);

            const footer = new TextDisplayBuilder()
                .setContent(`-# ${data.footer}`);
            container.addTextDisplayComponents(footer);

            return message.channel.send({ 
                components: [container], 
                flags: MessageFlags.IsComponentsV2 
            });
        }

        if (action === 'status') {
            const currentStatus = data.guild.noPrefix ? 'Enabled' : 'Disabled';
            const container = new ContainerBuilder()
                .setAccentColor(color);

            const title = new TextDisplayBuilder()
                .setContent(`## No Prefix Status`);
            container.addTextDisplayComponents(title);

            container.addSeparatorComponents(new SeparatorBuilder());

            const descText = new TextDisplayBuilder()
                .setContent(`**Current Status:** ${currentStatus}\n\nNo prefix mode is currently **${currentStatus.toLowerCase()}** for this server.`);
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

            return message.channel.send({ 
                components: [container], 
                flags: MessageFlags.IsComponentsV2 
            });
        }

        if (action === 'enable') {
            data.guild.noPrefix = true;
            await data.guild.save();

            const container = new ContainerBuilder()
                .setAccentColor(parseInt('00FF00', 16));

            const title = new TextDisplayBuilder()
                .setContent(`## No Prefix Enabled`);
            container.addTextDisplayComponents(title);

            container.addSeparatorComponents(new SeparatorBuilder());

            const descText = new TextDisplayBuilder()
                .setContent(`No prefix mode has been **enabled** for this server.\n\nUsers can now use commands without the \`${data.guild.prefix}\` prefix.`);
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

            return message.channel.send({ 
                components: [container], 
                flags: MessageFlags.IsComponentsV2 
            });
        }

        if (action === 'disable') {
            data.guild.noPrefix = false;
            await data.guild.save();

            const container = new ContainerBuilder()
                .setAccentColor(parseInt('FF6600', 16));

            const title = new TextDisplayBuilder()
                .setContent(`## No Prefix Disabled`);
            container.addTextDisplayComponents(title);

            container.addSeparatorComponents(new SeparatorBuilder());

            const descText = new TextDisplayBuilder()
                .setContent(`No prefix mode has been **disabled** for this server.\n\nUsers must now use the \`${data.guild.prefix}\` prefix to run commands.`);
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

            return message.channel.send({ 
                components: [container], 
                flags: MessageFlags.IsComponentsV2 
            });
        }
    }
};

module.exports = NoPrefix;
