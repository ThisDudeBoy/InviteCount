const { emojis, discord } = require("../config");

module.exports = {

    locale: "pl_PL",

    utils: {
        prefix: (prefix) => `Mój obecny prefiks to \`${prefix}\`\nUżyj \`${prefix}help\` aby uzyskać więcej pomocy.`,
        viewConf: () => `[Wyświetl konfigurację w panelu](https://invite-count.xyz)`,
        conf: {
            title: () => `Wyświetl konfigurację w panelu`,
            content: () => `[lub w panelu](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} dołączył do serwera za pośrednictwem OAuth.`,
                
                vanity: (user) => `${user} dołączył do serwera za pośrednictwem zaproszenia discord.gg ustawionego przez właściciela serwera.`,
                unknown: (user) => `Nie mogę zrozumieć, jak ${user} dołączył do serwera.`,
                perm: (user) => `${emojis.error} | Potrzebuję uprawnienia do zarządzania serwerem, aby wiedzieć, kto zaprosił ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} opuścił serwer, dołączył przez OAuth.`,
                vanity: (user) => `${user} opuścił serwer, dołączył przez zaproszenie discord.gg ustawione przez właściciela serwera.`,
                unknown: (user) => `${user} opuścił serwer, ale nie mogę zrozumieć, jak dołączył.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Brakujące uprawnienia**__\n\nPotrzebuję następujących uprawnień, aby ta komenda działała prawidłowo: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Ta komenda jest aktualnie wyłączona!`,
        permLevel: (name) => `${emojis.error} | Ta komenda wymaga poziomu uprawnień: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Nie mam uprawnień do wysyłania wiadomości na tym kanale.`,
        missingAdmin: () => `${emojis.error} | Potrzebuję uprawnienia \`Zarządzaj serwerem\` aby wykonać tę akcję`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Obecny kanał to już ten kanał!`,
        success: () => `<:succes:851491428563812382> | Kanał dziennika ustawiony pomyślnie.`
    },
    glist: {
        title: () => `🎁 Lista konkursów`,
        description: (prefix) => `Użyj \`${prefix}gstart\` aby rozpocząć konkurs. Wyświetlane są tylko nieukończone konkursy`,
        fields: {
            name: () => `> Lista`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Kończy się za ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Na tym serwerze nie ma nieukończonych konkursów`,

    },
    help: {
        title: () => `ℹ Strona pomocy InviteCount`,
        description: (guildName, prefix) => `InviteCount umożliwia zarządzanie członkami serwera poprzez śledzenie zaproszeń.\n\n**Dokumentacja** jest dostępna [tutaj](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderacja**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Administracja**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **Ogólne**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Konfiguracja**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Wiadomości o opuszczeniu`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Konkursy**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Zaproszenia`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Narzędzia`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Linki :`,
        links: (clientID) => `[Dodaj mnie](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Strona internetowa](https://invite-count.xyz) ● [Serwer wsparcia](${discord}) ● [Zagłosuj na mnie](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount umożliwia zarządzanie członkami serwera poprzez śledzenie zaproszeń.`,

        dev: {
            title: () => `**Informacje**`,
            content: (uptime) => `<:arrow:766358167382523944> **Twórcy:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Biblioteka:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Czas pracy** ${uptime}\n <:arrow:766358167382523944> **Data utworzenia:** 12 maja 2019`
        },
        statistics: {
            title: () => `**Statystyki**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Serwery:** ${guilds}\n<:arrow:766358167382523944> **Użytkownicy**: ${channels}\n<:arrow:766358167382523944> **Kanały:** ${users}`
        },
        link: {
            title: () => `**Linki**`,
            content: () => `<:arrow:766358167382523944> **Serwer wsparcia:** [Kliknij](${discord})\n<:arrow:766358167382523944> **Zaproszenie:** [Kliknij](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount umożliwia zarządzanie członkami serwera poprzez śledzenie zaproszeń.`,

        dev: {
            title: () => `**Twórcy :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inspirowane przez :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Specjalne podziękowania :**`,
            content: () => `⭐ **Androz** za pomoc z ManageInvite!\n🎁 **Pauldb09** za system losowania\n👨‍🏭 Cały zespół & Tłumacze`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Masz` : `**${member.user.username}** ma`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** zaproszeń! (**${memberData.invites}** zwykłych, **${memberData.bonus}** bonusu, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** fałszywych, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** wyjść)${nextRank ? `\nPotrzebujesz **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** więcej zaproszeń, aby uzyskać następną rangę: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Ranking został wyczyszczony!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** zaproszeń (**${member.invites}** zwykłych, **${member.bonus}** bonusu, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** fałszywych, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** wyjść)`,
        prompt: () => `{{user}}, na którą stronę chcesz przejść? Wpisz \`cancel\` lub \`0\` aby anulować.`,
        title: () => `Ranking zaproszeń`,
        empty: {
            title: () => `😕 Nie znaleziono zaproszeń`,
            content: () => `Zacznij zapraszać osoby, a pojawisz się na tej stronie!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} konto (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Utworzenie`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Tak" : "Nie"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Dołączenie`
            },
            joinWay: {
                title: () => `Sposób dołączenia`,
                oauth: () => `Zaproszenie OAuth (przez discordapp.com).`,
                vanity: () => `Niestandardowe zaproszenie ustawione przez administratora.`,
                unknown: (user) => `Nie mogę zrozumieć, jak ${user.username} dołączył do serwera.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Zaproszenia`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** zaproszeń (**${inviteData.invites}** zwykłych, **${inviteData.bonus}** bonusu, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** fałszywych, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** wyjść)`
            },
            joinOrder: {
                title: () => `➡️ Kolejność dołączenia`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Musisz mieć uprawnienie `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Proszę wskaż użytkownika",
            supperior: "<:error:753232040199192657> | Nie możesz wyrzucić użytkownika wyższego od ciebie",
            noperm: "<:error:753232040199192657> | Wystąpił błąd... Proszę sprawdź, czy mam uprawnienie do wyrzucenia tego członka i spróbuj ponownie!",
            
        },
        description: "<:success:753232040073101363> | Użytkownik pomyślnie wyrzucony",
        banneddm: (server, moderator, reason) => "Zostałeś wyrzucony z **" + server + "** przez **" + moderator + "**\n**Powód** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Musisz mieć uprawnienie `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Proszę wskaż użytkownika",
            supperior: "<:error:753232040199192657> | Nie możesz zbanować użytkownika wyższego od ciebie",
            noperm: "<:error:753232040199192657> | Wystąpił błąd... Proszę sprawdź, czy mam uprawnienie do zbanowania tego członka i spróbuj ponownie!",
            
        },
        description: "<:success:753232040073101363> | Użytkownik pomyślnie zbanowany",
        banneddm: (server, moderator, reason) => "Zostałeś zbanowany z **" + server + "** przez **" + moderator + "**\n**Powód** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Proszę podaj ID do odbanowania",
        success: (user) => "<:success:753232040073101363> | " + user + " został pomyślnie odbanowany",
        noban: "<:error:753232040199192657> | Ten użytkownik nie jest zbanowany"
    },

    membercount: {
        title: (guildName) => `Liczba członków ${guildName}`,
        description: (guild) => `
        Razem **${guild.members.cache.size}** członków (**${guild.members.cache.filter((m) => !m.user.bot).size}** osób i **${guild.members.cache.filter((m) => m.user.bot).size}** botów)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} członków (nie przeszkadzać)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} członków (online)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} członków (bezczynny)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} członków (offline)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Musisz określić liczbę zaproszeń bonusowych do dodania. (Składnia: ${prefix}addbonus liczba @członek) **Musisz zaprosić prawdziwą osobę, aby otrzymać nagrodę**`,
                incorrect: (prefix) => `${emojis.error} | Musisz określić prawidłową liczbę zaproszeń bonusowych do dodania. (Składnia: ${prefix}addbonus liczba @członek)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Musisz wskazać członka, aby dodać zaproszenia bonusowe. (Składnia: ${prefix}addbonus liczba @członek)`
            }
        },
        title: () => `📥 Zaproszenia bonusowe dodane`,
        field: (prefix, member) => `Wpisz \`${prefix}invites ${member.user.tag}\` aby zobaczyć nową liczbę zaproszeń **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Musisz określić liczbę zaproszeń bonusowych do usunięcia. (Składnia: ${prefix}removebonus liczba @członek)`,
                incorrect: (prefix) => `${emojis.error} | Musisz określić prawidłową liczbę zaproszeń bonusowych do usunięcia. (Składnia: ${prefix}removebonus liczba @członek)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Musisz wskazać członka, aby usunąć zaproszenia bonusowe. (Składnia: ${prefix}removebonus liczba @członek)`
            }
        },
        title: () => `📥 Zaproszenia bonusowe usunięte`,
        field: (prefix, member) => `Wpisz \`${prefix}invites ${member.user.tag}\` aby zobaczyć nową liczbę zaproszeń **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | System DM join jest teraz __WŁĄCZONY__!**`,
        off: () => `**${emojis.success} | System DM join jest teraz __WYŁĄCZONY__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | System join jest teraz __WŁĄCZONY__!**`,
        off: () => `**${emojis.success} | System join jest teraz __WYŁĄCZONY__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | System leave jest teraz __WŁĄCZONY__!**`,
        off: () => `**${emojis.success} | System leave jest teraz __WYŁĄCZONY__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Musisz podać prefiks!`,
        success: () => `${emojis.success} | Prefiks serwera został zaktualizowany!`
    },

    testdmjoin: {
        title: () => `:wrench: System DM join :`,
        description: () => `Jeśli to nie działa, sprawdź uprawnienia bota lub dołącz do [serwera wsparcia](${discord})`,
        fields: {
            enabled: () => `> Włączony:`,
            message: () => `> Wiadomość:`
        },
        enabled: (prefix) => `${emojis.success} Wiadomości DM join włączone. Wyłącz za pomocą \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Wiadomości DM join wyłączone. Włącz za pomocą \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Wiadomość nie jest zdefiniowana. Ustaw za pomocą \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: System join :`,
        description: () => `Jeśli to nie działa, sprawdź uprawnienia bota lub dołącz do [serwera wsparcia](${discord})`,
        fields: {
            enabled: () => `> Włączony:`,
            channel: () => `> Kanał:`,
            message: () => `> Wiadomość:`
        },
        enabled: (prefix) => `${emojis.success} Wiadomości join włączone. Wyłącz za pomocą \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Wiadomości join wyłączone. Włącz za pomocą \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Wiadomość nie jest zdefiniowana. Ustaw za pomocą \`${prefix}configjoin\`!`,
            channel: (prefix) => `Kanał nie jest zdefiniowany. Ustaw za pomocą \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: System leave :`,
        description: () => `Jeśli to nie działa, sprawdź uprawnienia bota lub dołącz do [serwera wsparcia](${discord})`,
        fields: {
            enabled: () => `> Włączony:`,
            channel: () => `> Kanał:`,
            message: () => `> Wiadomość:`
        },
        enabled: (prefix) => `${emojis.success} Wiadomości leave włączone. Wyłącz za pomocą \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Wiadomości leave wyłączone. Włącz za pomocą \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Wiadomość nie jest zdefiniowana. Ustaw za pomocą \`${prefix}configleave\`!`,
            channel: (prefix) => `Kanał nie jest zdefiniowany. Ustaw za pomocą \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Konfiguracja ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Wiadomości join`,
            content: (guild, data) => `
            > Włączony: ${data.guild.join.enabled ? "**tak**" : "**nie**"}
            > Wiadomość: ${data.guild.join.message ? "**ustawiona**" : "**nie ustawiona**."}
            > Kanał: ${!data.guild.join.channel ? "**nie ustawiony**" : (guild.channels.cache.get(data.guild.join.channel) ? "**ustawiony**" : "**kanał nie znaleziony**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Wiadomości leave`,
            content: (guild, data) => `
            > Włączony: ${data.guild.leave.enabled ? "**tak**" : "**nie**"}
            > Wiadomość: ${data.guild.leave.message ? "**ustawiona**" : "**nie ustawiona**."}
            > Kanał: ${!data.guild.leave.channel ? "**nie ustawiony**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**ustawiony**" : "**kanał nie znaleziony**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Wiadomości DM join`,
            content: (guild, data) => `
            > Włączony: ${data.guild.joinDM.enabled ? "**tak**" : "**nie**"}
            > Wiadomość: ${data.guild.joinDM.message ? "**ustawiona**" : "**nie ustawiona**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Cześć, **${username}**! Ta funkcja jest dostępna tylko dla serwerów premium i partnerskich. Zdobądź premium: **wkrótce** !`
    },

    antispam: {
        cooldown: (username) => `Wolniej! Proszę czekaj 5 sekund i spróbuj ponownie!`
    },

    configdmjoin: {
        disable: (prefix) => `Wpisz \`${prefix}setdmjoin\` aby wyłączyć wiadomości DM join.`,
        instruct: (str) => `
__**Dodatkowe informacje**__
\`\`\`
{user} : Wspomnienie członka, który dołączył do serwera.
{user.name} : Imię członka, który dołączył do serwera.
{user.tag} : Tag członka, który dołączył do serwera.
{user.createdat} : Wiek konta członka.

{guild} : Nazwa serwera.
{guild.count} : Bieżąca liczba członków Twojego serwera.

{inviter} : Wspomnienie zapraszającego.
{inviter.name} : Imię zapraszającego.
{inviter.tag} : Tag zapraszającego.
{inviter.invites} : Całkowita liczba zaproszeń zapraszającego.

{invite.code} : Użyty kod zaproszenia.
{invite.url} : Użyty URL zaproszenia.
{invite.uses} : Liczba użyć kodu zaproszenia.
\`\`\`
Wpisz \`cancel\` aby anulować. ${str}


:pencil: **| Teraz wpisz wiadomość DM join... :pencil2:**`,
        cancelled: () => `:x: Anulowano.`,
        success: () => `✅ **| Pomyślnie ukończono...**`,
        title: () => `**Wiadomość DM join ustawiona**`,
        fields: {
            message: () => `Wiadomość:`,
            testIt: () => `Przetestuj:`,
            cmd: (prefix) => `Użyj \`${prefix}testdmjoin\` aby przetestować nową wiadomość.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Twoja wiadomość musi mieć mniej niż 850 znaków.`, 
        disable: (prefix) => `Wpisz \`${prefix}setjoin\` aby wyłączyć wiadomości join.`,
        instructs: {
            message: (str) => `
__**Dodatkowe informacje**__
\`\`\`
{user} : Wspomnienie członka, który dołączył do serwera.
{user.name} : Imię członka, który dołączył do serwera.
{user.tag} : Tag członka, który dołączył do serwera.
{user.createdat} : Wiek konta członka.

{guild} : Nazwa serwera.
{guild.count} : Bieżąca liczba członków Twojego serwera.

{inviter} : Wspomnienie zapraszającego.
{inviter.name} : Imię zapraszającego.
{inviter.tag} : Tag zapraszającego.
{inviter.invites} : Całkowita liczba zaproszeń zapraszającego.

{invite.code} : Użyty kod zaproszenia.
{invite.url} : Użyty URL zaproszenia.
{invite.uses} : Liczba użyć kodu zaproszenia.
\`\`\`
Wpisz \`cancel\` aby anulować. ${str}


:pencil: **| Teraz wpisz wiadomość join... :pencil2:**`,
            channel: () => `:scroll: **| Teraz wskaż kanał... :pencil2:**`
        },
        cancelled: () => `:x: Anulowano.`,
        success: () => `✅ **| Pomyślnie ukończono...**`,
        title: () => `**Wiadomość join ustawiona**`,
        fields: {
            message: () => `Wiadomość:`,
            channel: () => `Kanał:`,
            testIt: () => `Przetestuj:`,
            cmd: (prefix) => `Użyj \`${prefix}testjoin\` aby przetestować nową wiadomość.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Brak kanału dla \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Wpisz \`${prefix}setleave\` aby wyłączyć wiadomości leave.`,
        instructs: {
            message: (str) => `
__**Dodatkowe informacje**__
\`\`\`
{user} : Wspomnienie członka, który opuścił serwer.
{user.name} : Imię członka, który opuścił serwer.
{user.tag} : Tag członka, który opuścił serwer.
{user.createdat} : Wiek konta członka.

{guild} : Nazwa serwera.
{guild.count} : Bieżąca liczba członków Twojego serwera.

{inviter} : Wspomnienie zapraszającego.
{inviter.name} : Imię zapraszającego.
{inviter.tag} : Tag zapraszającego.
{inviter.invites} : Całkowita liczba zaproszeń zapraszającego.

{invite.code} : Użyty kod zaproszenia.
{invite.url} : Użyty URL zaproszenia.
{invite.uses} : Liczba użyć kodu zaproszenia.
\`\`\`
Wpisz \`cancel\` aby anulować. ${str}


:pencil: **| Teraz wpisz wiadomość leave... :pencil2:**`,
            channel: () => `:scroll: **| Teraz wskaż kanał... :pencil2:**`
        },
        cancelled: () => `:x: Anulowano.`,
        success: () => `✅ **| Pomyślnie ukończono...**`,
        title: () => `**Wiadomość leave ustawiona**`,
        fields: {
            message: () => `Wiadomość:`,
            channel: () => `Kanał:`,
            testIt: () => `Przetestuj:`,
            cmd: (prefix) => `Użyj \`${prefix}testleave\` aby przetestować nową wiadomość`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Brak kanału dla \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Musisz podać prawidłowy język!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)`,
        success: () => `${emojis.success} | :flag_pl: Język serwera to teraz Polski!`
    },

    graph: {
        title: (server, days) => `Dołączenia na ${server} w ostatnich ${days} dniach`,
        content: (total, percent, from, to) => `**${total}** członków (tj. **${percent}%** serwera) dołączyło do serwera od ${from} do ${to}:`,
        invalid: () => `Musisz podać prawidłową liczbę dni (większą niż 1 i mniejszą niż 1000) do wyświetlenia!`,
        months: () =>[
            "Sty",
            "Lut",
            "Mar",
            "Kwi",
            "Maj",
            "Cze",
            "Lip",
            "Sie",
            "Wrz",
            "Paź",
            "Lis",
            "Gru"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `członków`
        },
        conf: {
            title: () => `Konfiguracja`
        },
        selector: {
            title: () => `Selektor`,
            manage: () => `Zarządzaj`,
            no: {
                title: () => `Brak serwerów`,
                content: () => `Nie znaleziono serwera. Proszę sprawdź, czy jesteś zalogowany na właściwym koncie.`
            }
        },
        help: {
            title: () => `Pomoc`,
            doc: () => `Dokumentacja`,
            support: () => `Serwer wsparcia`
        },
        forms: {
            buttons: {
                enable: () => `Włącz wiadomości`,
                disable: () => `Wyłącz wiadomości`,
                update: () => `Aktualizuj wiadomości`
            },
            basic: {
                title: () => `Konfiguracja podstawowa`,
                language: () => `Język`,
                prefix: () => `Prefiks`,
                update: () => `Aktualizuj`
            },
            join: {
                title: () => `Wiadomości join`,
                message: {
                    title: () => `Wiadomość`,
                    default: () => `{user} dołączył do serwera! Zaproszony przez **{inviter.tag}** ({inviter.invites} zaproszeń).`
                },
                channel: {
                    title: () => `Kanał`
                },
            },
            leave: {
                title: () => `Wiadomości leave`,
                message: {
                    title: () => `Wiadomość`,
                    default: () => `{user.username} opuścił serwer. Został zaproszony przez **{inviter.tag}** ({inviter.invites} zaproszeń).`
                },
                channel: {
                    title: () => `Kanał`
                }
            },
            joinDM: {
                title: () => `Wiadomości DM join`,
                premium: () => `Ta funkcja jest dostępna dla serwerów premium i partnerskich.`,
                message: {
                    title: () => `Wiadomość`,
                    default: () => `Witaj {user}! Dołączyłeś do **{server}**! Zaproszony przez **{inviter.tag}**. Nie zapomnij przeczytać reguł serwera!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Proces usuwania zaproszeń serwera został uruchomiony... Możesz je przywrócić za pomocą polecenia \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Proces usuwania zaproszeń **${member.user.tag}}** został uruchomiony... Możesz je przywrócić za pomocą polecenia \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Zaproszenia zresetowane`,
        titles: {
            all: (prefix) => `${emojis.success} | Zaproszenia serwera zostały zresetowane! Możesz je przywrócić za pomocą polecenia \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Zaproszenia **${member.user.tag}}** zostały zresetowane! Możesz je przywrócić za pomocą polecenia \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Jesteś pewny, że chcesz przywrócić zaproszenia serwera? Wszyscy członkowie otrzymają zaproszenia sprzed ostatniego uruchomienia polecenia \`${prefix}remove-invites\` (lub 0, jeśli polecenie nigdy nie zostało uruchomione).\n\n:information_source: **Podsumowanie zaproszeń**:\nZostanie przywrócone, razem: **${memberCount.invites}** zwykłych, **${memberCount.bonus}** bonusu, **${memberCount.leaves}** wyjść, **${memberCount.fake}** fałszywych.\n\n${emojis.success} Wpisz \`-confirm\` aby potwierdzić.\n${emojis.error} Wpisz \`cancel\` aby anulować.`,
            member: (prefix, member) => `${emojis.warn} | Jesteś pewny, że chcesz przywrócić zaproszenia **${member.user.tag}}**? Otrzyma zaproszenia sprzed ostatniego uruchomienia polecenia \`${prefix}remove-invites\` (lub 0, jeśli polecenie nigdy nie zostało uruchomione).\n\n:information_source: **Podsumowanie zaproszeń**:\nZostanie przywrócone: **${member.data.old_invites}** zwykłych, **${member.data.old_bonus}** bonusu, **${member.data.old_leaves}** wyjść, **${member.data.old_fake}** fałszywych.\n\n${emojis.success} Wpisz \`-confirm\` aby potwierdzić.\n${emojis.error} Wpisz \`cancel\` aby anulować.`,
            cancelled: () => `${emojis.error} Anulowano.`
        },
        loading: {
            all: () => `${emojis.loading} | Proces przywracania zaproszeń serwera został uruchomiony....`,
            member: (member) => `${emojis.loading} | Proces przywracania zaproszeń **${member.user.tag}}** został uruchomiony...`
        },
        title: () => `☄️ Zaproszenia przywrócone`,
        titles: {
            all: () => `${emojis.success} | Zaproszenia serwera zostały przywrócone!`,
            member: (member) => `${emojis.success} | Zaproszenia **${member.user.tag}}** zostały przywrócone!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Brak zaproszeń do zsynchronizowania.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Jesteś pewny, że chcesz zsynchronizować zaproszenia serwera?\n\n:information_source: **Podsumowanie zaproszeń**:\n**${Math.round(inviteCount)}** zwykłych zaproszeń zostanie przywrócone.\n\n${emojis.success} Wpisz \`-confirm\` aby potwierdzić.\n${emojis.error} Wpisz \`cancel\` aby anulować.`,
            cancelled: () => `${emojis.error} Anulowano.`
        },
        title: () => `☄️ Zaproszenia zsynchronizowane`,
        titles: {
            all: () => `${emojis.success} | Zaproszenia serwera zostały zsynchronizowane!`
        }
    },

    add: {
        content: (id) => `Możesz dodać mnie do swojego serwera, klikając [tutaj](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Poproszono przez ${username}`
    },

    support: {
        content: (id) => `Możesz dołączyć do naszego serwera wsparcia, klikając [tutaj](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Poproszono przez ${username}`
    }

};
