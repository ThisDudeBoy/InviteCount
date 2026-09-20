const { emojis, discord } = require("../config");

module.exports = {

    locale: "hu_HU",

    utils: {
        prefix: (prefix) => `Az aktuális előtagom \`${prefix}\`\nHasználd a \`${prefix}help\` parancsot több információért.`,
        viewConf: () => `[Nézd meg a konfigurációt az irányítópulton](https://invite-count.xyz)`,
        conf: {
            title: () => `Nézd meg a konfigurációt az irányítópulton`,
            content: () => `[vagy az irányítópulton](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} csatlakozott a szerverhez OAuth-n keresztül.`,
                
                vanity: (user) => `${user} csatlakozott a szerverhez a szerver tulajdonosa által beállított discord.gg meghívón keresztül.`,
                unknown: (user) => `Nem tudom, hogyan csatlakozott ${user} a szerverhez.`,
                perm: (user) => `${emojis.error} | Szükségem van szerver kezelési engedélyekre, hogy tudjam, ki hívta meg a ${user} -t.`
            },
            leave: {
                oauth2: (user) => `${user} elhagyta a szervezetet, OAuth-n keresztül csatlakozott.`,
                vanity: (user) => `${user} elhagyta a szervezetet, a szerver tulajdonosa által beállított discord.gg meghívón keresztül csatlakozott.`,
                unknown: (user) => `${user} elhagyta a szervezetet, de nem tudom, hogyan csatlakozott.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Hiányzó engedélyek**__\n\nSzükségem van a következő engedélyekre, hogy ez a parancs megfelelően működjön: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Ez a parancs jelenleg le van tiltva!`,
        permLevel: (name) => `${emojis.error} | Ez a parancs engedélyszintet igényel: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Nincs engedélyem üzeneteket küldeni erre a csatornára.`,
        missingAdmin: () => `${emojis.error} | Szükségem van a \`Szerver kezelése\` engedélyre a művelet elvégzéséhez`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Az aktuális csatorna már ez a csatorna!`,
        success: () => `<:succes:851491428563812382> | A naplócsatorna sikeresen beállítva.`
    },
    glist: {
        title: () => `🎁 Nyereményjátékok listája`,
        description: (prefix) => `Használd a \`${prefix}gstart\` parancsot egy nyereményjáték indításához. Csak a befejezetlen nyereményjátékok jelennek meg`,
        fields: {
            name: () => `> Lista`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Vége ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Ezen a szerveren nincsenek befejezetlen nyereményjátékok`,

    },
    help: {
        title: () => `ℹ InviteCount segítség oldal`,
        description: (guildName, prefix) => `Az InviteCount lehetővé teszi a szerver tagjai kezelését a meghívások követésével.\n\n**A dokumentáció** elérhető [itt](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderálás**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Adminisztráció**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **Általános**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Konfiguráció**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Kilépési üzenetek`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Nyereményjátékok**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Meghívások`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Eszközök`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Linkek :`,
        links: (clientID) => `[Adj hozzá engem](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Weboldal](https://invite-count.xyz) ● [Támogatás szerver](${discord}) ● [Szavazz rám](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `Az InviteCount lehetővé teszi a szerver tagjai kezelését a meghívások követésével.`,

        dev: {
            title: () => `**Információ**`,
            content: (uptime) => `<:arrow:766358167382523944> **Fejlesztők:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Könyvtár:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Üzemidő** ${uptime}\n <:arrow:766358167382523944> **Létrehozás dátuma:** 2019. május 12.`
        },
        statistics: {
            title: () => `**Statisztika**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Szerverek:** ${guilds}\n<:arrow:766358167382523944> **Felhasználók**: ${channels}\n<:arrow:766358167382523944> **Csatornák:** ${users}`
        },
        link: {
            title: () => `**Linkek**`,
            content: () => `<:arrow:766358167382523944> **Támogatás szerver:** [Kattints](${discord})\n<:arrow:766358167382523944> **Meghívás:** [Kattints](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `Az InviteCount lehetővé teszi a szerver tagjai kezelését a meghívások követésével.`,

        dev: {
            title: () => `**Fejlesztők :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inspirálva :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Különleges köszönet :**`,
            content: () => `⭐ **Androz** a ManageInvite segítségéért!\n🎁 **Pauldb09** a sorsolási rendszerért\n👨‍🏭 Az egész csapat & Fordítók`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Van` : `**${member.user.username}** van`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** meghívása! (**${memberData.invites}** normál, **${memberData.bonus}** bónusz, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** hamis, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** kilépések)${nextRank ? `\nSzükséged van **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** további meghívásra a következő rang eléréséhez: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Ranglista törölve!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** meghívása (**${member.invites}** normál, **${member.bonus}** bónusz, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** hamis, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** kilépések)`,
        prompt: () => `{{user}}, melyik oldalra szeretnél menni? Írd be a \`cancel\` vagy \`0\` gomb a törléshez.`,
        title: () => `Meghívások rangsora`,
        empty: {
            title: () => `😕 Nincs meghívás`,
            content: () => `Kezdj embereket meghívni és ezen az oldalon jelensz meg!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} fiók (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Létrehozás`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Igen" : "Nem"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Csatlakozva`
            },
            joinWay: {
                title: () => `Csatlakozás módja`,
                oauth: () => `OAuth meghívás (discordapp.com-on keresztül).`,
                vanity: () => `Egyéni meghívás az adminisztrátor által beállítva.`,
                unknown: (user) => `Nem tudom, hogyan csatlakozott a felhasználó ${user.username} a szerverhez.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Meghívások`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** meghívása (**${inviteData.invites}** normál, **${inviteData.bonus}** bónusz, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** hamis, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** kilépések)`
            },
            joinOrder: {
                title: () => `➡️ Csatlakozás sorrendje`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Rendelkezned kell a `KICK_MEMBERS` engedéllyel",
            nouser: "<:error:753232040199192657> | Kérjük, említs meg egy felhasználót",
            supperior: "<:error:753232040199192657> | Nem tudsz kirúgni egy felhasználót, aki magasabb nálad",
            noperm: "<:error:753232040199192657> | Hiba történt... Kérjük ellenőrizd, hogy van-e engedélyem ezt a tagot kirúgni, és próbálkozz újra!",
            
        },
        description: "<:success:753232040073101363> | Felhasználó kirúgva.",
        banneddm: (server, moderator, reason) => "Kirúgtunk a **" + server + "** szerverről az alábbi moderátor által: **" + moderator + "**\n**Ok** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Rendelkezned kell a `BAN_MEMBERS` engedéllyel",
            nouser: "<:error:753232040199192657> | Kérjük, említs meg egy felhasználót",
            supperior: "<:error:753232040199192657> | Nem tudsz kitiltani egy felhasználót, aki magasabb nálad",
            noperm: "<:error:753232040199192657> | Hiba történt... Kérjük ellenőrizd, hogy van-e engedélyem ezt a tagot kitiltani, és próbálkozz újra!",
            
        },
        description: "<:success:753232040073101363> | Felhasználó kitiltva.",
        banneddm: (server, moderator, reason) => "Kitiltottak a **" + server + "** szerverről az alábbi moderátor által: **" + moderator + "**\n**Ok** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Kérjük add meg az azonosítót a tiltás feloldásához",
        success: (user) => "<:success:753232040073101363> | " + user + " sikeresen feloldva",
        noban: "<:error:753232040199192657> | Ez a felhasználó nincs kitiltva"
    },

    membercount: {
        title: (guildName) => `Tagok száma: ${guildName}`,
        description: (guild) => `
        Összesen **${guild.members.cache.size}** tag (**${guild.members.cache.filter((m) => !m.user.bot).size}** ember és **${guild.members.cache.filter((m) => m.user.bot).size}** bot)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} tag (ne zavar)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} tag (online)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} tag (tétlen)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} tag (offline)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Meg kell adnod a hozzáadandó bónusz meghívások számát. (Szintaxis: ${prefix}addbonus szám @tag) **Valódi személyt kell meghívnod, hogy megkapd a jutalmat**`,
                incorrect: (prefix) => `${emojis.error} | Meg kell adnod a hozzáadandó bónusz meghívások érvényes számát. (Szintaxis: ${prefix}addbonus szám @tag)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Meg kell említened egy tagot a bónusz meghívások hozzáadásához. (Szintaxis: ${prefix}addbonus szám @tag)`
            }
        },
        title: () => `📥 Bónusz meghívások hozzáadva`,
        field: (prefix, member) => `Írd be a \`${prefix}invites ${member.user.tag}\` parancsot az új meghívások számának megtekintéséhez a **${member.user.username}** felhasználó számára!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Meg kell adnod az eltávolítandó bónusz meghívások számát. (Szintaxis: ${prefix}removebonus szám @tag)`,
                incorrect: (prefix) => `${emojis.error} | Meg kell adnod az eltávolítandó bónusz meghívások érvényes számát. (Szintaxis: ${prefix}removebonus szám @tag)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Meg kell említened egy tagot a bónusz meghívások eltávolításához. (Szintaxis: ${prefix}removebonus szám @tag)`
            }
        },
        title: () => `📥 Bónusz meghívások eltávolítva`,
        field: (prefix, member) => `Írd be a \`${prefix}invites ${member.user.tag}\` parancsot az új meghívások számának megtekintéséhez a **${member.user.username}** felhasználó számára!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | A DM csatlakozási rendszer mostantól __ENGEDÉLYEZVE__!**`,
        off: () => `**${emojis.success} | A DM csatlakozási rendszer mostantól __LETILTVA__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | A csatlakozási rendszer mostantól __ENGEDÉLYEZVE__!**`,
        off: () => `**${emojis.success} | A csatlakozási rendszer mostantól __LETILTVA__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | A kilépési rendszer mostantól __ENGEDÉLYEZVE__!**`,
        off: () => `**${emojis.success} | A kilépési rendszer mostantól __LETILTVA__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Meg kell adnod egy előtagot!`,
        success: () => `${emojis.success} | A szerver előtagja sikeresen frissítve!`
    },

    testdmjoin: {
        title: () => `:wrench: DM csatlakozási rendszer :`,
        description: () => `Ha ez nem működik, ellenőrizd a bot engedélyeit vagy csatlakozz a [támogatás szerverhez](${discord})`,
        fields: {
            enabled: () => `> Engedélyezve:`,
            message: () => `> Üzenet:`
        },
        enabled: (prefix) => `${emojis.success} DM csatlakozási üzenetek engedélyezve. Tiltsd le ezzel: \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} DM csatlakozási üzenetek letiltva. Engedélyezd ezzel: \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Üzenet nincs definiálva. Állítsd be ezzel: \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Csatlakozási rendszer :`,
        description: () => `Ha ez nem működik, ellenőrizd a bot engedélyeit vagy csatlakozz a [támogatás szerverhez](${discord})`,
        fields: {
            enabled: () => `> Engedélyezve:`,
            channel: () => `> Csatorna:`,
            message: () => `> Üzenet:`
        },
        enabled: (prefix) => `${emojis.success} Csatlakozási üzenetek engedélyezve. Tiltsd le ezzel: \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Csatlakozási üzenetek letiltva. Engedélyezd ezzel: \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Üzenet nincs definiálva. Állítsd be ezzel: \`${prefix}configjoin\`!`,
            channel: (prefix) => `Csatorna nincs definiálva. Állítsd be ezzel: \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Kilépési rendszer :`,
        description: () => `Ha ez nem működik, ellenőrizd a bot engedélyeit vagy csatlakozz a [támogatás szerverhez](${discord})`,
        fields: {
            enabled: () => `> Engedélyezve:`,
            channel: () => `> Csatorna:`,
            message: () => `> Üzenet:`
        },
        enabled: (prefix) => `${emojis.success} Kilépési üzenetek engedélyezve. Tiltsd le ezzel: \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Kilépési üzenetek letiltva. Engedélyezd ezzel: \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Üzenet nincs definiálva. Állítsd be ezzel: \`${prefix}configleave\`!`,
            channel: (prefix) => `Csatorna nincs definiálva. Állítsd be ezzel: \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `${guildName} konfigurációja`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Csatlakozási üzenetek`,
            content: (guild, data) => `
            > Engedélyezve: ${data.guild.join.enabled ? "**igen**" : "**nem**"}
            > Üzenet: ${data.guild.join.message ? "**beállítva**" : "**nincs beállítva**."}
            > Csatorna: ${!data.guild.join.channel ? "**nincs beállítva**" : (guild.channels.cache.get(data.guild.join.channel) ? "**beállítva**" : "**csatorna nem található**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Kilépési üzenetek`,
            content: (guild, data) => `
            > Engedélyezve: ${data.guild.leave.enabled ? "**igen**" : "**nem**"}
            > Üzenet: ${data.guild.leave.message ? "**beállítva**" : "**nincs beállítva**."}
            > Csatorna: ${!data.guild.leave.channel ? "**nincs beállítva**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**beállítva**" : "**csatorna nem található**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} DM csatlakozási üzenetek`,
            content: (guild, data) => `
            > Engedélyezve: ${data.guild.joinDM.enabled ? "**igen**" : "**nem**"}
            > Üzenet: ${data.guild.joinDM.message ? "**beállítva**" : "**nincs beállítva**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Szia, **${username}**! Ez a funkció csak prémium és partner szerverekhez érhető el. Szerezz prémiumot: **hamarosan** !`
    },

    antispam: {
        cooldown: (username) => `Lassítsd le! Kérjük várj 5 másodpercet és próbálkozz újra!`
    },

    configdmjoin: {
        disable: (prefix) => `Írd be a \`${prefix}setdmjoin\` parancsot a DM csatlakozási üzenetek letiltásához.`,
        instruct: (str) => `
__**További információ**__
\`\`\`
{user} : A szerverhez csatlakozó tag megemlítése.
{user.name} : A szerverhez csatlakozó tag neve.
{user.tag} : A szerverhez csatlakozó tag taga.
{user.createdat} : A tag fióka kora.

{guild} : Szerver neve.
{guild.count} : Az aktuális tagok száma a szerveren.

{inviter} : A meghívó megemlítése.
{inviter.name} : A meghívó neve.
{inviter.tag} : A meghívó taga.
{inviter.invites} : A meghívó összes meghívásai.

{invite.code} : Használt meghívás kód.
{invite.url} : Használt meghívás URL.
{invite.uses} : Hányszor használták a meghívás kódot.
\`\`\`
Írd be a \`cancel\` parancsot a törléshez. ${str}


:pencil: **| Most írd be a DM csatlakozási üzenetet... :pencil2:**`,
        cancelled: () => `:x: Törölve.`,
        success: () => `✅ **| Kész..**`,
        title: () => `**DM csatlakozási üzenet beállítva**`,
        fields: {
            message: () => `Üzenet:`,
            testIt: () => `Teszt:`,
            cmd: (prefix) => `Használd a \`${prefix}testdmjoin\` parancsot az új üzenet teszteléséhez.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Az üzenetednek 850 karakternél rövidebbnek kell lennie.`, 
        disable: (prefix) => `Írd be a \`${prefix}setjoin\` parancsot a csatlakozási üzenetek letiltásához.`,
        instructs: {
            message: (str) => `
__**További információ**__
\`\`\`
{user} : A szerverhez csatlakozó tag megemlítése.
{user.name} : A szerverhez csatlakozó tag neve.
{user.tag} : A szerverhez csatlakozó tag taga.
{user.createdat} : A tag fióka kora.

{guild} : Szerver neve.
{guild.count} : Az aktuális tagok száma a szerveren.

{inviter} : A meghívó megemlítése.
{inviter.name} : A meghívó neve.
{inviter.tag} : A meghívó taga.
{inviter.invites} : A meghívó összes meghívásai.

{invite.code} : Használt meghívás kód.
{invite.url} : Használt meghívás URL.
{invite.uses} : Hányszor használták a meghívás kódot.
\`\`\`
Írd be a \`cancel\` parancsot a törléshez. ${str}


:pencil: **| Most írd be a csatlakozási üzenetet... :pencil2:**`,
            channel: () => `:scroll: **| Most add meg a csatornát... :pencil2:**`
        },
        cancelled: () => `:x: Törölve.`,
        success: () => `✅ **| Kész..**`,
        title: () => `**Csatlakozási üzenet beállítva**`,
        fields: {
            message: () => `Üzenet:`,
            channel: () => `Csatorna:`,
            testIt: () => `Teszt:`,
            cmd: (prefix) => `Használd a \`${prefix}testjoin\` parancsot az új üzenet teszteléséhez.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Nem található csatorna a \`${channel}\` -hez`
        }
    },

    configleave: {
        disable: (prefix) => `Írd be a \`${prefix}setleave\` parancsot a kilépési üzenetek letiltásához.`,
        instructs: {
            message: (str) => `
__**További információ**__
\`\`\`
{user} : A szerverről kilépő tag megemlítése.
{user.name} : A szerverről kilépő tag neve.
{user.tag} : A szerverről kilépő tag taga.
{user.createdat} : A tag fióka kora.

{guild} : Szerver neve.
{guild.count} : Az aktuális tagok száma a szerveren.

{inviter} : A meghívó megemlítése.
{inviter.name} : A meghívó neve.
{inviter.tag} : A meghívó taga.
{inviter.invites} : A meghívó összes meghívásai.

{invite.code} : Használt meghívás kód.
{invite.url} : Használt meghívás URL.
{invite.uses} : Hányszor használták a meghívás kódot.
\`\`\`
Írd be a \`cancel\` parancsot a törléshez. ${str}


:pencil: **| Most írd be a kilépési üzenetet... :pencil2:**`,
            channel: () => `:scroll: **| Most add meg a csatornát... :pencil2:**`
        },
        cancelled: () => `:x: Törölve.`,
        success: () => `✅ **| Kész..**`,
        title: () => `**Kilépési üzenet beállítva**`,
        fields: {
            message: () => `Üzenet:`,
            channel: () => `Csatorna:`,
            testIt: () => `Teszt:`,
            cmd: (prefix) => `Használd a \`${prefix}testleave\` parancsot az új üzenet teszteléséhez`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Nem található csatorna a \`${channel}\` -hez`
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Meg kell adnod egy érvényes nyelvet!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)\n:flag_se: Svenska (\`sv\`)\n:flag_no: Norsk (\`no\`)\n:flag_dk: Dansk (\`da\`)\n:flag_fi: Suomi (\`fi\`)\n:flag_gr: Ελληνικά (\`el\`)\n:flag_cz: Čeština (\`cs\`)\n:flag_hu: Magyar (\`hu\`)\n:flag_ro: Română (\`ro\`)`,
        success: () => `${emojis.success} | :flag_hu: A szerver nyelve most már magyar!`
    },

    graph: {
        title: (server, days) => `Csatlakozott a ${server} az utolsó ${days} nap`,
        content: (total, percent, from, to) => `**${total}** tag (azaz **${percent}%** a szevernek) csatlakozott a szerverhez ${from} és ${to} között:`,
        invalid: () => `Meg kell adnod egy érvényes napok számát (nagyobb mint 1 és kisebb mint 1000) a megjelenítéshez!`,
        months: () =>[
            "Jan",
            "Feb",
            "Már",
            "Ápr",
            "Máj",
            "Jún",
            "Júl",
            "Aug",
            "Sze",
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
            members: () => `tagok`
        },
        conf: {
            title: () => `Konfiguráció`
        },
        selector: {
            title: () => `Kiválasztó`,
            manage: () => `Kezelés`,
            no: {
                title: () => `Nincsenek szerverek`,
                content: () => `Nem találtam szerzert. Kérjük ellenőrizd, hogy a megfelelő fiókkal vagy bejelentkezve.`
            }
        },
        help: {
            title: () => `Segítség`,
            doc: () => `Dokumentáció`,
            support: () => `Támogatás szerver`
        },
        forms: {
            buttons: {
                enable: () => `Üzenetek engedélyezése`,
                disable: () => `Üzenetek letiltása`,
                update: () => `Üzenetek frissítése`
            },
            basic: {
                title: () => `Alapvető konfiguráció`,
                language: () => `Nyelv`,
                prefix: () => `Előtag`,
                update: () => `Frissítés`
            },
            join: {
                title: () => `Csatlakozási üzenetek`,
                message: {
                    title: () => `Üzenet`,
                    default: () => `{user} csatlakozott a szerverhez! Meghívta **{inviter.tag}** ({inviter.invites} meghívások).`
                },
                channel: {
                    title: () => `Csatorna`
                },
            },
            leave: {
                title: () => `Kilépési üzenetek`,
                message: {
                    title: () => `Üzenet`,
                    default: () => `{user.username} elhagyta a szerzetet. Meghívta **{inviter.tag}** ({inviter.invites} meghívások).`
                },
                channel: {
                    title: () => `Csatorna`
                }
            },
            joinDM: {
                title: () => `DM csatlakozási üzenetek`,
                premium: () => `Ez a funkció prémium és partner szerverekhez érhető el.`,
                message: {
                    title: () => `Üzenet`,
                    default: () => `Üdvözlünk {user}! Csatlakoztál a **{server}** szerverhez! Meghívta **{inviter.tag}**. Ne felejtsd el elolvasni a szerver szabályait!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | A szerver meghívások eltávolításának folyamata megkezdődött... Visszaállíthatod őket az \`${prefix}restore-invites\` paranccsal!`,
            member: (prefix, member) => `${emojis.loading} | A **${member.user.tag}}** meghívások eltávolításának folyamata megkezdődött... Visszaállíthatod őket az \`${prefix}restore-invites ${member.user.tag}\` paranccsal!`
        },
        title: () => `☄️ Meghívások alaphelyzetbe állítva`,
        titles: {
            all: (prefix) => `${emojis.success} | A szerver meghívások alaphelyzetbe állítva! Visszaállíthatod őket az \`${prefix}restore-invites\` paranccsal!`,
            member: (prefix, member) => `${emojis.success} | A **${member.user.tag}}** meghívások alaphelyzetbe állítva! Visszaállíthatod őket az \`${prefix}restore-invites ${member.user.tag}\` paranccsal!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Biztosan szeretnéd visszaállítani a szerver meghívásokat? Összes tag megkapja a meghívásokat az \`${prefix}remove-invites\` parancs utolsó futtatása előtt (vagy 0 ha soha nem futott).\\n\n:information_source: **Meghívások összefoglalása**:\nVisszaállítva lesz, összesen: **${memberCount.invites}** normál, **${memberCount.bonus}** bónusz, **${memberCount.leaves}** kilépések, **${memberCount.fake}** hamis.\n\n${emojis.success} Írd be a \`-confirm\` parancsot a megerősítéshez.\n${emojis.error} Írd be a \`cancel\` parancsot a törléshez.`,
            member: (prefix, member) => `${emojis.warn} | Biztosan szeretnéd visszaállítani a **${member.user.tag}}** meghívásait? Megkapod a meghívásokat az \`${prefix}remove-invites\` parancs utolsó futtatása előtt (vagy 0 ha soha nem futott).\n\n:information_source: **Meghívások összefoglalása**:\nVisszaállítva lesz: **${member.data.old_invites}** normál, **${member.data.old_bonus}** bónusz, **${member.data.old_leaves}** kilépések, **${member.data.old_fake}** hamis.\n\n${emojis.success} Írd be a \`-confirm\` parancsot a megerősítéshez.\n${emojis.error} Írd be a \`cancel\` parancsot a törléshez.`,
            cancelled: () => `${emojis.error} Törölve.`
        },
        loading: {
            all: () => `${emojis.loading} | A szerver meghívások visszaállításának folyamata megkezdődött....`,
            member: (member) => `${emojis.loading} | A **${member.user.tag}}** meghívások visszaállításának folyamata megkezdődött...`
        },
        title: () => `☄️ Meghívások visszaállítva`,
        titles: {
            all: () => `${emojis.success} | A szerver meghívások visszaállítva!`,
            member: (member) => `${emojis.success} | A **${member.user.tag}}** meghívások visszaállítva!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Nincs szinkronizálandó meghívás.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Biztosan szeretnéd szinkronizálni a szerver meghívásokat?\n\n:information_source: **Meghívások összefoglalása**:\n**${Math.round(inviteCount)}** normál meghívás lesz visszaállítva.\n\n${emojis.success} Írd be a \`-confirm\` parancsot a megerősítéshez.\n${emojis.error} Írd be a \`cancel\` parancsot a törléshez.`,
            cancelled: () => `${emojis.error} Törölve.`
        },
        title: () => `☄️ Meghívások szinkronizálva`,
        titles: {
            all: () => `${emojis.success} | A szerver meghívások szinkronizálva!`
        }
    },

    add: {
        content: (id) => `Hozzáadhatsz engem a szerverodhez a [linkre kattintva](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Kérte: ${username}`
    },

    support: {
        content: (id) => `Csatlakozhatsz a támogatás szerverünkhöz a [linkre kattintva](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Kérte: ${username}`
    }

};
