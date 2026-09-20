const { emojis, discord } = require("../config");

module.exports = {

    locale: "ro_RO",

    utils: {
        prefix: (prefix) => `Prefixul meu actual este \`${prefix}\`\nFolosește \`${prefix}help\` pentru mai multe informații.`,
        viewConf: () => `[Vizionează configurația pe tabloul de bord](https://invite-count.xyz)`,
        conf: {
            title: () => `Vizionează configurația pe tabloul de bord`,
            content: () => `[sau pe tabloul de bord](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} s-a alăturat serverului prin OAuth.`,
                
                vanity: (user) => `${user} s-a alăturat serverului prin invitația discord.gg stabilită de proprietarul serverului.`,
                unknown: (user) => `Nu pot înțelege cum s-a alăturat ${user} serverului.`,
                perm: (user) => `${emojis.error} | Am nevoie de permisiuni de administrare a serverului pentru a ști cine a invitat ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} a plecat de pe server, s-a alăturat prin OAuth.`,
                vanity: (user) => `${user} a plecat de pe server, s-a alăturat prin invitația discord.gg stabilită de proprietarul serverului.`,
                unknown: (user) => `${user} a plecat de pe server, dar nu pot înțelege cum s-a alăturat.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Permisiuni lipsă**__\n\nAm nevoie de următoarele permisiuni pentru ca această comandă să funcționeze corect: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Această comandă este în prezent dezactivată!`,
        permLevel: (name) => `${emojis.error} | Această comandă necesită nivelul de permisiune: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Nu am permisiunea de a trimite mesaje pe acest canal.`,
        missingAdmin: () => `${emojis.error} | Am nevoie de permisiunea \`Administrare server\` pentru a efectua această acțiune`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Canalul curent este deja acest canal!`,
        success: () => `<:succes:851491428563812382> | Canalul de jurnal a fost setat cu succes.`
    },
    glist: {
        title: () => `🎁 Lista tombola`,
        description: (prefix) => `Folosește \`${prefix}gstart\` pentru a începe o tombolă. Se afișează doar tombolele incomplete`,
        fields: {
            name: () => `> Lista`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Se termină în ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Nu sunt tombole incomplete pe acest server`,

    },
    help: {
        title: () => `ℹ Pagina de ajutor InviteCount`,
        description: (guildName, prefix) => `InviteCount îți permite să gestionezi membrii serverului prin urmărirea invitațiilor.\n\n**Documentația** este disponibilă [aici](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderare**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Administrare**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **General**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Configurare**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Mesaje de plecare`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Tombole**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Invitații`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Instrumente`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Linkuri :`,
        links: (clientID) => `[Adaugă-mă](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Website](https://invite-count.xyz) ● [Server suport](${discord}) ● [Votează-mă](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount îți permite să gestionezi membrii serverului prin urmărirea invitațiilor.`,

        dev: {
            title: () => `**Informații**`,
            content: (uptime) => `<:arrow:766358167382523944> **Dezvoltatori:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Bibliotecă:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Timp de operare** ${uptime}\n <:arrow:766358167382523944> **Data creării:** 12 mai 2019`
        },
        statistics: {
            title: () => `**Statistici**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Servere:** ${guilds}\n<:arrow:766358167382523944> **Utilizatori**: ${channels}\n<:arrow:766358167382523944> **Canale:** ${users}`
        },
        link: {
            title: () => `**Linkuri**`,
            content: () => `<:arrow:766358167382523944> **Server suport:** [Apasă](${discord})\n<:arrow:766358167382523944> **Invitație:** [Apasă](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount îți permite să gestionezi membrii serverului prin urmărirea invitațiilor.`,

        dev: {
            title: () => `**Dezvoltatori :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inspirat de :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Mulțumiri speciale :**`,
            content: () => `⭐ **Androz** pentru ajutorul cu ManageInvite!\n🎁 **Pauldb09** pentru sistemul de giveaway\n👨‍🏭 Întreaga echipă & Traducători`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Ai` : `**${member.user.username}** are`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** invitații! (**${memberData.invites}** normale, **${memberData.bonus}** bonus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** false, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** plecări)${nextRank ? `\nAi nevoie de **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** mai multe invitații pentru a obține rangul următor: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Clasament șters!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** invitații (**${member.invites}** normale, **${member.bonus}** bonus, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** false, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** plecări)`,
        prompt: () => `{{user}}, pe ce pagină vrei să mergi? Tastează \`cancel\` sau \`0\` pentru a anula.`,
        title: () => `Clasament invitații`,
        empty: {
            title: () => `😕 Nicio invitație găsită`,
            content: () => `Începe să inviți oameni și vei apărea pe această pagină!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} cont (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Creat`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Da" : "Nu"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> S-a alăturat`
            },
            joinWay: {
                title: () => `Modalitate de alăturare`,
                oauth: () => `Invitație OAuth (prin discordapp.com).`,
                vanity: () => `Invitație personalizată stabilită de administrator.`,
                unknown: (user) => `Nu pot înțelege cum s-a alăturat utilizatorul ${user.username} serverului.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Invitații`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** invitații (**${inviteData.invites}** normale, **${inviteData.bonus}** bonus, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** false, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** plecări)`
            },
            joinOrder: {
                title: () => `➡️ Ordinea alăturării`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Trebuie să ai permisiunea `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Te rog menționează un utilizator",
            supperior: "<:error:753232040199192657> | Nu poți scoate un utilizator care este mai sus decât tine",
            noperm: "<:error:753232040199192657> | A apărut o eroare... Te rog verifică că am permisiunea de a scoate acest membru și încearcă din nou!",
            
        },
        description: "<:success:753232040073101363> | Utilizator scos.",
        banneddm: (server, moderator, reason) => "Ai fost scos de pe **" + server + "** de **" + moderator + "**\n**Motiv** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Trebuie să ai permisiunea `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Te rog menționează un utilizator",
            supperior: "<:error:753232040199192657> | Nu poți bloca un utilizator care este mai sus decât tine",
            noperm: "<:error:753232040199192657> | A apărut o eroare... Te rog verifică că am permisiunea de a bloca acest membru și încearcă din nou!",
            
        },
        description: "<:success:753232040073101363> | Utilizator blocat.",
        banneddm: (server, moderator, reason) => "Ai fost blocat de pe **" + server + "** de **" + moderator + "**\n**Motiv** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Te rog dă un ID pentru a debloca",
        success: (user) => "<:success:753232040073101363> | " + user + " dezblocat cu succes",
        noban: "<:error:753232040199192657> | Acest utilizator nu este blocat"
    },

    membercount: {
        title: (guildName) => `Numărul de membri din ${guildName}`,
        description: (guild) => `
        Total **${guild.members.cache.size}** membri (**${guild.members.cache.filter((m) => !m.user.bot).size}** oameni și **${guild.members.cache.filter((m) => m.user.bot).size}** boti)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} membri (nu deranja)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} membri (online)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} membri (inactiv)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} membri (offline)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Trebuie să specifici numărul de invitații bonus de adăugat. (Sintaxă: ${prefix}addbonus număr @membru) **Trebuie să inviți o persoană reală pentru a obține o recompensă**`,
                incorrect: (prefix) => `${emojis.error} | Trebuie să specifici un număr valid de invitații bonus de adăugat. (Sintaxă: ${prefix}addbonus număr @membru)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Trebuie să menționezi un membru pentru a adăuga invitații bonus. (Sintaxă: ${prefix}addbonus număr @membru)`
            }
        },
        title: () => `📥 Invitații bonus adăugate`,
        field: (prefix, member) => `Tastează \`${prefix}invites ${member.user.tag}\` pentru a vedea noul număr de invitații pentru **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Trebuie să specifici numărul de invitații bonus de eliminat. (Sintaxă: ${prefix}removebonus număr @membru)`,
                incorrect: (prefix) => `${emojis.error} | Trebuie să specifici un număr valid de invitații bonus de eliminat. (Sintaxă: ${prefix}removebonus număr @membru)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Trebuie să menționezi un membru pentru a elimina invitații bonus. (Sintaxă: ${prefix}removebonus număr @membru)`
            }
        },
        title: () => `📥 Invitații bonus eliminate`,
        field: (prefix, member) => `Tastează \`${prefix}invites ${member.user.tag}\` pentru a vedea noul număr de invitații pentru **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | Sistemul de alăturare DM este acum __ACTIVAT__!**`,
        off: () => `**${emojis.success} | Sistemul de alăturare DM este acum __DEZACTIVAT__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Sistemul de alăturare este acum __ACTIVAT__!**`,
        off: () => `**${emojis.success} | Sistemul de alăturare este acum __DEZACTIVAT__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Sistemul de plecare este acum __ACTIVAT__!**`,
        off: () => `**${emojis.success} | Sistemul de plecare este acum __DEZACTIVAT__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Trebuie să specifici un prefix!`,
        success: () => `${emojis.success} | Prefixul serverului a fost actualizat cu succes!`
    },

    testdmjoin: {
        title: () => `:wrench: Sistemul de alăturare DM :`,
        description: () => `Dacă aceasta nu funcționează, verifică permisiunile botului sau alătură-te [serverului de suport](${discord})`,
        fields: {
            enabled: () => `> Activat:`,
            message: () => `> Mesaj:`
        },
        enabled: (prefix) => `${emojis.success} Mesajele de alăturare DM sunt activate. Dezactivează cu \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Mesajele de alăturare DM sunt dezactivate. Activează cu \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Mesajul nu este definit. Setează cu \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Sistemul de alăturare :`,
        description: () => `Dacă aceasta nu funcționează, verifică permisiunile botului sau alătură-te [serverului de suport](${discord})`,
        fields: {
            enabled: () => `> Activat:`,
            channel: () => `> Canal:`,
            message: () => `> Mesaj:`
        },
        enabled: (prefix) => `${emojis.success} Mesajele de alăturare sunt activate. Dezactivează cu \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Mesajele de alăturare sunt dezactivate. Activează cu \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Mesajul nu este definit. Setează cu \`${prefix}configjoin\`!`,
            channel: (prefix) => `Canalul nu este definit. Setează cu \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Sistemul de plecare :`,
        description: () => `Dacă aceasta nu funcționează, verifică permisiunile botului sau alătură-te [serverului de suport](${discord})`,
        fields: {
            enabled: () => `> Activat:`,
            channel: () => `> Canal:`,
            message: () => `> Mesaj:`
        },
        enabled: (prefix) => `${emojis.success} Mesajele de plecare sunt activate. Dezactivează cu \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Mesajele de plecare sunt dezactivate. Activează cu \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Mesajul nu este definit. Setează cu \`${prefix}configleave\`!`,
            channel: (prefix) => `Canalul nu este definit. Setează cu \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Configurația ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Mesaje de alăturare`,
            content: (guild, data) => `
            > Activat: ${data.guild.join.enabled ? "**da**" : "**nu**"}
            > Mesaj: ${data.guild.join.message ? "**setat**" : "**nu este setat**."}
            > Canal: ${!data.guild.join.channel ? "**nu este setat**" : (guild.channels.cache.get(data.guild.join.channel) ? "**setat**" : "**canalul nu a fost găsit**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Mesaje de plecare`,
            content: (guild, data) => `
            > Activat: ${data.guild.leave.enabled ? "**da**" : "**nu**"}
            > Mesaj: ${data.guild.leave.message ? "**setat**" : "**nu este setat**."}
            > Canal: ${!data.guild.leave.channel ? "**nu este setat**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**setat**" : "**canalul nu a fost găsit**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Mesaje de alăturare DM`,
            content: (guild, data) => `
            > Activat: ${data.guild.joinDM.enabled ? "**da**" : "**nu**"}
            > Mesaj: ${data.guild.joinDM.message ? "**setat**" : "**nu este setat**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Salut, **${username}**! Această funcție este disponibilă doar pentru serverele premium și partener. Obține premium: **în curând** !`
    },

    antispam: {
        cooldown: (username) => `Încetinește! Te rog stai 5 secunde și încearcă din nou!`
    },

    configdmjoin: {
        disable: (prefix) => `Tastează \`${prefix}setdmjoin\` pentru a dezactiva mesajele de alăturare DM.`,
        instruct: (str) => `
__**Informații suplimentare**__
\`\`\`
{user} : Mențiunea membrului care s-a alăturat serverului.
{user.name} : Numele membrului care s-a alăturat serverului.
{user.tag} : Eticheta membrului care s-a alăturat serverului.
{user.createdat} : Vârsta contului membrului.

{guild} : Numele serverului.
{guild.count} : Numărul curent de membri pe serverul tău.

{inviter} : Mențiunea celui care a invitat.
{inviter.name} : Numele celui care a invitat.
{inviter.tag} : Eticheta celui care a invitat.
{inviter.invites} : Numărul total de invitații de la cel care a invitat.

{invite.code} : Codul de invitație utilizat.
{invite.url} : URL-ul invitației utilizat.
{invite.uses} : De câte ori a fost utilizat codul de invitație.
\`\`\`
Tastează \`cancel\` pentru a anula. ${str}


:pencil: **| Acum tastează mesajul de alăturare DM... :pencil2:**`,
        cancelled: () => `:x: Anulat.`,
        success: () => `✅ **| Gata..**`,
        title: () => `**Mesaj de alăturare DM setat**`,
        fields: {
            message: () => `Mesaj:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Folosește \`${prefix}testdmjoin\` pentru a testa noul mesaj.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Mesajul tău trebuie să fie mai mic de 850 de caractere.`, 
        disable: (prefix) => `Tastează \`${prefix}setjoin\` pentru a dezactiva mesajele de alăturare.`,
        instructs: {
            message: (str) => `
__**Informații suplimentare**__
\`\`\`
{user} : Mențiunea membrului care s-a alăturat serverului.
{user.name} : Numele membrului care s-a alăturat serverului.
{user.tag} : Eticheta membrului care s-a alăturat serverului.
{user.createdat} : Vârsta contului membrului.

{guild} : Numele serverului.
{guild.count} : Numărul curent de membri pe serverul tău.

{inviter} : Mențiunea celui care a invitat.
{inviter.name} : Numele celui care a invitat.
{inviter.tag} : Eticheta celui care a invitat.
{inviter.invites} : Numărul total de invitații de la cel care a invitat.

{invite.code} : Codul de invitație utilizat.
{invite.url} : URL-ul invitației utilizat.
{invite.uses} : De câte ori a fost utilizat codul de invitație.
\`\`\`
Tastează \`cancel\` pentru a anula. ${str}


:pencil: **| Acum tastează mesajul de alăturare... :pencil2:**`,
            channel: () => `:scroll: **| Acum menționează canalul... :pencil2:**`
        },
        cancelled: () => `:x: Anulat.`,
        success: () => `✅ **| Gata..**`,
        title: () => `**Mesaj de alăturare setat**`,
        fields: {
            message: () => `Mesaj:`,
            channel: () => `Canal:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Folosește \`${prefix}testjoin\` pentru a testa noul mesaj.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Niciun canal găsit pentru \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Tastează \`${prefix}setleave\` pentru a dezactiva mesajele de plecare.`,
        instructs: {
            message: (str) => `
__**Informații suplimentare**__
\`\`\`
{user} : Mențiunea membrului care a plecat din server.
{user.name} : Numele membrului care a plecat din server.
{user.tag} : Eticheta membrului care a plecat din server.
{user.createdat} : Vârsta contului membrului.

{guild} : Numele serverului.
{guild.count} : Numărul curent de membri pe serverul tău.

{inviter} : Mențiunea celui care a invitat.
{inviter.name} : Numele celui care a invitat.
{inviter.tag} : Eticheta celui care a invitat.
{inviter.invites} : Numărul total de invitații de la cel care a invitat.

{invite.code} : Codul de invitație utilizat.
{invite.url} : URL-ul invitației utilizat.
{invite.uses} : De câte ori a fost utilizat codul de invitație.
\`\`\`
Tastează \`cancel\` pentru a anula. ${str}


:pencil: **| Acum tastează mesajul de plecare... :pencil2:**`,
            channel: () => `:scroll: **| Acum menționează canalul... :pencil2:**`
        },
        cancelled: () => `:x: Anulat.`,
        success: () => `✅ **| Gata..**`,
        title: () => `**Mesaj de plecare setat**`,
        fields: {
            message: () => `Mesaj:`,
            channel: () => `Canal:`,
            testIt: () => `Test:`,
            cmd: (prefix) => `Folosește \`${prefix}testleave\` pentru a testa noul mesaj`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Niciun canal găsit pentru \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Trebuie să specifici o limbă validă!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)\n:flag_se: Svenska (\`sv\`)\n:flag_no: Norsk (\`no\`)\n:flag_dk: Dansk (\`da\`)\n:flag_fi: Suomi (\`fi\`)\n:flag_gr: Ελληνικά (\`el\`)\n:flag_cz: Čeština (\`cs\`)\n:flag_hu: Magyar (\`hu\`)\n:flag_ro: Română (\`ro\`)`,
        success: () => `${emojis.success} | :flag_ro: Limba serverului este acum română!`
    },

    graph: {
        title: (server, days) => `S-a alăturat la ${server} în ultimele ${days} zile`,
        content: (total, percent, from, to) => `**${total}** membri (adică **${percent}%** din server) s-au alăturat serverului de la ${from} la ${to}:`,
        invalid: () => `Trebuie să specifici un număr valid de zile (mai mare decât 1 și mai mic decât 1000) de afișat!`,
        months: () =>[
            "Ian",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Iun",
            "Iul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `membri`
        },
        conf: {
            title: () => `Configurare`
        },
        selector: {
            title: () => `Selector`,
            manage: () => `Gestionare`,
            no: {
                title: () => `Niciun server`,
                content: () => `Nu s-a găsit niciun server. Te rog verifică că ești conectat cu contul corect.`
            }
        },
        help: {
            title: () => `Ajutor`,
            doc: () => `Documentație`,
            support: () => `Server suport`
        },
        forms: {
            buttons: {
                enable: () => `Activează mesajele`,
                disable: () => `Dezactivează mesajele`,
                update: () => `Actualizează mesajele`
            },
            basic: {
                title: () => `Configurare de bază`,
                language: () => `Limba`,
                prefix: () => `Prefix`,
                update: () => `Actualizare`
            },
            join: {
                title: () => `Mesaje de alăturare`,
                message: {
                    title: () => `Mesaj`,
                    default: () => `{user} s-a alăturat serverului! Invitat de **{inviter.tag}** ({inviter.invites} invitații).`
                },
                channel: {
                    title: () => `Canal`
                },
            },
            leave: {
                title: () => `Mesaje de plecare`,
                message: {
                    title: () => `Mesaj`,
                    default: () => `{user.username} a plecat de pe server. A fost invitat de **{inviter.tag}** ({inviter.invites} invitații).`
                },
                channel: {
                    title: () => `Canal`
                }
            },
            joinDM: {
                title: () => `Mesaje de alăturare DM`,
                premium: () => `Această funcție este disponibilă pentru serverele premium și partener.`,
                message: {
                    title: () => `Mesaj`,
                    default: () => `Bun venit {user}! Te-ai alăturat la **{server}**! Invitat de **{inviter.tag}**. Nu uita să citești regulile serverului!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Procesul de eliminare a invitațiilor serverului a fost început... Poți să le restabilești cu comanda \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Procesul de eliminare a invitațiilor din **${member.user.tag}}** a fost început... Poți să le restabilești cu comanda \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Invitații resetate`,
        titles: {
            all: (prefix) => `${emojis.success} | Invitațiile serverului au fost resetate! Poți să le restabilești cu comanda \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Invitațiile din **${member.user.tag}}** au fost resetate! Poți să le restabilești cu comanda \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Ești sigur că vrei să restabilești invitațiile serverului? Toți membrii vor obține invitațiile de înainte de ultima rulare a comenzii \`${prefix}remove-invites\` (sau 0 dacă comanda nu a fost niciodată rulată).\n\n:information_source: **Rezumatul invitațiilor**:\nVor fi restabilite, total: **${memberCount.invites}** normale, **${memberCount.bonus}** bonus, **${memberCount.leaves}** plecări, **${memberCount.fake}** false.\n\n${emojis.success} Tastează \`-confirm\` pentru a confirma.\n${emojis.error} Tastează \`cancel\` pentru a anula.`,
            member: (prefix, member) => `${emojis.warn} | Ești sigur că vrei să restabilești invitațiile din **${member.user.tag}}**? Vei obține invitațiile de înainte de ultima rulare a comenzii \`${prefix}remove-invites\` (sau 0 dacă comanda nu a fost niciodată rulată).\n\n:information_source: **Rezumatul invitațiilor**:\nVor fi restabilite: **${member.data.old_invites}** normale, **${member.data.old_bonus}** bonus, **${member.data.old_leaves}** plecări, **${member.data.old_fake}** false.\n\n${emojis.success} Tastează \`-confirm\` pentru a confirma.\n${emojis.error} Tastează \`cancel\` pentru a anula.`,
            cancelled: () => `${emojis.error} Anulat.`
        },
        loading: {
            all: () => `${emojis.loading} | Procesul de restabilire a invitațiilor serverului a fost început....`,
            member: (member) => `${emojis.loading} | Procesul de restabilire a invitațiilor din **${member.user.tag}}** a fost început...`
        },
        title: () => `☄️ Invitații restabilite`,
        titles: {
            all: () => `${emojis.success} | Invitațiile serverului au fost restabilite!`,
            member: (member) => `${emojis.success} | Invitațiile din **${member.user.tag}}** au fost restabilite!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Nu sunt invitații de sincronizat.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Ești sigur că vrei să sincronizezi invitațiile serverului?\n\n:information_source: **Rezumatul invitațiilor**:\n**${Math.round(inviteCount)}** invitații normale vor fi restabilite.\n\n${emojis.success} Tastează \`-confirm\` pentru a confirma.\n${emojis.error} Tastează \`cancel\` pentru a anula.`,
            cancelled: () => `${emojis.error} Anulat.`
        },
        title: () => `☄️ Invitații sincronizate`,
        titles: {
            all: () => `${emojis.success} | Invitațiile serverului au fost sincronizate!`
        }
    },

    add: {
        content: (id) => `Poți să mă adaugi pe serverul tău făcând clic [aici](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Solicitat de ${username}`
    },

    support: {
        content: (id) => `Poți să te alături serverului nostru de suport făcând clic [aici](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Solicitat de ${username}`
    }

};
