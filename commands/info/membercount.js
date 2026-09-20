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

class MemberCount extends Command {
    constructor (client) {
        super(client, {
            name: "membercount",
            enabled: true,
            aliases: [ "m" ],
            clientPermissions: [ "EmbedLinks", "AddReactions" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        let guild = message.guild;

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${message.language.membercount.title(message.guild.name)}`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const descText = new TextDisplayBuilder()
            .setContent(message.language.membercount.description(guild));
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

module.exports = MemberCount;
