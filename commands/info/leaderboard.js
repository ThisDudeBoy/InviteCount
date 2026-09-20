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

class Leaderboard extends Command {
    constructor (client) {
        super(client, {
            name: "leaderboard",
            enabled: true,
            aliases: [ "top", "lb" ],
            clientPermissions: [ "EmbedLinks" ],
            permLevel: 0
        });
    }

    async run (message, args, data) {
        const ownerId = message.author.id;
        const color = componentsV2.parseColor(data.color);

        let membersData = await this.client.guildMembersData.find({
            guildID: message.guild.id,
            $expr: {
                $gt: [
                    { $add: [ "$invites", "$bonus", "$leaves", "$fake" ] }, 0
                ]
            }
        }).lean();
        
        if (membersData.length <= 0) {
            const container = new ContainerBuilder()
                .setAccentColor(color);

            const title = new TextDisplayBuilder()
                .setContent(`## ${message.language.leaderboard.empty.title()}`);
            container.addTextDisplayComponents(title);

            container.addSeparatorComponents(new SeparatorBuilder());

            const descText = new TextDisplayBuilder()
                .setContent(message.language.leaderboard.empty.content());
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

            return message.channel.send({ 
                components: [container], 
                flags: MessageFlags.IsComponentsV2 
            });
        }

        let members = [];
        membersData.forEach((member) => {
            members.push({
                calculatedInvites: (member.invites + member.bonus - member.leaves - member.fake),
                fake: member.fake,
                invites: member.invites,
                bonus: member.bonus,
                leaves: member.leaves,
                id: member.id
            });
        });
        members = members.sort((a, b) => b.calculatedInvites - a.calculatedInvites);

        let description = "";
        let totalMemberCount = 0;
        
        const topMembers = members.slice(0, 10);
        
        for (const member of topMembers) {
            let user = this.client.users.cache.get(member.id) || (message.guild.members.cache.get(member.id) || {}).user;
            if (!user) {
                try {
                    user = await this.client.users.fetch(member.id);
                } catch (e) {
                    continue;
                }
            }
            totalMemberCount++;
            let lb = totalMemberCount === 1 ? "🏆" :
                     totalMemberCount === 2 ? "🥈" :
                     totalMemberCount === 3 ? "🥉" :
                     `**${totalMemberCount}.**`;
            description += `${message.language.leaderboard.user(user, member, lb)}\n`;
        }

        const container = new ContainerBuilder()
            .setAccentColor(color);

        const title = new TextDisplayBuilder()
            .setContent(`## ${message.language.leaderboard.title()}`);
        container.addTextDisplayComponents(title);

        container.addSeparatorComponents(new SeparatorBuilder());

        const leaderboardText = new TextDisplayBuilder()
            .setContent(description || "No members found");
        container.addTextDisplayComponents(leaderboardText);

        container.addSeparatorComponents(new SeparatorBuilder());

        const buttonRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(componentsV2.encodeCustomId('lb_refresh', ownerId))
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

module.exports = Leaderboard;
