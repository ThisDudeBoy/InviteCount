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

class Config extends Command {
    constructor (client) {
        super(client, {
            name: "config",
            enabled: true,
            aliases: [ "conf", "configuration" ],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 2
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        let joinSuccess = data.guild.join.enabled
        && data.guild.join.message
        && data.guild.join.channel
        && message.guild.channels.cache.get(data.guild.join.channel);

        let joinDMSuccess = data.guild.joinDM.enabled
        && data.guild.joinDM.message;

        let leaveSuccess = data.guild.leave.enabled
        && data.guild.leave.message
        && data.guild.leave.channel
        && message.guild.channels.cache.get(data.guild.leave.channel);

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${message.language.config.title(message.guild.name)}`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const joinSection = new TextDisplayBuilder()
            .setContent(`${message.language.config.join.title(joinSuccess)}\n${message.language.config.join.content(message.guild, data)}`);
        container.addTextDisplayComponents(joinSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const leaveSection = new TextDisplayBuilder()
            .setContent(`${message.language.config.leave.title(leaveSuccess)}\n${message.language.config.leave.content(message.guild, data)}`);
        container.addTextDisplayComponents(leaveSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const joinDMSection = new TextDisplayBuilder()
            .setContent(`${message.language.config.joinDM.title(joinDMSuccess)}\n${message.language.config.joinDM.content(message.guild, data)}`);
        container.addTextDisplayComponents(joinDMSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const buttonRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(componentsV2.encodeCustomId('config_refresh', ownerId))
                    .setLabel('Refresh')
                    .setStyle(ButtonStyle.Primary),
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
          
module.exports = Config;
