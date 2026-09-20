const { 
    ContainerBuilder, 
    TextDisplayBuilder, 
    SeparatorBuilder, 
    ActionRowBuilder, 
    ButtonBuilder, 
    ButtonStyle,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    MediaGalleryBuilder,
    MediaGalleryItemBuilder,
    MessageFlags 
} = require("discord.js");
const config = require("../config");

class ComponentsV2Helper {
    constructor() {
        this.defaultColor = parseInt((config.color || "#2f3136").replace('#', ''), 16);
        this.supportUrl = config.discord || 'https://discord.gg/support';
    }

    parseColor(color) {
        if (!color) return this.defaultColor;
        if (typeof color === 'number') return color;
        return parseInt(color.replace('#', ''), 16);
    }

    encodeCustomId(action, ownerId, extra = '') {
        return extra ? `${action}:${ownerId}:${extra}` : `${action}:${ownerId}`;
    }

    decodeCustomId(customId) {
        const parts = customId.split(':');
        return {
            action: parts[0] || '',
            ownerId: parts[1] || '',
            extra: parts.slice(2).join(':') || ''
        };
    }

    validateOwner(interaction, ownerId) {
        if (interaction.user.id !== ownerId) {
            return false;
        }
        return true;
    }

    async sendOwnerError(interaction) {
        const container = new ContainerBuilder()
            .setAccentColor(parseInt('FF0000', 16));
        
        const errorText = new TextDisplayBuilder()
            .setContent('## Not Your Request!\nThis interaction was not requested by you. Run the command yourself to use it!');
        container.addTextDisplayComponents(errorText);

        return interaction.reply({ 
            components: [container], 
            flags: MessageFlags.IsComponentsV2 | MessageFlags.Ephemeral
        });
    }

    createContainer(options = {}) {
        const container = new ContainerBuilder();
        container.setAccentColor(this.parseColor(options.color));
        return container;
    }

    addTitle(container, title) {
        const titleText = new TextDisplayBuilder()
            .setContent(`## ${title}`);
        container.addTextDisplayComponents(titleText);
        return container;
    }

    addSeparator(container) {
        container.addSeparatorComponents(new SeparatorBuilder());
        return container;
    }

    addText(container, content) {
        const text = new TextDisplayBuilder()
            .setContent(content);
        container.addTextDisplayComponents(text);
        return container;
    }

    addField(container, name, value, addSeparator = true) {
        const fieldText = new TextDisplayBuilder()
            .setContent(`**${name}**\n${value}`);
        container.addTextDisplayComponents(fieldText);
        if (addSeparator) {
            this.addSeparator(container);
        }
        return container;
    }

    addFields(container, fields) {
        fields.forEach((field, index) => {
            this.addField(container, field.name, field.value, index < fields.length - 1);
        });
        return container;
    }

    addThumbnail(container, url) {
        if (!url) return container;
        try {
            const thumbnailItem = new MediaGalleryItemBuilder()
                .setURL(url);
            const gallery = new MediaGalleryBuilder()
                .addItems([thumbnailItem]);
            container.addMediaGalleryComponents(gallery);
        } catch (e) {
        }
        return container;
    }

    addFooter(container, text) {
        const footer = new TextDisplayBuilder()
            .setContent(`-# ${text}`);
        container.addTextDisplayComponents(footer);
        return container;
    }

    createCloseButton(ownerId) {
        return new ButtonBuilder()
            .setCustomId(this.encodeCustomId('close', ownerId))
            .setLabel('Close')
            .setStyle(ButtonStyle.Danger);
    }

    createSupportButton() {
        return new ButtonBuilder()
            .setLabel('Support')
            .setStyle(ButtonStyle.Link)
            .setURL(this.supportUrl);
    }

