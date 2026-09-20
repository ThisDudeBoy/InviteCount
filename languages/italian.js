const { emojis, discord } = require("../config");

module.exports = {

    locale: "it_IT",

    utils: {
        prefix: (prefix) => `Il mio prefisso attuale è \`${prefix}\`\nUsa \`${prefix}help\` per maggiore aiuto.`,
        viewConf: () => `[Visualizza la configurazione nel pannello](https://invite-count.xyz)`,
        conf: {
            title: () => `Visualizza la configurazione nel pannello`,
            content: () => `[o nel pannello](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} si è unito al server tramite OAuth.`,
                
                vanity: (user) => `${user} si è unito al server utilizzando l'invito discord.gg impostato dal proprietario del server.`,
                unknown: (user) => `Non riesco a capire come ${user} si è unito al server.`,
                perm: (user) => `${emojis.error} | Ho bisogno dell'autorizzazione per gestire il server per sapere chi ha invitato ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} ha lasciato il server, si era unito tramite OAuth.`,
                vanity: (user) => `${user} ha lasciato il server, si era unito tramite l'invito discord.gg impostato dal proprietario del server.`,
                unknown: (user) => `${user} ha lasciato il server, ma non riesco a capire come si sia unito.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Permessi mancanti**__\n\nHo bisogno dei seguenti permessi affinché questo comando funzioni correttamente: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Questo comando è attualmente disabilitato!`,
        permLevel: (name) => `${emojis.error} | Questo comando richiede il livello di autorizzazione: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Non ho l'autorizzazione per inviare messaggi in questo canale.`,
        missingAdmin: () => `${emojis.error} | Ho bisogno dell'autorizzazione \`Gestisci server\` per eseguire questa azione`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Il canale attuale è già questo canale!`,
        success: () => `<:succes:851491428563812382> | Canale di registro impostato con successo.`
    },
    glist: {
        title: () => `🎁 Elenco giveaway`,
        description: (prefix) => `Usa \`${prefix}gstart\` per avviare un giveaway. Vengono mostrati solo i giveaway non completati`,
        fields: {
            name: () => `> Elenco`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Termina in ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Non ci sono giveaway non completati in questo server`,

    },
    help: {
        title: () => `ℹ Pagina di aiuto di InviteCount`,
        description: (guildName, prefix) => `InviteCount ti permette di gestire i membri del tuo server tracciando gli inviti.\n\nLa **documentazione** è disponibile [qui](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderazione**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Amministrazione**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **Generale**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Configurazione**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Messaggi di uscita`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Giveaway**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Inviti`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Utilità`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Link :`,
        links: (clientID) => `[Aggiungimi](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Sito Web](https://invite-count.xyz) ● [Server di supporto](${discord}) ● [Votami](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount ti permette di gestire i membri del tuo server tracciando gli inviti.`,

        dev: {
            title: () => `**Informazioni**`,
            content: (uptime) => `<:arrow:766358167382523944> **Sviluppatori:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Libreria:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Tempo di attività** ${uptime}\n <:arrow:766358167382523944> **Data di creazione:** 12 maggio 2019`
        },
        statistics: {
            title: () => `**Statistiche**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Server:** ${guilds}\n<:arrow:766358167382523944> **Utenti**: ${channels}\n<:arrow:766358167382523944> **Canali:** ${users}`
        },
        link: {
            title: () => `**Link**`,
            content: () => `<:arrow:766358167382523944> **Server di supporto:** [Clicca](${discord})\n<:arrow:766358167382523944> **Invito:** [Clicca](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount ti permette di gestire i membri del tuo server tracciando gli inviti.`,

        dev: {
            title: () => `**Sviluppatori :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Ispirato da :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Ringraziamenti speciali :**`,
            content: () => `⭐ **Androz** per l'aiuto con ManageInvite!\n🎁 **Pauldb09** per il sistema di giveaway\n👨‍🏭 Tutto il team & Traduttori`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Hai` : `**${member.user.username}** ha`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** inviti! (**${memberData.invites}** normali, **${memberData.bonus}** bonus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** falsi, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** uscite)${nextRank ? `\nHai bisogno di **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** altri inviti per ottenere il rango successivo: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Classifica cancellata!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** inviti (**${member.invites}** normali, **${member.bonus}** bonus, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** falsi, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** uscite)`,
        prompt: () => `{{user}}, a quale pagina vuoi andare? Digita \`cancel\` o \`0\` per annullare.`,
        title: () => `Classifica inviti`,
        empty: {
            title: () => `😕 Nessun invito trovato`,
            content: () => `Inizia a invitare persone e apparirai in questa pagina!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} account (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Creazione`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Sì" : "No"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Partecipazione`
            },
            joinWay: {
                title: () => `Modalità di partecipazione`,
                oauth: () => `Invito OAuth (tramite discordapp.com).`,
                vanity: () => `Invito personalizzato impostato dall'amministratore.`,
                unknown: (user) => `Non riesco a capire come ${user.username} si sia unito al server.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Inviti`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** inviti (**${inviteData.invites}** normali, **${inviteData.bonus}** bonus, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** falsi, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** uscite)`
            },
            joinOrder: {
                title: () => `➡️ Ordine di partecipazione`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Devi avere l'autorizzazione `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Per favore, menziona un utente",
            supperior: "<:error:753232040199192657> | Non puoi espellere un utente superiore a te",
            noperm: "<:error:753232040199192657> | Si è verificato un errore... Per favore, verifica che abbia il permesso di espellere questo membro e riprova!",
            
        },
        description: "<:success:753232040073101363> | Utente espulso con successo",
        banneddm: (server, moderator, reason) => "Sei stato espulso da **" + server + "** da **" + moderator + "**\n**Motivo** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Devi avere l'autorizzazione `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Per favore, menziona un utente",
            supperior: "<:error:753232040199192657> | Non puoi bannare un utente superiore a te",
            noperm: "<:error:753232040199192657> | Si è verificato un errore... Per favore, verifica che abbia il permesso di bannare questo membro e riprova!",
            
        },
        description: "<:success:753232040073101363> | Utente bannato con successo",
        banneddm: (server, moderator, reason) => "Sei stato bannato da **" + server + "** da **" + moderator + "**\n**Motivo** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Per favore, specifica un ID per revocare il ban",
        success: (user) => "<:success:753232040073101363> | " + user + " è stato scannato con successo",
        noban: "<:error:753232040199192657> | Questo utente non è bannato"
    },

    membercount: {
        title: (guildName) => `Conteggio dei membri di ${guildName}`,
        description: (guild) => `
        Totale **${guild.members.cache.size}** membri (**${guild.members.cache.filter((m) => !m.user.bot).size}** persone e **${guild.members.cache.filter((m) => m.user.bot).size}** bot)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} membri (non disturbare)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} membri (online)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} membri (inattivo)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} membri (offline)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Devi specificare il numero di inviti bonus da aggiungere. (Sintassi: ${prefix}addbonus numero @membro) **Devi invitare una persona vera per ottenere una ricompensa**`,
                incorrect: (prefix) => `${emojis.error} | Devi specificare un numero valido di inviti bonus da aggiungere. (Sintassi: ${prefix}addbonus numero @membro)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Devi menzionare un membro per aggiungere inviti bonus. (Sintassi: ${prefix}addbonus numero @membro)`
            }
        },
        title: () => `📥 Inviti bonus aggiunti`,
        field: (prefix, member) => `Digita \`${prefix}invites ${member.user.tag}\` per vedere il nuovo numero di inviti di **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Devi specificare il numero di inviti bonus da rimuovere. (Sintassi: ${prefix}removebonus numero @membro)`,
                incorrect: (prefix) => `${emojis.error} | Devi specificare un numero valido di inviti bonus da rimuovere. (Sintassi: ${prefix}removebonus numero @membro)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Devi menzionare un membro per rimuovere inviti bonus. (Sintassi: ${prefix}removebonus numero @membro)`
            }
        },
        title: () => `📥 Inviti bonus rimossi`,
        field: (prefix, member) => `Digita \`${prefix}invites ${member.user.tag}\` per vedere il nuovo numero di inviti di **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | Sistema DM join è ora __ABILITATO__!**`,
        off: () => `**${emojis.success} | Sistema DM join è ora __DISABILITATO__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Sistema join è ora __ABILITATO__!**`,
        off: () => `**${emojis.success} | Sistema join è ora __DISABILITATO__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Sistema leave è ora __ABILITATO__!**`,
        off: () => `**${emojis.success} | Sistema leave è ora __DISABILITATO__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Devi specificare un prefisso!`,
        success: () => `${emojis.success} | Prefisso del server aggiornato!`
    },

    testdmjoin: {
        title: () => `:wrench: Sistema DM join :`,
        description: () => `Se non funziona, verifica i permessi del bot o unisciti al [server di supporto](${discord})`,
        fields: {
            enabled: () => `> Abilitato:`,
            message: () => `> Messaggio:`
        },
        enabled: (prefix) => `${emojis.success} Messaggi DM join abilitati. Disabilita con \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Messaggi DM join disabilitati. Abilita con \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Messaggio non definito. Configura con \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Sistema join :`,
        description: () => `Se non funziona, verifica i permessi del bot o unisciti al [server di supporto](${discord})`,
        fields: {
            enabled: () => `> Abilitato:`,
            channel: () => `> Canale:`,
            message: () => `> Messaggio:`
        },
        enabled: (prefix) => `${emojis.success} Messaggi join abilitati. Disabilita con \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Messaggi join disabilitati. Abilita con \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Messaggio non definito. Configura con \`${prefix}configjoin\`!`,
            channel: (prefix) => `Canale non definito. Configura con \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Sistema leave :`,
        description: () => `Se non funziona, verifica i permessi del bot o unisciti al [server di supporto](${discord})`,
        fields: {
            enabled: () => `> Abilitato:`,
            channel: () => `> Canale:`,
            message: () => `> Messaggio:`
        },
        enabled: (prefix) => `${emojis.success} Messaggi leave abilitati. Disabilita con \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Messaggi leave disabilitati. Abilita con \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Messaggio non definito. Configura con \`${prefix}configleave\`!`,
            channel: (prefix) => `Canale non definito. Configura con \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Configurazione di ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Messaggi join`,
            content: (guild, data) => `
            > Abilitato: ${data.guild.join.enabled ? "**sì**" : "**no**"}
            > Messaggio: ${data.guild.join.message ? "**impostato**" : "**non impostato**."}
            > Canale: ${!data.guild.join.channel ? "**non impostato**" : (guild.channels.cache.get(data.guild.join.channel) ? "**impostato**" : "**canale non trovato**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Messaggi leave`,
            content: (guild, data) => `
            > Abilitato: ${data.guild.leave.enabled ? "**sì**" : "**no**"}
            > Messaggio: ${data.guild.leave.message ? "**impostato**" : "**non impostato**."}
            > Canale: ${!data.guild.leave.channel ? "**non impostato**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**impostato**" : "**canale non trovato**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Messaggi DM join`,
            content: (guild, data) => `
            > Abilitato: ${data.guild.joinDM.enabled ? "**sì**" : "**no**"}
            > Messaggio: ${data.guild.joinDM.message ? "**impostato**" : "**non impostato**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Ciao, **${username}**! Questa funzione è disponibile solo per server premium e partner. Ottieni premium: **presto** !`
    },

    antispam: {
        cooldown: (username) => `Vai piano! Per favore, aspetta 5 secondi e riprova!`
    },

    configdmjoin: {
        disable: (prefix) => `Digita \`${prefix}setdmjoin\` per disabilitare i messaggi DM join.`,
        instruct: (str) => `
__**Informazioni Aggiuntive**__
\`\`\`
{user} : Menzione del membro che si è unito al server.
{user.name} : Nome del membro che si è unito al server.
{user.tag} : Tag del membro che si è unito al server.
{user.createdat} : Età dell'account del membro.

{guild} : Nome del server.
{guild.count} : Conteggio attuale dei membri del tuo server.

{inviter} : Menzione di chi ha invitato.
{inviter.name} : Nome di chi ha invitato.
{inviter.tag} : Tag di chi ha invitato.
{inviter.invites} : Numero totale di inviti di chi ha invitato.

{invite.code} : Codice di invito utilizzato.
{invite.url} : URL di invito utilizzato.
{invite.uses} : Numero di usi del codice di invito.
\`\`\`
Digita \`cancel\` per annullare. ${str}


:pencil: **| Ora scrivi il messaggio DM join... :pencil2:**`,
        cancelled: () => `:x: Annullato.`,
        success: () => `✅ **| Completato con successo...**`,
        title: () => `**Messaggio DM join impostato**`,
        fields: {
            message: () => `Messaggio:`,
            testIt: () => `Prova:`,
            cmd: (prefix) => `Usa \`${prefix}testdmjoin\` per testare il nuovo messaggio.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Il tuo messaggio deve essere inferiore a 850 caratteri.`, 
        disable: (prefix) => `Digita \`${prefix}setjoin\` per disabilitare i messaggi join.`,
        instructs: {
            message: (str) => `
__**Informazioni Aggiuntive**__
\`\`\`
{user} : Menzione del membro che si è unito al server.
{user.name} : Nome del membro che si è unito al server.
{user.tag} : Tag del membro che si è unito al server.
{user.createdat} : Età dell'account del membro.

{guild} : Nome del server.
{guild.count} : Conteggio attuale dei membri del tuo server.

{inviter} : Menzione di chi ha invitato.
{inviter.name} : Nome di chi ha invitato.
{inviter.tag} : Tag di chi ha invitato.
{inviter.invites} : Numero totale di inviti di chi ha invitato.

{invite.code} : Codice di invito utilizzato.
{invite.url} : URL di invito utilizzato.
{invite.uses} : Numero di usi del codice di invito.
\`\`\`
Digita \`cancel\` per annullare. ${str}


:pencil: **| Ora scrivi il messaggio join... :pencil2:**`,
            channel: () => `:scroll: **| Ora menziona il canale... :pencil2:**`
        },
        cancelled: () => `:x: Annullato.`,
        success: () => `✅ **| Completato con successo...**`,
        title: () => `**Messaggio join impostato**`,
        fields: {
            message: () => `Messaggio:`,
            channel: () => `Canale:`,
            testIt: () => `Prova:`,
            cmd: (prefix) => `Usa \`${prefix}testjoin\` per testare il nuovo messaggio.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Nessun canale trovato per \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Digita \`${prefix}setleave\` per disabilitare i messaggi leave.`,
        instructs: {
            message: (str) => `
__**Informazioni Aggiuntive**__
\`\`\`
{user} : Menzione del membro che ha lasciato il server.
{user.name} : Nome del membro che ha lasciato il server.
{user.tag} : Tag del membro che ha lasciato il server.
{user.createdat} : Età dell'account del membro.

{guild} : Nome del server.
{guild.count} : Conteggio attuale dei membri del tuo server.

{inviter} : Menzione di chi ha invitato.
{inviter.name} : Nome di chi ha invitato.
{inviter.tag} : Tag di chi ha invitato.
{inviter.invites} : Numero totale di inviti di chi ha invitato.

{invite.code} : Codice di invito utilizzato.
{invite.url} : URL di invito utilizzato.
{invite.uses} : Numero di usi del codice di invito.
\`\`\`
Digita \`cancel\` per annullare. ${str}


:pencil: **| Ora scrivi il messaggio leave... :pencil2:**`,
            channel: () => `:scroll: **| Ora menziona il canale... :pencil2:**`
        },
        cancelled: () => `:x: Annullato.`,
        success: () => `✅ **| Completato con successo...**`,
        title: () => `**Messaggio leave impostato**`,
        fields: {
            message: () => `Messaggio:`,
            channel: () => `Canale:`,
            testIt: () => `Prova:`,
            cmd: (prefix) => `Usa \`${prefix}testleave\` per testare il nuovo messaggio`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Nessun canale trovato per \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Devi specificare una lingua valida!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)`,
        success: () => `${emojis.success} | :flag_it: La lingua del server è ora Italiano!`
    },

    graph: {
        title: (server, days) => `Join su ${server} negli ultimi ${days} giorni`,
        content: (total, percent, from, to) => `**${total}** membri (cioè **${percent}%** del server) si sono uniti al server da ${from} a ${to}:`,
        invalid: () => `Devi inserire un numero valido di giorni (maggiore di 1 e minore di 1000) da visualizzare!`,
        months: () =>[
            "Gen",
            "Feb",
            "Mar",
            "Apr",
            "Mag",
            "Giu",
            "Lug",
            "Ago",
            "Set",
            "Ott",
            "Nov",
            "Dic"
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
            title: () => `Configurazione`
        },
        selector: {
            title: () => `Selettore`,
            manage: () => `Gestisci`,
            no: {
                title: () => `Nessun server`,
                content: () => `Nessun server trovato. Per favore, verifica di essere loggato con l'account corretto.`
            }
        },
        help: {
            title: () => `Aiuto`,
            doc: () => `Documentazione`,
            support: () => `Server di supporto`
        },
        forms: {
            buttons: {
                enable: () => `Abilita messaggi`,
                disable: () => `Disabilita messaggi`,
                update: () => `Aggiorna messaggi`
            },
            basic: {
                title: () => `Configurazione di base`,
                language: () => `Lingua`,
                prefix: () => `Prefisso`,
                update: () => `Aggiorna`
            },
            join: {
                title: () => `Messaggi join`,
                message: {
                    title: () => `Messaggio`,
                    default: () => `{user} si è unito al server! Invitato da **{inviter.tag}** ({inviter.invites} inviti).`
                },
                channel: {
                    title: () => `Canale`
                },
            },
            leave: {
                title: () => `Messaggi leave`,
                message: {
                    title: () => `Messaggio`,
                    default: () => `{user.username} ha lasciato il server. Era stato invitato da **{inviter.tag}** ({inviter.invites} inviti).`
                },
                channel: {
                    title: () => `Canale`
                }
            },
            joinDM: {
                title: () => `Messaggi DM join`,
                premium: () => `Questa funzione è disponibile per server premium e partner.`,
                message: {
                    title: () => `Messaggio`,
                    default: () => `Benvenuto {user}! Ti sei unito a **{server}**! Invitato da **{inviter.tag}**. Non dimenticare di leggere le regole del server!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Il processo di rimozione degli inviti del server è stato avviato... Puoi ripristinarli con il comando \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Il processo di rimozione degli inviti di **${member.user.tag}}** è stato avviato... Puoi ripristinarli con il comando \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Inviti ripristinati`,
        titles: {
            all: (prefix) => `${emojis.success} | Gli inviti del server sono stati ripristinati! Puoi ripristinarli con il comando \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Gli inviti di **${member.user.tag}}** sono stati ripristinati! Puoi ripristinarli con il comando \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Sei sicuro di voler ripristinare gli inviti del server? Tutti i membri riceveranno gli inviti da prima dell'ultima esecuzione del comando \`${prefix}remove-invites\` (o 0 se il comando non è mai stato eseguito).\n\n:information_source: **Riepilogo inviti**:\nSaranno ripristinati, totale: **${memberCount.invites}** normali, **${memberCount.bonus}** bonus, **${memberCount.leaves}** uscite, **${memberCount.fake}** falsi.\n\n${emojis.success} Digita \`-confirm\` per confermare.\n${emojis.error} Digita \`cancel\` per annullare.`,
            member: (prefix, member) => `${emojis.warn} | Sei sicuro di voler ripristinare gli inviti di **${member.user.tag}}**? Riceverà gli inviti da prima dell'ultima esecuzione del comando \`${prefix}remove-invites\` (o 0 se il comando non è mai stato eseguito).\n\n:information_source: **Riepilogo inviti**:\nSaranno ripristinati: **${member.data.old_invites}** normali, **${member.data.old_bonus}** bonus, **${member.data.old_leaves}** uscite, **${member.data.old_fake}** falsi.\n\n${emojis.success} Digita \`-confirm\` per confermare.\n${emojis.error} Digita \`cancel\` per annullare.`,
            cancelled: () => `${emojis.error} Annullato.`
        },
        loading: {
            all: () => `${emojis.loading} | Il processo di ripristino degli inviti del server è stato avviato....`,
            member: (member) => `${emojis.loading} | Il processo di ripristino degli inviti di **${member.user.tag}}** è stato avviato...`
        },
        title: () => `☄️ Inviti ripristinati`,
        titles: {
            all: () => `${emojis.success} | Gli inviti del server sono stati ripristinati!`,
            member: (member) => `${emojis.success} | Gli inviti di **${member.user.tag}}** sono stati ripristinati!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Non ci sono inviti da sincronizzare.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Sei sicuro di voler sincronizzare gli inviti del server?\n\n:information_source: **Riepilogo inviti**:\n**${Math.round(inviteCount)}** inviti normali saranno ripristinati.\n\n${emojis.success} Digita \`-confirm\` per confermare.\n${emojis.error} Digita \`cancel\` per annullare.`,
            cancelled: () => `${emojis.error} Annullato.`
        },
        title: () => `☄️ Inviti sincronizzati`,
        titles: {
            all: () => `${emojis.success} | Gli inviti del server sono stati sincronizzati!`
        }
    },

    add: {
        content: (id) => `Puoi aggiungermi al tuo server cliccando [qui](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Richiesto da ${username}`
    },

    support: {
        content: (id) => `Puoi unirti al nostro server di supporto cliccando [qui](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Richiesto da ${username}`
    }

};
