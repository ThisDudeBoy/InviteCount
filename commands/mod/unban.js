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

class UnBan extends Command {
    constructor (client) {
        super(client, {
            name: "unban",
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
            return message.channel.send(componentsV2.errorEmbed('Error', message.language.kick.errors.missingPerms));
        }
       
        let banneduser = args.slice(0).join(" ");
        if (!banneduser || isNaN(banneduser) || banneduser.length < 17) {
            return message.channel.send(componentsV2.errorEmbed('Error', message.language.unban.noid));
        }

        const banned = await message.guild.bans.fetch();
        if (![...banned.values()].some((e) => e.user.id === banneduser)) {
            return message.channel.send(componentsV2.errorEmbed('Error', message.language.unban.noban));
        }

        message.guild.members.unban(banneduser)
        .then(user => {
            const container = new ContainerBuilder()
                .setAccentColor(color);

            const title = new TextDisplayBuilder()
                .setContent(`## Member Unbanned`);
            container.addTextDisplayComponents(title);

            container.addSeparatorComponents(new SeparatorBuilder());

            const descText = new TextDisplayBuilder()
                .setContent(message.language.unban.success(user.tag));
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
        })
        .catch(console.error);
    }
}

module.exports = UnBan;
