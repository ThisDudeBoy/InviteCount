const Command = require("../../structures/Command.js"),
{ 
    ContainerBuilder, 
    TextDisplayBuilder, 
    SeparatorBuilder, 
    ActionRowBuilder, 
    ButtonBuilder, 
    ButtonStyle,
    PermissionFlagsBits,
    MessageFlags 
} = require("discord.js"),
componentsV2 = require("../../helpers/componentsV2.js");

class glist extends Command {
    constructor(client) {
        super(client, {
            name: "glist",
            enabled: true,
            aliases: [],
            clientPermissions: ["EmbedLinks"],
            permLevel: 0
        });
    }

    async run(message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        if (!message.member.permissions.has(PermissionFlagsBits.ManageGuild)) {
            return message.channel.send(componentsV2.errorEmbed('Error', message.language.errors.perms()));
        }

        const currentGiveaways = message.client.giveawaysManager.giveaways.filter((g) => g.guildId === message.guild.id && !g.ended);
        if (currentGiveaways.length == 0) {
            return message.channel.send(componentsV2.errorEmbed('No Giveaways', message.language.glist.err()));
        }

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${message.language.glist.title()}`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const descText = new TextDisplayBuilder()
            .setContent(message.language.glist.description(data.guild.prefix));
        container.addTextDisplayComponents(descText);

        container.addSeparatorComponents(new SeparatorBuilder());

        const giveawaysContent = message.language.glist.fields.message(currentGiveaways) || message.language.glist.err();
        const listSection = new TextDisplayBuilder()
            .setContent(`${message.language.glist.fields.name(data.guild.prefix)}\n${giveawaysContent}`);
        container.addTextDisplayComponents(listSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const buttonRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(componentsV2.encodeCustomId('glist_refresh', ownerId))
                    .setLabel('Refresh')
                    .setStyle(ButtonStyle.Primary),
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
};

module.exports = glist;
