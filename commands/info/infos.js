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

class Infos extends Command {
    constructor (client) {
        super(client, {
            name: "infos",
            enabled: true,
            aliases: [ "info", "botinfo" ],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        let totalSeconds = (this.client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        
        let guildsCounts = await this.client.shard.fetchClientValues("guilds.cache.size");
        let guildsCount = guildsCounts.reduce((p, count) => p + count);
        let channelsCount = message.client.channels.cache.size;
        
        let resultsa = await this.client.shard.broadcastEval((c) => {
            return [...c.guilds.cache.values()].map(g => ({ memberCount: g.memberCount }));
        });
        let guilds = [];
        resultsa.forEach((a) => guilds = [...guilds, ...a]);
        let usersCountW = 0;
        guilds.forEach(g => usersCountW = usersCountW + g.memberCount);

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${message.language.infos.title()}`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const authorText = new TextDisplayBuilder()
            .setContent(`**InviteCount | v2.0.0**`);
        container.addTextDisplayComponents(authorText);

        container.addSeparatorComponents(new SeparatorBuilder());

        const descText = new TextDisplayBuilder()
            .setContent(message.language.infos.content(message.guild.name, data.guild.prefix));
        container.addTextDisplayComponents(descText);

        container.addSeparatorComponents(new SeparatorBuilder());

        const devSection = new TextDisplayBuilder()
            .setContent(`${message.language.infos.dev.title()}\n${message.language.infos.dev.content(uptime)}`);
        container.addTextDisplayComponents(devSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const statsTitle = message.language.infos.statistics.title(this.client.shard.ids[0], false);
        const statsSection = new TextDisplayBuilder()
            .setContent(`${statsTitle}\n${message.language.infos.statistics.content(guildsCount, channelsCount, usersCountW)}`);
        container.addTextDisplayComponents(statsSection);

        container.addSeparatorComponents(new SeparatorBuilder());

        const linksSection = new TextDisplayBuilder()
            .setContent(`${message.language.infos.link.title()}\n${message.language.infos.link.content()}`);
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
            .setContent(`-# ${data.footer}`);
        container.addTextDisplayComponents(footer);

        message.channel.send({ 
            components: [container], 
            flags: MessageFlags.IsComponentsV2 
        });
    }
};

module.exports = Infos;