    createInviteButton(clientId) {
        return new ButtonBuilder()
            .setLabel('Invite Bot')
            .setStyle(ButtonStyle.Link)
            .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=${clientId}&permissions=8&scope=bot`);
    }

    addCloseButton(container, ownerId) {
        const row = new ActionRowBuilder()
            .addComponents(this.createCloseButton(ownerId));
        container.addActionRowComponents(row);
        return container;
    }

    addStandardButtons(container, ownerId, clientId, includeHome = false, homeAction = 'help_home') {
        const buttons = [];
        
        if (includeHome) {
            buttons.push(
                new ButtonBuilder()
                    .setCustomId(this.encodeCustomId(homeAction, ownerId))
                    .setLabel('Back to Home')
                    .setStyle(ButtonStyle.Primary)
            );
        }
        
        buttons.push(this.createSupportButton());
        buttons.push(this.createInviteButton(clientId));
        buttons.push(this.createCloseButton(ownerId));
        
        const row = new ActionRowBuilder().addComponents(buttons);
        container.addActionRowComponents(row);
        return container;
    }

    successEmbed(title, description, options = {}) {
        const container = this.createContainer({ color: options.color || '#00FF00' });
        this.addTitle(container, title);
        this.addSeparator(container);
        this.addText(container, description);
        
        if (options.footer) {
            this.addSeparator(container);
            this.addFooter(container, options.footer);
        }
        
        if (options.ownerId) {
            this.addSeparator(container);
            this.addCloseButton(container, options.ownerId);
        }

        return { 
            components: [container], 
            flags: MessageFlags.IsComponentsV2 
        };
    }

    errorEmbed(title, description, options = {}) {
        const container = this.createContainer({ color: options.color || '#FF0000' });
        this.addTitle(container, title);
        this.addSeparator(container);
        this.addText(container, description);
        
        if (options.footer) {
            this.addSeparator(container);
            this.addFooter(container, options.footer);
        }

        return { 
            components: [container], 
            flags: MessageFlags.IsComponentsV2 
        };
    }

    infoEmbed(title, description, options = {}) {
        const container = this.createContainer({ color: options.color });
        this.addTitle(container, title);
        this.addSeparator(container);
        this.addText(container, description);
        
        if (options.fields && options.fields.length > 0) {
            this.addSeparator(container);
            this.addFields(container, options.fields);
        }
        
        if (options.footer) {
            this.addSeparator(container);
            this.addFooter(container, options.footer);
        }
        
        if (options.ownerId) {
            this.addSeparator(container);
            this.addCloseButton(container, options.ownerId);
        }

        return { 
            components: [container], 
            flags: MessageFlags.IsComponentsV2 
        };
    }

    buildMessage(container) {
        return { 
            components: [container], 
            flags: MessageFlags.IsComponentsV2 
        };
    }

    sanitizeMention(text) {
        if (!text) return text;
        return String(text).replace(/<@!?&?(\d+)>/g, (match, id) => {
            if (match.startsWith('<@&')) return 'role';
            if (match.startsWith('<@!') || match.startsWith('<@')) return 'user';
            return match;
        }).replace(/@everyone|@here/g, (match) => match.substring(1));
    }

    createPaginationButtons(ownerId, currentPage, totalPages, actionPrefix) {
        const row = new ActionRowBuilder();
        
        row.addComponents(
            new ButtonBuilder()
                .setCustomId(this.encodeCustomId(`${actionPrefix}_first`, ownerId, '1'))
                .setLabel('<<')
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(currentPage <= 1),
            new ButtonBuilder()
                .setCustomId(this.encodeCustomId(`${actionPrefix}_prev`, ownerId, String(currentPage - 1)))
                .setLabel('<')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(currentPage <= 1),
            new ButtonBuilder()
                .setCustomId(this.encodeCustomId(`${actionPrefix}_page`, ownerId))
                .setLabel(`${currentPage}/${totalPages}`)
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true),
            new ButtonBuilder()
                .setCustomId(this.encodeCustomId(`${actionPrefix}_next`, ownerId, String(currentPage + 1)))
                .setLabel('>')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(currentPage >= totalPages),
            new ButtonBuilder()
                .setCustomId(this.encodeCustomId(`${actionPrefix}_last`, ownerId, String(totalPages)))
                .setLabel('>>')
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(currentPage >= totalPages)
        );
        
        return row;
    }
}

module.exports = new ComponentsV2Helper();
