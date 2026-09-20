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

class RemoveInvites extends Command {
    constructor (client) {
        super(client, {
            name: "removeinvites",
            enabled: true,
            aliases: [ "rinvites", "removeinv", "rinv", "removeinvite", "remove-invites", "remove-invite" ],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 2
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);
        
        let member = args[0] ? await this.client.resolveMember(args.join(" "), message.guild) : null;
        let msg = await (member ? message.channel.send(message.language.removeinvites.loading.member(data.guild.prefix, member)) : message.channel.send(message.language.removeinvites.loading.all(data.guild.prefix)));
        
        if (member) {
            let memberData = await this.client.findOrCreateGuildMember({ id: member.id, guildID: message.guild.id });
            memberData.old_invites = memberData.invites;
            memberData.invites = 0;
            memberData.old_fake = memberData.fake;
            memberData.fake = 0;
            memberData.old_leaves = memberData.leaves;
            memberData.leaves = 0;
            memberData.old_bonus = memberData.bonus;
            memberData.bonus = 0;
            await memberData.save();
        } else {
            let members = await this.client.guildMembersData.find({ guildID: message.guild.id });
            await this.client.functions.asyncForEach(members, async (memberData) => {
                memberData.old_invites = memberData.invites;
                memberData.invites = 0;
                memberData.old_fake = memberData.fake;
                memberData.fake = 0;
                memberData.old_leaves = memberData.leaves;
                memberData.leaves = 0;
                memberData.old_bonus = memberData.bonus;
                memberData.bonus = 0;
                await memberData.save();
            });
        }

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${message.language.removeinvites.title()}`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const descText = new TextDisplayBuilder()
            .setContent(member ?
                message.language.removeinvites.titles.member(data.guild.prefix, member)
                : message.language.removeinvites.titles.all(data.guild.prefix)
            );
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

        msg.edit({ 
            content: null,
            components: [container], 
            flags: MessageFlags.IsComponentsV2 
        });
    }
};

module.exports = RemoveInvites;
