const { emojis, discord } = require("../config");

module.exports = {

    locale: "nb_NO",

    utils: {
        prefix: (prefix) => `Min nåværende prefiks er \`${prefix}\`\nBruk \`${prefix}help\` for mer hjelp.`,
        viewConf: () => `[Vis konfiguration i dashbord](https://invite-count.xyz)`,
        conf: {
            title: () => `Vis konfiguration i dashbord`,
            content: () => `[eller i dashbordet](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} ble medlem av serveren via OAuth.`,
                
                vanity: (user) => `${user} ble medlem av serveren via discord.gg-invitasjonen som er angitt av servereier.`,
                unknown: (user) => `Jeg forstår ikke hvordan ${user} ble medlem av serveren.`,
                perm: (user) => `${emojis.error} | Jeg trenger tillatelse til å styre serveren for å vite hvem som inviterte ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} forlot serveren, hadde blitt medlem via OAuth.`,
                vanity: (user) => `${user} forlot serveren, hadde blitt medlem via discord.gg-invitasjonen som er angitt av servereier.`,
                unknown: (user) => `${user} forlot serveren, men jeg forstår ikke hvordan denne ble medlem.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Manglende tillatelser**__\n\nJeg trenger følgende tillatelser for at denne kommandoen skal fungere korrekt: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Denne kommandoen er for øyeblikket deaktivert!`,
        permLevel: (name) => `${emojis.error} | Denne kommandoen krever tillatelsesenivå: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Jeg har ikke tillatelse til å sende meldinger i denne kanalen.`,
        missingAdmin: () => `${emojis.error} | Jeg trenger tillaltelsen \`Styr server\` for å utføre denne handlingen`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Den nåværende kanalen er allerede denne kanalen!`,
        success: () => `<:succes:851491428563812382> | Loggkanal ble satt opp.`
    },
    glist: {
        title: () => `🎁 Liste over giveaways`,
        description: (prefix) => `Bruk \`${prefix}gstart\` for å starte en giveaway. Bare ufullstendige giveaways vises`,
        fields: {
            name: () => `> Liste`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Slutter om ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Det er ingen ufullstendige giveaways på denne serveren`,

    },
    help: {
        title: () => `ℹ InviteCount hjelpeside`,
        description: (guildName, prefix) => `Med InviteCount kan du håndtere servermedlemmer ved å spore invitasjoner.\n\n**Dokumentasjonen** er tilgjengelig [her](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderering**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Administrasjon**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **Generelt**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Konfiguration**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Avgangs meldinger`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Giveaways**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Invitasjoner`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Verktøy`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Linker :`,
        links: (clientID) => `[Legg til meg](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Nettsted](https://invite-count.xyz) ● [Støtteserver](${discord}) ● [Stem på meg](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `Med InviteCount kan du håndtere servermedlemmer ved å spore invitasjoner.`,

        dev: {
            title: () => `**Informasjon**`,
            content: (uptime) => `<:arrow:766358167382523944> **Utviklær:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Bibliotek:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Oppetid** ${uptime}\n <:arrow:766358167382523944> **Opprettelsesdato:** 12. mai 2019`
        },
        statistics: {
            title: () => `**Statistikk**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Servere:** ${guilds}\n<:arrow:766358167382523944> **Brukere**: ${channels}\n<:arrow:766358167382523944> **Kanaler:** ${users}`
        },
        link: {
            title: () => `**Linker**`,
            content: () => `<:arrow:766358167382523944> **Støtteserver:** [Klikk](${discord})\n<:arrow:766358167382523944> **Invitasjon:** [Klikk](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `Med InviteCount kan du håndtere servermedlemmer ved å spore invitasjoner.`,

        dev: {
            title: () => `**Utviklær :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inspirert av :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Spesiell takk til :**`,
            content: () => `⭐ **Androz** for hjelpen med ManageInvite!\n🎁 **Pauldb09** for givaway-systemet\n👨‍🏭 Hele laget & Oversettere`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Du har` : `**${member.user.username}** har`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** invitasjoner! (**${memberData.invites}** normale, **${memberData.bonus}** bonus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** falske, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** avganger)${nextRank ? `\nDu trenger **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** flere invitasjoner for å få neste rangering: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Rangliste slettet!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** invitasjoner (**${member.invites}** normale, **${member.bonus}** bonus, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** falske, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** avganger)`,
        prompt: () => `{{user}}, hvilken side vil du gå til? Skriv \`cancel\` eller \`0\` for å avbryte.`,
        title: () => `Rangliste for invitasjoner`,
        empty: {
            title: () => `😕 Ingen invitasjoner funnet`,
            content: () => `Begynn å invitere mennesker og du vil dukke opp på denne siden!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} konto (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Opprettelse`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Ja" : "Nei"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Ble medlem`
            },
            joinWay: {
                title: () => `Måte å bli medlem på`,
                oauth: () => `OAuth-invitasjon (via discordapp.com).`,
                vanity: () => `Tilpasset invitasjon angitt av administrator.`,
                unknown: (user) => `Jeg forstår ikke hvordan ${user.username} ble medlem av serveren.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Invitasjoner`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** invitasjoner (**${inviteData.invites}** normale, **${inviteData.bonus}** bonus, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** falske, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** avganger)`
            },
            joinOrder: {
                title: () => `➡️ Rekkefølge for å bli medlem`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Du må ha tillaltelsen `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Vennligst nevn en bruker",
            supperior: "<:error:753232040199192657> | Du kan ikke sparke ut en bruker som er høyere enn deg",
            noperm: "<:error:753232040199192657> | En feil oppstod... Vennligst sjekk at jeg har tillaltelsen til å sparke ut dette medlemmet og prøv igjen!",
            
        },
        description: "<:success:753232040073101363> | Bruker sparket ut.",
        banneddm: (server, moderator, reason) => "Du ble sparket ut fra **" + server + "** av **" + moderator + "**\n**Grunn** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Du må ha tillaltelsen `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Vennligst nevn en bruker",
            supperior: "<:error:753232040199192657> | Du kan ikke bannlyse en bruker som er høyere enn deg",
            noperm: "<:error:753232040199192657> | En feil oppstod... Vennligst sjekk at jeg har tillaltelsen til å bannlyse dette medlemmet og prøv igjen!",
            
        },
        description: "<:success:753232040073101363> | Bruker bannlyst.",
        banneddm: (server, moderator, reason) => "Du ble bannlyst fra **" + server + "** av **" + moderator + "**\n**Grunn** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Vennligst gi en ID for å oppheve bannlysningen",
        success: (user) => "<:success:753232040073101363> | " + user + " ble oppheving bannlyst",
        noban: "<:error:753232040199192657> | Denne brukeren er ikke bannlyst"
    },

    membercount: {
        title: (guildName) => `Antall medlemmer i ${guildName}`,
        description: (guild) => `
        Totalt **${guild.members.cache.size}** medlemmer (**${guild.members.cache.filter((m) => !m.user.bot).size}** personer og **${guild.members.cache.filter((m) => m.user.bot).size}** roboter)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} medlemmer (ikke forstyrr)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} medlemmer (på nett)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} medlemmer (inaktiv)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} medlemmer (frakoblet)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Du må spesifisere antall bonusinvitasjoner som skal legges til. (Syntaks: ${prefix}addbonus nummer @medlem) **Du må invitere en ekte person for å få en belønning**`,
                incorrect: (prefix) => `${emojis.error} | Du må spesifisere et gyldig antall bonusinvitasjoner som skal legges til. (Syntaks: ${prefix}addbonus nummer @medlem)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Du må nevne et medlem for å legge til bonusinvitasjoner. (Syntaks: ${prefix}addbonus nummer @medlem)`
            }
        },
        title: () => `📥 Bonusinvitasjoner lagt til`,
        field: (prefix, member) => `Skriv \`${prefix}invites ${member.user.tag}\` for å se det nye antallet invitasjoner for **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Du må spesifisere antall bonusinvitasjoner som skal fjernes. (Syntaks: ${prefix}removebonus nummer @medlem)`,
                incorrect: (prefix) => `${emojis.error} | Du må spesifisere et gyldig antall bonusinvitasjoner som skal fjernes. (Syntaks: ${prefix}removebonus nummer @medlem)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Du må nevne et medlem for å fjerne bonusinvitasjoner. (Syntaks: ${prefix}removebonus nummer @medlem)`
            }
        },
        title: () => `📥 Bonusinvitasjoner fjernet`,
        field: (prefix, member) => `Skriv \`${prefix}invites ${member.user.tag}\` for å se det nye antallet invitasjoner for **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | DM join-systemet er nå __AKTIVERT__!**`,
        off: () => `**${emojis.success} | DM join-systemet er nå __DEAKTIVERT__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Join-systemet er nå __AKTIVERT__!**`,
        off: () => `**${emojis.success} | Join-systemet er nå __DEAKTIVERT__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Leave-systemet er nå __AKTIVERT__!**`,
        off: () => `**${emojis.success} | Leave-systemet er nå __DEAKTIVERT__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Du må angi et prefiks!`,
        success: () => `${emojis.success} | Serverprefikset ble oppdatert!`
    },

    testdmjoin: {
        title: () => `:wrench: DM join-systemet :`,
        description: () => `Hvis dette ikke fungerer, sjekk botens tillatelser eller bli med på [støtteserveren](${discord})`,
        fields: {
            enabled: () => `> Aktivert:`,
            message: () => `> Melding:`
        },
        enabled: (prefix) => `${emojis.success} DM join-meldinger aktivert. Deaktiver med \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} DM join-meldinger deaktivert. Aktiver med \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Melding ikke definert. Still inn med \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Join-systemet :`,
        description: () => `Hvis dette ikke fungerer, sjekk botens tillatelser eller bli med på [støtteserveren](${discord})`,
        fields: {
            enabled: () => `> Aktivert:`,
            channel: () => `> Kanal:`,
            message: () => `> Melding:`
        },
        enabled: (prefix) => `${emojis.success} Join-meldinger aktivert. Deaktiver med \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Join-meldinger deaktivert. Aktiver med \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Melding ikke definert. Still inn med \`${prefix}configjoin\`!`,
            channel: (prefix) => `Kanal ikke definert. Still inn med \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Leave-systemet :`,
        description: () => `Hvis dette ikke fungerer, sjekk botens tillatelser eller bli med på [støtteserveren](${discord})`,
        fields: {
            enabled: () => `> Aktivert:`,
            channel: () => `> Kanal:`,
            message: () => `> Melding:`
        },
        enabled: (prefix) => `${emojis.success} Leave-meldinger aktivert. Deaktiver med \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Leave-meldinger deaktivert. Aktiver med \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Melding ikke definert. Still inn med \`${prefix}configleave\`!`,
            channel: (prefix) => `Kanal ikke definert. Still inn med \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Konfigurasjon av ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Join-meldinger`,
            content: (guild, data) => `
            > Aktivert: ${data.guild.join.enabled ? "**ja**" : "**nei**"}
            > Melding: ${data.guild.join.message ? "**satt**" : "**ikke satt**."}
            > Kanal: ${!data.guild.join.channel ? "**ikke satt**" : (guild.channels.cache.get(data.guild.join.channel) ? "**satt**" : "**kanal ikke funnet**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Leave-meldinger`,
            content: (guild, data) => `
            > Aktivert: ${data.guild.leave.enabled ? "**ja**" : "**nei**"}
            > Melding: ${data.guild.leave.message ? "**satt**" : "**ikke satt**."}
            > Kanal: ${!data.guild.leave.channel ? "**ikke satt**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**satt**" : "**kanal ikke funnet**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} DM join-meldinger`,
            content: (guild, data) => `
            > Aktivert: ${data.guild.joinDM.enabled ? "**ja**" : "**nei**"}
            > Melding: ${data.guild.joinDM.message ? "**satt**" : "**ikke satt**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Hallo, **${username}**! Denne funksjonen er bare tilgjengelig for premium- og partnerservere. Få premium: **snart** !`
    },

    antispam: {
        cooldown: (username) => `Senk tempoet! Vennligst vent 5 sekunder og prøv igjen!`
    },

    configdmjoin: {
        disable: (prefix) => `Skriv \`${prefix}setdmjoin\` for å deaktivere DM join-meldinger.`,
        instruct: (str) => `
__**Tilleggsinformasjon**__
\`\`\`
{user} : Omtale av medlemmet som ble medlem av serveren.
{user.name} : Navn på medlemmet som ble medlem av serveren.
{user.tag} : Tag for medlemmet som ble medlem av serveren.
{user.createdat} : Alder på medlemmets konto.

{guild} : Servernavn.
{guild.count} : Nåværende antall medlemmer på serveren din.

{inviter} : Omtale av hvem som inviterte.
{inviter.name} : Navn på hvem som inviterte.
{inviter.tag} : Tag for hvem som inviterte.
{inviter.invites} : Totalt antall invitasjoner fra hvem som inviterte.

{invite.code} : Brukt invitasjonskode.
{invite.url} : Brukt invitasjons-URL.
{invite.uses} : Antall ganger invitasjonskoden er brukt.
\`\`\`
Skriv \`cancel\` for å avbryte. ${str}


:pencil: **| Skriv nå DM join-meldingen... :pencil2:**`,
        cancelled: () => `:x: Avbrutt.`,
        success: () => `✅ **| Fullført.**`,
        title: () => `**DM join-melding satt**`,
        fields: {
            message: () => `Melding:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Bruk \`${prefix}testdmjoin\` for å teste den nye meldingen.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Meldingen din må være mindre enn 850 tegn.`, 
        disable: (prefix) => `Skriv \`${prefix}setjoin\` for å deaktivere join-meldinger.`,
        instructs: {
            message: (str) => `
__**Tilleggsinformasjon**__
\`\`\`
{user} : Omtale av medlemmet som ble medlem av serveren.
{user.name} : Navn på medlemmet som ble medlem av serveren.
{user.tag} : Tag for medlemmet som ble medlem av serveren.
{user.createdat} : Alder på medlemmets konto.

{guild} : Servernavn.
{guild.count} : Nåværende antall medlemmer på serveren din.

{inviter} : Omtale av hvem som inviterte.
{inviter.name} : Navn på hvem som inviterte.
{inviter.tag} : Tag for hvem som inviterte.
{inviter.invites} : Totalt antall invitasjoner fra hvem som inviterte.

{invite.code} : Brukt invitasjonskode.
{invite.url} : Brukt invitasjons-URL.
{invite.uses} : Antall ganger invitasjonskoden er brukt.
\`\`\`
Skriv \`cancel\` for å avbryte. ${str}


:pencil: **| Skriv nå join-meldingen... :pencil2:**`,
            channel: () => `:scroll: **| Nevn nå kanalen... :pencil2:**`
        },
        cancelled: () => `:x: Avbrutt.`,
        success: () => `✅ **| Fullført.**`,
        title: () => `**Join-melding satt**`,
        fields: {
            message: () => `Melding:`,
            channel: () => `Kanal:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Bruk \`${prefix}testjoin\` for å teste den nye meldingen.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Ingen kanal funnet for \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Skriv \`${prefix}setleave\` for å deaktivere leave-meldinger.`,
        instructs: {
            message: (str) => `
__**Tilleggsinformasjon**__
\`\`\`
{user} : Omtale av medlemmet som forlot serveren.
{user.name} : Navn på medlemmet som forlot serveren.
{user.tag} : Tag for medlemmet som forlot serveren.
{user.createdat} : Alder på medlemmets konto.

{guild} : Servernavn.
{guild.count} : Nåværende antall medlemmer på serveren din.

{inviter} : Omtale av hvem som inviterte.
{inviter.name} : Navn på hvem som inviterte.
{inviter.tag} : Tag for hvem som inviterte.
{inviter.invites} : Totalt antall invitasjoner fra hvem som inviterte.

{invite.code} : Brukt invitasjonskode.
{invite.url} : Brukt invitasjons-URL.
{invite.uses} : Antall ganger invitasjonskoden er brukt.
\`\`\`
Skriv \`cancel\` for å avbryte. ${str}


:pencil: **| Skriv nå leave-meldingen... :pencil2:**`,
            channel: () => `:scroll: **| Nevn nå kanalen... :pencil2:**`
        },
        cancelled: () => `:x: Avbrutt.`,
        success: () => `✅ **| Fullført.**`,
        title: () => `**Leave-melding satt**`,
        fields: {
            message: () => `Melding:`,
            channel: () => `Kanal:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Bruk \`${prefix}testleave\` for å teste den nye meldingen`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Ingen kanal funnet for \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Du må angi et gyldig språk!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)\n:flag_se: Svenska (\`sv\`)\n:flag_no: Norsk (\`no\`)\n:flag_dk: Dansk (\`da\`)`,
        success: () => `${emojis.success} | :flag_no: Serverspråket er nå Norsk!`
    },

    graph: {
        title: (server, days) => `Ble medlem på ${server} de siste ${days} dagene`,
        content: (total, percent, from, to) => `**${total}** medlemmer (dvs. **${percent}%** av serveren) ble medlem på serveren fra ${from} til ${to}:`,
        invalid: () => `Du må angi et gyldig antall dager (større enn 1 og mindre enn 1000) å vise!`,
        months: () =>[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Des"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `medlemmer`
        },
        conf: {
            title: () => `Konfigurasjon`
        },
        selector: {
            title: () => `Velger`,
            manage: () => `Håndtere`,
            no: {
                title: () => `Ingen servere`,
                content: () => `Ingen server funnet. Sjekk at du er logget inn med riktig konto.`
            }
        },
        help: {
            title: () => `Hjelp`,
            doc: () => `Dokumentasjon`,
            support: () => `Støtteserver`
        },
        forms: {
            buttons: {
                enable: () => `Aktiver meldinger`,
                disable: () => `Deaktiver meldinger`,
                update: () => `Oppdater meldinger`
            },
            basic: {
                title: () => `Grunnkonfigurasjon`,
                language: () => `Språk`,
                prefix: () => `Prefiks`,
                update: () => `Oppdater`
            },
            join: {
                title: () => `Join-meldinger`,
                message: {
                    title: () => `Melding`,
                    default: () => `{user} ble medlem av serveren! Invitert av **{inviter.tag}** ({inviter.invites} invitasjoner).`
                },
                channel: {
                    title: () => `Kanal`
                },
            },
            leave: {
                title: () => `Leave-meldinger`,
                message: {
                    title: () => `Melding`,
                    default: () => `{user.username} forlot serveren. Ble invitert av **{inviter.tag}** ({inviter.invites} invitasjoner).`
                },
                channel: {
                    title: () => `Kanal`
                }
            },
            joinDM: {
                title: () => `DM join-meldinger`,
                premium: () => `Denne funksjonen er tilgjengelig for premium- og partnerservere.`,
                message: {
                    title: () => `Melding`,
                    default: () => `Velkommen {user}! Du ble medlem av **{server}**! Invitert av **{inviter.tag}**. Ikke glem å lese serverreglene!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Prosessen med å fjerne serverinvitasjoner har startet... Du kan gjenopprette dem med kommandoen \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Prosessen med å fjerne invitasjoner fra **${member.user.tag}}** har startet... Du kan gjenopprette dem med kommandoen \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Invitasjoner tilbakestilt`,
        titles: {
            all: (prefix) => `${emojis.success} | Serverinvitasjoner er tilbakestilt! Du kan gjenopprette dem med kommandoen \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Invitasjoner fra **${member.user.tag}}** er tilbakestilt! Du kan gjenopprette dem med kommandoen \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Er du sikker på at du vil gjenopprette serverinvitasjoner? Alle medlemmer får invitasjonene fra før den siste kjøringen av kommandoen \`${prefix}remove-invites\` (eller 0 hvis kommandoen aldri ble kjørt).\n\n:information_source: **Invitasjonssamendrag**:\nVil bli gjenoppretter, totalt: **${memberCount.invites}** normale, **${memberCount.bonus}** bonus, **${memberCount.leaves}** avganger, **${memberCount.fake}** falske.\n\n${emojis.success} Skriv \`-confirm\` for å bekrefte.\n${emojis.error} Skriv \`cancel\` for å avbryte.`,
            member: (prefix, member) => `${emojis.warn} | Er du sikker på at du vil gjenopprette invitasjonene fra **${member.user.tag}}**? Du får invitasjonene fra før den siste kjøringen av kommandoen \`${prefix}remove-invites\` (eller 0 hvis kommandoen aldri ble kjørt).\n\n:information_source: **Invitasjonssamendrag**:\nVil bli gjenoppretter: **${member.data.old_invites}** normale, **${member.data.old_bonus}** bonus, **${member.data.old_leaves}** avganger, **${member.data.old_fake}** falske.\n\n${emojis.success} Skriv \`-confirm\` for å bekrefte.\n${emojis.error} Skriv \`cancel\` for å avbryte.`,
            cancelled: () => `${emojis.error} Avbrutt.`
        },
        loading: {
            all: () => `${emojis.loading} | Prosessen med å gjenopprette serverinvitasjoner har startet....`,
            member: (member) => `${emojis.loading} | Prosessen med å gjenopprette invitasjoner fra **${member.user.tag}}** har startet...`
        },
        title: () => `☄️ Invitasjoner gjenoppretter`,
        titles: {
            all: () => `${emojis.success} | Serverinvitasjoner er gjenopprettet!`,
            member: (member) => `${emojis.success} | Invitasjoner fra **${member.user.tag}}** er gjenopprettet!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Det finnes ingen invitasjoner å synkronisere.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Er du sikker på at du vil synkronisere serverinvitasjoner?\n\n:information_source: **Invitasjonssamendrag**:\n**${Math.round(inviteCount)}** normale invitasjoner vil bli gjenoppretter.\n\n${emojis.success} Skriv \`-confirm\` for å bekrefte.\n${emojis.error} Skriv \`cancel\` for å avbryte.`,
            cancelled: () => `${emojis.error} Avbrutt.`
        },
        title: () => `☄️ Invitasjoner synkronisert`,
        titles: {
            all: () => `${emojis.success} | Serverinvitasjoner er synkronisert!`
        }
    },

    add: {
        content: (id) => `Du kan legge til meg på serveren din ved å klikke [her](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Forespurt av ${username}`
    },

    support: {
        content: (id) => `Du kan bli medlem av støtteserveren vår ved å klikke [her](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Forespurt av ${username}`
    }

};
