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

class SetPrefix extends Command {
    constructor (client) {
        super(client, {
            name: "setprefix",
            enabled: true,
            aliases: [ "configprefix" ],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 2
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        let prefix = args[0];
        if (!prefix || prefix.length > 5) {
            return message.channel.send(componentsV2.errorEmbed(
                'Error',
                message.language.setprefix.missing(),
                { color: '#FF0000' }
            ));
        }
        
        data.guild.prefix = prefix;
        await data.guild.save();

        const container = new ContainerBuilder()
            .setAccentColor(parseInt('00FF00', 16));

        const title = new TextDisplayBuilder()
            .setContent(`## Prefix Updated`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const descText = new TextDisplayBuilder()
            .setContent(message.language.setprefix.success() + `\n\n**New Prefix:** \`${prefix}\``);
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

        message.channel.send({ 
            components: [container], 
            flags: MessageFlags.IsComponentsV2 
        });
    }
};

module.exports = SetPrefix;
