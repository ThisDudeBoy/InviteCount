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

class SyncInvites extends Command {
    constructor (client) {
        super(client, {
            name: "sync-invites",
            enabled: true,
            aliases: [ "sync" ],
            clientPermissions: [ "ManageGuild" ],
            permLevel: 2
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        let guildInvites = await message.guild.invites.fetch();
        if (guildInvites.size === 0) return message.channel.send(message.language.syncinvites.no());
        let invitesCount = [...guildInvites.values()].map((i) => i.uses).reduce((p, c) => p + c);
        let conf = await message.channel.send(message.language.syncinvites.confirmations.all(invitesCount));
        
        const filter = (m) => m.author.id === message.author.id && (m.content === "cancel" || m.content === "-confirm");
        const collected = await message.channel.awaitMessages({ filter, max: 1, time: 90000 }).catch(() => null);
        
        if (!collected || collected.size === 0) {
            return conf.edit(message.language.syncinvites.confirmations.cancelled());
        }
        
        if (collected.first().content === "cancel") return conf.edit(message.language.syncinvites.confirmations.cancelled());
        collected.first().delete().catch(() => {});
        let users = new Set([...guildInvites.values()].map((i) => i.inviter.id));
        await this.client.functions.asyncForEach(Array.from(users), async (user) => {
            let memberData = await this.client.findOrCreateGuildMember({ id: user, guildID: message.guild.id });
            memberData.invites = [...guildInvites.values()].filter((i) => i.inviter.id === user).map((i) => i.uses).reduce((p, c) => p + c);
            await memberData.save();
        });

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${message.language.syncinvites.title()}`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const descText = new TextDisplayBuilder()
            .setContent(message.language.restoreinvites.titles.all());
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

        conf.edit({ 
            content: null,
            components: [container], 
            flags: MessageFlags.IsComponentsV2 
        });
    }
};

module.exports = SyncInvites;
