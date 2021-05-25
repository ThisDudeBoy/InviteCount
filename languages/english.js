const { emojis, discord } = require("../config");

module.exports = {

    locale: "en_US",

    utils: {
        prefix: (prefix) => `My current prefix is \`${prefix}\`\nUse \`${prefix}help\` for more help.`,
        viewConf: () => `[View the configuration on the dashboard](https://invite-count.xyz)`,
        conf: {
            title: () => `View the configuration on the dashboard`,
            content: () => `[or on the dashboard](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} joined the server using OAuth flow.`,
                
                vanity: (user) => `${user} joined the server using a discord.gg invite defined by the guild owner (or admin).`,
                unknown: (user) => `I can't figure out how ${user} joined the server.`,
                perm: (user) => `${emojis.error} | I need the manage server permissions to know who is the inviter of ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} left the server, he joined via OAuth.`,
                vanity: (user) => `${user} left the server, he joined using a discord.gg invite defined by the server owner (or an admin).`,
                unknown: (user) => `${user} left the server, but I can't figure out how he joined it.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Missing permissions**__\n\nI need the following permissions for this command to work properly: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | This command is currently disabled!`,
        permLevel: (name) => `${emojis.error} | This command requires the permission level: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | I don't have the permission to send messages in this channel.`,
        missingAdmin: () => `${emojis.error} | I need \`Manage Guild\` permission to perform this action`
    },

    help: {
        title: () => `ℹ InviteCount's Help Page`,
        description: (guildName, prefix) => `InviteCount allows you to manage the members of your server by looking at their invites.\n\nGo to the **documentation** by clicking [here](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderation**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Administration**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **General**`,
            content: (prefix) => "> `infos`, `stats`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Configuration**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Leave Messages`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Invites
        invites: {
            title: () => `:wave: Invites`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Utils`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Links :`,
        links: (clientID) => `[Add me](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [WebSite](https://invite-count.xyz) ● [Support server](${discord}) ● [Vote for me](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount allows you to manage the members of your server by looking at their invites.`,

        dev: {
            title: () => `**Informations**`,
            content: (uptime) => `<:arrow:766358167382523944> **Developpers:** Alex.#7331, Alboom#2121\n <:arrow:766358167382523944> **Library:** [discord.js v12.3.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Uptime** ${uptime}\n <:arrow:766358167382523944> **Creation Date:** 12 mai 2019`
        },
        statistics: {
            title: () => `**Statistics**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Servers:** ${guilds}\n<:arrow:766358167382523944> **Users**: ${channels}\n<:arrow:766358167382523944> **Channels:** ${users}`
        },
        link: {
            title: () => `**Links**`,
            content: () => `<:arrow:766358167382523944> **Support Server:** [Click me](${discord})\n<:arrow:766358167382523944> **Invite:** [Click me](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount allows you to manage the members of your server by looking at their invites.`,

        dev: {
            title: () => `**Developpers :**`,
            content: (uptime) => `[Alex.#7331](https://github.com/ThisDudeBoy)\n[Alboom#2121](https://chillbot.me)`
        },
        statistics: {
            title: () => `**Inspired from :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Special thanks to :**`,
            content: () => `⭐ Donators\n\:flag_fr:  Translators\n👨‍🏭 All Staffs`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `You have` : `**${member.user.username}** has`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** invites! (**${memberData.invites}** regular, **${memberData.bonus}** bonus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** fake, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** leaves)${nextRank ? `\nYou need **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** more invites to get the next rank: **${role}**!` : ""}`
    },

    leaderboard: {
        cleared: () => `${emojis.success} | Leaderboard cleared!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** invites (**${member.invites}** regular, **${member.bonus}** bonus, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** fake, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** leaves)`,
        prompt: () => `{{user}}, on which page would you like to go? Write \`cancel\` or \`0\` to cancel.`,
        title: () => `Invites Leaderboard`,
        empty: {
            title: () => `😕 No invite found`,
            content: () => `Start inviting people and you will appear on this page!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} account (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Creation`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Robot`,
                content: (user) => user.bot ? "Oui" : "Non"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Join`
            },
            joinWay: {
                title: () => `Join due to`,
                oauth: () => `Oauth invitation (via discordapp.com).`,
                vanity: () => `Customized invite configured by an administrator.`,
                unknown: (user) => `I can't figure out how ${user.username} joined the server.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Invites`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** invites (**${inviteData.invites}** regular, **${inviteData.bonus}** bonus, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** fake, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** leaves)`
            },
            joinOrder: {
                title: () => `➡️ Join Order`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | You must have permission `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Please mention a user",
            supperior: "<:error:753232040199192657> | You cannot kick a user who is superior to you",
            noperm: "<:error:753232040199192657> | An error has occurred ... Please verify that I have permission to exclude this specific member and try again!",
        },
        description: "<:success:753232040073101363> | User was successfully kicked out",
        banneddm: (server, moderator, reason) => "You have been kicked out of **" + server + "** by **" + moderator + "**\n**Reason** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | You must have permission `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Please mention a user",
            supperior: "<:error:753232040199192657> | You cannot ban a user who is superior to you",
            noperm: "<:error:753232040199192657> | An error has occured ... Please verify that I have permission to ban this specific member and try again!",
            
        },
        description: "<:success:753232040073101363> | User has been successfully banned",
        banneddm: (server, moderator, reason) => "You have been banned from **" + server + "** by **" + moderator + "**\n**Reason** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Please specify an id to unban",
        success: (user) => "<:success:753232040073101363> | " + user + " has been successfully unbanned",
        noban: "<:error:753232040199192657> | This user is not banned"
    },

    membercount: {
        title: (guildName) => `${guildName}'s MemberCount`,
        description: (guild) => `
        Total of **${guild.members.cache.size}**  members (**${guild.members.cache.filter((m) => !m.user.bot).size}** humans and **${guild.members.cache.filter((m) => m.user.bot).size}** bots)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} members dnd
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} members online
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} members idle
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} members offline`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | You must write the number of bonus invites you want to add. (Syntax: ${prefix}addbonus number @member) **You need to invite real person to get a reward rank**`,
                incorrect: (prefix) => `${emojis.error} | You must write a __**valid**__ number of bonus invites that you want to add. (Syntax: ${prefix}addbonus number @member)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | You must mention the member to whom you want to add the bonus invites. (Syntax: ${prefix}addbonus number @member)`
            }
        },
        title: () => `📥 Bonus Invites Added`,
        field: (prefix, member) => `Write \`${prefix}invites ${member.user.tag}\` to see the new number of invites of **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | You must write the number of bonus invites you want to remove. (Syntax: ${prefix}removebonus number @member)`,
                incorrect: (prefix) => `${emojis.error} | You must write a __**valid**__ number of bonus invites that you want to remove. (Syntax: ${prefix}removebonus number @member)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | You must mention the member to whom you want to remove the bonus invites. (Syntax: ${prefix}removebonus number @member)`
            }
        },
        title: () => `📥 Bonus Invites Removed`,
        field: (prefix, member) => `Write \`${prefix}invites ${member.user.tag}\` to see the new number of invites of **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | The DM join system is now __ENABLED__!**`,
        off: () => `**${emojis.success} | The DM join system is now __DISABLED__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | The join system is now __ENABLED__!**`,
        off: () => `**${emojis.success} | The join system is now __DISABLED__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | The leave system is now __ENABLED__!**`,
        off: () => `**${emojis.success} | The leave system is now __DISABLED__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | You must write a prefix!`,
        success: () => `${emojis.success} | Server prefix has been updated!`
    },

    testdmjoin: {
        title: () => `:wrench: DM Join system :`,
        description: () => `If it doesn't work, check the bot permissions or join our [support server](${discord})`,
        fields: {
            enabled: () => `> Enabled:`,
            message: () => `> Message:`
        },
        enabled: (prefix) => `${emojis.success} Join messages in dm enabled. Disable them with \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Join messages in dm disabled. Enable them with \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `No message defined. Set it with \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Join system :`,
        description: () => `If it doesn't work, check the bot permissions or join our [support server](${discord})`,
        fields: {
            enabled: () => `> Enabled:`,
            channel: () => `> Channel:`,
            message: () => `> Message:`
        },
        enabled: (prefix) => `${emojis.success} Join messages enabled. Disable them with \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Join messages disabled. Enable them with \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `No message defined. Set it with \`${prefix}configjoin\`!`,
            channel: (prefix) => `No channel defined. Set it with \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Leave system :`,
        description: () => `If it doesn't work, check the bot permissions or join our [support server](${discord})`,
        fields: {
            enabled: () => `> Enabled:`,
            channel: () => `> Channel:`,
            message: () => `> Message:`
        },
        enabled: (prefix) => `${emojis.success} Leave messages enabled. Disable them with \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Leave messages disabled. Enable them with \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `No message defined. Set it with \`${prefix}configleave\`!`,
            channel: (prefix) => `No channel defined. Set it with \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `${guildName}'s configuration`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Join Messages`,
            content: (guild, data) => `
            > Enabled: ${data.guild.join.enabled ? "**yes**" : "**no**"}
            > Message: ${data.guild.join.message ? "**defined**" : "**not defined**."}
            > Channel: ${!data.guild.join.channel ? "**not defined**" : (guild.channels.cache.get(data.guild.join.channel) ? "**defined**" : "**channel not found**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Leave Messages`,
            content: (guild, data) => `
            > Enabled: ${data.guild.leave.enabled ? "**yes**" : "**no**"}
            > Message: ${data.guild.leave.message ? "**defined**" : "**not defined**."}
            > Channel: ${!data.guild.leave.channel ? "**not defined**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**defined**" : "**channel not found**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Join DM Messages`,
            content: (guild, data) => `
            > Enabled: ${data.guild.joinDM.enabled ? "**yes**" : "**no**"}
            > Message: ${data.guild.joinDM.message ? "**defined**" : "**not defined**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Hey, **${username}**! This feature is only available for premium servers and partners. Get premium here: **comming soon** !`
    },

    antispam: {
        cooldown: (username) => `Slow down! Please wait 5 seconds and try again!`
    },

    configdmjoin: {
        
        disable: (prefix) => `Type \`${prefix}setdmjoin\` to disable join messages in dm.`,
        instruct: (str) => `
__**More informations**__
\`\`\`
{user} : The mention of the member that just joined your server.
{user.name} : The name of the member that just joined your server.
{user.tag} : The tag of the member that just joined your server.
{user.createdat} : The account age of the member.

{guild} : Name of the server.
{guild.count} : Number of members your server has now.

{inviter} : The mention of the inviter.
{inviter.name} : The name of the inviter.
{inviter.tag} : The tag of the inviter.
{inviter.invites} : The total inviter's invites count.

{invite.code} : The invite code used.
{invite.url} : The invite url used.
{invite.uses} : Number of uses of the invite used.
\`\`\`
Type \`cancel\` to abort. ${str}


:pencil: **| Now write the join DM message... :pencil2:**`,
        cancelled: () => `:x: Cancelled.`,
        success: () => `✅ **| Done successfully...**`,
        title: () => `**Done The join DM Msg Has Been Setup**`,
        fields: {
            message: () => `Message:`,
            testIt: () => `Test it:`,
            cmd: (prefix) => `Use \`${prefix}testdmjoin\` to test the new message.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Your message must contain less than 850 characters.`, 
        disable: (prefix) => `Type \`${prefix}setjoin\` to disable join messages.`,
        instructs: {
            message: (str) => `
__**More informations**__
\`\`\`
{user} : The mention of the member that just joined your server.
{user.name} : The name of the member that just joined your server.
{user.tag} : The tag of the member that just joined your server.
{user.createdat} : The account age of the member.

{guild} : Name of the server.
{guild.count} : Number of members your server has now.

{inviter} : The mention of the inviter.
{inviter.name} : The name of the inviter.
{inviter.tag} : The tag of the inviter.
{inviter.invites} : The total inviter's invites count.

{invite.code} : The invite code used.
{invite.url} : The invite url used.
{invite.uses} : Number of uses of the invite used.
\`\`\`
Type \`cancel\` to abort. ${str}


:pencil: **| Now write the join message... :pencil2:**`,
            channel: () => `:scroll: **| Now mention the channel... :pencil2:**`
        },
        cancelled: () => `:x: Cancelled.`,
        success: () => `✅ **| Done successfully...**`,
        title: () => `**Done The join Msg Has Been Setup**`,
        fields: {
            message: () => `Message:`,
            channel: () => `Channel:`,
            testIt: () => `Test it:`,
            cmd: (prefix) => `Use \`${prefix}testjoin\` to test the new message.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | No channel found for \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Type \`${prefix}setleave\` to disable leave messages.`,
        instructs: {
            message: (str) => `
__**More informations**__
\`\`\`
{user} : The mention of the member that just left your server.
{user.name} : The name of the member that just left your server.
{user.tag} : The tag of the member that just left your server.
{user.createdat} : The account age of the member.

{guild} : Name of the server.
{guild.count} : Number of members your server has now.

{inviter} : The mention of the inviter.
{inviter.name} : The name of the inviter.
{inviter.tag} : The tag of the inviter.
{inviter.invites} : The total inviter's invites count.

{invite.code} : The invite code used.
{invite.url} : The invite url used.
{invite.uses} : Number of uses of the invite used.
\`\`\`
Type \`cancel\` to abort. ${str}


:pencil: **| Now write the leave message... :pencil2:**`,
            channel: () => `:scroll: **| Now mention the channel... :pencil2:**`
        },
        cancelled: () => `:x: Cancelled.`,
        success: () => `✅ **| Done successfully...**`,
        title: () => `**Done The leave Msg Has Been Setup**`,
        fields: {
            message: () => `Message:`,
            channel: () => `Channel:`,
            testIt: () => `Test it:`,
            cmd: (prefix) => `Use \`${prefix}testleave\` to test the new message.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | No channel found for \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | You must write a valid language!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)`,
        success: () => `${emojis.success} | :flag_gb: The server language is now in English!`
    },
    
    graph: {
        title: (server, days) => `Joins on ${server} these last ${days} days`,
        content: (total, percent, from, to) => `**${total}** members (i.e. **${percent}%** of the server) have joined the server from ${from} to ${to}:`,
        invalid: () => `You must enter a valid number of days (greater than 1 and lower than 1000) to be displayed!`,
        months: () =>[
            "Janv",
            "Fév",
            "Mars",
            "Avr",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Sept",
            "Oct",
            "Nov",
            "Déc"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `members`
        },
        conf: {
            title: () => `Configuration`
        },
        selector: {
            title: () => `Selector`,
            manage: () => `Manage`,
            no: {
                title: () => `No server`,
                content: () => `No server found. Please check you're logged with the right account.`
            }
        },
        help: {
            title: () => `Help`,
            doc: () => `Documentation`,
            support: () => `Support server`
        },
        forms: {
            buttons: {
                enable: () => `Enable the messages`,
                disable: () => `Disable the messages`,
                update: () => `Update the messages`
            },
            basic: {
                title: () => `Basic configuration`,
                language: () => `Language`,
                prefix: () => `Prefix`,
                update: () => `Update`
            },
            join: {
                title: () => `Join messages`,
                message: {
                    title: () => `Message`,
                    default: () => `{user} joined the server! He was invited by **{inviter.tag}** (who has **{inviter.invites}** invites).`
                },
                channel: {
                    title: () => `Channel`
                },
            },
            leave: {
                title: () => `Leave messages`,
                message: {
                    title: () => `Message`,
                    default: () => `{user.username} left the server. He was invited by **{inviter.tag}** (who has **{inviter.invites}** invites).`
                },
                channel: {
                    title: () => `Channel`
                }
            },
            joinDM: {
                title: () => `Join messages in DM`,
                premium: () => `Feature available for premium servers and partners.`,
                message: {
                    title: () => `Message`,
                    default: () => `Welcome {user} in **{server} ! You were invited by **{inviter.tag}**. Don't forget to read the server rules!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Deleting invitations from the current server.... You can restore them with the command \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Deleting current invitations of **${member.user.tag}**... You can restore them with the command \`${prefix}restore-invites ${member.user.tag}\` !`
        },
        title: () => `☄️ Invitations reinitalized`,
        titles: {
            all: (prefix) => `${emojis.success} | Server invitations reinitialized! You can restore them with the command \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Invitations of **${member.user.tag}** reinitialized! You can restore them with the command \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Are you sure you want to restore the server invitations? All members will retrieve the invitations they had before the last time the command \`${prefix}remove-invite\` was typed (or 0 if the command was never typed).\n\n:information_source: **Invitations overview**:\nIt will be restored, in total: **${memberCount.invites}** regulars, **${memberCount.bonus}** bonus, **${memberCount.leaves}** leaves, **${memberCount.fake}** fake.\n\n${emojis.success} Type \`-confirm\` to confirm.\n${emojis.error} Type \`cancel\` to abort.`,
            member: (prefix, member) => `${emojis.warn} | Are you sure you want to restore the invitations of **${member.user.tag}**? He will retrieve the invitations he had before the last time the command \`${prefix}remove-invites\` was typed (or 0 if the command was never typed).\n\n:information_source: **Invitations overview**:\nIt will be restored: **${member.data.old_invites}** regulars, **${member.data.old_bonus}** bonus, **${member.data.old_leaves}** leaves, **${member.data.old_fake}** fake.\n\n${emojis.success} Type \`-confirm\` to confirm.\n${emojis.error} Type \`cancel\` to abort.`,
            cancelled: () => `${emojis.error} Cancelled.`
        },
        loading: {
            all: () => `${emojis.loading} | Restoring server invitations....`,
            member: (member) => `${emojis.loading} | Restoring invitations of **${member.user.tag}**...`
        },
        title: () => `☄️ Invitations restored`,
        titles: {
            all: () => `${emojis.success} | Server invitations restored!`,
            member: (member) => `${emojis.success} | Invitations of **${member.user.tag}** restored!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | No invites to synchronize.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Are you sure you want to synchronize the server invitations?\n\n:information_source: **Overview of invitations**:\nIt will be restored **${Math.round(inviteCount)}** regular invitations.\n\n${emojis.success} Type \`-confirm\` to confirm.\n${emojis.error} Type \`cancel\` to abort.`,
            cancelled: () => `${emojis.error} Cancelled.`
        },
        title: () => `☄️ Invitations synchronized`,
        titles: {
            all: () => `${emojis.success} | Server invitations synchronized!`
        }
    },

    add: {
        content: (id) => `You can add me to your server by clicking [here](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Requested by ${username}`
    },

    support: {
        content: (id) => `You can join our support discord by clicking [here](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Requested by ${username}`
    }
};
