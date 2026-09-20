const Command = require("../../structures/Command.js"),
{ 
    ContainerBuilder, 
    TextDisplayBuilder, 
    SeparatorBuilder, 
    ActionRowBuilder, 
    ButtonBuilder, 
    ButtonStyle,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    MessageFlags 
} = require("discord.js"),
componentsV2 = require("../../helpers/componentsV2.js");

class Help extends Command {
    constructor (client) {
        super(client, {
            name: "help",
            enabled: true,
            aliases: [ "h", "aide" ],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        const color = componentsV2.parseColor(data.color);
        const prefix = data.guild.prefix;
        const lang = message.language.help;
        const ownerId = message.author.id;

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${lang.title()}`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const description = new TextDisplayBuilder()
            .setContent(lang.description(message.guild.name, prefix));
        container.addTextDisplayComponents(description);

        container.addSeparatorComponents(new SeparatorBuilder());

        const adminSection = new TextDisplayBuilder()
            .setContent(`${lang.admin.title()}\n${lang.admin.content(prefix)}`);
        container.addTextDisplayComponents(adminSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const moderationSection = new TextDisplayBuilder()
            .setContent(`${lang.moderation.title()}\n${lang.moderation.content(prefix)}`);
        container.addTextDisplayComponents(moderationSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const generalSection = new TextDisplayBuilder()
            .setContent(`${lang.joinDM.title()}\n${lang.joinDM.content(prefix)}`);
        container.addTextDisplayComponents(generalSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const configSection = new TextDisplayBuilder()
            .setContent(`${lang.join.title()}\n${lang.join.content(prefix)}`);
        container.addTextDisplayComponents(configSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const giveawaySection = new TextDisplayBuilder()
            .setContent(`${lang.giveaway.title()}\n${lang.giveaway.content(prefix)}`);
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
            .setContent(`${lang.tip(prefix)}\n${lang.links(this.client.user.id)}`);
        container.addTextDisplayComponents(linksSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const buttonRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Support Server')
                    .setStyle(ButtonStyle.Link)
                    .setURL(require("../../config").discord || 'https://discord.gg/support'),
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
            .setContent(`-# Requested by ${message.author.username} | Prefix: ${prefix}`);
        container.addTextDisplayComponents(footer);

        message.channel.send({ 
            components: [container], 
            flags: MessageFlags.IsComponentsV2 
        });
    }
}

module.exports = Help;
