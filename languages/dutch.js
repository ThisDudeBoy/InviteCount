const { emojis, discord } = require("../config");

module.exports = {

    locale: "nl_NL",

    utils: {
        prefix: (prefix) => `Mijn huidige prefix is \`${prefix}\`\nGebruik \`${prefix}help\` voor meer hulp.`,
        viewConf: () => `[Configuratie in dashboard weergeven](https://invite-count.xyz)`,
        conf: {
            title: () => `Configuratie in dashboard weergeven`,
            content: () => `[of in het dashboard](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} is via OAuth lid van de server geworden.`,
                
                vanity: (user) => `${user} is lid van de server geworden via de discord.gg-uitnodiging ingesteld door de servereigenaar.`,
                unknown: (user) => `Ik kan niet begrijpen hoe ${user} lid van de server is geworden.`,
                perm: (user) => `${emojis.error} | Ik heb toestemming nodig om de server te beheren om te weten wie ${user} heeft uitgenodigd.`
            },
            leave: {
                oauth2: (user) => `${user} heeft de server verlaten, was via OAuth lid geworden.`,
                vanity: (user) => `${user} heeft de server verlaten, was lid geworden via de discord.gg-uitnodiging ingesteld door de servereigenaar.`,
                unknown: (user) => `${user} heeft de server verlaten, maar ik kan niet begrijpen hoe deze lid is geworden.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Ontbrekende machtigingen**__\n\nIk heb de volgende machtigingen nodig om deze opdracht correct uit te voeren: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Deze opdracht is momenteel uitgeschakeld!`,
        permLevel: (name) => `${emojis.error} | Deze opdracht vereist machtigingsniveau: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Ik heb geen toestemming om berichten in dit kanaal te sturen.`,
        missingAdmin: () => `${emojis.error} | Ik heb de toestemming \`Server beheren\` nodig om deze actie uit te voeren`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Het huidige kanaal is al dit kanaal!`,
        success: () => `<:succes:851491428563812382> | Logkanaal succesvol ingesteld.`
    },
    glist: {
        title: () => `🎁 Giveaway-lijst`,
        description: (prefix) => `Gebruik \`${prefix}gstart\` om een giveaway te starten. Alleen onvoltooide giveaways worden weergegeven`,
        fields: {
            name: () => `> Lijst`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Eindigt over ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Er zijn geen onvoltooide giveaways op deze server`,

    },
    help: {
        title: () => `ℹ InviteCount Help-pagina`,
        description: (guildName, prefix) => `Met InviteCount kunt u serverleden beheren door uitnodigingen bij te houden.\n\nDe **documentatie** is beschikbaar [hier](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderatie**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Beheer**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **Algemeen**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Configuratie**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Vertreksberichten`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Giveaways**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Uitnodigingen`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Hulpmiddelen`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Links :`,
        links: (clientID) => `[Voeg mij toe](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Website](https://invite-count.xyz) ● [Ondersteuningsserver](${discord}) ● [Stem op mij](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `Met InviteCount kunt u serverleden beheren door uitnodigingen bij te houden.`,

        dev: {
            title: () => `**Informatie**`,
            content: (uptime) => `<:arrow:766358167382523944> **Ontwikkelaars:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Bibliotheek:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Uptime** ${uptime}\n <:arrow:766358167382523944> **Creatiedatum:** 12 mei 2019`
        },
        statistics: {
            title: () => `**Statistieken**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Servers:** ${guilds}\n<:arrow:766358167382523944> **Gebruikers**: ${channels}\n<:arrow:766358167382523944> **Kanalen:** ${users}`
        },
        link: {
            title: () => `**Links**`,
            content: () => `<:arrow:766358167382523944> **Ondersteuningsserver:** [Klik](${discord})\n<:arrow:766358167382523944> **Uitnodiging:** [Klik](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `Met InviteCount kunt u serverleden beheren door uitnodigingen bij te houden.`,

        dev: {
            title: () => `**Ontwikkelaars :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Geïnspireerd door :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Speciale dank aan :**`,
            content: () => `⭐ **Androz** voor hulp met ManageInvite!\n🎁 **Pauldb09** voor het giveaway-systeem\n👨‍🏭 Het hele team & Vertalers`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Je hebt` : `**${member.user.username}** heeft`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** uitnodigingen! (**${memberData.invites}** normaal, **${memberData.bonus}** bonus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** nep, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** vertrekken)${nextRank ? `\nJe hebt **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** meer uitnodigingen nodig om de volgende rang te bereiken: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Ranglijst gewist!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** uitnodigingen (**${member.invites}** normaal, **${member.bonus}** bonus, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** nep, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** vertrekken)`,
        prompt: () => `{{user}}, naar welke pagina wil je gaan? Typ \`cancel\` of \`0\` om te annuleren.`,
        title: () => `Uitnodigingsranglijst`,
        empty: {
            title: () => `😕 Geen uitnodigingen gevonden`,
            content: () => `Begin met mensen uit te nodigen en je zult op deze pagina verschijnen!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} account (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Aanmaak`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Ja" : "Nee"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Lid geworden`
            },
            joinWay: {
                title: () => `Manier waarop lid geworden`,
                oauth: () => `OAuth-uitnodiging (via discordapp.com).`,
                vanity: () => `Aangepaste uitnodiging ingesteld door de beheerder.`,
                unknown: (user) => `Ik kan niet begrijpen hoe ${user.username} lid van de server is geworden.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Uitnodigingen`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** uitnodigingen (**${inviteData.invites}** normaal, **${inviteData.bonus}** bonus, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** nep, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** vertrekken)`
            },
            joinOrder: {
                title: () => `➡️ Volgorde lid geworden`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Je moet het `KICK_MEMBERS` gerecht hebben",
            nouser: "<:error:753232040199192657> | Vermeld alstublieft een gebruiker",
            supperior: "<:error:753232040199192657> | Je kunt een gebruiker die hoger is dan jij niet verwijderen",
            noperm: "<:error:753232040199192657> | Er is een fout opgetreden... Controleer alstublieft of ik toestemming heb om dit lid te verwijderen en probeer het opnieuw!",
            
        },
        description: "<:success:753232040073101363> | Gebruiker succesvol verwijderd",
        banneddm: (server, moderator, reason) => "Je bent verwijderd van **" + server + "** door **" + moderator + "**\n**Reden** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Je moet het `BAN_MEMBERS` gerecht hebben",
            nouser: "<:error:753232040199192657> | Vermeld alstublieft een gebruiker",
            supperior: "<:error:753232040199192657> | Je kunt een gebruiker die hoger is dan jij niet bannen",
            noperm: "<:error:753232040199192657> | Er is een fout opgetreden... Controleer alstublieft of ik toestemming heb om dit lid te bannen en probeer het opnieuw!",
            
        },
        description: "<:success:753232040073101363> | Gebruiker succesvol verbannen",
        banneddm: (server, moderator, reason) => "Je bent verbannen van **" + server + "** door **" + moderator + "**\n**Reden** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Geef alstublieft een ID op om te ontbannen",
        success: (user) => "<:success:753232040073101363> | " + user + " is succesvol ontbannen",
        noban: "<:error:753232040199192657> | Deze gebruiker is niet verbannen"
    },

    membercount: {
        title: (guildName) => `Ledenaantal van ${guildName}`,
        description: (guild) => `
        Totaal **${guild.members.cache.size}** leden (**${guild.members.cache.filter((m) => !m.user.bot).size}** personen en **${guild.members.cache.filter((m) => m.user.bot).size}** bots)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} leden (niet storen)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} leden (online)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} leden (inactief)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} leden (offline)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Je moet het aantal bonusuitnodigingen opgeven dat moet worden toegevoegd. (Syntaxis: ${prefix}addbonus nummer @lid) **Je moet een echt persoon uitnodigen om een beloning te krijgen**`,
                incorrect: (prefix) => `${emojis.error} | Je moet een geldig aantal bonusuitnodigingen opgeven dat moet worden toegevoegd. (Syntaxis: ${prefix}addbonus nummer @lid)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Je moet een lid vermelden om bonusuitnodigingen toe te voegen. (Syntaxis: ${prefix}addbonus nummer @lid)`
            }
        },
        title: () => `📥 Bonusuitnodigingen toegevoegd`,
        field: (prefix, member) => `Typ \`${prefix}invites ${member.user.tag}\` om het nieuwe aantal uitnodigingen van **${member.user.username}** te zien!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Je moet het aantal bonusuitnodigingen opgeven dat moet worden verwijderd. (Syntaxis: ${prefix}removebonus nummer @lid)`,
                incorrect: (prefix) => `${emojis.error} | Je moet een geldig aantal bonusuitnodigingen opgeven dat moet worden verwijderd. (Syntaxis: ${prefix}removebonus nummer @lid)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Je moet een lid vermelden om bonusuitnodigingen te verwijderen. (Syntaxis: ${prefix}removebonus nummer @lid)`
            }
        },
        title: () => `📥 Bonusuitnodigingen verwijderd`,
        field: (prefix, member) => `Typ \`${prefix}invites ${member.user.tag}\` om het nieuwe aantal uitnodigingen van **${member.user.username}** te zien!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | DM join-systeem is nu __INGESCHAKELD__!**`,
        off: () => `**${emojis.success} | DM join-systeem is nu __UITGESCHAKELD__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Join-systeem is nu __INGESCHAKELD__!**`,
        off: () => `**${emojis.success} | Join-systeem is nu __UITGESCHAKELD__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Leave-systeem is nu __INGESCHAKELD__!**`,
        off: () => `**${emojis.success} | Leave-systeem is nu __UITGESCHAKELD__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Je moet een prefix opgeven!`,
        success: () => `${emojis.success} | Serverprefix succesvol bijgewerkt!`
    },

    testdmjoin: {
        title: () => `:wrench: DM join-systeem :`,
        description: () => `Als dit niet werkt, controleer dan de machtigingen van de bot of voeg deze toe aan de [ondersteuningsserver](${discord})`,
        fields: {
            enabled: () => `> Ingeschakeld:`,
            message: () => `> Bericht:`
        },
        enabled: (prefix) => `${emojis.success} DM join-berichten ingeschakeld. Schakel uit met \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} DM join-berichten uitgeschakeld. Schakel in met \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Bericht niet gedefinieerd. Stel in met \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Join-systeem :`,
        description: () => `Als dit niet werkt, controleer dan de machtigingen van de bot of voeg deze toe aan de [ondersteuningsserver](${discord})`,
        fields: {
            enabled: () => `> Ingeschakeld:`,
            channel: () => `> Kanaal:`,
            message: () => `> Bericht:`
        },
        enabled: (prefix) => `${emojis.success} Join-berichten ingeschakeld. Schakel uit met \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Join-berichten uitgeschakeld. Schakel in met \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Bericht niet gedefinieerd. Stel in met \`${prefix}configjoin\`!`,
            channel: (prefix) => `Kanaal niet gedefinieerd. Stel in met \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Leave-systeem :`,
        description: () => `Als dit niet werkt, controleer dan de machtigingen van de bot of voeg deze toe aan de [ondersteuningsserver](${discord})`,
        fields: {
            enabled: () => `> Ingeschakeld:`,
            channel: () => `> Kanaal:`,
            message: () => `> Bericht:`
        },
        enabled: (prefix) => `${emojis.success} Leave-berichten ingeschakeld. Schakel uit met \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Leave-berichten uitgeschakeld. Schakel in met \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Bericht niet gedefinieerd. Stel in met \`${prefix}configleave\`!`,
            channel: (prefix) => `Kanaal niet gedefinieerd. Stel in met \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Configuratie van ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Join-berichten`,
            content: (guild, data) => `
            > Ingeschakeld: ${data.guild.join.enabled ? "**ja**" : "**nee**"}
            > Bericht: ${data.guild.join.message ? "**ingesteld**" : "**niet ingesteld**."}
            > Kanaal: ${!data.guild.join.channel ? "**niet ingesteld**" : (guild.channels.cache.get(data.guild.join.channel) ? "**ingesteld**" : "**kanaal niet gevonden**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Leave-berichten`,
            content: (guild, data) => `
            > Ingeschakeld: ${data.guild.leave.enabled ? "**ja**" : "**nee**"}
            > Bericht: ${data.guild.leave.message ? "**ingesteld**" : "**niet ingesteld**."}
            > Kanaal: ${!data.guild.leave.channel ? "**niet ingesteld**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**ingesteld**" : "**kanaal niet gevonden**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} DM join-berichten`,
            content: (guild, data) => `
            > Ingeschakeld: ${data.guild.joinDM.enabled ? "**ja**" : "**nee**"}
            > Bericht: ${data.guild.joinDM.message ? "**ingesteld**" : "**niet ingesteld**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Hallo, **${username}**! Deze functie is alleen beschikbaar voor premium- en partnerservers. Krijg premium: **binnenkort** !`
    },

    antispam: {
        cooldown: (username) => `Langzaam aan! Wacht alstublieft 5 seconden en probeer het opnieuw!`
    },

    configdmjoin: {
        disable: (prefix) => `Typ \`${prefix}setdmjoin\` om DM join-berichten uit te schakelen.`,
        instruct: (str) => `
__**Aanvullende informatie**__
\`\`\`
{user} : Vermelding van het lid dat lid van de server is geworden.
{user.name} : Naam van het lid dat lid van de server is geworden.
{user.tag} : Tag van het lid dat lid van de server is geworden.
{user.createdat} : Leeftijd van het account van het lid.

{guild} : Naam van de server.
{guild.count} : Huidige aantal leden van je server.

{inviter} : Vermelding van wie heeft uitgenodigd.
{inviter.name} : Naam van wie heeft uitgenodigd.
{inviter.tag} : Tag van wie heeft uitgenodigd.
{inviter.invites} : Totaal aantal uitnodigingen van wie heeft uitgenodigd.

{invite.code} : Gebruikte uitnodigingscode.
{invite.url} : Gebruikte uitnodigings-URL.
{invite.uses} : Aantal keren dat de uitnodigingscode is gebruikt.
\`\`\`
Typ \`cancel\` om te annuleren. ${str}


:pencil: **| Typ nu het DM join-bericht... :pencil2:**`,
        cancelled: () => `:x: Geannuleerd.`,
        success: () => `✅ **| Succesvol voltooid...**`,
        title: () => `**DM join-bericht ingesteld**`,
        fields: {
            message: () => `Bericht:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Gebruik \`${prefix}testdmjoin\` om het nieuwe bericht te testen.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Je bericht moet minder dan 850 karakters zijn.`, 
        disable: (prefix) => `Typ \`${prefix}setjoin\` om join-berichten uit te schakelen.`,
        instructs: {
            message: (str) => `
__**Aanvullende informatie**__
\`\`\`
{user} : Vermelding van het lid dat lid van de server is geworden.
{user.name} : Naam van het lid dat lid van de server is geworden.
{user.tag} : Tag van het lid dat lid van de server is geworden.
{user.createdat} : Leeftijd van het account van het lid.

{guild} : Naam van de server.
{guild.count} : Huidige aantal leden van je server.

{inviter} : Vermelding van wie heeft uitgenodigd.
{inviter.name} : Naam van wie heeft uitgenodigd.
{inviter.tag} : Tag van wie heeft uitgenodigd.
{inviter.invites} : Totaal aantal uitnodigingen van wie heeft uitgenodigd.

{invite.code} : Gebruikte uitnodigingscode.
{invite.url} : Gebruikte uitnodigings-URL.
{invite.uses} : Aantal keren dat de uitnodigingscode is gebruikt.
\`\`\`
Typ \`cancel\` om te annuleren. ${str}


:pencil: **| Typ nu het join-bericht... :pencil2:**`,
            channel: () => `:scroll: **| Vermeld nu het kanaal... :pencil2:**`
        },
        cancelled: () => `:x: Geannuleerd.`,
        success: () => `✅ **| Succesvol voltooid...**`,
        title: () => `**Join-bericht ingesteld**`,
        fields: {
            message: () => `Bericht:`,
            channel: () => `Kanaal:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Gebruik \`${prefix}testjoin\` om het nieuwe bericht te testen.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Geen kanaal gevonden voor \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Typ \`${prefix}setleave\` om leave-berichten uit te schakelen.`,
        instructs: {
            message: (str) => `
__**Aanvullende informatie**__
\`\`\`
{user} : Vermelding van het lid dat de server heeft verlaten.
{user.name} : Naam van het lid dat de server heeft verlaten.
{user.tag} : Tag van het lid dat de server heeft verlaten.
{user.createdat} : Leeftijd van het account van het lid.

{guild} : Naam van de server.
{guild.count} : Huidge aantal leden van je server.

{inviter} : Vermelding van wie heeft uitgenodigd.
{inviter.name} : Naam van wie heeft uitgenodigd.
{inviter.tag} : Tag van wie heeft uitgenodigd.
{inviter.invites} : Totaal aantal uitnodigingen van wie heeft uitgenodigd.

{invite.code} : Gebruikte uitnodigingscode.
{invite.url} : Gebruikte uitnodigings-URL.
{invite.uses} : Aantal keren dat de uitnodigingscode is gebruikt.
\`\`\`
Typ \`cancel\` om te annuleren. ${str}


:pencil: **| Typ nu het leave-bericht... :pencil2:**`,
            channel: () => `:scroll: **| Vermeld nu het kanaal... :pencil2:**`
        },
        cancelled: () => `:x: Geannuleerd.`,
        success: () => `✅ **| Succesvol voltooid...**`,
        title: () => `**Leave-bericht ingesteld**`,
        fields: {
            message: () => `Bericht:`,
            channel: () => `Kanaal:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Gebruik \`${prefix}testleave\` om het nieuwe bericht te testen`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Geen kanaal gevonden voor \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Je moet een geldige taal opgeven!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)`,
        success: () => `${emojis.success} | :flag_nl: De servertaal is nu Nederlands!`
    },

    graph: {
        title: (server, days) => `Joins op ${server} de afgelopen ${days} dagen`,
        content: (total, percent, from, to) => `**${total}** leden (d.w.z. **${percent}%** van de server) zijn tussen ${from} en ${to} lid van de server geworden:`,
        invalid: () => `Je moet een geldig aantal dagen invoeren (groter dan 1 en kleiner dan 1000) om weer te geven!`,
        months: () =>[
            "Jan",
            "Feb",
            "Mrt",
            "Apr",
            "Mei",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dec"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `leden`
        },
        conf: {
            title: () => `Configuratie`
        },
        selector: {
            title: () => `Selector`,
            manage: () => `Beheer`,
            no: {
                title: () => `Geen servers`,
                content: () => `Geen server gevonden. Controleer alstublieft of je bent ingelogd met het juiste account.`
            }
        },
        help: {
            title: () => `Hulp`,
            doc: () => `Documentatie`,
            support: () => `Ondersteuningsserver`
        },
        forms: {
            buttons: {
                enable: () => `Berichten inschakelen`,
                disable: () => `Berichten uitschakelen`,
                update: () => `Berichten bijwerken`
            },
            basic: {
                title: () => `Basisconfiguratie`,
                language: () => `Taal`,
                prefix: () => `Prefix`,
                update: () => `Bijwerken`
            },
            join: {
                title: () => `Join-berichten`,
                message: {
                    title: () => `Bericht`,
                    default: () => `{user} is lid van de server geworden! Uitgenodigd door **{inviter.tag}** ({inviter.invites} uitnodigingen).`
                },
                channel: {
                    title: () => `Kanaal`
                },
            },
            leave: {
                title: () => `Leave-berichten`,
                message: {
                    title: () => `Bericht`,
                    default: () => `{user.username} heeft de server verlaten. Was uitgenodigd door **{inviter.tag}** ({inviter.invites} uitnodigingen).`
                },
                channel: {
                    title: () => `Kanaal`
                }
            },
            joinDM: {
                title: () => `DM join-berichten`,
                premium: () => `Deze functie is beschikbaar voor premium- en partnerservers.`,
                message: {
                    title: () => `Bericht`,
                    default: () => `Welkom {user}! Je bent lid van **{server}** geworden! Uitgenodigd door **{inviter.tag}**. Vergeet niet de serverregels te lezen!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Het proces voor het verwijderen van serveruitnodigingen is gestart... Je kunt ze herstellen met de opdracht \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Het proces voor het verwijderen van uitnodigingen van **${member.user.tag}}** is gestart... Je kunt ze herstellen met de opdracht \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Uitnodigingen opnieuw ingesteld`,
        titles: {
            all: (prefix) => `${emojis.success} | Serveruitnodigingen zijn opnieuw ingesteld! Je kunt ze herstellen met de opdracht \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Uitnodigingen van **${member.user.tag}}** zijn opnieuw ingesteld! Je kunt ze herstellen met de opdracht \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Weet je zeker dat je de serveruitnodigingen wilt herstellen? Alle leden ontvangen de uitnodigingen van vóór de laatste uitvoering van de opdracht \`${prefix}remove-invites\` (of 0 als de opdracht nooit is uitgevoerd).\n\n:information_source: **Samenvattinguitnodigingen**:\nWorden hersteld, totaal: **${memberCount.invites}** normaal, **${memberCount.bonus}** bonus, **${memberCount.leaves}** vertrekken, **${memberCount.fake}** nep.\n\n${emojis.success} Typ \`-confirm\` om te bevestigen.\n${emojis.error} Typ \`cancel\` om te annuleren.`,
            member: (prefix, member) => `${emojis.warn} | Weet je zeker dat je de uitnodigingen van **${member.user.tag}}** wilt herstellen? Je ontvangt de uitnodigingen van vóór de laatste uitvoering van de opdracht \`${prefix}remove-invites\` (of 0 als de opdracht nooit is uitgevoerd).\n\n:information_source: **Samenvattinguitnodigingen**:\nWorden hersteld: **${member.data.old_invites}** normaal, **${member.data.old_bonus}** bonus, **${member.data.old_leaves}** vertrekken, **${member.data.old_fake}** nep.\n\n${emojis.success} Typ \`-confirm\` om te bevestigen.\n${emojis.error} Typ \`cancel\` om te annuleren.`,
            cancelled: () => `${emojis.error} Geannuleerd.`
        },
        loading: {
            all: () => `${emojis.loading} | Het proces voor het herstellen van serveruitnodigingen is gestart....`,
            member: (member) => `${emojis.loading} | Het proces voor het herstellen van uitnodigingen van **${member.user.tag}}** is gestart...`
        },
        title: () => `☄️ Uitnodigingen hersteld`,
        titles: {
            all: () => `${emojis.success} | Serveruitnodigingen zijn hersteld!`,
            member: (member) => `${emojis.success} | Uitnodigingen van **${member.user.tag}}** zijn hersteld!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Er zijn geen uitnodigingen om te synchroniseren.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Weet je zeker dat je de serveruitnodigingen wilt synchroniseren?\n\n:information_source: **Samenvattinguitnodigingen**:\n**${Math.round(inviteCount)}** normale uitnodigingen worden hersteld.\n\n${emojis.success} Typ \`-confirm\` om te bevestigen.\n${emojis.error} Typ \`cancel\` om te annuleren.`,
            cancelled: () => `${emojis.error} Geannuleerd.`
        },
        title: () => `☄️ Uitnodigingen gesynchroniseerd`,
        titles: {
            all: () => `${emojis.success} | Serveruitnodigingen zijn gesynchroniseerd!`
        }
    },

    add: {
        content: (id) => `Je kunt mij aan je server toevoegen door [hier](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847) te klikken.`,
        requested: (username) => `Aangevraagd door ${username}`
    },

    support: {
        content: (id) => `Je kunt onze ondersteuningsserver joinen door [hier](https://discord.gg/f7f2P2q) te klikken.`,
        requested: (username) => `Aangevraagd door ${username}`
    }

};
