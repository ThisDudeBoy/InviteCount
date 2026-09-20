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

class Credits extends Command {
    constructor (client) {
        super(client, {
            name: "credits",
            enabled: true,
            aliases: [ ],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${message.language.credits.title()}`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const authorText = new TextDisplayBuilder()
            .setContent(`**InviteCount | v2.0.0**`);
        container.addTextDisplayComponents(authorText);

        container.addSeparatorComponents(new SeparatorBuilder());

        const descText = new TextDisplayBuilder()
            .setContent(message.language.credits.content(message.guild.name, data.guild.prefix));
        container.addTextDisplayComponents(descText);

        container.addSeparatorComponents(new SeparatorBuilder());

        const devSection = new TextDisplayBuilder()
            .setContent(`${message.language.credits.dev.title()}\n${message.language.credits.dev.content()}`);
        container.addTextDisplayComponents(devSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const inspiredSection = new TextDisplayBuilder()
            .setContent(`${message.language.credits.statistics.title()}\n${message.language.credits.statistics.content()}`);
        container.addTextDisplayComponents(inspiredSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const thanksSection = new TextDisplayBuilder()
            .setContent(`${message.language.credits.link.title()}\n${message.language.credits.link.content()}`);
        container.addTextDisplayComponents(thanksSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const buttonRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Support Server')
                    .setStyle(ButtonStyle.Link)
                    .setURL(require("../../config").discord || 'https://discord.gg/support'),
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

module.exports = Credits;
