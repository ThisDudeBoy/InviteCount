const Discord = require('discord.js');

const giveawayModel = require('../models/giveaway');


module.exports = {


    async execute(giveaway, member, reaction, client) {
        if (reaction.message.partial) await reaction.message.fetch();
        let message = reaction.message;

        let guildData = await client.findOrCreateGuild({ id: message.guild.id });

        const memberData = await client.findOrCreateGuildMember({ id: member.id, guildID: message.guild.id, bot: member.user.bot });


        const find = await giveawayModel.findOne({ serverID: giveaway.guildID, MessageID: giveaway.messageID })
        if (find) {


            if (find.requiredMessages) {


                if (find.requiredMessages < memberData.messagesCount || find.requiredMessages == memberData.messagesCount) {
                    const succes = new Discord.MessageEmbed()
                        .setTitle(`<:succes:851491428563812382> - Entry accepted`)
                        .setDescription(`Your participation for [this giveaway](${message.url}) has been accepted.`)
                        .addFields({ name: "🧷 Links", value: `
      \n● Add me to your server [here](https://discordapp.com/api/oauth2/authorize?client_id=850080680578383872&permissions=8&scope=bot) \n● Join my support server [here](https://discord.gg/mbH5p4Fbyk) \n● Vote for me [here](https://discord.boats/bot/850080680578383872/vote)` })
                        .setColor(client.config.color)
                        .setURL('https://discord.gg/mbH5p4Fbyk')

                    .setFooter(client.config.footer, client.user.displayAvatarURL({ dynamic: true, size: 512 }))

                    member.send(succes)
                    if (guildData.glogs) {
                        const succesA = new Discord.MessageEmbed()
                            .setTitle(`<:succes:851491428563812382> - New valid entry`)
                            .setDescription(`The participation of ${member} for [this giveaway](${message.url}) has been accepted.`)
                            .setColor(client.config.color)
                            .setURL('https://discord.gg/mbH5p4Fbyk')

                        .setFooter(client.config.footer, client.user.displayAvatarURL({ dynamic: true, size: 512 }));

                        let aLogs = member.guild.channels.cache.get(guildData.glogs);
                        if (aLogs) aLogs.send({ embed: succesA });

                    }
                } else {

                    const succese = new Discord.MessageEmbed()
                        .setTitle(`<:error:851490719934840872> |  Participation denied`)
                        .setURL('https://discord.gg/mbH5p4Fbyk')

                    .setDescription(`You participation for [this giveaway](${message.url}) has been denied : \n__Conditions__\nMessages : **${memberData.messagesCount}/${find.requiredMessages}**\n `)
                        .addFields({ name: "🧷 Links", value: `
      \n● Add me to your server [here](https://discordapp.com/api/oauth2/authorize?client_id=850080680578383872&permissions=8&scope=bot) \n● Join my support server [here](https://discord.gg/mbH5p4Fbyk) \n● Vote for me [here](https://discord.boats/bot/850080680578383872/vote)` })
                        .setColor('#982318')
                        .setFooter(client.config.footer, client.user.displayAvatarURL({ dynamic: true, size: 512 }))

                    member.send(succese)
                    reaction.users.remove(member.user);
                    if (guildData.glogs) {
                        const succesA = new Discord.MessageEmbed()
                            .setTitle(`<:error:851490719934840872> | Participation denied`)
                            .setDescription(`The participation of ${member} for [this giveaway](${message.url}) has been denied.\n__Conditions__\nMessages : **${memberData.messagesCount}/${find.requiredMessages}**`)
                            .setColor(client.config.color)
                            .setURL('https://discord.gg/mbH5p4Fbyk')

                        .setFooter(client.config.footer, client.user.displayAvatarURL({ dynamic: true, size: 512 }));

                        let aLogs = member.guild.channels.cache.get(guildData.glogs);
                        if (aLogs) aLogs.send({ embed: succesA });

                    }
                }


            }
        } else {
            const succes = new Discord.MessageEmbed()
                .setTitle(`<:succes:851491428563812382> Entry accepted`)
                .setDescription(`Your participation for [this giveaway](${message.url}) has been accepted.`)
                .addFields({ name: "🧷 Links", value: `
              \n● Add me to your server [here](https://discordapp.com/api/oauth2/authorize?client_id=850080680578383872&permissions=8&scope=bot) \n● Join my support server [here](https://discord.gg/mbH5p4Fbyk) \n● Vote for me [here](https://discord.boats/bot/850080680578383872/vote)` })
                .setColor(client.config.color)
                .setURL('https://discord.gg/mbH5p4Fbyk')

            .setFooter(client.config.footer, client.user.displayAvatarURL({ dynamic: true, size: 512 }))

            member.send(succes)
            if (guildData.glogs) {
                const succesA = new Discord.MessageEmbed()
                    .setTitle(`<:succes:851491428563812382> - New valid entry`)
                    .setDescription(`${member}'s participation for [this giveaway](${message.url}) has been accepted.`)
                    .setColor(client.config.color)
                    .setURL('https://discord.gg/mbH5p4Fbyk')

                .setFooter(client.config.footer, client.user.displayAvatarURL({ dynamic: true, size: 512 }));

                let aLogs = member.guild.channels.cache.get(guildData.glogs);
                if (aLogs) aLogs.send({ embed: succesA });

            }
        }

    }
};