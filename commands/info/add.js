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

class Add extends Command {
    constructor (client) {
        super(client, {
            name: "add",
            enabled: true,
            aliases: [],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(this.client.config.color);

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## InviteCount`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const descText = new TextDisplayBuilder()
            .setContent(message.language.add.content(this.client.user.id));
        container.addTextDisplayComponents(descText);

        container.addSeparatorComponents(new SeparatorBuilder());

        const buttonRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Add to Server')
                    .setStyle(ButtonStyle.Link)
                    .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=${this.client.user.id}&permissions=8&scope=bot`),
                new ButtonBuilder()
                    .setCustomId(componentsV2.encodeCustomId('close', ownerId))
                    .setLabel('Close')
                    .setStyle(ButtonStyle.Danger)
            );

        container.addActionRowComponents(buttonRow);

        const footer = new TextDisplayBuilder()
            .setContent(`-# Requested by ${message.author.username}`);
        container.addTextDisplayComponents(footer);

        message.channel.send({ 
            components: [container], 
            flags: MessageFlags.IsComponentsV2 
        });
    }
};

module.exports = Add;
