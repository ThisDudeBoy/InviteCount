const { emojis, discord } = require("../config");

module.exports = {

    locale: "de_DE",

    utils: {
        prefix: (prefix) => `Mein aktuelles Präfix ist \`${prefix}\`\nVerwenden Sie \`${prefix}help\` für mehr Hilfe.`,
        viewConf: () => `[Konfiguration im Dashboard anzeigen](https://invite-count.xyz)`,
        conf: {
            title: () => `Konfiguration im Dashboard anzeigen`,
            content: () => `[oder im Dashboard](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} ist dem Server über OAuth beigetreten.`,
                
                vanity: (user) => `${user} ist dem Server über die vom Serverbesitzer festgelegte discord.gg-Einladung beigetreten.`,
                unknown: (user) => `Ich kann nicht verstehen, wie ${user} dem Server beigetreten ist.`,
                perm: (user) => `${emojis.error} | Ich benötige die Berechtigung zum Verwalten des Servers, um zu erfahren, wer ${user} eingeladen hat.`
            },
            leave: {
                oauth2: (user) => `${user} hat den Server verlassen, war über OAuth beigetreten.`,
                vanity: (user) => `${user} hat den Server verlassen, war über die vom Serverbesitzer festgelegte discord.gg-Einladung beigetreten.`,
                unknown: (user) => `${user} hat den Server verlassen, aber ich kann nicht verstehen, wie er beigetreten ist.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Fehlende Berechtigungen**__\n\nIch benötige die folgenden Berechtigungen, damit dieser Befehl ordnungsgemäß funktioniert: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Dieser Befehl ist derzeit deaktiviert!`,
        permLevel: (name) => `${emojis.error} | Dieser Befehl erfordert Berechtigungsstufe: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Ich habe keine Berechtigung, Nachrichten in diesem Kanal zu senden.`,
        missingAdmin: () => `${emojis.error} | Ich benötige die Berechtigung \`Server verwalten\` um diese Aktion auszuführen`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Der aktuelle Kanal ist bereits dieser Kanal!`,
        success: () => `<:succes:851491428563812382> | Protokollkanal erfolgreich festgelegt.`
    },
    glist: {
        title: () => `🎁 Gewinnspiel-Liste`,
        description: (prefix) => `Verwenden Sie \`${prefix}gstart\`, um ein Gewinnspiel zu starten. Es werden nur nicht abgeschlossene Gewinnspiele angezeigt`,
        fields: {
            name: () => `> Liste`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Endet in ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Es gibt keine nicht abgeschlossenen Gewinnspiele auf diesem Server`,

    },
    help: {
        title: () => `ℹ InviteCount Hilfeseite`,
        description: (guildName, prefix) => `Mit InviteCount können Sie die Mitglieder Ihres Servers verwalten, indem Sie Einladungen verfolgen.\n\nDie **Dokumentation** ist [hier](https://docs.invite-count.xyz/) verfügbar.`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderation**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Administration**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **Allgemein**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Konfiguration**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Austrittsmeldungen`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Gewinnspiele**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Einladungen`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Dienstprogramme`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Links :`,
        links: (clientID) => `[Füge mich hinzu](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Website](https://invite-count.xyz) ● [Support-Server](${discord}) ● [Stimme für mich](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `Mit InviteCount können Sie die Mitglieder Ihres Servers verwalten, indem Sie Einladungen verfolgen.`,

        dev: {
            title: () => `**Information**`,
            content: (uptime) => `<:arrow:766358167382523944> **Entwickler:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Bibliothek:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Betriebszeit** ${uptime}\n <:arrow:766358167382523944> **Erstellungsdatum:** 12. Mai 2019`
        },
        statistics: {
            title: () => `**Statistiken**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Server:** ${guilds}\n<:arrow:766358167382523944> **Benutzer**: ${channels}\n<:arrow:766358167382523944> **Kanäle:** ${users}`
        },
        link: {
            title: () => `**Links**`,
            content: () => `<:arrow:766358167382523944> **Support-Server:** [Klicken](${discord})\n<:arrow:766358167382523944> **Einladung:** [Klicken](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `Mit InviteCount können Sie die Mitglieder Ihres Servers verwalten, indem Sie Einladungen verfolgen.`,

        dev: {
            title: () => `**Entwickler :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inspiriert von :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Besonderer Dank an :**`,
            content: () => `⭐ **Androz** für die Hilfe mit ManageInvite!\n🎁 **Pauldb09** für das Gewinnspiel-System\n👨‍🏭 Das ganze Team & Übersetzer`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Du hast` : `**${member.user.username}** hat`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** Einladungen! (**${memberData.invites}** normal, **${memberData.bonus}** Bonus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** falsch, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** Austritte)${nextRank ? `\nDu benötigst **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** weitere Einladungen, um den nächsten Rang zu erhalten: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Bestenliste gelöscht!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** Einladungen (**${member.invites}** normal, **${member.bonus}** Bonus, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** falsch, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** Austritte)`,
        prompt: () => `{{user}}, zu welcher Seite möchtest du gehen? Geben Sie \`cancel\` oder \`0\` ein, um abzubrechen.`,
        title: () => `Einladungs-Bestenliste`,
        empty: {
            title: () => `😕 Keine Einladungen gefunden`,
            content: () => `Beginne, Leute einzuladen, und du wirst auf dieser Seite erscheinen!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} Konto (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Erstellung`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Ja" : "Nein"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Beitritt`
            },
            joinWay: {
                title: () => `Beitrittsart`,
                oauth: () => `OAuth-Einladung (über discordapp.com).`,
                vanity: () => `Benutzerdefinierte Einladung, die vom Administrator festgelegt wurde.`,
                unknown: (user) => `Ich kann nicht verstehen, wie ${user.username} dem Server beigetreten ist.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Einladungen`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** Einladungen (**${inviteData.invites}** normal, **${inviteData.bonus}** Bonus, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** falsch, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** Austritte)`
            },
            joinOrder: {
                title: () => `➡️ Beirittsreihenfolge`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Du musst die Berechtigung `KICK_MEMBERS` haben",
            nouser: "<:error:753232040199192657> | Bitte erwähne einen Benutzer",
            supperior: "<:error:753232040199192657> | Du kannst einen Benutzer, der höher als du ist, nicht hinauswerfen",
            noperm: "<:error:753232040199192657> | Ein Fehler ist aufgetreten... Bitte überprüfe, ob ich die Berechtigung zum Hinauswerfen dieses Mitglieds habe und versuche es erneut!",
            
        },
        description: "<:success:753232040073101363> | Benutzer erfolgreich hinausgeworfen",
        banneddm: (server, moderator, reason) => "Du wurdest aus **" + server + "** von **" + moderator + "** hinausgeworfen\n**Grund** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Du musst die Berechtigung `BAN_MEMBERS` haben",
            nouser: "<:error:753232040199192657> | Bitte erwähne einen Benutzer",
            supperior: "<:error:753232040199192657> | Du kannst einen Benutzer, der höher als du ist, nicht bannen",
            noperm: "<:error:753232040199192657> | Ein Fehler ist aufgetreten... Bitte überprüfe, ob ich die Berechtigung zum Bannen dieses Mitglieds habe und versuche es erneut!",
            
        },
        description: "<:success:753232040073101363> | Benutzer erfolgreich gebannt",
        banneddm: (server, moderator, reason) => "Du wurdest aus **" + server + "** von **" + moderator + "** gebannt\n**Grund** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Bitte geben Sie eine ID an, um zu entbannen",
        success: (user) => "<:success:753232040073101363> | " + user + " wurde erfolgreich entbannt",
        noban: "<:error:753232040199192657> | Dieser Benutzer ist nicht gebannt"
    },

    membercount: {
        title: (guildName) => `Mitgliederzahl von ${guildName}`,
        description: (guild) => `
        Insgesamt **${guild.members.cache.size}** Mitglieder (**${guild.members.cache.filter((m) => !m.user.bot).size}** Personen und **${guild.members.cache.filter((m) => m.user.bot).size}** Bots)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} Mitglieder (nicht stören)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} Mitglieder (online)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} Mitglieder (untätig)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} Mitglieder (offline)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Du musst die Anzahl der hinzufügenden Bonus-Einladungen angeben. (Syntax: ${prefix}addbonus Nummer @Mitglied) **Du musst eine echte Person einladen, um eine Belohnung zu erhalten**`,
                incorrect: (prefix) => `${emojis.error} | Du musst eine gültige Anzahl von Bonus-Einladungen zum Hinzufügen angeben. (Syntax: ${prefix}addbonus Nummer @Mitglied)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Du musst ein Mitglied erwähnen, um Bonus-Einladungen hinzuzufügen. (Syntax: ${prefix}addbonus Nummer @Mitglied)`
            }
        },
        title: () => `📥 Bonus-Einladungen hinzugefügt`,
        field: (prefix, member) => `Geben Sie \`${prefix}invites ${member.user.tag}\` ein, um die neue Einladungsanzahl von **${member.user.username}** zu sehen!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Du musst die Anzahl der zu entfernenden Bonus-Einladungen angeben. (Syntax: ${prefix}removebonus Nummer @Mitglied)`,
                incorrect: (prefix) => `${emojis.error} | Du musst eine gültige Anzahl von Bonus-Einladungen zum Entfernen angeben. (Syntax: ${prefix}removebonus Nummer @Mitglied)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Du musst ein Mitglied erwähnen, um Bonus-Einladungen zu entfernen. (Syntax: ${prefix}removebonus Nummer @Mitglied)`
            }
        },
        title: () => `📥 Bonus-Einladungen entfernt`,
        field: (prefix, member) => `Geben Sie \`${prefix}invites ${member.user.tag}\` ein, um die neue Einladungsanzahl von **${member.user.username}** zu sehen!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | DM-Beitrittssystem ist jetzt __AKTIVIERT__!**`,
        off: () => `**${emojis.success} | DM-Beitrittssystem ist jetzt __DEAKTIVIERT__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Beitrittssystem ist jetzt __AKTIVIERT__!**`,
        off: () => `**${emojis.success} | Beitrittssystem ist jetzt __DEAKTIVIERT__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Austrittssystem ist jetzt __AKTIVIERT__!**`,
        off: () => `**${emojis.success} | Austrittssystem ist jetzt __DEAKTIVIERT__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Du musst ein Präfix angeben!`,
        success: () => `${emojis.success} | Server-Präfix erfolgreich aktualisiert!`
    },

    testdmjoin: {
        title: () => `:wrench: DM-Beitrittssystem :`,
        description: () => `Wenn es nicht funktioniert, überprüfe die Berechtigungen des Bots oder trete dem [Support-Server](${discord}) bei`,
        fields: {
            enabled: () => `> Aktiviert:`,
            message: () => `> Nachricht:`
        },
        enabled: (prefix) => `${emojis.success} DM-Beitrittsmeldungen aktiviert. Deaktivieren Sie mit \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} DM-Beitrittsmeldungen deaktiviert. Aktivieren Sie mit \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Nachricht nicht definiert. Legen Sie fest mit \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Beitrittssystem :`,
        description: () => `Wenn es nicht funktioniert, überprüfe die Berechtigungen des Bots oder trete dem [Support-Server](${discord}) bei`,
        fields: {
            enabled: () => `> Aktiviert:`,
            channel: () => `> Kanal:`,
            message: () => `> Nachricht:`
        },
        enabled: (prefix) => `${emojis.success} Beitrittsmeldungen aktiviert. Deaktivieren Sie mit \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Beitrittsmeldungen deaktiviert. Aktivieren Sie mit \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Nachricht nicht definiert. Legen Sie fest mit \`${prefix}configjoin\`!`,
            channel: (prefix) => `Kanal nicht definiert. Legen Sie fest mit \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Austrittssystem :`,
        description: () => `Wenn es nicht funktioniert, überprüfe die Berechtigungen des Bots oder trete dem [Support-Server](${discord}) bei`,
        fields: {
            enabled: () => `> Aktiviert:`,
            channel: () => `> Kanal:`,
            message: () => `> Nachricht:`
        },
        enabled: (prefix) => `${emojis.success} Austrittsmeldungen aktiviert. Deaktivieren Sie mit \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Austrittsmeldungen deaktiviert. Aktivieren Sie mit \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Nachricht nicht definiert. Legen Sie fest mit \`${prefix}configleave\`!`,
            channel: (prefix) => `Kanal nicht definiert. Legen Sie fest mit \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Konfiguration von ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Beitrittsmeldungen`,
            content: (guild, data) => `
            > Aktiviert: ${data.guild.join.enabled ? "**ja**" : "**nein**"}
            > Nachricht: ${data.guild.join.message ? "**eingestellt**" : "**nicht eingestellt**."}
            > Kanal: ${!data.guild.join.channel ? "**nicht eingestellt**" : (guild.channels.cache.get(data.guild.join.channel) ? "**eingestellt**" : "**Kanal nicht gefunden**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Austrittsmeldungen`,
            content: (guild, data) => `
            > Aktiviert: ${data.guild.leave.enabled ? "**ja**" : "**nein**"}
            > Nachricht: ${data.guild.leave.message ? "**eingestellt**" : "**nicht eingestellt**."}
            > Kanal: ${!data.guild.leave.channel ? "**nicht eingestellt**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**eingestellt**" : "**Kanal nicht gefunden**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} DM-Beitrittsmeldungen`,
            content: (guild, data) => `
            > Aktiviert: ${data.guild.joinDM.enabled ? "**ja**" : "**nein**"}
            > Nachricht: ${data.guild.joinDM.message ? "**eingestellt**" : "**nicht eingestellt**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Hallo, **${username}**! Diese Funktion ist nur für Premium- und Partner-Server verfügbar. Hol dir Premium: **bald** !`
    },

    antispam: {
        cooldown: (username) => `Langsamer! Bitte warten Sie 5 Sekunden und versuchen Sie es erneut!`
    },

    configdmjoin: {
        disable: (prefix) => `Geben Sie \`${prefix}setdmjoin\` ein, um DM-Beitrittsmeldungen zu deaktivieren.`,
        instruct: (str) => `
__**Zusätzliche Informationen**__
\`\`\`
{user} : Erwähnung des Mitglieds, das dem Server beigetreten ist.
{user.name} : Name des Mitglieds, das dem Server beigetreten ist.
{user.tag} : Tag des Mitglieds, das dem Server beigetreten ist.
{user.createdat} : Alter des Kontos des Mitglieds.

{guild} : Name des Servers.
{guild.count} : Aktuelle Mitgliederzahl deines Servers.

{inviter} : Erwähnung von wer eingeladen hat.
{inviter.name} : Name von wer eingeladen hat.
{inviter.tag} : Tag von wer eingeladen hat.
{inviter.invites} : Gesamtzahl der Einladungen von wer eingeladen hat.

{invite.code} : Verwendeter Einladungscode.
{invite.url} : Verwendete Einladungs-URL.
{invite.uses} : Anzahl der Verwendungen des Einladungscodes.
\`\`\`
Geben Sie \`cancel\` ein, um abzubrechen. ${str}


:pencil: **| Schreibe nun die DM-Beitrittsmeldung... :pencil2:**`,
        cancelled: () => `:x: Abgebrochen.`,
        success: () => `✅ **| Erfolgreich abgeschlossen...**`,
        title: () => `**DM-Beitrittsmeldung eingestellt**`,
        fields: {
            message: () => `Nachricht:`,
            testIt: () => `Testen:`,
            cmd: (prefix) => `Verwenden Sie \`${prefix}testdmjoin\`, um die neue Nachricht zu testen.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Ihre Nachricht muss weniger als 850 Zeichen lang sein.`, 
        disable: (prefix) => `Geben Sie \`${prefix}setjoin\` ein, um Beitrittsmeldungen zu deaktivieren.`,
        instructs: {
            message: (str) => `
__**Zusätzliche Informationen**__
\`\`\`
{user} : Erwähnung des Mitglieds, das dem Server beigetreten ist.
{user.name} : Name des Mitglieds, das dem Server beigetreten ist.
{user.tag} : Tag des Mitglieds, das dem Server beigetreten ist.
{user.createdat} : Alter des Kontos des Mitglieds.

{guild} : Name des Servers.
{guild.count} : Aktuelle Mitgliederzahl deines Servers.

{inviter} : Erwähnung von wer eingeladen hat.
{inviter.name} : Name von wer eingeladen hat.
{inviter.tag} : Tag von wer eingeladen hat.
{inviter.invites} : Gesamtzahl der Einladungen von wer eingeladen hat.

{invite.code} : Verwendeter Einladungscode.
{invite.url} : Verwendete Einladungs-URL.
{invite.uses} : Anzahl der Verwendungen des Einladungscodes.
\`\`\`
Geben Sie \`cancel\` ein, um abzubrechen. ${str}


:pencil: **| Schreibe nun die Beitrittsmeldung... :pencil2:**`,
            channel: () => `:scroll: **| Erwähne nun den Kanal... :pencil2:**`
        },
        cancelled: () => `:x: Abgebrochen.`,
        success: () => `✅ **| Erfolgreich abgeschlossen...**`,
        title: () => `**Beitrittsmeldung eingestellt**`,
        fields: {
            message: () => `Nachricht:`,
            channel: () => `Kanal:`,
            testIt: () => `Testen:`,
            cmd: (prefix) => `Verwenden Sie \`${prefix}testjoin\`, um die neue Nachricht zu testen.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Kein Kanal für \`${channel}\` gefunden`
        }
    },

    configleave: {
        disable: (prefix) => `Geben Sie \`${prefix}setleave\` ein, um Austrittsmeldungen zu deaktivieren.`,
        instructs: {
            message: (str) => `
__**Zusätzliche Informationen**__
\`\`\`
{user} : Erwähnung des Mitglieds, das den Server verlassen hat.
{user.name} : Name des Mitglieds, das den Server verlassen hat.
{user.tag} : Tag des Mitglieds, das den Server verlassen hat.
{user.createdat} : Alter des Kontos des Mitglieds.

{guild} : Name des Servers.
{guild.count} : Aktuelle Mitgliederzahl deines Servers.

{inviter} : Erwähnung von wer eingeladen hat.
{inviter.name} : Name von wer eingeladen hat.
{inviter.tag} : Tag von wer eingeladen hat.
{inviter.invites} : Gesamtzahl der Einladungen von wer eingeladen hat.

{invite.code} : Verwendeter Einladungscode.
{invite.url} : Verwendete Einladungs-URL.
{invite.uses} : Anzahl der Verwendungen des Einladungscodes.
\`\`\`
Geben Sie \`cancel\` ein, um abzubrechen. ${str}


:pencil: **| Schreibe nun die Austrittsmeldung... :pencil2:**`,
            channel: () => `:scroll: **| Erwähne nun den Kanal... :pencil2:**`
        },
        cancelled: () => `:x: Abgebrochen.`,
        success: () => `✅ **| Erfolgreich abgeschlossen...**`,
        title: () => `**Austrittsmeldung eingestellt**`,
        fields: {
            message: () => `Nachricht:`,
            channel: () => `Kanal:`,
            testIt: () => `Testen:`,
            cmd: (prefix) => `Verwenden Sie \`${prefix}testleave\`, um die neue Nachricht zu testen`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Kein Kanal für \`${channel}\` gefunden`
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Du musst eine gültige Sprache angeben!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)`,
        success: () => `${emojis.success} | :flag_de: Die Serversprache ist jetzt Deutsch!`
    },

    graph: {
        title: (server, days) => `Beitritte auf ${server} in den letzten ${days} Tagen`,
        content: (total, percent, from, to) => `**${total}** Mitglieder (d.h. **${percent}%** des Servers) sind zwischen ${from} und ${to} dem Server beigetreten:`,
        invalid: () => `Sie müssen eine gültige Anzahl von Tagen eingeben (größer als 1 und kleiner als 1000), um angezeigt zu werden!`,
        months: () =>[
            "Jan",
            "Feb",
            "Mär",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dez"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `Mitglieder`
        },
        conf: {
            title: () => `Konfiguration`
        },
        selector: {
            title: () => `Wähler`,
            manage: () => `Verwalten`,
            no: {
                title: () => `Keine Server`,
                content: () => `Kein Server gefunden. Bitte überprüfen Sie, dass Sie mit dem richtigen Konto angemeldet sind.`
            }
        },
        help: {
            title: () => `Hilfe`,
            doc: () => `Dokumentation`,
            support: () => `Support-Server`
        },
        forms: {
            buttons: {
                enable: () => `Meldungen aktivieren`,
                disable: () => `Meldungen deaktivieren`,
                update: () => `Meldungen aktualisieren`
            },
            basic: {
                title: () => `Grundkonfiguration`,
                language: () => `Sprache`,
                prefix: () => `Präfix`,
                update: () => `Aktualisieren`
            },
            join: {
                title: () => `Beitrittsmeldungen`,
                message: {
                    title: () => `Nachricht`,
                    default: () => `{user} ist dem Server beigetreten! Eingeladen von **{inviter.tag}** ({inviter.invites} Einladungen).`
                },
                channel: {
                    title: () => `Kanal`
                },
            },
            leave: {
                title: () => `Austrittsmeldungen`,
                message: {
                    title: () => `Nachricht`,
                    default: () => `{user.username} hat den Server verlassen. War eingeladen von **{inviter.tag}** ({inviter.invites} Einladungen).`
                },
                channel: {
                    title: () => `Kanal`
                }
            },
            joinDM: {
                title: () => `DM-Beitrittsmeldungen`,
                premium: () => `Diese Funktion ist für Premium- und Partner-Server verfügbar.`,
                message: {
                    title: () => `Nachricht`,
                    default: () => `Willkommen {user}! Du bist **{server}** beigetreten! Eingeladen von **{inviter.tag}**. Vergiss nicht, die Serverregeln zu lesen!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Der Prozess zum Entfernen von Server-Einladungen wurde gestartet... Sie können diese mit dem Befehl \`${prefix}restore-invites\` wiederherstellen!`,
            member: (prefix, member) => `${emojis.loading} | Der Prozess zum Entfernen von Einladungen von **${member.user.tag}}** wurde gestartet... Sie können diese mit dem Befehl \`${prefix}restore-invites ${member.user.tag}\` wiederherstellen!`
        },
        title: () => `☄️ Einladungen zurückgesetzt`,
        titles: {
            all: (prefix) => `${emojis.success} | Server-Einladungen wurden zurückgesetzt! Sie können diese mit dem Befehl \`${prefix}restore-invites\` wiederherstellen!`,
            member: (prefix, member) => `${emojis.success} | Einladungen von **${member.user.tag}}** wurden zurückgesetzt! Sie können diese mit dem Befehl \`${prefix}restore-invites ${member.user.tag}\` wiederherstellen!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Bist du sicher, dass du die Server-Einladungen wiederherstellen möchtest? Alle Mitglieder erhalten die Einladungen von vor der letzten Ausführung des Befehls \`${prefix}remove-invites\` (oder 0, wenn der Befehl nie ausgeführt wurde).\n\n:information_source: **Einladungszusammenfassung**:\nWiederherzustellend, Summe: **${memberCount.invites}** normal, **${memberCount.bonus}** Bonus, **${memberCount.leaves}** Austritte, **${memberCount.fake}** falsch.\n\n${emojis.success} Geben Sie \`-confirm\` ein, um zu bestätigen.\n${emojis.error} Geben Sie \`cancel\` ein, um abzubrechen.`,
            member: (prefix, member) => `${emojis.warn} | Bist du sicher, dass du die Einladungen von **${member.user.tag}}** wiederherstellen möchtest? Sie erhalten die Einladungen von vor der letzten Ausführung des Befehls \`${prefix}remove-invites\` (oder 0, wenn der Befehl nie ausgeführt wurde).\n\n:information_source: **Einladungszusammenfassung**:\nWiederherzustellend: **${member.data.old_invites}** normal, **${member.data.old_bonus}** Bonus, **${member.data.old_leaves}** Austritte, **${member.data.old_fake}** falsch.\n\n${emojis.success} Geben Sie \`-confirm\` ein, um zu bestätigen.\n${emojis.error} Geben Sie \`cancel\` ein, um abzubrechen.`,
            cancelled: () => `${emojis.error} Abgebrochen.`
        },
        loading: {
            all: () => `${emojis.loading} | Der Prozess zur Wiederherstellung von Server-Einladungen wurde gestartet....`,
            member: (member) => `${emojis.loading} | Der Prozess zur Wiederherstellung von Einladungen von **${member.user.tag}}** wurde gestartet...`
        },
        title: () => `☄️ Einladungen wiederhergestellt`,
        titles: {
            all: () => `${emojis.success} | Server-Einladungen wurden wiederhergestellt!`,
            member: (member) => `${emojis.success} | Einladungen von **${member.user.tag}}** wurden wiederhergestellt!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Es gibt keine Einladungen zum Synchronisieren.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Bist du sicher, dass du die Server-Einladungen synchronisieren möchtest?\n\n:information_source: **Einladungszusammenfassung**:\n**${Math.round(inviteCount)}** normale Einladungen werden wiederhergestellt.\n\n${emojis.success} Geben Sie \`-confirm\` ein, um zu bestätigen.\n${emojis.error} Geben Sie \`cancel\` ein, um abzubrechen.`,
            cancelled: () => `${emojis.error} Abgebrochen.`
        },
        title: () => `☄️ Einladungen synchronisiert`,
        titles: {
            all: () => `${emojis.success} | Server-Einladungen wurden synchronisiert!`
        }
    },

    add: {
        content: (id) => `Du kannst mich dem Server hinzufügen, indem du [hier](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847) klickst.`,
        requested: (username) => `Angefordert von ${username}`
    },

    support: {
        content: (id) => `Du kannst unserem Support-Server beitreten, indem du [hier](https://discord.gg/f7f2P2q) klickst.`,
        requested: (username) => `Angefordert von ${username}`
    }

};
