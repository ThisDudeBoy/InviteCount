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

class GiveawayReroll extends Command {
    constructor(client) {
        super(client, {
            name: "greroll",
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
        
        const messageID = args[0];
        if (!messageID) {
            return message.channel.send(componentsV2.errorEmbed('Giveaway System', 'Please provide a valid message ID.'));
        }
        
        try {
            let toend = message.client.giveawaysManager.giveaways.find(g => g.messageId === messageID);
            if (toend) {
                message.client.giveawaysManager.reroll(messageID, {
                    congrat: 'Congratulations, {winners} ! You won **{prize}**!\n{messageURL}',
                    error: `Giveaway cancelled, no valid participations.`
                });

                const container = new ContainerBuilder()
                    .setAccentColor(color);

                const title = new TextDisplayBuilder()
                    .setContent(`## Giveaway Rerolled`);
                container.addTextDisplayComponents(title);

                container.addSeparatorComponents(new SeparatorBuilder());

                const descText = new TextDisplayBuilder()
                    .setContent(`Successfully rerolled the giveaway!`);
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
            } else {
                return message.channel.send(componentsV2.errorEmbed('Giveaway System', 'No giveaway found with this ID.'));
            }
        } catch (e) {
            return message.channel.send(componentsV2.errorEmbed('Giveaway System', 'No giveaway found with this ID.'));
        }
    }
};

module.exports = GiveawayReroll;
