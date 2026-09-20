const { emojis, discord } = require("../config");

module.exports = {

    locale: "be_BY",

    utils: {
        prefix: (prefix) => `Мой поточны префікс je \`${prefix}\`\nPouži \`${prefix}help\` pre viac pomoci.`,
        viewConf: () => `[Zobraziť konfiguráciu na palubnej doske](https://invite-count.xyz)`,
        conf: {
            title: () => `Zobraziť konfiguráciu na palubnej doske`,
            content: () => `[alebo na palubnej doske](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} sa pripojil na server pomocou OAuth toku.`,
                vanity: (user) => `${user} sa pripojil na server pomocou discord.gg pozvánky definovanej vlastníkom servera (alebo adminom).`,
                unknown: (user) => `Neviem, ako sa ${user} pripojil na server.`,
                perm: (user) => `${emojis.error} | Potrebujem oprávnenie spravovať server, aby som vedel, kto pozval ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} opustil server, pripojil sa cez OAuth.`,
                vanity: (user) => `${user} opustil server, pripojil sa pomocou discord.gg pozvánky definovanej vlastníkom servera (alebo adminom).`,
                unknown: (user) => `${user} opustil server, ale neviem, ako sa na neho pripojil.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Chýbajúce oprávnenia**__\n\nPotrebujem nasledujúce oprávnenia na správne fungovanie príkazu: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Tento príkaz je momentálne vypnutý!`,
        permLevel: (name) => `${emojis.error} | Tento príkaz vyžaduje úroveň oprávnenia: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Nemám oprávnenie posielať správy v tomto kanáli.`,
        missingAdmin: () => `${emojis.error} | Potrebujem oprávnenie \`SpravovaťServer\` na vykonanie tejto akcie`
    },

    glogs: {
        err: () => `<:error:851490719934840872> | Aktuálny kanál je už ten istý kanál!`,
        success: () => `<:succes:851491428563812382> | Kanál protokolov bol úspešne nastavený.`
    },

    glist: {
        title: () => `🎁 Zoznam žrebovaní`,
        description: (prefix) => `Na spustenie žrebovania napíš \`${prefix}gstart\`. Zobrazujú sa iba žrebovaniá, ktoré nie sú ukončené`,
        fields: {
            name: () => `> Zoznam`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Koniec ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Nie sú žiadne neukončené žrebovaniá na tomto serveri`,
    },

    help: {
        title: () => `ℹ Stránka pomoci InviteCount`,
        description: (guildName, prefix) => `InviteCount vám umožňuje spravovať členov vášho servera sledovaním ich pozván.\n\nNavštívte **dokumentáciu** kliknutím [sem](https://docs.invite-count.xyz/).`,
        moderation: {
            title: () => `🛡️ **Moderácia**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Administrácia**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        joinDM: {
            title: () => `💻 **Všeobecne**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        join: {
            title: () => `:tools: **Konfigurácia**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        giveaway: {
            title: () => `🎁 **Žrebovaniá**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        invites: {
            title: () => `:wave: Pozvánky`,
            content: (prefix) => "`invite`, `leaderboard`"},
        manageInvite: {
            title: () => `💠 Nástroje`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        tip: (prefix) => `🔗 Odkazy :`,
        links: (clientID) => `[Pridaj ma](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Webstránka](https://invite-count.xyz) ● [Podporný server](${discord}) ● [Hlasuj za mňa](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount vám umožňuje spravovať členov vášho servera sledovaním ich pozván.`,
        dev: {
            title: () => `**Informácie**`,
            content: (uptime) => `<:arrow:766358167382523944> **Vývojári:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Knižnica:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Čas prevádzky** ${uptime}\n <:arrow:766358167382523944> **Dátum vytvorenia:** 12. mája 2019`
        },
        statistics: {
            title: () => `**Štatistika**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Servery:** ${guilds}\n<:arrow:766358167382523944> **Používatelia**: ${channels}\n<:arrow:766358167382523944> **Kanály:** ${users}`
        },
        link: {
            title: () => `**Odkazy**`,
            content: () => `<:arrow:766358167382523944> **Podporný server:** [Klikni](${discord})\n<:arrow:766358167382523944> **Pozvánka:** [Klikni](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount vám umožňuje spravovať členov vášho servera sledovaním ich pozván.`,
        dev: {
            title: () => `**Vývojári :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inšpirované :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Špeciálne ďakujem :**`,
            content: () => `⭐ **Androz** za pomoc s ManageInvite!\n🎁 **Pauldb09** za systém žrebovaní\n👨‍🏭 Celý tím & Prekladatelia`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Máš` : `**${member.user.username}** má`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** pozván! (**${memberData.invites}** normálnych, **${memberData.bonus}** bonusu, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** falošných, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** odchodov)${nextRank ? `\nPotrebuješ **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** viac pozván na dosiahnutie ďalšej úrovne: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** bol pozvaný **${inviterName}**`,
        unknown: () => `Neznámy`,
        notFound: () => `Pozývač sa nenašiel (používateľ mohol byť vymazaný)`
    },

    leaderboard: {
        cleared: () => `${emojis.success} | Výslúchadlo vymazané!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** pozván (**${member.invites}** normálnych, **${member.bonus}** bonusu, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** falošných, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** odchodov)`,
        prompt: () => `{{user}}, na ktorú stránku sa chceš ísť? Napíš \`cancel\` alebo \`0\` na zrušenie.`,
        title: () => `Žebríček pozván`,
        empty: {
            title: () => `😕 Žiadne pozvánky sa nenašli`,
            content: () => `Začni pozvávať ľudí a objaviš sa na tejto stránke!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} konto (${user.id})`,
        fields: {
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Vytvorenie`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Robot`,
                content: (user) => user.bot ? "Áno" : "Nie"
            },
            joinedAt: {
                title: () => `<:join:741252065585660014> Pripojiť sa`
            },
            joinWay: {
                title: () => `Spôsob pripojenia`,
                oauth: () => `Pozvánka OAuth (cez discordapp.com).`,
                vanity: () => `Vlastná pozvánka nakonfigurovaná administrátorom.`,
                unknown: (user) => `Neviem, ako sa ${user.username} pripojil na server.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Pozvánky`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** pozván (**${inviteData.invites}** normálnych, **${inviteData.bonus}** bonusu, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** falošných, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** odchodov)`
            },
            joinOrder: {
                title: () => `➡️ Poradie pripojenia`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Musíš mať oprávnenie `VYKOPAŤ_ČLENOV`",
            nouser: "<:error:753232040199192657> | Prosím spomeň používateľa",
            supperior: "<:error:753232040199192657> | Nemôžeš vyhodiť používateľa, ktorý je nad tebou",
            noperm: "<:error:753232040199192657> | Došlo k chybe ... Prosím overifi, či mám oprávnenie vyhodi tohto konkrétneho člena a skúspomôž sa znova!",
        },
        description: "<:success:753232040073101363> | Používateľ bol úspešne vyhod",
        banneddm: (server, moderator, reason) => "Bol si vyhod" + "ený" + " zo servera **" + server + "** od **" + moderator + "**\n**Dôvod** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Musíš mať oprávnenie `ZABANIT_ČLENOV`",
            nouser: "<:error:753232040199192657> | Prosím spomeň používateľa",
            supperior: "<:error:753232040199192657> | Nemôžeš zabanit používateľa, ktorý je nad tebou",
            noperm: "<:error:753232040199192657> | Došlo k chybe ... Prosím overi, či mám oprávnenie zabanit tohto konkrétneho člena a skúspomôž sa znova!",
        },
        description: "<:success:753232040073101363> | Používateľ bol úspešne zabanit",
        banneddm: (server, moderator, reason) => "Bol si zabanit" + "ý" + " zo servera **" + server + "** od **" + moderator + "**\n**Dôvod** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Prosím špecifikuj ID na odbanu",
        success: (user) => "<:success:753232040073101363> | " + user + " bol úspešne odbanuvaný",
        noban: "<:error:753232040199192657> | Tento používateľ nie je banovaný"
    },

    membercount: {
        title: (guildName) => `${guildName}'s Počet členov`,
        description: (guild) => `
        Celkem **${guild.members.cache.size}** členov (**${guild.members.cache.filter((m) => !m.user.bot).size}** ľudí a **${guild.members.cache.filter((m) => m.user.bot).size}** botov)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} členov dnd
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} členov online
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} členov idle
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} členov offline`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Musíš napísať počet bonusových pozván, ktoré chceš pridať. (Syntax: ${prefix}addbonus číslo @člen) **Potrebuješ pozvať skutočného človeka na získanie hodnosti**`,
                incorrect: (prefix) => `${emojis.error} | Musíš napísať __**platné**__ číslo bonusových pozván, ktoré chceš pridať. (Syntax: ${prefix}addbonus číslo @člen)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Musíš spomenúť člena, ktorému chceš pridať bonusové pozvánky. (Syntax: ${prefix}addbonus číslo @člen)`
            }
        },
        title: () => `📥 Bonusové pozvánky pridané`,
        field: (prefix, member) => `Napíš \`${prefix}invites ${member.user.tag}\` aby si videl nový počet pozván **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Musíš napísať počet bonusových pozván, ktoré chceš odstrániť. (Syntax: ${prefix}removebonus číslo @člen)`,
                incorrect: (prefix) => `${emojis.error} | Musíš napísať __**platné**__ číslo bonusových pozván, ktoré chceš odstrániť. (Syntax: ${prefix}removebonus číslo @člen)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Musíš spomenúť člena, ktorému chceš odstrániť bonusové pozvánky. (Syntax: ${prefix}removebonus číslo @člen)`
            }
        },
        title: () => `📥 Bonusové pozvánky odstránené`,
        field: (prefix, member) => `Napíš \`${prefix}invites ${member.user.tag}\` aby si videl nový počet pozván **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | Systém DM pripojenia je teraz __ZAPNUTÝ__!**`,
        off: () => `**${emojis.success} | Systém DM pripojenia je teraz __VYPNUTÝ__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Systém pripojenia je teraz __ZAPNUTÝ__!**`,
        off: () => `**${emojis.success} | Systém pripojenia je teraz __VYPNUTÝ__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Systém odchodu je teraz __ZAPNUTÝ__!**`,
        off: () => `**${emojis.success} | Systém odchodu je teraz __VYPNUTÝ__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Musíš napísať predponu!`,
        success: () => `${emojis.success} | Predpona servera bola aktualizovaná!`
    },

    testdmjoin: {
        title: () => `:wrench: Systém DM pripojenia :`,
        description: () => `Ak to nefunguje, skontroluj oprávnenia bota alebo sa pripoj na náš [podporný server](${discord})`,
        fields: {
            enabled: () => `> Zapnuté:`,
            message: () => `> Správa:`
        },
        enabled: (prefix) => `${emojis.success} Správy pripojenia v dm zapnuté. Vypni ich s \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Správy pripojenia v dm vypnuté. Zapni ich s \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Žiadna správa nie je definovaná. Nastav ju s \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Systém pripojenia :`,
        description: () => `Ak to nefunguje, skontroluj oprávnenia bota alebo sa pripoj na náš [podporný server](${discord})`,
        fields: {
            enabled: () => `> Zapnuté:`,
            channel: () => `> Kanál:`,
            message: () => `> Správa:`
        },
        enabled: (prefix) => `${emojis.success} Správy pripojenia zapnuté. Vypni ich s \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Správy pripojenia vypnuté. Zapni ich s \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Žiadna správa nie je definovaná. Nastav ju s \`${prefix}configjoin\`!`,
            channel: (prefix) => `Žiadny kanál nie je definovaný. Nastav ho s \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Systém odchodu :`,
        description: () => `Ak to nefunguje, skontroluj oprávnenia bota alebo sa pripoj na náš [podporný server](${discord})`,
        fields: {
            enabled: () => `> Zapnuté:`,
            channel: () => `> Kanál:`,
            message: () => `> Správa:`
        },
        enabled: (prefix) => `${emojis.success} Správy odchodu zapnuté. Vypni ich s \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Správy odchodu vypnuté. Zapni ich s \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Žiadna správa nie je definovaná. Nastav ju s \`${prefix}configleave\`!`,
            channel: (prefix) => `Žiadny kanál nie je definovaný. Nastav ho s \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `${guildName}'s konfigurácia`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Správy pripojenia`,
            content: (guild, data) => `
            > Zapnuté: ${data.guild.join.enabled ? "**áno**" : "**nie**"}
            > Správa: ${data.guild.join.message ? "**definovaná**" : "**nie je definovaná**."}
            > Kanál: ${!data.guild.join.channel ? "**nie je definovaný**" : (guild.channels.cache.get(data.guild.join.channel) ? "**definovaný**" : "**kanál nenájdený**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Správy odchodu`,
            content: (guild, data) => `
            > Zapnuté: ${data.guild.leave.enabled ? "**áno**" : "**nie**"}
            > Správa: ${data.guild.leave.message ? "**definovaná**" : "**nie je definovaná**."}
            > Kanál: ${!data.guild.leave.channel ? "**nie je definovaný**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**definovaný**" : "**kanál nenájdený**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Správy DM pripojenia`,
            content: (guild, data) => `
            > Zapnuté: ${data.guild.joinDM.enabled ? "**áno**" : "**nie**"}
            > Správa: ${data.guild.joinDM.message ? "**definovaná**" : "**nie je definovaná**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Ahoj, **${username}**! Táto funkcia je dostupná len pre premium servery a partnerov. Získaj premium tu: **čoskoro** !`
    },

    antispam: {
        cooldown: (username) => `Spomaľ! Prosím počkaj 5 sekúnd a skúste znova!`
    },

    configdmjoin: {
        disable: (prefix) => `Napíš \`${prefix}setdmjoin\` na vypnutie správ pripojenia v dm.`,
        instruct: (str) => `
__**Viac informácií**__
\`\`\`
{user} : Zmienka člena, ktorý sa práve pripojil na tvoj server.
{user.name} : Meno člena, ktorý sa práve pripojil na tvoj server.
{user.tag} : Tag člena, ktorý sa práve pripojil na tvoj server.
{user.createdat} : Vek konta člena.

{guild} : Názov servera.
{guild.count} : Počet členov, ktorý má tvoj server teraz.

{inviter} : Zmienka pozývača.
{inviter.name} : Meno pozývača.
{inviter.tag} : Tag pozývača.
{inviter.invites} : Celkový počet pozván pozývača.

{invite.code} : Kód pozvánky, ktorý sa použil.
{invite.url} : URL pozvánky, ktorá sa použila.
{invite.uses} : Počet použití pozvánky, ktorá sa použila.
\`\`\`
Napíš \`cancel\` na zrušenie. ${str}

:pencil: **| Teraz napíš správu DM pripojenia... :pencil2:**`,
        cancelled: () => `:x: Zrušené.`,
        success: () => `✅ **| Úspešne hotovo...**`,
        title: () => `**Hotovo Správa DM Pripojenia Bola Nastavená**`,
        fields: {
            message: () => `Správa:`,
            testIt: () => `Testovanie:`,
            cmd: (prefix) => `Použi \`${prefix}testdmjoin\` na testovanie novej správy.`
        },
    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Vaša správa musí obsahovať menej ako 850 znakov.`, 
        disable: (prefix) => `Napíš \`${prefix}setjoin\` na vypnutie správ pripojenia.`,
        instructs: {
            message: (str) => `
__**Viac informácií**__
\`\`\`
{user} : Zmienka člena, ktorý sa práve pripojil na tvoj server.
{user.name} : Meno člena, ktorý sa práve pripojil na tvoj server.
{user.tag} : Tag člena, ktorý sa práve pripojil na tvoj server.
{user.createdat} : Vek konta člena.

{guild} : Názov servera.
{guild.count} : Počet členov, ktorý má tvoj server teraz.

{inviter} : Zmienka pozývača.
{inviter.name} : Meno pozývača.
{inviter.tag} : Tag pozývača.
{inviter.invites} : Celkový počet pozván pozývača.

{invite.code} : Kód pozvánky, ktorý sa použil.
{invite.url} : URL pozvánky, ktorá sa použila.
{invite.uses} : Počet použití pozvánky, ktorá sa použila.
\`\`\`
Napíš \`cancel\` na zrušenie. ${str}

:pencil: **| Teraz napíš správu pripojenia... :pencil2:**`,
            channel: () => `:scroll: **| Teraz spomeň kanál... :pencil2:**`
        },
        cancelled: () => `:x: Zrušené.`,
        success: () => `✅ **| Úspešne hotovo...**`,
        title: () => `**Hotovo Správa Pripojenia Bola Nastavená**`,
        fields: {
            message: () => `Správa:`,
            channel: () => `Kanál:`,
            testIt: () => `Testovanie:`,
            cmd: (prefix) => `Použi \`${prefix}testjoin\` na testovanie novej správy.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Žiadny kanál nenájdený pre \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Napíš \`${prefix}setleave\` na vypnutie správ odchodu.`,
        instructs: {
            message: (str) => `
__**Viac informácií**__
\`\`\`
{user} : Zmienka člena, ktorý práve opustil tvoj server.
{user.name} : Meno člena, ktorý práve opustil tvoj server.
{user.tag} : Tag člena, ktorý práve opustil tvoj server.
{user.createdat} : Vek konta člena.

{guild} : Názov servera.
{guild.count} : Počet členov, ktorý má tvoj server teraz.

{inviter} : Zmienka pozývača.
{inviter.name} : Meno pozývača.
{inviter.tag} : Tag pozývača.
{inviter.invites} : Celkový počet pozván pozývača.

{invite.code} : Kód pozvánky, ktorý sa použil.
{invite.url} : URL pozvánky, ktorá sa použila.
{invite.uses} : Počet použití pozvánky, ktorá sa použila.
\`\`\`
Napíš \`cancel\` na zrušenie. ${str}

:pencil: **| Teraz napíš správu odchodu... :pencil2:**`,
            channel: () => `:scroll: **| Teraz spomeň kanál... :pencil2:**`
        },
        cancelled: () => `:x: Zrušené.`,
        success: () => `✅ **| Úspešne hotovo...**`,
        title: () => `**Hotovo Správa Odchodu Bola Nastavená**`,
        fields: {
            message: () => `Správa:`,
            channel: () => `Kanál:`,
            testIt: () => `Testovanie:`,
            cmd: (prefix) => `Použi \`${prefix}testleave\` na testovanie novej správy.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Žiadny kanál nenájdený pre \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Musíš napísať platný jazyk!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)\n:flag_se: Svenska (\`sv\`)\n:flag_no: Norsk (\`no\`)\n:flag_dk: Dansk (\`da\`)\n:flag_fi: Suomi (\`fi\`)\n:flag_gr: Ελληνικά (\`el\`)\n:flag_cz: Čeština (\`cs\`)\n:flag_hu: Magyar (\`hu\`)\n:flag_ro: Română (\`ro\`)\n:flag_rs: Српски (\`sr\`)\n:flag_hr: Hrvatski (\`hr\`)\n:flag_bg: Български (\`bg\`)\n:flag_ua: Українська (\`uk\`)\n:flag_sk: Slovenčina (\`sk\`)\n:flag_si: Slovenščina (\`sl\`)\n:flag_al: Shqip (\`sq\`)\n:flag_is: Íslenska (\`is\`)\n:flag_by: Беларуская (\`be\`)\n:flag_lt: Lietuvių (\`lt\`)`,
        success: () => `${emojis.success} | Jazyk servera bol úspešne zmenený!`
    },

    messages: {
        title: () => `**Počet správ**`,
        field: (size) => `Počet správ v kanáli: **${size}**`
    },

    support: {
        title: () => `**Podporný server**`,
        field: () => `Ak máš nejaké problémy s botom alebo chceš získať pomoc, pripoj sa k [podpornému serveru](${discord})`
    },

    add: {
        description: (prefix) => `Ak chceš, aby bol bot ako bot v tvojom serveri, pozvi ho s príkazom: \`${prefix}add\` alebo klikni [tu](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
    },


    setlang: {
        invalid: () => `${emojis.error} | Вы павінны напісаць слушную мову!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)\n:flag_se: Svenska (\`sv\`)\n:flag_no: Norsk (\`no\`)\n:flag_dk: Dansk (\`da\`)\n:flag_fi: Suomi (\`fi\`)\n:flag_gr: Ελληνικά (\`el\`)\n:flag_cz: Čeština (\`cs\`)\n:flag_hu: Magyar (\`hu\`)\n:flag_ro: Română (\`ro\`)\n:flag_rs: Српски (\`sr\`)\n:flag_hr: Hrvatski (\`hr\`)\n:flag_bg: Български (\`bg\`)\n:flag_ua: Українська (\`uk\`)\n:flag_sk: Slovenčina (\`sk\`)\n:flag_si: Slovenščina (\`sl\`)\n:flag_al: Shqip (\`sq\`)\n:flag_is: Íslenska (\`is\`)\n:flag_by: Беларуская (\`be\`)\n:flag_lt: Lietuvių (\`lt\`)`,
        success: () => `${emojis.success} | :flag_by: Мова сервера цяпер па-беларуску!`
    },
    graph: {
        title: (server, days) => `Прысоедненні да ${server} апошніх ${days} дзён`,
        content: (total, percent, from, to) => `**${total}** чальцы (т.е. **${percent}%** сервера) прысоедніліся да сервера з ${from} да ${to}:`,
        invalid: () => `Вы павінны ввесці слушную колькасць дзён (больш за 1 і менш за 1000) для адлюстрацы!`,
        months: () =>["Сяч","Люты","Бер","Кві","Тра","Чэр","Ліп","Жні","Вер","Кас","Ліс","Сне"],
    },
    website: {
        doc: {
            variables: () => `https://https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `чальцы`
        },
        conf: {
            title: () => `Канфігурацыя`
        },
        selector: {
            title: () => `Селектар`,
            manage: () => `Кіраваць`,
            no: {
                title: () => `Нема сервера`,
                content: () => `Сервер не знойдзены. Калі ласка, праверыце, што вы ўвайшлі з правільным рахункам.`
            }
        },
        help: {
            title: () => `Дапамога`,
            doc: () => `Дакументацыя`,
            support: () => `Сервер падтрымкі`
        },
        forms: {
            buttons: {
                enable: () => `Уключыць паведамленні`,
                disable: () => `Выключыць паведамленні`,
                update: () => `Абновіць паведамленні`
            },
            basic: {
                title: () => `Базавая канфігурацыя`,
                language: () => `Мова`,
                prefix: () => `Префікс`,
                update: () => `Абновіць`
            },
            join: {
                title: () => `Паведамленні прысоедненя`,
                message: {
                    title: () => `Паведамленне`,
                    default: () => `{user} прысоеднаўся да сервера! Ён быў запрошаны **{inviter.tag}** (які має **{inviter.invites}** запрашэнняў).`
                },
                channel: {
                    title: () => `Канал`
                },
            },
            leave: {
                title: () => `Паведамленні выхаду`,
                message: {
                    title: () => `Паведамленне`,
                    default: () => `{user.username} пакінуў сервер. Ён быў запрошаны **{inviter.tag}** (які має **{inviter.invites}** запрашэнняў).`
                },
                channel: {
                    title: () => `Канал`
                }
            },
            joinDM: {
                title: () => `Паведамленні прысоедненя ў DM`,
                premium: () => `Гэта функцыя даступна толькі для прэміум-серверау і партнёраў.`,
                message: {
                    title: () => `Паведамленне`,
                    default: () => `Добра пажаловаць {user} на **{server}! Вы былі запрошаны **{inviter.tag}**. Не забывайце прачытаць правілы сервера!`,
                }
            }
        }
    },
    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Выдаленне запрашэнняў з бягучага сервера.... Вы можаце адновіць іх з помощью каманды \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Выдаленне запрашэнняў **${member.user.tag}**... Вы можаце адновіць іх з помощью каманды \`${prefix}restore-invites ${member.user.tag}\` !`
        },
        title: () => `☄️ Запрашэнні переініцыялізаваны`,
        titles: {
            all: (prefix) => `${emojis.success} | Запрашэнні сервера переініцыялізаваны! Вы можаце адновіць іх з помощью каманды \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Запрашэнні **${member.user.tag}** переініцыялізаваны! Вы можаце адновіць іх з помощью каманды \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },
    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Вы ўпэўнены, што хочаце адновіць запрашэнні сервера? Усе чальцы атрымаюць запрашэнні, якія ў іх былі да апошняга выконання каманды \`${prefix}remove-invite\` (ці 0, калі камана не выконвалася).\n\n:information_source: **Абзор запрашэнняў**:\nБудуць адноўлены ў агульнай колькасці: **${memberCount.invites}** звычайныя, **${memberCount.bonus}** бонусныя, **${memberCount.leaves}** выхады, **${memberCount.fake}** фальшывыя.\n\n${emojis.success} Напішыце \`-confirm\` для пацвярджэння.\n${emojis.error} Напішыце \`cancel\` для адмяны.`,
            member: (prefix, member) => `${emojis.warn} | Вы ўпэўнены, што хочаце адновіць запрашэнні **${member.user.tag}**? Ён атрымае запрашэнні, якія ў яго былі да апошняга выконання каманды \`${prefix}remove-invites\` (ці 0, калі камана не выконвалася).\n\n:information_source: **Абзор запрашэнняў**:\nБудуць адноўлены: **${member.data.old_invites}** звычайныя, **${member.data.old_bonus}** бонусныя, **${member.data.old_leaves}** выхады, **${member.data.old_fake}** фальшывыя.\n\n${emojis.success} Напішыце \`-confirm\` для пацвярджэння.\n${emojis.error} Напішыце \`cancel\` для адмяны.`,
            cancelled: () => `${emojis.error} Адменена.`
        },
        loading: {
            all: () => `${emojis.loading} | Адновленне запрашэнняў сервера....`,
            member: (member) => `${emojis.loading} | Адновленне запрашэнняў **${member.user.tag}**...`
        },
        title: () => `☄️ Запрашэнні адноўлены`,
        titles: {
            all: () => `${emojis.success} | Запрашэнні сервера адноўлены!`,
            member: (member) => `${emojis.success} | Запрашэнні **${member.user.tag}** адноўлены!`
        }
    },
    syncinvites: {
        no: () => `${emojis.error} | Нема запрашэнняў для сінхранізацыі.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Вы ўпэўнены, што хочаце сінхранізаваць запрашэнні сервера?\n\n:information_source: **Абзор запрашэнняў**:\nБудуць адноўлены **${Math.round(inviteCount)}** звычайныя запрашэнні.\n\n${emojis.success} Напішыце \`-confirm\` для пацвярджэння.\n${emojis.error} Напішыце \`cancel\` для адмяны.`,
            cancelled: () => `${emojis.error} Адменена.`
        },
        title: () => `☄️ Запрашэнні сінхранізаваны`,
        titles: {
            all: () => `${emojis.success} | Запрашэнні сервера сінхранізаваны!`
        }
    },
    add: {
        content: (id) => `Вы можаце дадаць мяне на свой сервер, кліснуўшы [тут](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Запрошена ${username}`
    },
    support: {
        content: (id) => `Вы можаце далучыцца да нашага серверу discord, кліснуўшы [тут](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Запрошена ${username}`
    }
};
