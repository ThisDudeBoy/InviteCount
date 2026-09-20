const { emojis, discord } = require("../config");

module.exports = {

    locale: "fi_FI",

    utils: {
        prefix: (prefix) => `Nykyinen etuliitteeni on \`${prefix}\`\nKäytä \`${prefix}help\` saadaksesi lisätietoja.`,
        viewConf: () => `[Näytä määritys kojelaudassa](https://invite-count.xyz)`,
        conf: {
            title: () => `Näytä määritys kojelaudassa`,
            content: () => `[tai kojelaudassa](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} liittyi palvelimelle OAuth:n kautta.`,
                
                vanity: (user) => `${user} liittyi palvelimelle palvelimen omistajan asettaman discord.gg-kutsun kautta.`,
                unknown: (user) => `En voi ymmärtää, kuinka ${user} liittyi palvelimelle.`,
                perm: (user) => `${emojis.error} | Tarvitsen palvelimen hallinnan oikeuksien, jotta tiedän kuka kutsui ${user}:n.`
            },
            leave: {
                oauth2: (user) => `${user} poistui palvelimelta, oli liittynyt OAuth:n kautta.`,
                vanity: (user) => `${user} poistui palvelimelta, oli liittynyt palvelimen omistajan asettaman discord.gg-kutsun kautta.`,
                unknown: (user) => `${user} poistui palvelimelta, mutta en voi ymmärtää kuinka tämä liittyi.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Puuttuvat oikeudet**__\n\nTarvitsen seuraavat oikeudet tälle komennolle toimimakseen oikein: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Tämä komento on tällä hetkellä poissa käytöstä!`,
        permLevel: (name) => `${emojis.error} | Tämä komento vaatii oikeustason: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Minulla ei ole oikeutta lähettää viestejä tässä kanavassa.`,
        missingAdmin: () => `${emojis.error} | Tarvitsen \`Hallinnoi palvelinta\` -oikeuden tämän toiminnon suorittamiseksi`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Nykyinen kanava on jo tämä kanava!`,
        success: () => `<:succes:851491428563812382> | Lokikanava asetettu onnistuneesti.`
    },
    glist: {
        title: () => `🎁 Arvontojen luettelo`,
        description: (prefix) => `Käytä \`${prefix}gstart\` aloittaaksesi arvonnan. Vain keskeneräiset arvonnat näytetään`,
        fields: {
            name: () => `> Luettelo`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Päättyy ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Tällä palvelimella ei ole keskeneräisiä arvontoja`,

    },
    help: {
        title: () => `ℹ InviteCount ohje-sivu`,
        description: (guildName, prefix) => `InviteCountin avulla voit hallita palvelimen jäseniä seuraamalla kutsuja.\n\n**Dokumentaatio** on saatavilla [täällä](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderointi**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Hallinta**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **Yleinen**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Määritys**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Poistumiset`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Arvonnat**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Kutsut`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Työkalut`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Linkit :`,
        links: (clientID) => `[Lisää minut](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Verkkosivusto](https://invite-count.xyz) ● [Tukipalvelimen](${discord}) ● [Äänestä minulle](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `InviteCountin avulla voit hallita palvelimen jäseniä seuraamalla kutsuja.`,

        dev: {
            title: () => `**Tiedot**`,
            content: (uptime) => `<:arrow:766358167382523944> **Kehittäjät:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Kirjasto:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Käyttöaika** ${uptime}\n <:arrow:766358167382523944> **Luontipäivä:** 12. toukokuuta 2019`
        },
        statistics: {
            title: () => `**Tilastot**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Palvelimet:** ${guilds}\n<:arrow:766358167382523944> **Käyttäjät**: ${channels}\n<:arrow:766358167382523944> **Kanavat:** ${users}`
        },
        link: {
            title: () => `**Linkit**`,
            content: () => `<:arrow:766358167382523944> **Tukipalvelin:** [Klikkaa](${discord})\n<:arrow:766358167382523944> **Kutsu:** [Klikkaa](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCountin avulla voit hallita palvelimen jäseniä seuraamalla kutsuja.`,

        dev: {
            title: () => `**Kehittäjät :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inspiroi :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Erityinen kiitos :**`,
            content: () => `⭐ **Androz** avusta ManageInvitessä!\n🎁 **Pauldb09** arvontajärjestelmästä\n👨‍🏭 Koko tiimi & Kääntäjät`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Sinulla on` : `**${member.user.username}** on`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** kutsua! (**${memberData.invites}** normaalia, **${memberData.bonus}** bonusta, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** väärää, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** poistumiset)${nextRank ? `\nTarvitset **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** enemmän kutsuja saadaksesi seuraavan sijoituksen: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Sijoitusluettelo poistettu!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** kutsua (**${member.invites}** normaalia, **${member.bonus}** bonusta, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** väärää, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** poistumiset)`,
        prompt: () => `{{user}}, mihin sivulle haluat mennä? Kirjoita \`cancel\` tai \`0\` peruuttaaksesi.`,
        title: () => `Kutsusijoitusluettelo`,
        empty: {
            title: () => `😕 Kutsuja ei löytynyt`,
            content: () => `Aloita ihmisten kutsuminen ja ilmestyt tälle sivulle!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} tili (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Luominen`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Botti`,
                content: (user) => user.bot ? "Kyllä" : "Ei"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Liitty`
            },
            joinWay: {
                title: () => `Liittymisen tapa`,
                oauth: () => `OAuth-kutsu (discordapp.com:n kautta).`,
                vanity: () => `Ylläpitäjän asettama mukautettu kutsu.`,
                unknown: (user) => `En voi ymmärtää kuinka ${user.username} liittyi palvelimelle.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Kutsut`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** kutsua (**${inviteData.invites}** normaalia, **${inviteData.bonus}** bonusta, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** väärää, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** poistumiset)`
            },
            joinOrder: {
                title: () => `➡️ Liittymisen järjestys`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Sinulla tulee olla `KICK_MEMBERS` -oikeus",
            nouser: "<:error:753232040199192657> | Ole hyvä ja mainitse käyttäjä",
            supperior: "<:error:753232040199192657> | Et voi poistaa käyttäjää joka on sinua korkeampi",
            noperm: "<:error:753232040199192657> | Tapahtui virhe... Ole hyvä tarkista että minulla on oikeus poistaa tämä jäsen ja yritä uudelleen!",
            
        },
        description: "<:success:753232040073101363> | Käyttäjä poistettu.",
        banneddm: (server, moderator, reason) => "Sinut poistettiin **" + server + "** :ltä **" + moderator + "** :n toimesta\n**Syy** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Sinulla tulee olla `BAN_MEMBERS` -oikeus",
            nouser: "<:error:753232040199192657> | Ole hyvä ja mainitse käyttäjä",
            supperior: "<:error:753232040199192657> | Et voi estää käyttäjää joka on sinua korkeampi",
            noperm: "<:error:753232040199192657> | Tapahtui virhe... Ole hyvä tarkista että minulla on oikeus estää tämä jäsen ja yritä uudelleen!",
            
        },
        description: "<:success:753232040073101363> | Käyttäjä estetty.",
        banneddm: (server, moderator, reason) => "Sinut estettiin **" + server + "** :ltä **" + moderator + "** :n toimesta\n**Syy** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Ole hyvä anna tunnus poistettavaksi",
        success: (user) => "<:success:753232040073101363> | " + user + " poistettiin onnistuneesti",
        noban: "<:error:753232040199192657> | Tämä käyttäjä ei ole estetty"
    },

    membercount: {
        title: (guildName) => `Jäsenmäärä ${guildName}`,
        description: (guild) => `
        Yhteensä **${guild.members.cache.size}** jäsentä (**${guild.members.cache.filter((m) => !m.user.bot).size}** henkilöä ja **${guild.members.cache.filter((m) => m.user.bot).size}** botteja)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} jäsentä (älä häiritse)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} jäsentä (online)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} jäsentä (poissa)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} jäsentä (offline)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Sinun tulee määrittää lisättävien bonuskutsujen määrä. (Syntaksi: ${prefix}addbonus numero @jäsen) **Sinun tulee kutsua todellista henkilöä palkinnon saamiseksi**`,
                incorrect: (prefix) => `${emojis.error} | Sinun tulee määrittää kelvollinen määrä lisättäviä bonuskutsuja. (Syntaksi: ${prefix}addbonus numero @jäsen)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Sinun tulee mainita jäsen bonuskutsujen lisäämiseksi. (Syntaksi: ${prefix}addbonus numero @jäsen)`
            }
        },
        title: () => `📥 Bonuskutsut lisätty`,
        field: (prefix, member) => `Kirjoita \`${prefix}invites ${member.user.tag}\` nähdäksesi uuden kutsujen määrän **${member.user.username}** :lle!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Sinun tulee määrittää poistettavien bonuskutsujen määrä. (Syntaksi: ${prefix}removebonus numero @jäsen)`,
                incorrect: (prefix) => `${emojis.error} | Sinun tulee määrittää kelvollinen määrä poistettavia bonuskutsuja. (Syntaksi: ${prefix}removebonus numero @jäsen)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Sinun tulee mainita jäsen bonuskutsujen poistamiseksi. (Syntaksi: ${prefix}removebonus numero @jäsen)`
            }
        },
        title: () => `📥 Bonuskutsut poistettu`,
        field: (prefix, member) => `Kirjoita \`${prefix}invites ${member.user.tag}\` nähdäksesi uuden kutsujen määrän **${member.user.username}** :lle!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | DM join-järjestelmä on nyt __KÄYTÖSSÄ__!**`,
        off: () => `**${emojis.success} | DM join-järjestelmä on nyt __POISSA KÄYTÖSTÄ__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Join-järjestelmä on nyt __KÄYTÖSSÄ__!**`,
        off: () => `**${emojis.success} | Join-järjestelmä on nyt __POISSA KÄYTÖSTÄ__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Leave-järjestelmä on nyt __KÄYTÖSSÄ__!**`,
        off: () => `**${emojis.success} | Leave-järjestelmä on nyt __POISSA KÄYTÖSTÄ__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Sinun tulee määrittää etuliite!`,
        success: () => `${emojis.success} | Palvelimen etuliite päivitetty onnistuneesti!`
    },

    testdmjoin: {
        title: () => `:wrench: DM join-järjestelmä :`,
        description: () => `Jos tämä ei toimi, tarkista botin oikeudet tai liity [tukipalvelimelle](${discord})`,
        fields: {
            enabled: () => `> Käytössä:`,
            message: () => `> Viesti:`
        },
        enabled: (prefix) => `${emojis.success} DM join-viestit käytössä. Poista käytöstä \`${prefix}setdmjoin\` :lla.`,
        disabled: (prefix) =>  `${emojis.error} DM join-viestit pois käytöstä. Ota käyttöön \`${prefix}setdmjoin\` :lla.`,
        notDefineds: {
            message: (prefix) => `Viestiä ei määritelty. Aseta \`${prefix}configdm\` :lla!`
        }
    },

    testjoin: {
        title: () => `:wrench: Join-järjestelmä :`,
        description: () => `Jos tämä ei toimi, tarkista botin oikeudet tai liity [tukipalvelimelle](${discord})`,
        fields: {
            enabled: () => `> Käytössä:`,
            channel: () => `> Kanava:`,
            message: () => `> Viesti:`
        },
        enabled: (prefix) => `${emojis.success} Join-viestit käytössä. Poista käytöstä \`${prefix}setjoin\` :lla.`,
        disabled: (prefix) =>  `${emojis.error} Join-viestit pois käytöstä. Ota käyttöön \`${prefix}setjoin\` :lla.`,
        notDefineds: {
            message: (prefix) => `Viestiä ei määritelty. Aseta \`${prefix}configjoin\` :lla!`,
            channel: (prefix) => `Kanavaa ei määritelty. Aseta \`${prefix}configjoin\` :lla!`
        }
    },

    testleave: {
        title: () => `:wrench: Leave-järjestelmä :`,
        description: () => `Jos tämä ei toimi, tarkista botin oikeudet tai liity [tukipalvelimelle](${discord})`,
        fields: {
            enabled: () => `> Käytössä:`,
            channel: () => `> Kanava:`,
            message: () => `> Viesti:`
        },
        enabled: (prefix) => `${emojis.success} Leave-viestit käytössä. Poista käytöstä \`${prefix}setleave\` :lla.`,
        disabled: (prefix) =>  `${emojis.error} Leave-viestit pois käytöstä. Ota käyttöön \`${prefix}setleave\` :lla.`,
        notDefineds: {
            message: (prefix) => `Viestiä ei määritelty. Aseta \`${prefix}configleave\` :lla!`,
            channel: (prefix) => `Kanavaa ei määritelty. Aseta \`${prefix}configleave\` :lla!`
        }
    },

    config: {
        title: (guildName) => `${guildName} konfiguraatio`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Join-viestit`,
            content: (guild, data) => `
            > Käytössä: ${data.guild.join.enabled ? "**kyllä**" : "**ei**"}
            > Viesti: ${data.guild.join.message ? "**asetettu**" : "**ei asetettu**."}
            > Kanava: ${!data.guild.join.channel ? "**ei asetettu**" : (guild.channels.cache.get(data.guild.join.channel) ? "**asetettu**" : "**kanavaa ei löydy**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Leave-viestit`,
            content: (guild, data) => `
            > Käytössä: ${data.guild.leave.enabled ? "**kyllä**" : "**ei**"}
            > Viesti: ${data.guild.leave.message ? "**asetettu**" : "**ei asetettu**."}
            > Kanava: ${!data.guild.leave.channel ? "**ei asetettu**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**asetettu**" : "**kanavaa ei löydy**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} DM join-viestit`,
            content: (guild, data) => `
            > Käytössä: ${data.guild.joinDM.enabled ? "**kyllä**" : "**ei**"}
            > Viesti: ${data.guild.joinDM.message ? "**asetettu**" : "**ei asetettu**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Hei, **${username}**! Tämä ominaisuus on vain premium- ja partnerpalvelimille. Hanki premium: **pian** !`
    },

    antispam: {
        cooldown: (username) => `Hidasta tahtia! Ole hyvä odota 5 sekuntia ja yritä uudelleen!`
    },

    configdmjoin: {
        disable: (prefix) => `Kirjoita \`${prefix}setdmjoin\` poistaaksesi DM join-viestit käytöstä.`,
        instruct: (str) => `
__**Lisätiedot**__
\`\`\`
{user} : Maininta jäsenestä, joka liittyi palvelimelle.
{user.name} : Jäsenen nimi, joka liittyi palvelimelle.
{user.tag} : Jäsenen tunniste, joka liittyi palvelimelle.
{user.createdat} : Jäsenen tilin ikä.

{guild} : Palvelimen nimi.
{guild.count} : Nykyinen jäsenten määrä palvelimellasi.

{inviter} : Maininta kutsujasta.
{inviter.name} : Kutsunimen nimi.
{inviter.tag} : Kutsunimen tunniste.
{inviter.invites} : Kutsunimen kutsukutsujen kokonaismäärä.

{invite.code} : Käytetty kutsukoodi.
{invite.url} : Käytetty kutsujen URL-osoite.
{invite.uses} : Kuinka monta kertaa kutsukoodia on käytetty.
\`\`\`
Kirjoita \`cancel\` peruuttaaksesi. ${str}


:pencil: **| Kirjoita nyt DM join-viesti... :pencil2:**`,
        cancelled: () => `:x: Peruutettu.`,
        success: () => `✅ **| Valmis.**`,
        title: () => `**DM join-viesti asetettu**`,
        fields: {
            message: () => `Viesti:`,
            testIt: () => `Testaa:`,
            cmd: (prefix) => `Käytä \`${prefix}testdmjoin\` uuden viestin testaamiseksi.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Viestitasi tulee olla pienempi kuin 850 merkkiä.`, 
        disable: (prefix) => `Kirjoita \`${prefix}setjoin\` poistaaksesi join-viestit käytöstä.`,
        instructs: {
            message: (str) => `
__**Lisätiedot**__
\`\`\`
{user} : Maininta jäsenestä, joka liittyi palvelimelle.
{user.name} : Jäsenen nimi, joka liittyi palvelimelle.
{user.tag} : Jäsenen tunniste, joka liittyi palvelimelle.
{user.createdat} : Jäsenen tilin ikä.

{guild} : Palvelimen nimi.
{guild.count} : Nykyinen jäsenten määrä palvelimellasi.

{inviter} : Maininta kutsujasta.
{inviter.name} : Kutsunimen nimi.
{inviter.tag} : Kutsunimen tunniste.
{inviter.invites} : Kutsunimen kutsukutsujen kokonaismäärä.

{invite.code} : Käytetty kutsukoodi.
{invite.url} : Käytetty kutsujen URL-osoite.
{invite.uses} : Kuinka monta kertaa kutsukoodia on käytetty.
\`\`\`
Kirjoita \`cancel\` peruuttaaksesi. ${str}


:pencil: **| Kirjoita nyt join-viesti... :pencil2:**`,
            channel: () => `:scroll: **| Mainitse nyt kanava... :pencil2:**`
        },
        cancelled: () => `:x: Peruutettu.`,
        success: () => `✅ **| Valmis.**`,
        title: () => `**Join-viesti asetettu**`,
        fields: {
            message: () => `Viesti:`,
            channel: () => `Kanava:`,
            testIt: () => `Testaa:`,
            cmd: (prefix) => `Käytä \`${prefix}testjoin\` uuden viestin testaamiseksi.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Kanavaa ei löytynyt \`${channel}\` :lle`
        }
    },

    configleave: {
        disable: (prefix) => `Kirjoita \`${prefix}setleave\` poistaaksesi leave-viestit käytöstä.`,
        instructs: {
            message: (str) => `
__**Lisätiedot**__
\`\`\`
{user} : Maininta jäsenestä, joka poistui palvelimelta.
{user.name} : Jäsenen nimi, joka poistui palvelimelta.
{user.tag} : Jäsenen tunniste, joka poistui palvelimelta.
{user.createdat} : Jäsenen tilin ikä.

{guild} : Palvelimen nimi.
{guild.count} : Nykyinen jäsenten määrä palvelimellasi.

{inviter} : Maininta kutsujasta.
{inviter.name} : Kutsunimen nimi.
{inviter.tag} : Kutsunimen tunniste.
{inviter.invites} : Kutsunimen kutsukutsujen kokonaismäärä.

{invite.code} : Käytetty kutsukoodi.
{invite.url} : Käytetty kutsujen URL-osoite.
{invite.uses} : Kuinka monta kertaa kutsukoodia on käytetty.
\`\`\`
Kirjoita \`cancel\` peruuttaaksesi. ${str}


:pencil: **| Kirjoita nyt leave-viesti... :pencil2:**`,
            channel: () => `:scroll: **| Mainitse nyt kanava... :pencil2:**`
        },
        cancelled: () => `:x: Peruutettu.`,
        success: () => `✅ **| Valmis.**`,
        title: () => `**Leave-viesti asetettu**`,
        fields: {
            message: () => `Viesti:`,
            channel: () => `Kanava:`,
            testIt: () => `Testaa:`,
            cmd: (prefix) => `Käytä \`${prefix}testleave\` uuden viestin testaamiseksi`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Kanavaa ei löytynyt \`${channel}\` :lle`
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Sinun tulee määrittää kelvollinen kieli!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)\n:flag_se: Svenska (\`sv\`)\n:flag_no: Norsk (\`no\`)\n:flag_dk: Dansk (\`da\`)\n:flag_fi: Suomi (\`fi\`)\n:flag_gr: Ελληνικά (\`el\`)\n:flag_cz: Čeština (\`cs\`)`,
        success: () => `${emojis.success} | :flag_fi: Palvelimen kieli on nyt Suomi!`
    },

    graph: {
        title: (server, days) => `Liittyi ${server} :lle viimeksi ${days} päivää`,
        content: (total, percent, from, to) => `**${total}** jäsentä (eli **${percent}%** palvelimesta) liittyi palvelimelle ${from} ja ${to} välillä:`,
        invalid: () => `Sinun tulee määrittää kelvollinen päivien määrä (suurempi kuin 1 ja pienempi kuin 1000) näytettäväksi!`,
        months: () =>[
            "Tam",
            "Hel",
            "Maa",
            "Huh",
            "Tou",
            "Kes",
            "Hei",
            "Elo",
            "Syk",
            "Lok",
            "Mar",
            "Jou"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `jäsenet`
        },
        conf: {
            title: () => `Määritys`
        },
        selector: {
            title: () => `Valitsin`,
            manage: () => `Hallinnoi`,
            no: {
                title: () => `Ei palvelimia`,
                content: () => `Palvelinta ei löytynyt. Tarkista että olet kirjautunut oikealla tilillä.`
            }
        },
        help: {
            title: () => `Ohje`,
            doc: () => `Dokumentaatio`,
            support: () => `Tukipalvelin`
        },
        forms: {
            buttons: {
                enable: () => `Ota viestit käyttöön`,
                disable: () => `Poista viestit käytöstä`,
                update: () => `Päivitä viestit`
            },
            basic: {
                title: () => `Perusmääritys`,
                language: () => `Kieli`,
                prefix: () => `Etuliite`,
                update: () => `Päivitä`
            },
            join: {
                title: () => `Join-viestit`,
                message: {
                    title: () => `Viesti`,
                    default: () => `{user} liittyi palvelimelle! Kutsui **{inviter.tag}** ({inviter.invites} kutsuja).`
                },
                channel: {
                    title: () => `Kanava`
                },
            },
            leave: {
                title: () => `Leave-viestit`,
                message: {
                    title: () => `Viesti`,
                    default: () => `{user.username} poistui palvelimelta. Kutsui **{inviter.tag}** ({inviter.invites} kutsuja).`
                },
                channel: {
                    title: () => `Kanava`
                }
            },
            joinDM: {
                title: () => `DM join-viestit`,
                premium: () => `Tämä ominaisuus on saatavilla premium- ja partnerpalvelimille.`,
                message: {
                    title: () => `Viesti`,
                    default: () => `Tervetuloa {user}! Liityt **{server}** :lle! Kutsui **{inviter.tag}**. Älä unohda lukea palvelimen sääntöjä!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Palvelimen kutsujen poistamisprosessi on alkanut... Voit palauttaa ne komennolla \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | **${member.user.tag}}** :n kutsujen poistamisprosessi on alkanut... Voit palauttaa ne komennolla \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Kutsut nollattu`,
        titles: {
            all: (prefix) => `${emojis.success} | Palvelimen kutsut on nollattu! Voit palauttaa ne komennolla \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | **${member.user.tag}}** :n kutsut on nollattu! Voit palauttaa ne komennolla \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Oletko varma että haluat palauttaa palvelimen kutsut? Kaikki jäsenet saavat kutsut ennen viimeistä \`${prefix}remove-invites\` komennon suoritusta (tai 0 jos komentoa ei ole koskaan suoritettu).\n\n:information_source: **Kutsujen yhteenveto**:\nPalautetaan, yhteensä: **${memberCount.invites}** normaalia, **${memberCount.bonus}** bonusta, **${memberCount.leaves}** poistumista, **${memberCount.fake}** väärää.\n\n${emojis.success} Kirjoita \`-confirm\` vahvistaaksesi.\n${emojis.error} Kirjoita \`cancel\` peruuttaaksesi.`,
            member: (prefix, member) => `${emojis.warn} | Oletko varma että haluat palauttaa **${member.user.tag}}** :n kutsut? Saat kutsut ennen viimeistä \`${prefix}remove-invites\` komennon suoritusta (tai 0 jos komentoa ei ole koskaan suoritettu).\n\n:information_source: **Kutsujen yhteenveto**:\nPalautetaan: **${member.data.old_invites}** normaalia, **${member.data.old_bonus}** bonusta, **${member.data.old_leaves}** poistumista, **${member.data.old_fake}** väärää.\n\n${emojis.success} Kirjoita \`-confirm\` vahvistaaksesi.\n${emojis.error} Kirjoita \`cancel\` peruuttaaksesi.`,
            cancelled: () => `${emojis.error} Peruutettu.`
        },
        loading: {
            all: () => `${emojis.loading} | Palvelimen kutsujen palauttamisprosessi on alkanut....`,
            member: (member) => `${emojis.loading} | **${member.user.tag}}** :n kutsujen palauttamisprosessi on alkanut...`
        },
        title: () => `☄️ Kutsut palautettu`,
        titles: {
            all: () => `${emojis.success} | Palvelimen kutsut on palautettu!`,
            member: (member) => `${emojis.success} | **${member.user.tag}}** :n kutsut on palautettu!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Kutsuja ei ole synkronoitavaksi.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Oletko varma että haluat synkronoida palvelimen kutsut?\n\n:information_source: **Kutsujen yhteenveto**:\n**${Math.round(inviteCount)}** normaalia kutsua palautetaan.\n\n${emojis.success} Kirjoita \`-confirm\` vahvistaaksesi.\n${emojis.error} Kirjoita \`cancel\` peruuttaaksesi.`,
            cancelled: () => `${emojis.error} Peruutettu.`
        },
        title: () => `☄️ Kutsut synkronoitu`,
        titles: {
            all: () => `${emojis.success} | Palvelimen kutsut on synkronoitu!`
        }
    },

    add: {
        content: (id) => `Voit lisätä minut palvelimellesi klikkaamalla [täällä](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Pyytänyt ${username}`
    },

    support: {
        content: (id) => `Voit liittyä tukipalvelimeemme klikkaamalla [täällä](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Pyytänyt ${username}`
    }

};
