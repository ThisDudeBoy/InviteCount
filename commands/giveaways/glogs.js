const Command = require("../../structures/Command.js"),
{ 
    ContainerBuilder, 
    TextDisplayBuilder, 
    SeparatorBuilder, 
    ActionRowBuilder, 
    ButtonBuilder, 
    ButtonStyle,
    PermissionFlagsBits,
    ChannelType,
    MessageFlags 
} = require("discord.js"),
componentsV2 = require("../../helpers/componentsV2.js");

class GiveawayLogs extends Command {
    constructor(client) {
        super(client, {
            name: "glogs",
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
        
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        if (!channel) {
            return message.channel.send(componentsV2.errorEmbed('Giveaway System', message.language.configjoin.errors.channelNotFound(args[0])));
        }

        if (channel.type === ChannelType.GuildCategory) {
            return message.channel.send(componentsV2.errorEmbed('Giveaway System', message.language.configjoin.errors.channelNotFound(args[0])));
        }
        if (channel.type === ChannelType.GuildVoice) {
            return message.channel.send(componentsV2.errorEmbed('Giveaway System', message.language.configjoin.errors.channelNotFound(args[0])));
        }

        data.guild.glogs = channel.id;
        await data.guild.save();

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## Giveaway Logs Updated`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const descText = new TextDisplayBuilder()
            .setContent(`${message.language.glogs.success()}\n\n**Channel:** ${channel}`);
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

module.exports = GiveawayLogs;
