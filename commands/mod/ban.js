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

class Ban extends Command {
    constructor (client) {
        super(client, {
            name: "ban",
            enabled: true,
            aliases: [],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);
        
        if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) {
            return message.channel.send(componentsV2.errorEmbed('Error', message.language.ban.errors.missingPerms));
        }
        
        const member = message.mentions.members.first();
        if (!member) return message.channel.send(componentsV2.errorEmbed('Error', message.language.ban.errors.nouser));
        
        let reason = args.slice(1).join(" ");
        if (!reason) {
            reason = "No Reason Specified";
        }
        
        const memberPosition = member.roles.highest.position;
        const moderationPosition = message.member.roles.highest.position;
        if (message.guild.ownerId !== message.author.id && !(moderationPosition > memberPosition)) {
            return message.channel.send(componentsV2.errorEmbed('Error', message.language.ban.errors.supperior));
        }

        if (!member.bannable) {
            return message.channel.send(componentsV2.errorEmbed('Error', message.language.ban.errors.noperm));
        }
        
        await member.send(message.language.ban.banneddm(message.guild.name, message.member.user.tag, reason)).catch(() => {});
        
        member.ban({ reason: reason }).then(() => {
            const container = new ContainerBuilder()
                .setAccentColor(color);

            const title = new TextDisplayBuilder()
                .setContent(`## Member Banned`);
            container.addTextDisplayComponents(title);

            container.addSeparatorComponents(new SeparatorBuilder());

            const descText = new TextDisplayBuilder()
                .setContent(`${message.language.ban.description}\n\n**User:** ${member.user.tag}\n**Reason:** ${reason}\n**Moderator:** ${message.author.tag}`);
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
        }).catch(() => {});
    }
}

module.exports = Ban;
