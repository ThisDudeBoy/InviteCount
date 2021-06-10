const Command = require("../../structures/Command.js"),
    Discord = require("discord.js");

const giveawayModel = require('../../models/giveaway');
const ms = require('ms');

class Gstart extends Command {
    constructor(client) {
        super(client, {
            name: "gstart",
            enabled: true,
            aliases: [],
            clientPermissions: ["EMBED_LINKS"],
            permLevel: 0
        });
    }

    async run(message, args, data) {
        if (!message.member.permissions.has("MANAGE_GUILD")) {
            return message.channel.send(message.language.errors.perms());
        }
        const currentGiveaways = message.client.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id && !g.ended).length;
        if (currentGiveaways > 3 || currentGiveaways == 4) {
            return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription("The maximum number of giveaways per server has been reached (4) Please end these giveaways first."))
        }
        const prompts = ["Hello ! Please mention the channel you want to host the giveaway in. !",
            "Super ! How long do you want the giveaway to last? \n You can use `m` for minutes, `h` for hours, `d` for days.",
            "How many winners will this giveaway have? \n Please enter a number between `1` and `10`.",
            "Good. What is the prize of this giveaway? \n Please enter the giveaway prize under this message.",
            "How many messages do giveaway participant need to have? \n Answer `0` to skip this step.",
        ]
        const response = await getResponses(message)
        if (response.cancelled) return
        const infos = {
            "end": "Ends at :",
            "enter": "React with 🎁 to enter",
            "host": "Host by",
            "winners": "Winner(s)",
            "rest": "Remaining time:",
            "vote": "Vote for 25% more chances to win !",
            "error": "Giveaway cancelled, no valid participations.",
            "invite": "Invite me on your server !",
            "requirementMessage": "<:flache:852266031568781342> You must send `{messages}` messages",
            "requirementInvite": "<:flache:852266031568781342> You must have `{messages}` invites",
            "requirementDouble": "<:flache:852266031568781342> You must send `{messages}` messages and have `{count}` invites",
            "congrats": "🏆 Congratulations, {winners} ! You won **{prize}**!\n{messageURL}",
            "seconds": "seconds",
            "minutes": "minutes",
            "hours": "hours",
            "days": "days"
        }
        let condition;
        if (response.invites && response.messages) {
            condition = infos.requirementMessage.replace("{messages}", response.messages).replace("{count}", response.invites);
        } else {
            if (!response.invites && !response.messages) {
                condition = "";

            } else {
                if (response.messages) {
                    condition = infos.requirementMessage.replace("{messages}", response.messages);
                }
                if (response.invites) {
                    condition = infos.requirementInvite.replace("{messages}", response.invites);
                }
            }

        }
        let embed = new Discord.MessageEmbed()
            .setAuthor("🎁 Giveaway System", this.client.user.displayAvatarURL())
            .setDescription(`Your giveaway has been started in ${response.channel}. You can manage it with the followings commands : \`greroll\` , \`gend\`.`)
            .setColor(data.color)
            .setFooter(message.language.add.requested(message.author.username), message.author.displayAvatarURL());
        message.channel.send(embed);

        message.client.giveawaysManager.start(response.channel, {
            time: response.time,
            prize: response.price,
            winnerCount: parseInt(response.winners, 10),
            embedColorEnd: "#ED360E",
            messages: {
                giveaway: "\n\n<:tada:852265416905719859><:tada:852265416905719859> **GIVEAWAY** <:tada:852265416905719859><:tada:852265416905719859>",
                giveawayEnded: "\n\n<:tada:852265416905719859><:tada:852265416905719859> **GIVEAWAY ENDED** <:tada:852265416905719859><:tada:852265416905719859>",
                timeRemaining: "<:flache:852266031568781342> " + infos.rest + ": \`{duration}\`!\n" + condition + "\n[" + infos.vote + "](https://top.gg/bot/783708073390112830/vote)",
                inviteToParticipate: "<:flache:852266031568781342> " + infos.enter + "\n<:flache:852266031568781342> " + infos.host + " \`" + message.author.username + "\`\n<:flache:852266031568781342>\`" + response.winners + "\` " + infos.winners + "",
                winMessage: infos.congrats,
                embedFooter: infos.end,
                noWinner: "" + infos.error + "\n\n" + infos.host + " \`" + message.author.username + "\`",
                winners: "🏆 " + infos.winners + "",
                endedAt: infos.end,
                units: {
                    seconds: infos.seconds,
                    minutes: infos.minutes,
                    hours: infos.hours,
                    days: infos.days,
                    pluralS: false
                }
            }
        }).then((gData) => {
            if (response.invites && response.messages) {
                const verynew = new giveawayModel({
                    serverID: `${gData.guildID}`,
                    MessageID: `${gData.messageID}`,
                    requiredMessages: `${response.messages}`,
                    requiredInvites: `${response.invites}`
                }).save()

            } else {
                if (!response.invites && !response.messages) {

                } else {
                    if (response.messages) {
                        const verynew = new giveawayModel({
                            serverID: `${gData.guildID}`,
                            MessageID: `${gData.messageID}`,
                            requiredMessages: `${response.messages}`,
                        }).save()

                    }
                    if (response.invites) {
                        const verynew = new giveawayModel({
                            serverID: `${gData.guildID}`,
                            MessageID: `${gData.messageID}`,
                            requiredInvites: `${response.invites}`
                        }).save()
                    }
                }

            }
            if (response.messages) {
                const verynew = new giveawayModel({
                    serverID: `${gData.guildID}`,
                    MessageID: `${gData.messageID}`,
                    requiredMessages: `${response.messages}`,
                }).save()
            }
        });


        async function getResponses(message) {
            const validTime = /^\d+(s|m|h|d)$/;
            const validNumber = /^\d+/;
            const responses = {}
            let can = "Note: You can type at any moment `cancel` to cancel ."
            for (let i = 0; i < prompts.length; i++) {
                await message.channel.send(new Discord.MessageEmbed().setAuthor("🎁 Giveaway System", message.client.user.displayAvatarURL()).setColor(data.color).setDescription(`${prompts[i]}\n\n${can}`));
                const response = await message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1 })
                const { content } = response.first();
                const m = response.first();
                if (content.toLowerCase() === "cancel") {
                    responses.cancelled = true;
                    message.channel.send(new Discord.MessageEmbed().setColor(data.color).setTitle("💡 Operation cancelled"))
                    return responses;
                    break;
                }
                if (i === 0) {
                    let channel = m.mentions.channels.first() ||
                        message.guild.channels.cache.get(content)
                    if (!channel) return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription(message.language.configjoin.errors.channelNotFound(content)));

                    if (channel.type === "category") {
                        return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription(message.language.configjoin.errors.channelNotFound(content)));
                    }
                    if (channel.type === "voice") {
                        return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription(message.language.configjoin.errors.channelNotFound(content)));
                    }



                    responses.channel = channel;


                }
                if (i === 1) {
                    if (isNaN(ms(content))) {
                        return message.errorMessage(`Veuillez fournir une date valide pour ce giveaway , au format d/m/s . Exemple : 1d . Veuillez refaire la commande.`)
                        break;
                    } else {
                        if (ms(content) > ms("15d")) {
                            return message.errorMessage(`La date ne doit pas dépasser 15 jours . Veuillez refaire la commande.`)
                            break;
                        } else {
                            responses.time = ms(content);
                        }

                    }
                }
                if (i === 2) {
                    if (isNaN(content) || content < 1 || content > 10 || m.content.includes('-') || m.content.includes('+') || m.content.includes(',') || m.content.includes('.')) {
                        return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription("Please provide a valid number beetween **1** and **10**"));

                        break;
                    } else {
                        responses.winners = content;
                    }
                }
                if (i === 3) {
                    if (content < 2 || content > 1000) {
                        return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription("Please provide a valid number beetween **1** and **10**"));

                        break;
                    }
                    responses.price = content;
                }
                if (i === 4) {
                    if (content === '0') {
                        responses.messages = null;
                    } else {
                        if (isNaN(content) || content < 1 || m.content.includes('-') || m.content.includes('+') || m.content.includes(',') || m.content.includes('.')) {

                            return message.channel.send(new Discord.MessageEmbed().setColor("#E07C2D").setDescription("Please provide a valid number beetween **1** and **10**"));

                            break;
                        } else {
                            responses.messages = content;
                        }
                    }
                }


            }
            return responses;
        }


    }

};

module.exports = Gstart;