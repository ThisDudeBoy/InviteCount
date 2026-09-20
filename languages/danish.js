const { emojis, discord } = require("../config");

module.exports = {

    locale: "da_DK",

    utils: {
        prefix: (prefix) => `Mit nuværende præfiks er \`${prefix}\`\nBrug \`${prefix}help\` for mere hjælp.`,
        viewConf: () => `[Se konfiguration i dashboard](https://invite-count.xyz)`,
        conf: {
            title: () => `Se konfiguration i dashboard`,
            content: () => `[eller i dashboardet](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} blev medlem af serveren via OAuth.`,
                
                vanity: (user) => `${user} blev medlem af serveren via discord.gg-invitationen indstillet af serverejer.`,
                unknown: (user) => `Jeg kan ikke forstå, hvordan ${user} blev medlem af serveren.`,
                perm: (user) => `${emojis.error} | Jeg skal have tilladelse til at administrere serveren for at vide, hvem der inviterede ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} forlod serveren, var blevet medlem via OAuth.`,
                vanity: (user) => `${user} forlod serveren, var blevet medlem via discord.gg-invitationen indstillet af serverejer.`,
                unknown: (user) => `${user} forlod serveren, men jeg kan ikke forstå, hvordan denne blev medlem.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Manglende tilladelser**__\n\nJeg skal have følgende tilladelser for, at denne kommando fungerer korrekt: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Denne kommando er i øjeblikket deaktiveret!`,
        permLevel: (name) => `${emojis.error} | Denne kommando kræver tilladelsesniveau: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Jeg har ikke tilladelse til at sende meddelelser i denne kanal.`,
        missingAdmin: () => `${emojis.error} | Jeg skal have tilladelsen \`Administrer server\` for at udføre denne handling`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Den aktuelle kanal er allerede denne kanal!`,
        success: () => `<:succes:851491428563812382> | Logkanal blev indstillet.`
    },
    glist: {
        title: () => `🎁 Liste over giveaways`,
        description: (prefix) => `Brug \`${prefix}gstart\` for at starte en giveaway. Kun ufuldstændige giveaways vises`,
        fields: {
            name: () => `> Liste`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Slutter om ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Der er ingen ufuldstændige giveaways på denne server`,

    },
    help: {
        title: () => `ℹ InviteCount hjælpeside`,
        description: (guildName, prefix) => `Med InviteCount kan du administrere servermedlemmer ved at spore invitationer.\n\n**Dokumentationen** er tilgængelig [her](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderering**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Administration**`,
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
            title: () => `:envelope: Afgangsmeddelelser`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Giveaways**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Invitationer`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Værktøjer`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Links :`,
        links: (clientID) => `[Tilføj mig](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Hjemmeside](https://invite-count.xyz) ● [Supportserver](${discord}) ● [Stem på mig](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `Med InviteCount kan du administrere servermedlemmer ved at spore invitationer.`,

        dev: {
            title: () => `**Information**`,
            content: (uptime) => `<:arrow:766358167382523944> **Udviklere:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Bibliotek:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Oppetid** ${uptime}\n <:arrow:766358167382523944> **Oprettelsesdato:** 12. maj 2019`
        },
        statistics: {
            title: () => `**Statistik**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Servere:** ${guilds}\n<:arrow:766358167382523944> **Brugere**: ${channels}\n<:arrow:766358167382523944> **Kanaler:** ${users}`
        },
        link: {
            title: () => `**Links**`,
            content: () => `<:arrow:766358167382523944> **Supportserver:** [Klik](${discord})\n<:arrow:766358167382523944> **Invitation:** [Klik](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `Med InviteCount kan du administrere servermedlemmer ved at spore invitationer.`,

        dev: {
            title: () => `**Udviklere :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inspireret af :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Særlig tak til :**`,
            content: () => `⭐ **Androz** for hjælpen med ManageInvite!\n🎁 **Pauldb09** for giveaway-systemet\n👨‍🏭 Hele holdet & Oversættere`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Du har` : `**${member.user.username}** har`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** invitationer! (**${memberData.invites}** normale, **${memberData.bonus}** bonus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** falske, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** afgange)${nextRank ? `\nDu har brug for **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** flere invitationer for at få næste rang: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Rangliste slettet!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** invitationer (**${member.invites}** normale, **${member.bonus}** bonus, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** falske, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** afgange)`,
        prompt: () => `{{user}}, hvilken side vil du gå til? Skriv \`cancel\` eller \`0\` for at annullere.`,
        title: () => `Invitationsrangliste`,
        empty: {
            title: () => `😕 Ingen invitationer fundet`,
            content: () => `Begynd at invitere mennesker, og du vil vises på denne side!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} konto (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Oprettelse`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Ja" : "Nej"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Blev medlem`
            },
            joinWay: {
                title: () => `Måde at blive medlem på`,
                oauth: () => `OAuth-invitation (via discordapp.com).`,
                vanity: () => `Brugerdefineret invitation indstillet af administrator.`,
                unknown: (user) => `Jeg kan ikke forstå, hvordan ${user.username} blev medlem af serveren.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Invitationer`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** invitationer (**${inviteData.invites}** normale, **${inviteData.bonus}** bonus, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** falske, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** afgange)`
            },
            joinOrder: {
                title: () => `➡️ Rækkefølge for at blive medlem`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Du skal have tilladelsen `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Venligst nævn en bruger",
            supperior: "<:error:753232040199192657> | Du kan ikke smide en bruger ud, der er højere end dig",
            noperm: "<:error:753232040199192657> | Der opstod en fejl... Venligst kontroller, at jeg har tilladelse til at smide dette medlem ud, og prøv igen!",
            
        },
        description: "<:success:753232040073101363> | Bruger smidt ud.",
        banneddm: (server, moderator, reason) => "Du blev smidt ud fra **" + server + "** af **" + moderator + "**\n**Årsag** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Du skal have tilladelsen `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Venligst nævn en bruger",
            supperior: "<:error:753232040199192657> | Du kan ikke forbyde en bruger, der er højere end dig",
            noperm: "<:error:753232040199192657> | Der opstod en fejl... Venligst kontroller, at jeg har tilladelse til at forbyde dette medlem, og prøv igen!",
            
        },
        description: "<:success:753232040073101363> | Bruger forbudt.",
        banneddm: (server, moderator, reason) => "Du blev forbudt fra **" + server + "** af **" + moderator + "**\n**Årsag** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Venligst giv et ID for at ophæve forbuddet",
        success: (user) => "<:success:753232040073101363> | " + user + " blev ophævet forbud",
        noban: "<:error:753232040199192657> | Denne bruger er ikke forbudt"
    },

    membercount: {
        title: (guildName) => `Medlemsantal af ${guildName}`,
        description: (guild) => `
        I alt **${guild.members.cache.size}** medlemmer (**${guild.members.cache.filter((m) => !m.user.bot).size}** personer og **${guild.members.cache.filter((m) => m.user.bot).size}** robotter)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} medlemmer (forstyr ikke)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} medlemmer (online)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} medlemmer (inaktiv)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} medlemmer (offline)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Du skal angive antallet af bonusinvitationer, der skal tilføjes. (Syntaks: ${prefix}addbonus nummer @medlem) **Du skal invitere en rigtig person for at få en belønning**`,
                incorrect: (prefix) => `${emojis.error} | Du skal angive et gyldigt antal bonusinvitationer, der skal tilføjes. (Syntaks: ${prefix}addbonus nummer @medlem)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Du skal nævne et medlem for at tilføje bonusinvitationer. (Syntaks: ${prefix}addbonus nummer @medlem)`
            }
        },
        title: () => `📥 Bonusinvitationer tilføjet`,
        field: (prefix, member) => `Skriv \`${prefix}invites ${member.user.tag}\` for at se det nye antal invitationer for **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Du skal angive antallet af bonusinvitationer, der skal fjernes. (Syntaks: ${prefix}removebonus nummer @medlem)`,
                incorrect: (prefix) => `${emojis.error} | Du skal angive et gyldigt antal bonusinvitationer, der skal fjernes. (Syntaks: ${prefix}removebonus nummer @medlem)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Du skal nævne et medlem for at fjerne bonusinvitationer. (Syntaks: ${prefix}removebonus nummer @medlem)`
            }
        },
        title: () => `📥 Bonusinvitationer fjernet`,
        field: (prefix, member) => `Skriv \`${prefix}invites ${member.user.tag}\` for at se det nye antal invitationer for **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | DM join-systemet er nu __AKTIVERET__!**`,
        off: () => `**${emojis.success} | DM join-systemet er nu __DEAKTIVERET__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Join-systemet er nu __AKTIVERET__!**`,
        off: () => `**${emojis.success} | Join-systemet er nu __DEAKTIVERET__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Leave-systemet er nu __AKTIVERET__!**`,
        off: () => `**${emojis.success} | Leave-systemet er nu __DEAKTIVERET__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Du skal angive et præfiks!`,
        success: () => `${emojis.success} | Serverpræfikset blev opdateret!`
    },

    testdmjoin: {
        title: () => `:wrench: DM join-systemet :`,
        description: () => `Hvis dette ikke fungerer, skal du kontrollere botens tilladelser eller slutte dig til [supportserveren](${discord})`,
        fields: {
            enabled: () => `> Aktiveret:`,
            message: () => `> Besked:`
        },
        enabled: (prefix) => `${emojis.success} DM join-meddelelser aktiveret. Deaktiver med \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} DM join-meddelelser deaktiveret. Aktiver med \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Besked ikke defineret. Indstil med \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Join-systemet :`,
        description: () => `Hvis dette ikke fungerer, skal du kontrollere botens tilladelser eller slutte dig til [supportserveren](${discord})`,
        fields: {
            enabled: () => `> Aktiveret:`,
            channel: () => `> Kanal:`,
            message: () => `> Besked:`
        },
        enabled: (prefix) => `${emojis.success} Join-meddelelser aktiveret. Deaktiver med \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Join-meddelelser deaktiveret. Aktiver med \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Besked ikke defineret. Indstil med \`${prefix}configjoin\`!`,
            channel: (prefix) => `Kanal ikke defineret. Indstil med \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Leave-systemet :`,
        description: () => `Hvis dette ikke fungerer, skal du kontrollere botens tilladelser eller slutte dig til [supportserveren](${discord})`,
        fields: {
            enabled: () => `> Aktiveret:`,
            channel: () => `> Kanal:`,
            message: () => `> Besked:`
        },
        enabled: (prefix) => `${emojis.success} Leave-meddelelser aktiveret. Deaktiver med \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Leave-meddelelser deaktiveret. Aktiver med \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Besked ikke defineret. Indstil med \`${prefix}configleave\`!`,
            channel: (prefix) => `Kanal ikke defineret. Indstil med \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Konfiguration af ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Join-meddelelser`,
            content: (guild, data) => `
            > Aktiveret: ${data.guild.join.enabled ? "**ja**" : "**nej**"}
            > Besked: ${data.guild.join.message ? "**indstillet**" : "**ikke indstillet**."}
            > Kanal: ${!data.guild.join.channel ? "**ikke indstillet**" : (guild.channels.cache.get(data.guild.join.channel) ? "**indstillet**" : "**kanal ikke fundet**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Leave-meddelelser`,
            content: (guild, data) => `
            > Aktiveret: ${data.guild.leave.enabled ? "**ja**" : "**nej**"}
            > Besked: ${data.guild.leave.message ? "**indstillet**" : "**ikke indstillet**."}
            > Kanal: ${!data.guild.leave.channel ? "**ikke indstillet**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**indstillet**" : "**kanal ikke fundet**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} DM join-meddelelser`,
            content: (guild, data) => `
            > Aktiveret: ${data.guild.joinDM.enabled ? "**ja**" : "**nej**"}
            > Besked: ${data.guild.joinDM.message ? "**indstillet**" : "**ikke indstillet**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Hej, **${username}**! Denne funktion er kun tilgængelig for premium- og partnerservere. Få premium: **snart** !`
    },

    antispam: {
        cooldown: (username) => `Sænk farten! Vent venligst 5 sekunder og prøv igen!`
    },

    configdmjoin: {
        disable: (prefix) => `Skriv \`${prefix}setdmjoin\` for at deaktivere DM join-meddelelser.`,
        instruct: (str) => `
__**Yderligere Information**__
\`\`\`
{user} : Omtale af medlemmet, der blev medlem af serveren.
{user.name} : Navn på medlemmet, der blev medlem af serveren.
{user.tag} : Tag for medlemmet, der blev medlem af serveren.
{user.createdat} : Alder på medlemmets konto.

{guild} : Servernavn.
{guild.count} : Nuværende antal medlemmer på din server.

{inviter} : Omtale af hvem der inviterede.
{inviter.name} : Navn på hvem der inviterede.
{inviter.tag} : Tag for hvem der inviterede.
{inviter.invites} : Totalt antal invitationer fra hvem der inviterede.

{invite.code} : Brugt invitationskode.
{invite.url} : Brugt invitations-URL.
{invite.uses} : Antal gange invitationskoden er brugt.
\`\`\`
Skriv \`cancel\` for at annullere. ${str}


:pencil: **| Skriv nu DM join-meddelelsen... :pencil2:**`,
        cancelled: () => `:x: Annulleret.`,
        success: () => `✅ **| Fuldført.**`,
        title: () => `**DM join-besked indstillet**`,
        fields: {
            message: () => `Besked:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Brug \`${prefix}testdmjoin\` for at teste den nye besked.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Din besked skal være mindre end 850 tegn.`, 
        disable: (prefix) => `Skriv \`${prefix}setjoin\` for at deaktivere join-meddelelser.`,
        instructs: {
            message: (str) => `
__**Yderligere Information**__
\`\`\`
{user} : Omtale af medlemmet, der blev medlem af serveren.
{user.name} : Navn på medlemmet, der blev medlem af serveren.
{user.tag} : Tag for medlemmet, der blev medlem af serveren.
{user.createdat} : Alder på medlemmets konto.

{guild} : Servernavn.
{guild.count} : Nuværende antal medlemmer på din server.

{inviter} : Omtale af hvem der inviterede.
{inviter.name} : Navn på hvem der inviterede.
{inviter.tag} : Tag for hvem der inviterede.
{inviter.invites} : Totalt antal invitationer fra hvem der inviterede.

{invite.code} : Brugt invitationskode.
{invite.url} : Brugt invitations-URL.
{invite.uses} : Antal gange invitationskoden er brugt.
\`\`\`
Skriv \`cancel\` for at annullere. ${str}


:pencil: **| Skriv nu join-meddelelsen... :pencil2:**`,
            channel: () => `:scroll: **| Nævn nu kanalen... :pencil2:**`
        },
        cancelled: () => `:x: Annulleret.`,
        success: () => `✅ **| Fuldført.**`,
        title: () => `**Join-besked indstillet**`,
        fields: {
            message: () => `Besked:`,
            channel: () => `Kanal:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Brug \`${prefix}testjoin\` for at teste den nye besked.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Ingen kanal fundet for \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Skriv \`${prefix}setleave\` for at deaktivere leave-meddelelser.`,
        instructs: {
            message: (str) => `
__**Yderligere Information**__
\`\`\`
{user} : Omtale af medlemmet, der forlod serveren.
{user.name} : Navn på medlemmet, der forlod serveren.
{user.tag} : Tag for medlemmet, der forlod serveren.
{user.createdat} : Alder på medlemmets konto.

{guild} : Servernavn.
{guild.count} : Nuværende antal medlemmer på din server.

{inviter} : Omtale af hvem der inviterede.
{inviter.name} : Navn på hvem der inviterede.
{inviter.tag} : Tag for hvem der inviterede.
{inviter.invites} : Totalt antal invitationer fra hvem der inviterede.

{invite.code} : Brugt invitationskode.
{invite.url} : Brugt invitations-URL.
{invite.uses} : Antal gange invitationskoden er brugt.
\`\`\`
Skriv \`cancel\` for at annullere. ${str}


:pencil: **| Skriv nu leave-meddelelsen... :pencil2:**`,
            channel: () => `:scroll: **| Nævn nu kanalen... :pencil2:**`
        },
        cancelled: () => `:x: Annulleret.`,
        success: () => `✅ **| Fuldført.**`,
        title: () => `**Leave-besked indstillet**`,
        fields: {
            message: () => `Besked:`,
            channel: () => `Kanal:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Brug \`${prefix}testleave\` for at teste den nye besked`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Ingen kanal fundet for \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Du skal angive et gyldigt sprog!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)\n:flag_se: Svenska (\`sv\`)\n:flag_no: Norsk (\`no\`)\n:flag_dk: Dansk (\`da\`)`,
        success: () => `${emojis.success} | :flag_dk: Serverspråket er nu Dansk!`
    },

    graph: {
        title: (server, days) => `Blev medlem på ${server} de seneste ${days} dage`,
        content: (total, percent, from, to) => `**${total}** medlemmer (dvs. **${percent}%** af serveren) blev medlem af serveren fra ${from} til ${to}:`,
        invalid: () => `Du skal angive et gyldigt antal dage (større end 1 og mindre end 1000) at vise!`,
        months: () =>[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Maj",
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
            members: () => `medlemmer`
        },
        conf: {
            title: () => `Konfiguration`
        },
        selector: {
            title: () => `Vælger`,
            manage: () => `Administrer`,
            no: {
                title: () => `Ingen servere`,
                content: () => `Ingen server fundet. Kontroller venligst, at du er logget ind med den rigtige konto.`
            }
        },
        help: {
            title: () => `Hjælp`,
            doc: () => `Dokumentation`,
            support: () => `Supportserver`
        },
        forms: {
            buttons: {
                enable: () => `Aktivér meddelelser`,
                disable: () => `Deaktivér meddelelser`,
                update: () => `Opdater meddelelser`
            },
            basic: {
                title: () => `Grundlæggende konfiguration`,
                language: () => `Sprog`,
                prefix: () => `Præfiks`,
                update: () => `Opdater`
            },
            join: {
                title: () => `Join-meddelelser`,
                message: {
                    title: () => `Besked`,
                    default: () => `{user} blev medlem af serveren! Inviteret af **{inviter.tag}** ({inviter.invites} invitationer).`
                },
                channel: {
                    title: () => `Kanal`
                },
            },
            leave: {
                title: () => `Leave-meddelelser`,
                message: {
                    title: () => `Besked`,
                    default: () => `{user.username} forlod serveren. Blev inviteret af **{inviter.tag}** ({inviter.invites} invitationer).`
                },
                channel: {
                    title: () => `Kanal`
                }
            },
            joinDM: {
                title: () => `DM join-meddelelser`,
                premium: () => `Denne funktion er tilgængelig for premium- og partnerservere.`,
                message: {
                    title: () => `Besked`,
                    default: () => `Velkommen {user}! Du blev medlem af **{server}**! Inviteret af **{inviter.tag}**. Glem ikke at læse serverreglerne!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Processen med at fjerne serverinvitationer er startet... Du kan gendanne dem med kommandoen \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Processen med at fjerne invitationer fra **${member.user.tag}}** er startet... Du kan gendanne dem med kommandoen \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Invitationer nulstillet`,
        titles: {
            all: (prefix) => `${emojis.success} | Serverinvitationer er nulstillet! Du kan gendanne dem med kommandoen \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Invitationer fra **${member.user.tag}}** er nulstillet! Du kan gendanne dem med kommandoen \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Er du sikker på, at du vil gendanne serverinvitationer? Alle medlemmer får invitationerne fra før den seneste kørsel af kommandoen \`${prefix}remove-invites\` (eller 0 hvis kommandoen aldrig er kørt).\n\n:information_source: **Oversigt over invitationer**:\nVil blive gendannet, i alt: **${memberCount.invites}** normale, **${memberCount.bonus}** bonus, **${memberCount.leaves}** afgange, **${memberCount.fake}** falske.\n\n${emojis.success} Skriv \`-confirm\` for at bekræfte.\n${emojis.error} Skriv \`cancel\` for at annullere.`,
            member: (prefix, member) => `${emojis.warn} | Er du sikker på, at du vil gendanne invitationerne for **${member.user.tag}}**? Du får invitationerne fra før den seneste kørsel af kommandoen \`${prefix}remove-invites\` (eller 0 hvis kommandoen aldrig er kørt).\n\n:information_source: **Oversigt over invitationer**:\nVil blive gendannet: **${member.data.old_invites}** normale, **${member.data.old_bonus}** bonus, **${member.data.old_leaves}** afgange, **${member.data.old_fake}** falske.\n\n${emojis.success} Skriv \`-confirm\` for at bekræfte.\n${emojis.error} Skriv \`cancel\` for at annullere.`,
            cancelled: () => `${emojis.error} Annulleret.`
        },
        loading: {
            all: () => `${emojis.loading} | Processen med at gendanne serverinvitationer er startet....`,
            member: (member) => `${emojis.loading} | Processen med at gendanne invitationer fra **${member.user.tag}}** er startet...`
        },
        title: () => `☄️ Invitationer genindsat`,
        titles: {
            all: () => `${emojis.success} | Serverinvitationer er genindsat!`,
            member: (member) => `${emojis.success} | Invitationer fra **${member.user.tag}}** er genindsat!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Der er ingen invitationer at synkronisere.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Er du sikker på, at du vil synkronisere serverinvitationer?\n\n:information_source: **Oversigt over invitationer**:\n**${Math.round(inviteCount)}** normale invitationer vil blive genindsat.\n\n${emojis.success} Skriv \`-confirm\` for at bekræfte.\n${emojis.error} Skriv \`cancel\` for at annullere.`,
            cancelled: () => `${emojis.error} Annulleret.`
        },
        title: () => `☄️ Invitationer synkroniseret`,
        titles: {
            all: () => `${emojis.success} | Serverinvitationer er synkroniseret!`
        }
    },

    add: {
        content: (id) => `Du kan tilføje mig til din server ved at klikke [her](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Anmodet af ${username}`
    },

    support: {
        content: (id) => `Du kan blive medlem af vores supportserver ved at klikke [her](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Anmodet af ${username}`
    }

};
