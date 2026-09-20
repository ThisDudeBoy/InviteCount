const { emojis, discord } = require("../config");

module.exports = {

    locale: "sv_SE",

    utils: {
        prefix: (prefix) => `Min nuvarande prefix är \`${prefix}\`\nAnvänd \`${prefix}help\` för mer hjälp.`,
        viewConf: () => `[Visa konfiguration på instrumentpanelen](https://invite-count.xyz)`,
        conf: {
            title: () => `Visa konfiguration på instrumentpanelen`,
            content: () => `[eller på instrumentpanelen](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} gick med på servern via OAuth.`,
                
                vanity: (user) => `${user} gick med på servern via discord.gg-inbjudan inställd av serverägaren.`,
                unknown: (user) => `Jag kan inte förstå hur ${user} gick med på servern.`,
                perm: (user) => `${emojis.error} | Jag behöver behörighet att hantera servern för att veta vem som bjöd in ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} lämnade servern, hade gått med via OAuth.`,
                vanity: (user) => `${user} lämnade servern, hade gått med via discord.gg-inbjudan inställd av serverägaren.`,
                unknown: (user) => `${user} lämnade servern, men jag kan inte förstå hur denna gick med.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Saknade behörigheter**__\n\nJag behöver följande behörigheter för att detta kommando ska fungera korrekt: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Detta kommando är för närvarande inaktiverat!`,
        permLevel: (name) => `${emojis.error} | Detta kommando kräver behörighetsnivå: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Jag har inte behörighet att skicka meddelanden i denna kanal.`,
        missingAdmin: () => `${emojis.error} | Jag behöver behörigheten \`Hantera server\` för att utföra denna åtgärd`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Den aktuella kanalen är redan denna kanal!`,
        success: () => `<:succes:851491428563812382> | Loggkanalen ställdes in framgångsrikt.`
    },
    glist: {
        title: () => `🎁 Giveaway-lista`,
        description: (prefix) => `Använd \`${prefix}gstart\` för att starta en giveaway. Endast ofullständiga giveaways visas`,
        fields: {
            name: () => `> Lista`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Slutar om ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Det finns inga ofullständiga giveaways på denna server`,

    },
    help: {
        title: () => `ℹ InviteCount hjälpsida`,
        description: (guildName, prefix) => `Med InviteCount kan du hantera servermedlemmar genom att spåra inbjudningar.\n\n**Dokumentationen** finns tillgänglig [här](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderering**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Administration**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **Allmänt**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Konfiguration**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Avgångsmeddelanden`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Giveaways**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Inbjudningar`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Verktyg`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Länkar :`,
        links: (clientID) => `[Lägg till mig](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Webbplats](https://invite-count.xyz) ● [Supportserver](${discord}) ● [Rösta på mig](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `Med InviteCount kan du hantera servermedlemmar genom att spåra inbjudningar.`,

        dev: {
            title: () => `**Information**`,
            content: (uptime) => `<:arrow:766358167382523944> **Utvecklare:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Bibliotek:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Drifttid** ${uptime}\n <:arrow:766358167382523944> **Skapningsdatum:** 12 maj 2019`
        },
        statistics: {
            title: () => `**Statistik**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Servrar:** ${guilds}\n<:arrow:766358167382523944> **Användare**: ${channels}\n<:arrow:766358167382523944> **Kanaler:** ${users}`
        },
        link: {
            title: () => `**Länkar**`,
            content: () => `<:arrow:766358167382523944> **Supportserver:** [Klicka](${discord})\n<:arrow:766358167382523944> **Inbjudan:** [Klicka](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `Med InviteCount kan du hantera servermedlemmar genom att spåra inbjudningar.`,

        dev: {
            title: () => `**Utvecklare :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inspirerad av :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Speciellt tack till :**`,
            content: () => `⭐ **Androz** för hjälpen med ManageInvite!\n🎁 **Pauldb09** för snurrsystemet\n👨‍🏭 Hela teamet & Översättare`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Du har` : `**${member.user.username}** har`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** inbjudningar! (**${memberData.invites}** normala, **${memberData.bonus}** bonus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** falska, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** avgångar)${nextRank ? `\nDu behöver **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** fler inbjudningar för att uppnå nästa rang: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Topplista rensad!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** inbjudningar (**${member.invites}** normala, **${member.bonus}** bonus, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** falska, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** avgångar)`,
        prompt: () => `{{user}}, vilken sida vill du gå till? Skriv \`cancel\` eller \`0\` för att avbryta.`,
        title: () => `Inbjudningsstopplista`,
        empty: {
            title: () => `😕 Inga inbjudningar hittades`,
            content: () => `Börja bjuda in människor och du kommer att visas på denna sida!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} konto (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Skapelse`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Ja" : "Nej"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Gick med`
            },
            joinWay: {
                title: () => `Sätt att gå med`,
                oauth: () => `OAuth-inbjudan (via discordapp.com).`,
                vanity: () => `Anpassad inbjudan inställd av administratören.`,
                unknown: (user) => `Jag kan inte förstå hur ${user.username} gick med på servern.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Inbjudningar`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** inbjudningar (**${inviteData.invites}** normala, **${inviteData.bonus}** bonus, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** falska, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** avgångar)`
            },
            joinOrder: {
                title: () => `➡️ Ordning gick med`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Du måste ha behörigheten `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Vänligen nämn en användare",
            supperior: "<:error:753232040199192657> | Du kan inte sparka en användare som är högre än dig",
            noperm: "<:error:753232040199192657> | Ett fel uppstod... Vänligen kontrollera att jag har behörighet att sparka denna medlem och försök igen!",
            
        },
        description: "<:success:753232040073101363> | Användare sparken framgångsrikt",
        banneddm: (server, moderator, reason) => "Du blev sparken från **" + server + "** av **" + moderator + "**\n**Anledning** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Du måste ha behörigheten `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Vänligen nämn en användare",
            supperior: "<:error:753232040199192657> | Du kan inte banna en användare som är högre än dig",
            noperm: "<:error:753232040199192657> | Ett fel uppstod... Vänligen kontrollera att jag har behörighet att banna denna medlem och försök igen!",
            
        },
        description: "<:success:753232040073101363> | Användare bannad framgångsrikt",
        banneddm: (server, moderator, reason) => "Du blev bannad från **" + server + "** av **" + moderator + "**\n**Anledning** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Vänligen ange ett ID för att avbanna",
        success: (user) => "<:success:753232040073101363> | " + user + " avbannades framgångsrikt",
        noban: "<:error:753232040199192657> | Denna användare är inte bannad"
    },

    membercount: {
        title: (guildName) => `Antal medlemmar i ${guildName}`,
        description: (guild) => `
        Totalt **${guild.members.cache.size}** medlemmar (**${guild.members.cache.filter((m) => !m.user.bot).size}** personer och **${guild.members.cache.filter((m) => m.user.bot).size}** robotar)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} medlemmar (stör ej)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} medlemmar (online)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} medlemmar (inaktiv)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} medlemmar (offline)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Du måste ange antalet bonusinbjudningar som ska läggas till. (Syntax: ${prefix}addbonus nummer @medlem) **Du måste bjuda in en riktig person för att få en belöning**`,
                incorrect: (prefix) => `${emojis.error} | Du måste ange ett giltigt antal bonusinbjudningar som ska läggas till. (Syntax: ${prefix}addbonus nummer @medlem)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Du måste nämna en medlem för att lägga till bonusinbjudningar. (Syntax: ${prefix}addbonus nummer @medlem)`
            }
        },
        title: () => `📥 Bonusinbjudningar tillagda`,
        field: (prefix, member) => `Skriv \`${prefix}invites ${member.user.tag}\` för att se det nya antalet inbjudningar för **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Du måste ange antalet bonusinbjudningar som ska tas bort. (Syntax: ${prefix}removebonus nummer @medlem)`,
                incorrect: (prefix) => `${emojis.error} | Du måste ange ett giltigt antal bonusinbjudningar som ska tas bort. (Syntax: ${prefix}removebonus nummer @medlem)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Du måste nämna en medlem för att ta bort bonusinbjudningar. (Syntax: ${prefix}removebonus nummer @medlem)`
            }
        },
        title: () => `📥 Bonusinbjudningar borttagna`,
        field: (prefix, member) => `Skriv \`${prefix}invites ${member.user.tag}\` för att se det nya antalet inbjudningar för **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | DM join-systemet är nu __AKTIVERAT__!**`,
        off: () => `**${emojis.success} | DM join-systemet är nu __INAKTIVERAT__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Join-systemet är nu __AKTIVERAT__!**`,
        off: () => `**${emojis.success} | Join-systemet är nu __INAKTIVERAT__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Leave-systemet är nu __AKTIVERAT__!**`,
        off: () => `**${emojis.success} | Leave-systemet är nu __INAKTIVERAT__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Du måste ange ett prefix!`,
        success: () => `${emojis.success} | Serverprefixet uppdaterades framgångsrikt!`
    },

    testdmjoin: {
        title: () => `:wrench: DM join-systemet :`,
        description: () => `Om det inte fungerar, kontrollera botens behörigheter eller gå med i [supportservern](${discord})`,
        fields: {
            enabled: () => `> Aktiverat:`,
            message: () => `> Meddelande:`
        },
        enabled: (prefix) => `${emojis.success} DM join-meddelanden aktiverade. Inaktivera med \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} DM join-meddelanden inaktiverade. Aktivera med \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Meddelande inte definierat. Ange med \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Join-systemet :`,
        description: () => `Om det inte fungerar, kontrollera botens behörigheter eller gå med i [supportservern](${discord})`,
        fields: {
            enabled: () => `> Aktiverat:`,
            channel: () => `> Kanal:`,
            message: () => `> Meddelande:`
        },
        enabled: (prefix) => `${emojis.success} Join-meddelanden aktiverade. Inaktivera med \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Join-meddelanden inaktiverade. Aktivera med \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Meddelande inte definierat. Ange med \`${prefix}configjoin\`!`,
            channel: (prefix) => `Kanal inte definierad. Ange med \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Leave-systemet :`,
        description: () => `Om det inte fungerar, kontrollera botens behörigheter eller gå med i [supportservern](${discord})`,
        fields: {
            enabled: () => `> Aktiverat:`,
            channel: () => `> Kanal:`,
            message: () => `> Meddelande:`
        },
        enabled: (prefix) => `${emojis.success} Leave-meddelanden aktiverade. Inaktivera med \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Leave-meddelanden inaktiverade. Aktivera med \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Meddelande inte definierat. Ange med \`${prefix}configleave\`!`,
            channel: (prefix) => `Kanal inte definierad. Ange med \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Konfiguration för ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Join-meddelanden`,
            content: (guild, data) => `
            > Aktiverat: ${data.guild.join.enabled ? "**ja**" : "**nej**"}
            > Meddelande: ${data.guild.join.message ? "**angivet**" : "**inte angivet**."}
            > Kanal: ${!data.guild.join.channel ? "**inte angiven**" : (guild.channels.cache.get(data.guild.join.channel) ? "**angiven**" : "**kanalen hittades inte**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Leave-meddelanden`,
            content: (guild, data) => `
            > Aktiverat: ${data.guild.leave.enabled ? "**ja**" : "**nej**"}
            > Meddelande: ${data.guild.leave.message ? "**angivet**" : "**inte angivet**."}
            > Kanal: ${!data.guild.leave.channel ? "**inte angiven**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**angiven**" : "**kanalen hittades inte**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} DM join-meddelanden`,
            content: (guild, data) => `
            > Aktiverat: ${data.guild.joinDM.enabled ? "**ja**" : "**nej**"}
            > Meddelande: ${data.guild.joinDM.message ? "**angivet**" : "**inte angivet**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Hej, **${username}**! Den här funktionen är endast tillgänglig för premium- och partnerservrar. Få premium: **snart** !`
    },

    antispam: {
        cooldown: (username) => `Lugna ned dig! Vänta 5 sekunder och försök igen!`
    },

    configdmjoin: {
        disable: (prefix) => `Skriv \`${prefix}setdmjoin\` för att inaktivera DM join-meddelanden.`,
        instruct: (str) => `
__**Ytterligare information**__
\`\`\`
{user} : Omnämnande av medlemmen som gick med på servern.
{user.name} : Namnet på medlemmen som gick med på servern.
{user.tag} : Taggen på medlemmen som gick med på servern.
{user.createdat} : Ålder på medlemmens konto.

{guild} : Servernamn.
{guild.count} : Nuvarande antal medlemmar på din server.

{inviter} : Omnämnande av vem som bjöd in.
{inviter.name} : Namnet på vem som bjöd in.
{inviter.tag} : Taggen på vem som bjöd in.
{inviter.invites} : Totalt antal inbjudningar från vem som bjöd in.

{invite.code} : Använd inbjudningskod.
{invite.url} : Använd inbjudnings-URL.
{invite.uses} : Antal gånger inbjudningskoden har använts.
\`\`\`
Skriv \`cancel\` för att avbryta. ${str}


:pencil: **| Skriv nu DM join-meddelandet... :pencil2:**`,
        cancelled: () => `:x: Avbrutet.`,
        success: () => `✅ **| Slutfört framgångsrikt...**`,
        title: () => `**DM join-meddelande angivet**`,
        fields: {
            message: () => `Meddelande:`,
            testIt: () => `Testa:`,
            cmd: (prefix) => `Använd \`${prefix}testdmjoin\` för att testa det nya meddelandet.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Ditt meddelande måste vara mindre än 850 tecken.`, 
        disable: (prefix) => `Skriv \`${prefix}setjoin\` för att inaktivera join-meddelanden.`,
        instructs: {
            message: (str) => `
__**Ytterligare information**__
\`\`\`
{user} : Omnämnande av medlemmen som gick med på servern.
{user.name} : Namnet på medlemmen som gick med på servern.
{user.tag} : Taggen på medlemmen som gick med på servern.
{user.createdat} : Ålder på medlemmens konto.

{guild} : Servernamn.
{guild.count} : Nuvarande antal medlemmar på din server.

{inviter} : Omnämnande av vem som bjöd in.
{inviter.name} : Namnet på vem som bjöd in.
{inviter.tag} : Taggen på vem som bjöd in.
{inviter.invites} : Totalt antal inbjudningar från vem som bjöd in.

{invite.code} : Använd inbjudningskod.
{invite.url} : Använd inbjudnings-URL.
{invite.uses} : Antal gånger inbjudningskoden har använts.
\`\`\`
Skriv \`cancel\` för att avbryta. ${str}


:pencil: **| Skriv nu join-meddelandet... :pencil2:**`,
            channel: () => `:scroll: **| Nämn nu kanalen... :pencil2:**`
        },
        cancelled: () => `:x: Avbrutet.`,
        success: () => `✅ **| Slutfört framgångsrikt...**`,
        title: () => `**Join-meddelande angivet**`,
        fields: {
            message: () => `Meddelande:`,
            channel: () => `Kanal:`,
            testIt: () => `Testa:`,
            cmd: (prefix) => `Använd \`${prefix}testjoin\` för att testa det nya meddelandet.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Ingen kanal hittad för \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Skriv \`${prefix}setleave\` för att inaktivera leave-meddelanden.`,
        instructs: {
            message: (str) => `
__**Ytterligare information**__
\`\`\`
{user} : Omnämnande av medlemmen som lämnade servern.
{user.name} : Namnet på medlemmen som lämnade servern.
{user.tag} : Taggen på medlemmen som lämnade servern.
{user.createdat} : Ålder på medlemmens konto.

{guild} : Servernamn.
{guild.count} : Nuvarande antal medlemmar på din server.

{inviter} : Omnämnande av vem som bjöd in.
{inviter.name} : Namnet på vem som bjöd in.
{inviter.tag} : Taggen på vem som bjöd in.
{inviter.invites} : Totalt antal inbjudningar från vem som bjöd in.

{invite.code} : Använd inbjudningskod.
{invite.url} : Använd inbjudnings-URL.
{invite.uses} : Antal gånger inbjudningskoden har använts.
\`\`\`
Skriv \`cancel\` för att avbryta. ${str}


:pencil: **| Skriv nu leave-meddelandet... :pencil2:**`,
            channel: () => `:scroll: **| Nämn nu kanalen... :pencil2:**`
        },
        cancelled: () => `:x: Avbrutet.`,
        success: () => `✅ **| Slutfört framgångsrikt...**`,
        title: () => `**Leave-meddelande angivet**`,
        fields: {
            message: () => `Meddelande:`,
            channel: () => `Kanal:`,
            testIt: () => `Testa:`,
            cmd: (prefix) => `Använd \`${prefix}testleave\` för att testa det nya meddelandet`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Ingen kanal hittad för \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Du måste ange ett giltigt språk!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)\n:flag_se: Svenska (\`sv\`)\n:flag_no: Norsk (\`no\`)\n:flag_dk: Dansk (\`da\`)`,
        success: () => `${emojis.success} | :flag_se: Serverspråket är nu Svenska!`
    },

    graph: {
        title: (server, days) => `Gick med på ${server} under de senaste ${days} dagarna`,
        content: (total, percent, from, to) => `**${total}** medlemmar (dvs. **${percent}%** av servern) gick med på servern från ${from} till ${to}:`,
        invalid: () => `Du måste ange ett giltigt antal dagar (större än 1 och mindre än 1000) att visa!`,
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
            members: () => `medlemmar`
        },
        conf: {
            title: () => `Konfiguration`
        },
        selector: {
            title: () => `Väljare`,
            manage: () => `Hantera`,
            no: {
                title: () => `Inga servrar`,
                content: () => `Ingen server hittad. Kontrollera att du är inloggad med rätt konto.`
            }
        },
        help: {
            title: () => `Hjälp`,
            doc: () => `Dokumentation`,
            support: () => `Supportserver`
        },
        forms: {
            buttons: {
                enable: () => `Aktivera meddelanden`,
                disable: () => `Inaktivera meddelanden`,
                update: () => `Uppdatera meddelanden`
            },
            basic: {
                title: () => `Grundkonfiguration`,
                language: () => `Språk`,
                prefix: () => `Prefix`,
                update: () => `Uppdatera`
            },
            join: {
                title: () => `Join-meddelanden`,
                message: {
                    title: () => `Meddelande`,
                    default: () => `{user} gick med på servern! Bjuden in av **{inviter.tag}** ({inviter.invites} inbjudningar).`
                },
                channel: {
                    title: () => `Kanal`
                },
            },
            leave: {
                title: () => `Leave-meddelanden`,
                message: {
                    title: () => `Meddelande`,
                    default: () => `{user.username} lämnade servern. Var bjuden in av **{inviter.tag}** ({inviter.invites} inbjudningar).`
                },
                channel: {
                    title: () => `Kanal`
                }
            },
            joinDM: {
                title: () => `DM join-meddelanden`,
                premium: () => `Den här funktionen är tillgänglig för premium- och partnerservrar.`,
                message: {
                    title: () => `Meddelande`,
                    default: () => `Välkommen {user}! Du gick med på **{server}**! Bjuden in av **{inviter.tag}**. Glöm inte att läsa serverreglerna!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Processen för att ta bort serverinbjudningar har startats... Du kan återställa dem med kommandot \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Processen för att ta bort inbjudningar från **${member.user.tag}}** har startats... Du kan återställa dem med kommandot \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Inbjudningar återställda`,
        titles: {
            all: (prefix) => `${emojis.success} | Serverinbjudningar har återställts! Du kan återställa dem med kommandot \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Inbjudningar från **${member.user.tag}}** har återställts! Du kan återställa dem med kommandot \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Är du säker på att du vill återställa serverinbjudningarna? Alla medlemmar får inbjudningarna från innan den senaste körningen av kommandot \`${prefix}remove-invites\` (eller 0 om kommandot aldrig kördes).\n\n:information_source: **Sammanfattning av inbjudningar**:\nKommer att återställas, totalt: **${memberCount.invites}** normala, **${memberCount.bonus}** bonus, **${memberCount.leaves}** avgångar, **${memberCount.fake}** falska.\n\n${emojis.success} Skriv \`-confirm\` för att bekräfta.\n${emojis.error} Skriv \`cancel\` för att avbryta.`,
            member: (prefix, member) => `${emojis.warn} | Är du säker på att du vill återställa inbjudningarna för **${member.user.tag}}**? Du får inbjudningarna från innan den senaste körningen av kommandot \`${prefix}remove-invites\` (eller 0 om kommandot aldrig kördes).\n\n:information_source: **Sammanfattning av inbjudningar**:\nKommer att återställas: **${member.data.old_invites}** normala, **${member.data.old_bonus}** bonus, **${member.data.old_leaves}** avgångar, **${member.data.old_fake}** falska.\n\n${emojis.success} Skriv \`-confirm\` för att bekräfta.\n${emojis.error} Skriv \`cancel\` för att avbryta.`,
            cancelled: () => `${emojis.error} Avbrutet.`
        },
        loading: {
            all: () => `${emojis.loading} | Processen för att återställa serverinbjudningar har startats....`,
            member: (member) => `${emojis.loading} | Processen för att återställa inbjudningar från **${member.user.tag}}** har startats...`
        },
        title: () => `☄️ Inbjudningar återställda`,
        titles: {
            all: () => `${emojis.success} | Serverinbjudningar har återställts!`,
            member: (member) => `${emojis.success} | Inbjudningar från **${member.user.tag}}** har återställts!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Det finns inga inbjudningar att synkronisera.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Är du säker på att du vill synkronisera serverinbjudningarna?\n\n:information_source: **Sammanfattning av inbjudningar**:\n**${Math.round(inviteCount)}** normala inbjudningar kommer att återställas.\n\n${emojis.success} Skriv \`-confirm\` för att bekräfta.\n${emojis.error} Skriv \`cancel\` för att avbryta.`,
            cancelled: () => `${emojis.error} Avbrutet.`
        },
        title: () => `☄️ Inbjudningar synkroniserade`,
        titles: {
            all: () => `${emojis.success} | Serverinbjudningar har synkroniserats!`
        }
    },

    add: {
        content: (id) => `Du kan lägga till mig på din server genom att klicka [här](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Begärd av ${username}`
    },

    support: {
        content: (id) => `Du kan gå med i vår supportserver genom att klicka [här](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Begärd av ${username}`
    }

};
