const { emojis, discord } = require("../config");

module.exports = {

    locale: "hr_HR",

    utils: {
        prefix: (prefix) => `Moj trenutni prefiks je \`${prefix}\`\nKoristite \`${prefix}help\` za više informacija.`,
        viewConf: () => `[Pogledajte konfiguraciju na kontrolnoj tabli](https://invite-count.xyz)`,
        conf: {
            title: () => `Pogledajte konfiguraciju na kontrolnoj tabli`,
            content: () => `[ili na kontrolnoj tabli](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} se pridružio serveru putem OAuth-a.`,
                
                vanity: (user) => `${user} se pridružio serveru putem discord.gg poziva koji je postavio vlasnik servera.`,
                unknown: (user) => `Ne mogu razumjeti kako se ${user} pridružio serveru.`,
                perm: (user) => `${emojis.error} | Trebam dozvole za upravljanje serverom da znam tko je pozvao ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} je napustio server, pridružio se putem OAuth-a.`,
                vanity: (user) => `${user} je napustio server, pridružio se putem discord.gg poziva koji je postavio vlasnik servera.`,
                unknown: (user) => `${user} je napustio server, ali ne mogu razumjeti kako se pridružio.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Nedostaju dozvole**__\n\nTrebam sljedeće dozvole da bi ova naredba pravilno funkcionirala: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Ova naredba je trenutno onemogućena!`,
        permLevel: (name) => `${emojis.error} | Ova naredba zahtijeva razinu dozvole: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Nemam dozvolu poslati poruke na ovaj kanal.`,
        missingAdmin: () => `${emojis.error} | Trebam dozvolu \`Upravljanje serverom\` za izvršavanje ove radnje`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Trenutni kanal je već ovaj kanal!`,
        success: () => `<:succes:851491428563812382> | Kanal dnevnika je uspješno postavljen.`
    },
    glist: {
        title: () => `🎁 Popis nagrada`,
        description: (prefix) => `Koristite \`${prefix}gstart\` da započnete nagradu. Prikazane su samo nedovršene nagrade`,
        fields: {
            name: () => `> Popis`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Završava ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Na ovom serveru nema nedovršenih nagrada`,

    },
    help: {
        title: () => `ℹ InviteCount stranica za pomoć`,
        description: (guildName, prefix) => `InviteCount vam omogućuje upravljanje članovima servera praćenjem poziva.\n\n**Dokumentacija** je dostupna [ovdje](https://docs.invite-count.xyz/).`,
        moderation: {
            title: () => `🛡️ **Moderiranje**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Administracija**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        joinDM: {
            title: () => `💻 **Opće**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        join: {
            title: () => `:tools: **Konfiguracija**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        leave: {
            title: () => `:envelope: Poruke za napuštanje`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        giveaway: {
            title: () => `🎁 **Nagrade**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        invites: {
            title: () => `:wave: Pozivi`,
            content: (prefix) => "`invite`, `leaderboard`"},
        manageInvite: {
            title: () => `💠 Alati`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        tip: (prefix) => `🔗 Linkovi :`,
        links: (clientID) => `[Dodajte me](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Web stranica](https://invite-count.xyz) ● [Server podrške](${discord}) ● [Glasajte za mene](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount vam omogućuje upravljanje članovima servera praćenjem poziva.`,

        dev: {
            title: () => `**Informacije**`,
            content: (uptime) => `<:arrow:766358167382523944> **Programeri:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Knjižnica:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Vrijeme rada** ${uptime}\n <:arrow:766358167382523944> **Datum stvaranja:** 12. svibanj 2019.`
        },
        statistics: {
            title: () => `**Statistika**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Serveri:** ${guilds}\n<:arrow:766358167382523944> **Korisnici**: ${channels}\n<:arrow:766358167382523944> **Kanali:** ${users}`
        },
        link: {
            title: () => `**Linkovi**`,
            content: () => `<:arrow:766358167382523944> **Server podrške:** [Klikните](${discord})\n<:arrow:766358167382523944> **Poziv:** [Klikните](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount vam omogućuje upravljanje članovima servera praćenjem poziva.`,

        dev: {
            title: () => `**Programeri :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inspirirano :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Posebna zahvala :**`,
            content: () => `⭐ **Androz** za pomoć s ManageInvite!\n🎁 **Pauldb09** za sustav dražbe\n👨‍🏭 Cijeli tim & Prevodioci`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Imate` : `**${member.user.username}** ima`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** poziva! (**${memberData.invites}** normalnih, **${memberData.bonus}** bonus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** lažnih, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** odlazaka)${nextRank ? `\nTrebate **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** više poziva za dostizanje sljedećeg ranga: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Rang lista izbrisana!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** poziva (**${member.invites}** normalnih, **${member.bonus}** bonus, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** lažnih, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** odlazaka)`,
        prompt: () => `{{user}}, na koju stranicu želite ići? Upišite \`cancel\` ili \`0\` za otkazivanje.`,
        title: () => `Rang lista poziva`,
        empty: {
            title: () => `😕 Pozivi nisu pronađeni`,
            content: () => `Počnite pozivati ljude i pojavit ćete se na ovoj stranici!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} račun (${user.id})`,
        fields: {
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Stvaranje`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Da" : "Ne"
            },
            joinedAt: {
                title: () => `<:join:741252065585660014> Pridruženo`
            },
            joinWay: {
                title: () => `Način pridruživanja`,
                oauth: () => `OAuth poziv (preko discordapp.com).`,
                vanity: () => `Prilagođeni poziv koji je postavio administrator.`,
                unknown: (user) => `Ne mogu razumjeti kako se korisnik ${user.username} pridružio serveru.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Pozivi`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** poziva (**${inviteData.invites}** normalnih, **${inviteData.bonus}** bonus, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** lažnih, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** odlazaka)`
            },
            joinOrder: {
                title: () => `➡️ Red pridruživanja`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Trebate dozvolu `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Molim vas da spomenete korisnika",
            supperior: "<:error:753232040199192657> | Ne možete izbaciti korisnika koji je iznad vas",
            noperm: "<:error:753232040199192657> | Došlo je do greške... Molim vas da provjerite da li imam dozvolu da izbacim ovog člana i pokušajte ponovno!",
            
        },
        description: "<:success:753232040073101363> | Korisnik izbačen.",
        banneddm: (server, moderator, reason) => "Izbačeni ste sa **" + server + "** od strane **" + moderator + "**\n**Razlog** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Trebate dozvolu `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Molim vas da spomenete korisnika",
            supperior: "<:error:753232040199192657> | Ne možete zabraniti korisnika koji je iznad vas",
            noperm: "<:error:753232040199192657> | Došlo je do greške... Molim vas da provjerite da li imam dozvolu da zabrana ovog člana i pokušajte ponovno!",
            
        },
        description: "<:success:753232040073101363> | Korisnik zabranjen.",
        banneddm: (server, moderator, reason) => "Zabranjeni ste na **" + server + "** od strane **" + moderator + "**\n**Razlog** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Molim vas dajte ID za uklonjenje zabrane",
        success: (user) => "<:success:753232040073101363> | " + user + " uspješno nije zabranjen",
        noban: "<:error:753232040199192657> | Ovaj korisnik nije zabranjen"
    },

    membercount: {
        title: (guildName) => `Broj članova ${guildName}`,
        description: (guild) => `
        Ukupno **${guild.members.cache.size}** članova (**${guild.members.cache.filter((m) => !m.user.bot).size}** ljudi i **${guild.members.cache.filter((m) => m.user.bot).size}** botova)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} članova (nemoj smetati)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} članova (aktivna)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} članova (neaktivna)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} članova (offline)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Trebate navesti broj bonus poziva za dodavanje. (Sintaksa: ${prefix}addbonus broj @član) **Trebate pozvati pravu osobu da biste dobili nagradu**`,
                incorrect: (prefix) => `${emojis.error} | Trebate navesti važeći broj bonus poziva za dodavanje. (Sintaksa: ${prefix}addbonus broj @član)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Trebate spomenuti člana da dodate bonus pozive. (Sintaksa: ${prefix}addbonus broj @član)`
            }
        },
        title: () => `📥 Bonus pozivi dodani`,
        field: (prefix, member) => `Upišite \`${prefix}invites ${member.user.tag}\` da vidite novi broj poziva za **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Trebate navesti broj bonus poziva za uklonjenje. (Sintaksa: ${prefix}removebonus broj @član)`,
                incorrect: (prefix) => `${emojis.error} | Trebate navesti važeći broj bonus poziva za uklonjenje. (Sintaksa: ${prefix}removebonus broj @član)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Trebate spomenuti člana da uklonite bonus pozive. (Sintaksa: ${prefix}removebonus broj @član)`
            }
        },
        title: () => `📥 Bonus pozivi uklonjeni`,
        field: (prefix, member) => `Upišite \`${prefix}invites ${member.user.tag}\` da vidite novi broj poziva za **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | Sustav DM pridruživanja je sada __OMOGUĆEN__!**`,
        off: () => `**${emojis.success} | Sustav DM pridruživanja je sada __ONEMOGUĆEN__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Sustav pridruživanja je sada __OMOGUĆEN__!**`,
        off: () => `**${emojis.success} | Sustav pridruživanja je sada __ONEMOGUĆEN__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Sustav napuštanja je sada __OMOGUĆEN__!**`,
        off: () => `**${emojis.success} | Sustav napuštanja je sada __ONEMOGUĆEN__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Trebate navesti prefiks!`,
        success: () => `${emojis.success} | Prefiks servera je uspješno ažuriran!`
    },

    testdmjoin: {
        title: () => `:wrench: Sustav DM pridruživanja :`,
        description: () => `Ako ovo ne funkcionira, provjerite dozvole bota ili se pridružite [serveru podrške](${discord})`,
        fields: {
            enabled: () => `> Omogućeno:`,
            message: () => `> Poruka:`
        },
        enabled: (prefix) => `${emojis.success} DM poruke pridruživanja su omogućene. Onemogućite sa \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} DM poruke pridruživanja su onemogućene. Omogućite sa \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Poruka nije definirana. Postavite sa \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Sustav pridruživanja :`,
        description: () => `Ako ovo ne funkcionira, provjerite dozvole bota ili se pridružite [serveru podrške](${discord})`,
        fields: {
            enabled: () => `> Omogućeno:`,
            channel: () => `> Kanal:`,
            message: () => `> Poruka:`
        },
        enabled: (prefix) => `${emojis.success} Poruke pridruživanja su omogućene. Onemogućite sa \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Poruke pridruživanja su onemogućene. Omogućite sa \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Poruka nije definirana. Postavite sa \`${prefix}configjoin\`!`,
            channel: (prefix) => `Kanal nije definiran. Postavite sa \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Sustav napuštanja :`,
        description: () => `Ako ovo ne funkcionira, provjerite dozvole bota ili se pridružite [serveru podrške](${discord})`,
        fields: {
            enabled: () => `> Omogućeno:`,
            channel: () => `> Kanal:`,
            message: () => `> Poruka:`
        },
        enabled: (prefix) => `${emojis.success} Poruke napuštanja su omogućene. Onemogućite sa \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Poruke napuštanja su onemogućene. Omogućite sa \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Poruka nije definirana. Postavite sa \`${prefix}configleave\`!`,
            channel: (prefix) => `Kanal nije definiran. Postavite sa \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Konfiguracija ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Poruke pridruživanja`,
            content: (guild, data) => `
            > Omogućeno: ${data.guild.join.enabled ? "**da**" : "**ne**"}
            > Poruka: ${data.guild.join.message ? "**postavljena**" : "**nije postavljena**."}
            > Kanal: ${!data.guild.join.channel ? "**nije postavljen**" : (guild.channels.cache.get(data.guild.join.channel) ? "**postavljen**" : "**kanal nije pronađen**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Poruke napuštanja`,
            content: (guild, data) => `
            > Omogućeno: ${data.guild.leave.enabled ? "**da**" : "**ne**"}
            > Poruka: ${data.guild.leave.message ? "**postavljena**" : "**nije postavljena**."}
            > Kanal: ${!data.guild.leave.channel ? "**nije postavljen**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**postavljen**" : "**kanal nije pronađen**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} DM poruke pridruživanja`,
            content: (guild, data) => `
            > Omogućeno: ${data.guild.joinDM.enabled ? "**da**" : "**ne**"}
            > Poruka: ${data.guild.joinDM.message ? "**postavljena**" : "**nije postavljena**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Bok, **${username}**! Ova funkcija je dostupna samo za premium i partner servere. Dobi premium: **uskoro** !`
    },

    antispam: {
        cooldown: (username) => `Uspori! Molim vas da čekate 5 sekundi i pokušajte ponovno!`
    },

    configdmjoin: {
        disable: (prefix) => `Upišite \`${prefix}setdmjoin\` da onemogućite DM poruke pridruživanja.`,
        instruct: (str) => `
__**Dodatne informacije**__
\`\`\`
{user} : Spomen člana koji se pridružio serveru.
{user.name} : Ime člana koji se pridružio serveru.
{user.tag} : Oznaka člana koji se pridružio serveru.
{user.createdat} : Dob računa člana.

{guild} : Naziv servera.
{guild.count} : Trenutni broj članova na vašem serveru.

{inviter} : Spomen onoga koji je pozvao.
{inviter.name} : Ime onoga koji je pozvao.
{inviter.tag} : Oznaka onoga koji je pozvao.
{inviter.invites} : Ukupan broj poziva od onoga koji je pozvao.

{invite.code} : Korišteni kod poziva.
{invite.url} : Korišteni URL poziva.
{invite.uses} : Koliko puta je korišten kod poziva.
\`\`\`
Upišite \`cancel\` za otkazivanje. ${str}


:pencil: **| Sada upišite DM poruku pridruživanja... :pencil2:**`,
        cancelled: () => `:x: Otkazano.`,
        success: () => `✅ **| Gotovo..**`,
        title: () => `**DM poruka pridruživanja postavljena**`,
        fields: {
            message: () => `Poruka:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Koristite \`${prefix}testdmjoin\` za testiranje nove poruke.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Vaša poruka mora biti manja od 850 znakova.`, 
        disable: (prefix) => `Upišite \`${prefix}setjoin\` da onemogućite poruke pridruživanja.`,
        instructs: {
            message: (str) => `
__**Dodatne informacije**__
\`\`\`
{user} : Spomen člana koji se pridružio serveru.
{user.name} : Ime člana koji se pridružio serveru.
{user.tag} : Oznaka člana koji se pridružio serveru.
{user.createdat} : Dob računa člana.

{guild} : Naziv servera.
{guild.count} : Trenutni broj članova na vašem serveru.

{inviter} : Spomen onoga koji je pozvao.
{inviter.name} : Ime onoga koji je pozvao.
{inviter.tag} : Oznaka onoga koji je pozvao.
{inviter.invites} : Ukupan broj poziva od onoga koji je pozvao.

{invite.code} : Korišteni kod poziva.
{invite.url} : Korišteni URL poziva.
{invite.uses} : Koliko puta je korišten kod poziva.
\`\`\`
Upišite \`cancel\` za otkazivanje. ${str}


:pencil: **| Sada upišite poruku pridruživanja... :pencil2:**`,
            channel: () => `:scroll: **| Sada navedite kanal... :pencil2:**`
        },
        cancelled: () => `:x: Otkazano.`,
        success: () => `✅ **| Gotovo..**`,
        title: () => `**Poruka pridruživanja postavljena**`,
        fields: {
            message: () => `Poruka:`,
            channel: () => `Kanal:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Koristite \`${prefix}testjoin\` za testiranje nove poruke.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Kanal nije pronađen za \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Upišite \`${prefix}setleave\` da onemogućite poruke napuštanja.`,
        instructs: {
            message: (str) => `
__**Dodatne informacije**__
\`\`\`
{user} : Spomen člana koji je napustio server.
{user.name} : Ime člana koji je napustio server.
{user.tag} : Oznaka člana koji je napustio server.
{user.createdat} : Dob računa člana.

{guild} : Naziv servera.
{guild.count} : Trenutni broj članova na vašem serveru.

{inviter} : Spomen onoga koji je pozvao.
{inviter.name} : Ime onoga koji je pozvao.
{inviter.tag} : Oznaka onoga koji je pozvao.
{inviter.invites} : Ukupan broj poziva od onoga koji je pozvao.

{invite.code} : Korišteni kod poziva.
{invite.url} : Korišteni URL poziva.
{invite.uses} : Koliko puta je korišten kod poziva.
\`\`\`
Upišite \`cancel\` za otkazivanje. ${str}


:pencil: **| Sada upišite poruku napuštanja... :pencil2:**`,
            channel: () => `:scroll: **| Sada navedite kanal... :pencil2:**`
        },
        cancelled: () => `:x: Otkazano.`,
        success: () => `✅ **| Gotovo..**`,
        title: () => `**Poruka napuštanja postavljena**`,
        fields: {
            message: () => `Poruka:`,
            channel: () => `Kanal:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Koristite \`${prefix}testleave\` za testiranje nove poruke`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Kanal nije pronađen za \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Trebate navesti važeći jezik!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)\n:flag_se: Svenska (\`sv\`)\n:flag_no: Norsk (\`no\`)\n:flag_dk: Dansk (\`da\`)\n:flag_fi: Suomi (\`fi\`)\n:flag_gr: Ελληνικά (\`el\`)\n:flag_cz: Čeština (\`cs\`)\n:flag_hu: Magyar (\`hu\`)\n:flag_ro: Română (\`ro\`)\n:flag_rs: Српски (\`sr\`)\n:flag_hr: Hrvatski (\`hr\`)\n:flag_bg: Български (\`bg\`)\n:flag_ua: Українська (\`uk\`)`,
        success: () => `${emojis.success} | :flag_hr: Jezik servera je sada hrvatski!`
    },

    graph: {
        title: (server, days) => `Pridruženo na ${server} u posljednjih ${days} dana`,
        content: (total, percent, from, to) => `**${total}** članova (odnosno **${percent}%** servera) je pridruženo serveru od ${from} do ${to}:`,
        invalid: () => `Trebate navesti važeći broj dana (veći od 1 i manji od 1000) za prikaz!`,
        months: () =>[
            "Sij",
            "Vel",
            "Ožuj",
            "Tra",
            "Svi",
            "Lip",
            "Srp",
            "Kol",
            "Ruj",
            "Lis",
            "Stu",
            "Pro"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `članovi`
        },
        conf: {
            title: () => `Konfiguracija`
        },
        selector: {
            title: () => `Birač`,
            manage: () => `Upravljanje`,
            no: {
                title: () => `Nema servera`,
                content: () => `Server nije pronađen. Molim vas provjerite da ste prijavljeni s ispravnim računom.`
            }
        },
        help: {
            title: () => `Pomoć`,
            doc: () => `Dokumentacija`,
            support: () => `Server podrške`
        },
        forms: {
            buttons: {
                enable: () => `Omogući poruke`,
                disable: () => `Onemogući poruke`,
                update: () => `Ažuriraj poruke`
            },
            basic: {
                title: () => `Osnovna konfiguracija`,
                language: () => `Jezik`,
                prefix: () => `Prefiks`,
                update: () => `Ažuriranje`
            },
            join: {
                title: () => `Poruke pridruživanja`,
                message: {
                    title: () => `Poruka`,
                    default: () => `{user} se pridružio serveru! Pozvan od strane **{inviter.tag}** ({inviter.invites} poziva).`
                },
                channel: {
                    title: () => `Kanal`
                },
            },
            leave: {
                title: () => `Poruke napuštanja`,
                message: {
                    title: () => `Poruka`,
                    default: () => `{user.username} je napustio server. Pozvan od strane **{inviter.tag}** ({inviter.invites} poziva).`
                },
                channel: {
                    title: () => `Kanal`
                }
            },
            joinDM: {
                title: () => `DM poruke pridruživanja`,
                premium: () => `Ova funkcija je dostupna za premium i partner servere.`,
                message: {
                    title: () => `Poruka`,
                    default: () => `Dobrodošli {user}! Pridružili ste se **{server}**! Pozvani od strane **{inviter.tag}**. Ne zaboravite pročitati pravila servera!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Proces uklanjanja poziva servera je započet... Možete ih vratiti naredbom \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Proces uklanjanja poziva od **${member.user.tag}}** je započet... Možete ih vratiti naredbom \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Pozivi resetovani`,
        titles: {
            all: (prefix) => `${emojis.success} | Pozivi servera su resetovani! Možete ih vratiti naredbom \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Pozivi od **${member.user.tag}}** su resetovani! Možete ih vratiti naredbom \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Jeste li sigurni da želite vratiti pozive servera? Svi članovi će dobiti pozive prije posljednje naredbe \`${prefix}remove-invites\` (ili 0 ako naredba nikada nije pokrenuta).\n\n:information_source: **Sažetak poziva**:\nBit će vraćeno, ukupno: **${memberCount.invites}** normalnih, **${memberCount.bonus}** bonus, **${memberCount.leaves}** odlazaka, **${memberCount.fake}** lažnih.\n\n${emojis.success} Upišite \`-confirm\` za potvrdu.\n${emojis.error} Upišite \`cancel\` za otkazivanje.`,
            member: (prefix, member) => `${emojis.warn} | Jeste li sigurni da želite vratiti pozive od **${member.user.tag}}**? Dobit ćete pozive prije posljednje naredbe \`${prefix}remove-invites\` (ili 0 ako naredba nikada nije pokrenuta).\n\n:information_source: **Sažetak poziva**:\nBit će vraćeno: **${member.data.old_invites}** normalnih, **${member.data.old_bonus}** bonus, **${member.data.old_leaves}** odlazaka, **${member.data.old_fake}** lažnih.\n\n${emojis.success} Upišite \`-confirm\` za potvrdu.\n${emojis.error} Upišite \`cancel\` za otkazivanje.`,
            cancelled: () => `${emojis.error} Otkazano.`
        },
        loading: {
            all: () => `${emojis.loading} | Proces vraćanja poziva servera je započet....`,
            member: (member) => `${emojis.loading} | Proces vraćanja poziva od **${member.user.tag}}** je započet...`
        },
        title: () => `☄️ Pozivi vraćeni`,
        titles: {
            all: () => `${emojis.success} | Pozivi servera su vraćeni!`,
            member: (member) => `${emojis.success} | Pozivi od **${member.user.tag}}** su vraćeni!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Nema poziva za sinkronizaciju.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Jeste li sigurni da želite sinkronizirati pozive servera?\n\n:information_source: **Sažetak poziva**:\n**${Math.round(inviteCount)}** normalnih poziva će biti vraćeno.\n\n${emojis.success} Upišite \`-confirm\` za potvrdu.\n${emojis.error} Upišite \`cancel\` za otkazivanje.`,
            cancelled: () => `${emojis.error} Otkazano.`
        },
        title: () => `☄️ Pozivi sinkrinizirani`,
        titles: {
            all: () => `${emojis.success} | Pozivi servera su sinkrinizirani!`
        }
    },

    add: {
        content: (id) => `Možete me dodati na svoj server klikom [ovdje](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Tražio ${username}`
    },

    support: {
        content: (id) => `Možete se pridružiti našem serveru podrške klikom [ovdje](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Tražio ${username}`
    }

};
