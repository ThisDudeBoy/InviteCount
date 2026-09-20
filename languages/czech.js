const { emojis, discord } = require("../config");

module.exports = {

    locale: "cs_CZ",

    utils: {
        prefix: (prefix) => `Moje aktuální předvolba je \`${prefix}\`\nPro více pomoci použijte \`${prefix}help\`.`,
        viewConf: () => `[Zobrazit konfiguraci na panelu](https://invite-count.xyz)`,
        conf: {
            title: () => `Zobrazit konfiguraci na panelu`,
            content: () => `[nebo na panelu](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} se připojil na server přes OAuth.`,
                
                vanity: (user) => `${user} se připojil na server přes discord.gg pozvánku nastavenou vlastníkem serveru.`,
                unknown: (user) => `Nemohu pochopit, jak se ${user} připojil na server.`,
                perm: (user) => `${emojis.error} | Potřebuji oprávnění ke správě serveru, aby jsem věděl, kdo pozval ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} opustil server, připojil se přes OAuth.`,
                vanity: (user) => `${user} opustil server, připojil se přes discord.gg pozvánku nastavenou vlastníkem serveru.`,
                unknown: (user) => `${user} opustil server, ale nemohu pochopit, jak se připojil.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Chybějící oprávnění**__\n\nPotřebuji následující oprávnění pro správné fungování tohoto příkazu: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Tento příkaz je v tuto chvíli zakázán!`,
        permLevel: (name) => `${emojis.error} | Tento příkaz vyžaduje úroveň oprávnění: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Nemám oprávnění posílat zprávy v tomto kanálu.`,
        missingAdmin: () => `${emojis.error} | Potřebuji oprávnění \`Spravovat server\` k provedení této akce`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Aktuální kanál je již tento kanál!`,
        success: () => `<:succes:851491428563812382> | Kanál protokolu byl úspěšně nastaven.`
    },
    glist: {
        title: () => `🎁 Seznam soutěží`,
        description: (prefix) => `Použijte \`${prefix}gstart\` pro spuštění soutěže. Zobrazují se pouze neukončené soutěže`,
        fields: {
            name: () => `> Seznam`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Skončí za ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Na tomto serveru nejsou žádné neukončené soutěže`,

    },
    help: {
        title: () => `ℹ Stránka nápovědy InviteCount`,
        description: (guildName, prefix) => `InviteCount vám umožňuje spravovat členy serveru sledováním pozvánek.\n\n**Dokumentace** je dostupná [zde](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderování**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Správa**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **Obecné**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Konfigurace**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Zprávy o odchodu`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Soutěže**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Pozvánky`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Nástroje`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Odkazy :`,
        links: (clientID) => `[Přidejte mě](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Web](https://invite-count.xyz) ● [Server podpory](${discord}) ● [Hlasujte pro mě](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount vám umožňuje spravovat členy serveru sledováním pozvánek.`,

        dev: {
            title: () => `**Informace**`,
            content: (uptime) => `<:arrow:766358167382523944> **Vývojáři:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Knihovna:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Doba provozu** ${uptime}\n <:arrow:766358167382523944> **Datum vytvoření:** 12. května 2019`
        },
        statistics: {
            title: () => `**Statistiky**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Servery:** ${guilds}\n<:arrow:766358167382523944> **Uživatelé**: ${channels}\n<:arrow:766358167382523944> **Kanály:** ${users}`
        },
        link: {
            title: () => `**Odkazy**`,
            content: () => `<:arrow:766358167382523944> **Server podpory:** [Klikněte](${discord})\n<:arrow:766358167382523944> **Pozvánka:** [Klikněte](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount vám umožňuje spravovat členy serveru sledováním pozvánek.`,

        dev: {
            title: () => `**Vývojáři :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inspirováno :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Zvláštní poděkování :**`,
            content: () => `⭐ **Androz** za pomoc s ManageInvite!\n🎁 **Pauldb09** za losovací systém\n👨‍🏭 Celý tým & Překladatelé`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Máte` : `**${member.user.username}** má`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** pozvánek! (**${memberData.invites}** normálních, **${memberData.bonus}** bonusu, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** falešných, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** odchodů)${nextRank ? `\nPotřebujete **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** více pozvánek pro dosažení další řady: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Žebříček smazán!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** pozvánek (**${member.invites}** normálních, **${member.bonus}** bonusu, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** falešných, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** odchodů)`,
        prompt: () => `{{user}}, na kterou stránku chcete jít? Zadejte \`cancel\` nebo \`0\` pro zrušení.`,
        title: () => `Žebříček pozvánek`,
        empty: {
            title: () => `😕 Nebyly nalezeny žádné pozvánky`,
            content: () => `Začněte zvaní lidi a objevíte se na této stránce!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} účet (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Vytvoření`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Ano" : "Ne"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Připojeno`
            },
            joinWay: {
                title: () => `Způsob připojení`,
                oauth: () => `OAuth pozvánka (prostřednictvím discordapp.com).`,
                vanity: () => `Vlastní pozvánka nastavená správcem.`,
                unknown: (user) => `Nemohu pochopit, jak se uživatel ${user.username} připojil na server.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Pozvánky`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** pozvánek (**${inviteData.invites}** normálních, **${inviteData.bonus}** bonusu, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** falešných, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** odchodů)`
            },
            joinOrder: {
                title: () => `➡️ Pořadí připojení`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Musíte mít oprávnění `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Prosím uveďte uživatele",
            supperior: "<:error:753232040199192657> | Nemůžete vyhodit uživatele, který je nad vámi",
            noperm: "<:error:753232040199192657> | Došlo k chybě... Prosím zkontrolujte, že mám oprávnění vyhodit tohoto člena a zkuste to znovu!",
            
        },
        description: "<:success:753232040073101363> | Uživatel vyhozen.",
        banneddm: (server, moderator, reason) => "Byl jste vyhozen ze **" + server + "** uživatelem **" + moderator + "**\n**Důvod** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Musíte mít oprávnění `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Prosím uveďte uživatele",
            supperior: "<:error:753232040199192657> | Nemůžete zablokovat uživatele, který je nad vámi",
            noperm: "<:error:753232040199192657> | Došlo k chybě... Prosím zkontrolujte, že mám oprávnění zablokovat tohoto člena a zkuste to znovu!",
            
        },
        description: "<:success:753232040073101363> | Uživatel zablokován.",
        banneddm: (server, moderator, reason) => "Byl jste zablokován ze **" + server + "** uživatelem **" + moderator + "**\n**Důvod** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Prosím zadejte ID pro odblokování",
        success: (user) => "<:success:753232040073101363> | " + user + " byl úspěšně odblokován",
        noban: "<:error:753232040199192657> | Tento uživatel není blokován"
    },

    membercount: {
        title: (guildName) => `Počet členů ${guildName}`,
        description: (guild) => `
        Celkem **${guild.members.cache.size}** členů (**${guild.members.cache.filter((m) => !m.user.bot).size}** osob a **${guild.members.cache.filter((m) => m.user.bot).size}** botů)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} členů (nerušit)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} členů (online)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} členů (nečinný)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} členů (offline)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Musíte zadat počet bonusových pozvánek k přidání. (Syntaxe: ${prefix}addbonus číslo @člen) **Musíte pozvat skutečnou osobu, abyste obdrželi odměnu**`,
                incorrect: (prefix) => `${emojis.error} | Musíte zadat platný počet bonusových pozvánek k přidání. (Syntaxe: ${prefix}addbonus číslo @člen)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Musíte zmínit člena pro přidání bonusových pozvánek. (Syntaxe: ${prefix}addbonus číslo @člen)`
            }
        },
        title: () => `📥 Bonusové pozvánky přidány`,
        field: (prefix, member) => `Zadejte \`${prefix}invites ${member.user.tag}\` pro zobrazení nového počtu pozvánek pro **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Musíte zadat počet bonusových pozvánek k odebrání. (Syntaxe: ${prefix}removebonus číslo @člen)`,
                incorrect: (prefix) => `${emojis.error} | Musíte zadat platný počet bonusových pozvánek k odebrání. (Syntaxe: ${prefix}removebonus číslo @člen)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Musíte zmínit člena pro odebrání bonusových pozvánek. (Syntaxe: ${prefix}removebonus číslo @člen)`
            }
        },
        title: () => `📥 Bonusové pozvánky odebrány`,
        field: (prefix, member) => `Zadejte \`${prefix}invites ${member.user.tag}\` pro zobrazení nového počtu pozvánek pro **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | Systém DM join je nyní __POVOLEN__!**`,
        off: () => `**${emojis.success} | Systém DM join je nyní __ZAKÁZÁN__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Systém join je nyní __POVOLEN__!**`,
        off: () => `**${emojis.success} | Systém join je nyní __ZAKÁZÁN__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Systém leave je nyní __POVOLEN__!**`,
        off: () => `**${emojis.success} | Systém leave je nyní __ZAKÁZÁN__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Musíte zadat předvolbu!`,
        success: () => `${emojis.success} | Předvolba serveru byla úspěšně aktualizována!`
    },

    testdmjoin: {
        title: () => `:wrench: Systém DM join :`,
        description: () => `Pokud to nefunguje, zkontrolujte oprávnění bota nebo se připojte na [server podpory](${discord})`,
        fields: {
            enabled: () => `> Povoleno:`,
            message: () => `> Zpráva:`
        },
        enabled: (prefix) => `${emojis.success} Zprávy DM join povoleny. Zakažte pomocí \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Zprávy DM join zakázány. Povolte pomocí \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Zpráva není definována. Nastavte pomocí \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Systém join :`,
        description: () => `Pokud to nefunguje, zkontrolujte oprávnění bota nebo se připojte na [server podpory](${discord})`,
        fields: {
            enabled: () => `> Povoleno:`,
            channel: () => `> Kanál:`,
            message: () => `> Zpráva:`
        },
        enabled: (prefix) => `${emojis.success} Zprávy join povoleny. Zakažte pomocí \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Zprávy join zakázány. Povolte pomocí \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Zpráva není definována. Nastavte pomocí \`${prefix}configjoin\`!`,
            channel: (prefix) => `Kanál není definován. Nastavte pomocí \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Systém leave :`,
        description: () => `Pokud to nefunguje, zkontrolujte oprávnění bota nebo se připojte na [server podpory](${discord})`,
        fields: {
            enabled: () => `> Povoleno:`,
            channel: () => `> Kanál:`,
            message: () => `> Zpráva:`
        },
        enabled: (prefix) => `${emojis.success} Zprávy leave povoleny. Zakažte pomocí \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Zprávy leave zakázány. Povolte pomocí \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Zpráva není definována. Nastavte pomocí \`${prefix}configleave\`!`,
            channel: (prefix) => `Kanál není definován. Nastavte pomocí \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Konfigurace ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Zprávy join`,
            content: (guild, data) => `
            > Povoleno: ${data.guild.join.enabled ? "**ano**" : "**ne**"}
            > Zpráva: ${data.guild.join.message ? "**nastavena**" : "**není nastavena**."}
            > Kanál: ${!data.guild.join.channel ? "**není nastaven**" : (guild.channels.cache.get(data.guild.join.channel) ? "**nastaven**" : "**kanál nenalezen**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Zprávy leave`,
            content: (guild, data) => `
            > Povoleno: ${data.guild.leave.enabled ? "**ano**" : "**ne**"}
            > Zpráva: ${data.guild.leave.message ? "**nastavena**" : "**není nastavena**."}
            > Kanál: ${!data.guild.leave.channel ? "**není nastaven**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**nastaven**" : "**kanál nenalezen**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Zprávy DM join`,
            content: (guild, data) => `
            > Povoleno: ${data.guild.joinDM.enabled ? "**ano**" : "**ne**"}
            > Zpráva: ${data.guild.joinDM.message ? "**nastavena**" : "**není nastavena**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Ahoj, **${username}**! Tato funkce je dostupná pouze pro prémiové a partnerské servery. Získejte prémium: **brzy** !`
    },

    antispam: {
        cooldown: (username) => `Zpomalte! Prosím počkejte 5 sekund a zkuste to znovu!`
    },

    configdmjoin: {
        disable: (prefix) => `Zadejte \`${prefix}setdmjoin\` pro zakázání zpráv DM join.`,
        instruct: (str) => `
__**Další informace**__
\`\`\`
{user} : Zmínka člena, který se připojil na server.
{user.name} : Jméno člena, který se připojil na server.
{user.tag} : Značka člena, který se připojil na server.
{user.createdat} : Věk účtu člena.

{guild} : Název serveru.
{guild.count} : Aktuální počet členů na vašem serveru.

{inviter} : Zmínka pozývajícího.
{inviter.name} : Jméno pozývajícího.
{inviter.tag} : Značka pozývajícího.
{inviter.invites} : Celkový počet pozvánek pozývajícího.

{invite.code} : Použitý kód pozvánky.
{invite.url} : Použitá URL pozvánky.
{invite.uses} : Kolikrát byl kód pozvánky použit.
\`\`\`
Zadejte \`cancel\` pro zrušení. ${str}


:pencil: **| Nyní zadejte zprávu DM join... :pencil2:**`,
        cancelled: () => `:x: Zrušeno.`,
        success: () => `✅ **| Dokončeno.**`,
        title: () => `**Zpráva DM join nastavena**`,
        fields: {
            message: () => `Zpráva:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Použijte \`${prefix}testdmjoin\` pro testování nové zprávy.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Vaše zpráva musí být menší než 850 znaků.`, 
        disable: (prefix) => `Zadejte \`${prefix}setjoin\` pro zakázání zpráv join.`,
        instructs: {
            message: (str) => `
__**Další informace**__
\`\`\`
{user} : Zmínka člena, který se připojil na server.
{user.name} : Jméno člena, který se připojil na server.
{user.tag} : Značka člena, který se připojil na server.
{user.createdat} : Věk účtu člena.

{guild} : Název serveru.
{guild.count} : Aktuální počet členů na vašem serveru.

{inviter} : Zmínka pozývajícího.
{inviter.name} : Jméno pozývajícího.
{inviter.tag} : Značka pozývajícího.
{inviter.invites} : Celkový počet pozvánek pozývajícího.

{invite.code} : Použitý kód pozvánky.
{invite.url} : Použitá URL pozvánky.
{invite.uses} : Kolikrát byl kód pozvánky použit.
\`\`\`
Zadejte \`cancel\` pro zrušení. ${str}


:pencil: **| Nyní zadejte zprávu join... :pencil2:**`,
            channel: () => `:scroll: **| Nyní uveďte kanál... :pencil2:**`
        },
        cancelled: () => `:x: Zrušeno.`,
        success: () => `✅ **| Dokončeno.**`,
        title: () => `**Zpráva join nastavena**`,
        fields: {
            message: () => `Zpráva:`,
            channel: () => `Kanál:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Použijte \`${prefix}testjoin\` pro testování nové zprávy.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Kanál nenalezen pro \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Zadejte \`${prefix}setleave\` pro zakázání zpráv leave.`,
        instructs: {
            message: (str) => `
__**Další informace**__
\`\`\`
{user} : Zmínka člena, který opustil server.
{user.name} : Jméno člena, který opustil server.
{user.tag} : Značka člena, který opustil server.
{user.createdat} : Věk účtu člena.

{guild} : Název serveru.
{guild.count} : Aktuální počet členů na vašem serveru.

{inviter} : Zmínka pozývajícího.
{inviter.name} : Jméno pozývajícího.
{inviter.tag} : Značka pozývajícího.
{inviter.invites} : Celkový počet pozvánek pozývajícího.

{invite.code} : Použitý kód pozvánky.
{invite.url} : Použitá URL pozvánky.
{invite.uses} : Kolikrát byl kód pozvánky použit.
\`\`\`
Zadejte \`cancel\` pro zrušení. ${str}


:pencil: **| Nyní zadejte zprávu leave... :pencil2:**`,
            channel: () => `:scroll: **| Nyní uveďte kanál... :pencil2:**`
        },
        cancelled: () => `:x: Zrušeno.`,
        success: () => `✅ **| Dokončeno.**`,
        title: () => `**Zpráva leave nastavena**`,
        fields: {
            message: () => `Zpráva:`,
            channel: () => `Kanál:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Použijte \`${prefix}testleave\` pro testování nové zprávy`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Kanál nenalezen pro \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Musíte zadat platný jazyk!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)\n:flag_se: Svenska (\`sv\`)\n:flag_no: Norsk (\`no\`)\n:flag_dk: Dansk (\`da\`)\n:flag_fi: Suomi (\`fi\`)\n:flag_gr: Ελληνικά (\`el\`)\n:flag_cz: Čeština (\`cs\`)`,
        success: () => `${emojis.success} | :flag_cz: Jazyk serveru je nyní čeština!`
    },

    graph: {
        title: (server, days) => `Připojeno na ${server} za posledních ${days} dní`,
        content: (total, percent, from, to) => `**${total}** členů (tj. **${percent}%** serveru) se připojilo na server od ${from} do ${to}:`,
        invalid: () => `Musíte zadat platný počet dní (větší než 1 a menší než 1000) k zobrazení!`,
        months: () =>[
            "Led",
            "Úno",
            "Bře",
            "Dub",
            "Kvě",
            "Čer",
            "Čvc",
            "Srp",
            "Zář",
            "Říj",
            "Lis",
            "Pro"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `členů`
        },
        conf: {
            title: () => `Konfigurace`
        },
        selector: {
            title: () => `Selektor`,
            manage: () => `Spravovat`,
            no: {
                title: () => `Bez serverů`,
                content: () => `Server nenalezen. Prosím ověřte, že jste přihlášeni se správným účtem.`
            }
        },
        help: {
            title: () => `Pomoc`,
            doc: () => `Dokumentace`,
            support: () => `Server podpory`
        },
        forms: {
            buttons: {
                enable: () => `Povolit zprávy`,
                disable: () => `Zakázat zprávy`,
                update: () => `Aktualizovat zprávy`
            },
            basic: {
                title: () => `Základní konfigurace`,
                language: () => `Jazyk`,
                prefix: () => `Předvolba`,
                update: () => `Aktualizovat`
            },
            join: {
                title: () => `Zprávy join`,
                message: {
                    title: () => `Zpráva`,
                    default: () => `{user} se připojil na server! Pozván od **{inviter.tag}** ({inviter.invites} pozvánek).`
                },
                channel: {
                    title: () => `Kanál`
                },
            },
            leave: {
                title: () => `Zprávy leave`,
                message: {
                    title: () => `Zpráva`,
                    default: () => `{user.username} opustil server. Pozván od **{inviter.tag}** ({inviter.invites} pozvánek).`
                },
                channel: {
                    title: () => `Kanál`
                }
            },
            joinDM: {
                title: () => `Zprávy DM join`,
                premium: () => `Tato funkce je dostupná pro prémiové a partnerské servery.`,
                message: {
                    title: () => `Zpráva`,
                    default: () => `Vítejte {user}! Připojili jste se na **{server}**! Pozván od **{inviter.tag}**. Nezapomeňte si přečíst pravidla serveru!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Proces odebrání pozvánek serveru byl zahájen... Můžete je obnovit pomocí příkazu \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Proces odebrání pozvánek **${member.user.tag}}** byl zahájen... Můžete je obnovit pomocí příkazu \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Pozvánky resetovány`,
        titles: {
            all: (prefix) => `${emojis.success} | Pozvánky serveru byly resetovány! Můžete je obnovit pomocí příkazu \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Pozvánky **${member.user.tag}}** byly resetovány! Můžete je obnovit pomocí příkazu \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Jste si jistý, že chcete obnovit pozvánky serveru? Všichni členové obdrží pozvánky před poslední spuštěním příkazu \`${prefix}remove-invites\` (nebo 0, pokud nebyl příkaz nikdy spuštěn).\n\n:information_source: **Shrnutí pozvánek**:\nBude obnoveno, celkem: **${memberCount.invites}** normálních, **${memberCount.bonus}** bonusu, **${memberCount.leaves}** odchodů, **${memberCount.fake}** falešných.\n\n${emojis.success} Zadejte \`-confirm\` pro potvrzení.\n${emojis.error} Zadejte \`cancel\` pro zrušení.`,
            member: (prefix, member) => `${emojis.warn} | Jste si jistý, že chcete obnovit pozvánky **${member.user.tag}}**? Obdržíte pozvánky před poslední spuštěním příkazu \`${prefix}remove-invites\` (nebo 0, pokud nebyl příkaz nikdy spuštěn).\n\n:information_source: **Shrnutí pozvánek**:\nBude obnoveno: **${member.data.old_invites}** normálních, **${member.data.old_bonus}** bonusu, **${member.data.old_leaves}** odchodů, **${member.data.old_fake}** falešných.\n\n${emojis.success} Zadejte \`-confirm\` pro potvrzení.\n${emojis.error} Zadejte \`cancel\` pro zrušení.`,
            cancelled: () => `${emojis.error} Zrušeno.`
        },
        loading: {
            all: () => `${emojis.loading} | Proces obnovení pozvánek serveru byl zahájen....`,
            member: (member) => `${emojis.loading} | Proces obnovení pozvánek **${member.user.tag}}** byl zahájen...`
        },
        title: () => `☄️ Pozvánky obnoveny`,
        titles: {
            all: () => `${emojis.success} | Pozvánky serveru byly obnoveny!`,
            member: (member) => `${emojis.success} | Pozvánky **${member.user.tag}}** byly obnoveny!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Nejsou žádné pozvánky k synchronizaci.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Jste si jistý, že chcete synchronizovat pozvánky serveru?\n\n:information_source: **Shrnutí pozvánek**:\n**${Math.round(inviteCount)}** normálních pozvánek bude obnoveno.\n\n${emojis.success} Zadejte \`-confirm\` pro potvrzení.\n${emojis.error} Zadejte \`cancel\` pro zrušení.`,
            cancelled: () => `${emojis.error} Zrušeno.`
        },
        title: () => `☄️ Pozvánky synchronizovány`,
        titles: {
            all: () => `${emojis.success} | Pozvánky serveru byly synchronizovány!`
        }
    },

    add: {
        content: (id) => `Můžete mě přidat na svůj server kliknutím [zde](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Požadováno od ${username}`
    },

    support: {
        content: (id) => `Můžete se připojit na náš server podpory kliknutím [zde](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Požadováno od ${username}`
    }

};
