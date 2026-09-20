const { 
    ContainerBuilder, 
    TextDisplayBuilder, 
    SeparatorBuilder, 
    ActionRowBuilder, 
    ButtonBuilder, 
    ButtonStyle,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    MessageFlags 
} = require("discord.js");
const config = require("../config");
const componentsV2 = require("../helpers/componentsV2.js");

module.exports = class {

    constructor (client) {
        this.client = client;
    }

    async run (interaction) {
        if (!interaction.guild) return;

        const data = { color: this.client.config.color, footer: this.client.config.footer };
        let guildData = await this.client.findOrCreateGuild({ id: interaction.guild.id });
        data.guild = guildData;
        const lang = require("../languages/" + data.guild.language);
        const prefix = data.guild.prefix;
        const color = componentsV2.parseColor(data.color);

        if (interaction.isStringSelectMenu()) {
            const { action, ownerId, extra } = componentsV2.decodeCustomId(interaction.customId);
            
            if (!componentsV2.validateOwner(interaction, ownerId)) {
                return componentsV2.sendOwnerError(interaction);
            }

            if (action === 'help_category') {
                const category = interaction.values[0];
                
                const container = new ContainerBuilder()
                    .setAccentColor(color);

                let categoryTitle = '';
                let categoryCommands = '';

                switch (category) {
                    case 'admin':
                        categoryTitle = lang.help.admin.title();
                        categoryCommands = lang.help.admin.content(prefix);
                        break;
                    case 'moderation':
                        categoryTitle = lang.help.moderation.title();
                        categoryCommands = lang.help.moderation.content(prefix);
                        break;
                    case 'general':
                        categoryTitle = lang.help.joinDM.title();
                        categoryCommands = lang.help.joinDM.content(prefix);
                        break;
                    case 'configuration':
                        categoryTitle = lang.help.join.title();
                        categoryCommands = lang.help.join.content(prefix);
                        break;
                    case 'giveaways':
                        categoryTitle = lang.help.giveaway.title();
                        categoryCommands = lang.help.giveaway.content(prefix);
                        break;
                }

                const title = new TextDisplayBuilder()
                    .setContent(`## ${categoryTitle}`);
                container.addTextDisplayComponents(title);

                container.addSeparatorComponents(new SeparatorBuilder());

                const commandsList = categoryCommands.replace('> ', '').split(', ');
                let formattedCommands = '';
                commandsList.forEach((cmd) => {
                    const cmdName = cmd.replace(/`/g, '').trim();
                    formattedCommands += `**${prefix}${cmdName}**\n`;
                });

                const commandsSection = new TextDisplayBuilder()
                    .setContent(`**Available Commands:**\n${formattedCommands}`);
                container.addTextDisplayComponents(commandsSection);

                container.addSeparatorComponents(new SeparatorBuilder());

                const dropdown = new StringSelectMenuBuilder()
                    .setCustomId(componentsV2.encodeCustomId('help_category', ownerId))
                    .setPlaceholder('Select a category for more info')
                    .addOptions(
                        new StringSelectMenuOptionBuilder()
                            .setLabel('Administration')
                            .setDescription('Admin commands')
                            .setValue('admin')
                            .setEmoji('⚙️')
                            .setDefault(category === 'admin'),
                        new StringSelectMenuOptionBuilder()
                            .setLabel('Moderation')
                            .setDescription('Moderation commands')
                            .setValue('moderation')
                            .setEmoji('🛡️')
                            .setDefault(category === 'moderation'),
                        new StringSelectMenuOptionBuilder()
                            .setLabel('General')
                            .setDescription('General commands')
                            .setValue('general')
                            .setEmoji('💻')
                            .setDefault(category === 'general'),
                        new StringSelectMenuOptionBuilder()
                            .setLabel('Configuration')
                            .setDescription('Configuration commands')
                            .setValue('configuration')
                            .setEmoji('🔧')
                            .setDefault(category === 'configuration'),
                        new StringSelectMenuOptionBuilder()
                            .setLabel('Giveaways')
                            .setDescription('Giveaway commands')
                            .setValue('giveaways')
                            .setEmoji('🎁')
                            .setDefault(category === 'giveaways')
                    );

                const dropdownRow = new ActionRowBuilder()
                    .addComponents(dropdown);

                container.addActionRowComponents(dropdownRow);

                container.addSeparatorComponents(new SeparatorBuilder());

                const buttonRow = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId(componentsV2.encodeCustomId('help_home', ownerId))
                            .setLabel('Back to Home')
                            .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder()
                            .setLabel('Support Server')
                            .setStyle(ButtonStyle.Link)
                            .setURL(config.discord || 'https://discord.gg/support'),
                        new ButtonBuilder()
                            .setCustomId(componentsV2.encodeCustomId('close', ownerId))
                            .setLabel('Close')
                            .setStyle(ButtonStyle.Danger)
                    );

                container.addActionRowComponents(buttonRow);

                const footer = new TextDisplayBuilder()
                    .setContent(`-# Requested by ${interaction.user.username} | Prefix: ${prefix}`);
                container.addTextDisplayComponents(footer);

                await interaction.update({ 
                    components: [container], 
                    flags: MessageFlags.IsComponentsV2 
                });
            }
        }

        if (interaction.isButton()) {
            const { action, ownerId, extra } = componentsV2.decodeCustomId(interaction.customId);
            
            if (!componentsV2.validateOwner(interaction, ownerId)) {
                return componentsV2.sendOwnerError(interaction);
            }

            if (action === 'close') {
                await interaction.message.delete().catch(() => {});
            }

            if (action === 'noprefix_enable') {
                if (!this.client.config.owners.includes(interaction.user.id)) {
                    return interaction.reply({ 
                        content: 'This action can only be performed by the bot owner.',
                        ephemeral: true 
                    });
                }

                guildData.noPrefix = true;
                await guildData.save();

                const container = new ContainerBuilder()
                    .setAccentColor(parseInt('00FF00', 16));

                const title = new TextDisplayBuilder()
                    .setContent(`## No Prefix Enabled`);
                container.addTextDisplayComponents(title);

                container.addSeparatorComponents(new SeparatorBuilder());

                const descText = new TextDisplayBuilder()
                    .setContent(`No prefix mode has been **enabled** for this server.\n\nUsers can now use commands without the \`${prefix}\` prefix.`);
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

                await interaction.update({ 
                    components: [container], 
                    flags: MessageFlags.IsComponentsV2 
                });
            }

            if (action === 'noprefix_disable') {
                if (!this.client.config.owners.includes(interaction.user.id)) {
                    return interaction.reply({ 
                        content: 'This action can only be performed by the bot owner.',
                        ephemeral: true 
                    });
                }

                guildData.noPrefix = false;
                await guildData.save();

                const container = new ContainerBuilder()
                    .setAccentColor(parseInt('FF6600', 16));

                const title = new TextDisplayBuilder()
                    .setContent(`## No Prefix Disabled`);
                container.addTextDisplayComponents(title);

                container.addSeparatorComponents(new SeparatorBuilder());

                const descText = new TextDisplayBuilder()
                    .setContent(`No prefix mode has been **disabled** for this server.\n\nUsers must now use the \`${prefix}\` prefix to run commands.`);
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

                await interaction.update({ 
                    components: [container], 
                    flags: MessageFlags.IsComponentsV2 
                });
            }

            if (action === 'help_home') {
                const container = new ContainerBuilder()
                    .setAccentColor(color);

                const title = new TextDisplayBuilder()
                    .setContent(`## ${lang.help.title()}`);
                container.addTextDisplayComponents(title);

                container.addSeparatorComponents(new SeparatorBuilder());

                const description = new TextDisplayBuilder()
                    .setContent(lang.help.description(interaction.guild.name, prefix));
                container.addTextDisplayComponents(description);

                container.addSeparatorComponents(new SeparatorBuilder());

                const adminSection = new TextDisplayBuilder()
                    .setContent(`${lang.help.admin.title()}\n${lang.help.admin.content(prefix)}`);
                container.addTextDisplayComponents(adminSection);

                container.addSeparatorComponents(new SeparatorBuilder());

                const moderationSection = new TextDisplayBuilder()
                    .setContent(`${lang.help.moderation.title()}\n${lang.help.moderation.content(prefix)}`);
                container.addTextDisplayComponents(moderationSection);

                container.addSeparatorComponents(new SeparatorBuilder());

                const generalSection = new TextDisplayBuilder()
                    .setContent(`${lang.help.joinDM.title()}\n${lang.help.joinDM.content(prefix)}`);
                container.addTextDisplayComponents(generalSection);

                container.addSeparatorComponents(new SeparatorBuilder());

                const configSection = new TextDisplayBuilder()
                    .setContent(`${lang.help.join.title()}\n${lang.help.join.content(prefix)}`);
                container.addTextDisplayComponents(configSection);

                container.addSeparatorComponents(new SeparatorBuilder());

                const giveawaySection = new TextDisplayBuilder()
                    .setContent(`${lang.help.giveaway.title()}\n${lang.help.giveaway.content(prefix)}`);
                container.addTextDisplayComponents(giveawaySection);

                container.addSeparatorComponents(new SeparatorBuilder());

                const dropdown = new StringSelectMenuBuilder()
                    .setCustomId(componentsV2.encodeCustomId('help_category', ownerId))
                    .setPlaceholder('Select a category for more info')
                    .addOptions(
                        new StringSelectMenuOptionBuilder()
                            .setLabel('Administration')
                            .setDescription('Admin commands')
                            .setValue('admin')
                            .setEmoji('⚙️'),
                        new StringSelectMenuOptionBuilder()
                            .setLabel('Moderation')
                            .setDescription('Moderation commands')
                            .setValue('moderation')
                            .setEmoji('🛡️'),
                        new StringSelectMenuOptionBuilder()
                            .setLabel('General')
                            .setDescription('General commands')
                            .setValue('general')
                            .setEmoji('💻'),
                        new StringSelectMenuOptionBuilder()
                            .setLabel('Configuration')
                            .setDescription('Configuration commands')
                            .setValue('configuration')
                            .setEmoji('🔧'),
                        new StringSelectMenuOptionBuilder()
                            .setLabel('Giveaways')
                            .setDescription('Giveaway commands')
                            .setValue('giveaways')
                            .setEmoji('🎁')
                    );

                const dropdownRow = new ActionRowBuilder()
                    .addComponents(dropdown);

                container.addActionRowComponents(dropdownRow);

                container.addSeparatorComponents(new SeparatorBuilder());

                const linksSection = new TextDisplayBuilder()
                    .setContent(`${lang.help.tip(prefix)}\n${lang.help.links(this.client.user.id)}`);
                container.addTextDisplayComponents(linksSection);

                container.addSeparatorComponents(new SeparatorBuilder());

                const buttonRow = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel('Support Server')
                            .setStyle(ButtonStyle.Link)
                            .setURL(config.discord || 'https://discord.gg/support'),
                        new ButtonBuilder()
                            .setLabel('Invite Bot')
                            .setStyle(ButtonStyle.Link)
                            .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=${this.client.user.id}&permissions=8&scope=bot`),
                        new ButtonBuilder()
                            .setCustomId(componentsV2.encodeCustomId('close', ownerId))
                            .setLabel('Close')
                            .setStyle(ButtonStyle.Danger)
                    );

                container.addActionRowComponents(buttonRow);

                const footer = new TextDisplayBuilder()
                    .setContent(`-# Requested by ${interaction.user.username} | Prefix: ${prefix}`);
                container.addTextDisplayComponents(footer);

                await interaction.update({ 
                    components: [container], 
                    flags: MessageFlags.IsComponentsV2 
                });
            }
        }
    }
};
