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

class AddBonus extends Command {
    constructor (client) {
        super(client, {
            name: "addbonus",
            enabled: true,
            aliases: [ "addinvites", "addinvite" ],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 2
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        let bonus = args[0];
        if (!bonus) return message.channel.send(componentsV2.errorEmbed('Error', message.language.addbonus.errors.bonus.missing(data.guild.prefix)));
        if (isNaN(bonus) || (parseInt(bonus) < 1) || parseInt(bonus) >= 10000 || !Number.isInteger(parseInt(bonus))) {
            return message.channel.send(componentsV2.errorEmbed('Error', message.language.addbonus.errors.bonus.incorrect(data.guild.prefix)));
        }

        let member = message.mentions.members.first() || await this.client.resolveMember(args.slice(1).join(" "), message.guild);
        if (!member) return message.channel.send(componentsV2.errorEmbed('Error', message.language.addbonus.errors.member.missing(data.guild.prefix)));
    
        let memberData = await this.client.findOrCreateGuildMember({ id: member.id, guildID: message.guild.id, bot: member.user.bot });
        memberData.bonus += parseInt(bonus);
        memberData.markModified("bonus");
        await memberData.save();

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${message.language.addbonus.title()}`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const descText = new TextDisplayBuilder()
            .setContent(`Added **${bonus}** bonus invites to **${member.user.tag}**\n\n${message.language.addbonus.field(data.guild.prefix, member)}`);
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

module.exports = AddBonus;
