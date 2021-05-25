const { emojis, discord } = require("../config");

module.exports = {

    locale: "fr_FR",

    utils: {
        prefix: (prefix) => `Mon préfixe actuel est \`${prefix}\`\nUtilisez \`${prefix}help\` pour plus d'aide.`,
        viewConf: () => `[Voir la configuration sur le dashboard](https://dash.invite-count.xyz)`,
        conf: {
            title: () => `Voir la configuration sur le dashboard`,
            content: () => `[ou sur le dashboard](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} a rejoint le serveur via OAuth.`,
                vanity: (user) => `${user} a rejoint le serveur en utilisant une invitation discord.gg définie par le propriétaire du serveur (ou un admin).`,
                unknown: (user) => `Je n'arrive pas à trouver comment ${user} a rejoint le serveur.`,
                perm: (user) => `${emojis.error} | J'ai besoin d'avoir les permissions de gérer le serveur pour savoir qui a invité ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} a quitté le serveur, il avait rejoint via OAuth.`,
                vanity: (user) => `${user} a quitté le serveur, il avait rejoint en utilisant une invitation discord.gg définie par le propriétaire du serveur (ou un admin).`,
                unknown: (user) => `${user} a quitté le serveur, mais je n'arrive pas à trouver comment il l'avait rejoint.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Permissions manquantes**__\n\nJ'ai besoin des permissions suivantes pour le bon fonctionnement de cette commande: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Cette commande est actuellement désactivée !`,
        permLevel: (name) => `${emojis.error} | Cette commande nécessite le niveau d'autorisation : \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Je n'ai pas la permission d'envoyer des messages dans ce salon !`,
        missingAdmin: () => `${emojis.error} | Il me faut la permission \`MANAGE_SERVEUR\` pour effectuer cette action`,
        missingMG: () => `${emojis.error} | Il me faut la permission \`Gérer le serveur\` pour effectuer cette action`
    },

    graph: {
        title: (server, days) => `Arrivées sur ${server} ces ${days} derniers jours`,
        content: (total, percent, from, to) => `**${total}** membres (c'est à dire **${percent}%** du serveur) ont rejoint le serveur du ${from} au ${to}:`,
        invalid: () => `Vous devez saisir un nombre de jours valide (supérieur à 1 et inférieur à 1000) pour être affiché !`,
        months: () =>[
            "Janv",
            "Fév",
            "Mars",
            "Avr",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Sept",
            "Oct",
            "Nov",
            "Déc"
        ],
        
    },


    help: {
        title: () => `ℹ Page d'aide de InviteCount`,
        description: (guildName, prefix) => `Gérez les invitations de votre serveur ! Bot de gestion des invitations facile à installer, rapide et puissant ! \n\nAccédez à la **documentation** en cliquant [ici](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderation**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Administration**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **General**`,
            content: (prefix) => "> `infos`, `stats`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Configuration**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Messages de départs`,
            content: (prefix) => "`"+ prefix +"configleave`,`"+ prefix +"setleave`,`"+ prefix +"testleave`"},
        // Invites
        invites: {
            title: () => `:wave: Invitations`,
            content: (prefix) => "`"+ prefix +"invite`,`"+ prefix +"leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Utilitaire`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Links :`,
        links: (clientID) => `[Ajoutez-moi](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [SiteWeb](https://invite-count.xyz) ● [Serveur de support](${discord}) ● [Votez pour moi](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: (client) => `**InviteCount**`,
        content: () => `Gérez les invitations de votre serveur ! Bot de gestion des invitations facile à installer, rapide et puissant !`,

        dev: {
            title: () => `**Informations**`,
            content: (uptime) => `<:arrow:766358167382523944> **Développeurs:** Alex.#7331, Alboom#2121\n <:arrow:766358167382523944> **Librairie:** [discord.js v12.3.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Uptime** ${uptime}\n <:arrow:766358167382523944> **Date de création:** 12 mai 2019`
        },
        statistics: {
            title: () => `**Statistiques**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Serveurs:** ${guilds}\n<:arrow:766358167382523944> **Utilisateurs**: ${channels}\n<:arrow:766358167382523944> **Salons:** ${users}`
        },
        link: {
            title: () => `**Liens**`,
            content: () => `<:arrow:766358167382523944> **Serveur Support:** [Clique ici](${discord})\n<:arrow:766358167382523944> **Invite:** [Clique ici](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount vous permet de gérer les membres de votre serveur en regardant leurs invitations.`,

        dev: {
            title: () => `**Développeurs :**`,
            content: (uptime) => `[Alex.#7331](https://github.com/ThisDudeBoy)\n[Alboom#2121](https://chillbot.me)`
        },
        statistics: {
            title: () => `**Inspiré de :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Remerciements particuliers aux :**`,
            content: () => `⭐ Donateurs\n\:flag_fr:  Traducteurs\n👨‍🏭 Aux membres de l'équipe de [**InviteCount**](https://discord.gg/f7f2P2q)`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Vous avez` : `**${member.user.username}** a`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** invitations! (**${memberData.invites}** ordinaires, **${memberData.bonus}** bonus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** faux, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** partis)${nextRank ? `\nIl vous faut encore **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** invitations pour atteindre le grade **${role}** !` : ""}`
    },

    leaderboard: {
        cleared: () => `${emojis.success} | Classement effacé !`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** invitations (**${member.invites}** ordinaires, **${member.bonus}** bonus, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** faux, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** partis)`,
        prompt: () => `{{user}}, sur quelle page voulez-vous aller ? Écrivez \`cancel\` or \`0\` pour annuler.`,
        title: () => `Classement des invitations`,
        empty: {
            title: () => `😕 Aucune invitation trouvée`,
            content: () => `Commencez à inviter des gens et vous apparaitrez sur cette page !`
        }
    },

    userinfo: {
        title: (user) => `Compte ${user.tag} (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `Création`
            },
            bot: {
                title: () => `Robot`,
                content: (user) => user.bot ? "Oui" : "Non"
            },
            // member
            joinedAt: {
                title: () => `Arrivée`
            },
            joinWay: {
                title: () => `Arrivée grâce à`,
                oauth: () => `Invitation oauth2 (via discordapp.com).`,
                vanity: () => `Invitation personnalisée configurée par un administrateur.`,
                unknown: (user) => `Impossible de déterminer comment ${user.username} a rejoint le serveur.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `Invitations`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** invitations (**${inviteData.invites}** ordinaires, **${inviteData.bonus}** bonus, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** faux, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** partis)`
            },
            joinOrder: {
                title: () => `Ordre d'arrivées`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Vous devez avoir la permission `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Veuillez mentionner un utilisateur",
            supperior: "<:error:753232040199192657> | Vous ne pouvez pas expulser un utilisateur qui est supérieur à vous",
            noperm: "<:error:753232040199192657> | Une erreur est survenue ... Veuillez vérifier que j'ai l'autorisation d'exclure ce membre spécifique et réessayer!",
            
        },
        description: "<:success:753232040073101363> | L'utilisateur a été expulsé avec succès",
        banneddm: (server, moderator, reason) => "Vous avez été expulsé de **" + server + "** par **" + moderator + "**\n**Raison** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Vous devez avoir la permission `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Veuillez mentionner un utilisateur",
            supperior: "<:error:753232040199192657> | Vous ne pouvez pas bannir un utilisateur qui est supérieur à vous",
            noperm: "<:error:753232040199192657> | Une erreur est survenue ... Veuillez vérifier que j'ai l'autorisation de bannir ce membre spécifique et réessayer!",
            
        },
        description: "<:success:753232040073101363> | L'utilisateur a été banni avec succès",
        banneddm: (server, moderator, reason) => "Vous avez été banni de **" + server + "** par **" + moderator + "**\n**Raison** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Veuillez spécifier un ID à débannir",
        success: (user) => "<:success:753232040073101363> | " + user + " a été débanni avec succès",
        noban: "<:error:753232040199192657> | Cet utilisateur n'est pas banni"
    },

    membercount: {
        title: (guildName) => `MemberCount de ${guildName}`,
        description: (guild, members) => `
        Un total de **${guild.members.cache.size}** membres (**${guild.members.cache.filter((m) => !m.user.bot).size}** humains et **${guild.members.cache.filter((m) => m.user.bot).size}** bots)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} membres (ne pas déranger)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} membres (en ligne)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} membres (afk)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} membres (hors-ligne)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Vous devez écrire le nombre d'invitations bonus que vous voulez ajouter. (Syntaxe : ${prefix}addbonus nombre @membre) **Vous devez inviter une personne réelle pour obtenir un rang disponible en récompense**`,
                incorrect: (prefix) => `${emojis.error} | Vous devez écrire un nombre __**valide**__ d'invitations bonus que vous voulez ajouter. (Syntaxe : ${prefix}addbonus nombre @membre)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Vous devez mentionner le membre auquel vous voulez ajouter les invitations bonus. (Syntaxe : ${prefix}addbonus nombre @membre)`
            }
        },
        title: () => `📥 Invitations Bonus Ajoutées`,
        field: (prefix, member) => `Écrivez \`${prefix}invites ${member.user.tag}\` pour voir le nouveau nombre d'invitations de **${member.user.username}** !`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Vous devez indiquer le nombre d'invitations bonus que vous souhaitez retirer. (Syntaxe : ${prefix}removebonus nombre @membre)`,
                incorrect: (prefix) => `${emojis.error} | You must write a __**valid**__ number of bonus invites that you want to remove. (Syntaxe : ${prefix}removebonus nombre @membre)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Vous devez mentionner le membre auquel vous souhaitez supprimer les invitations bonus. (Syntaxe : ${prefix}removebonus nombre @membre)`
            }
        },
        title: () => `📥 Invitations Bonus Retirées`,
        field: (prefix, member) => `Écrivez \`${prefix}invites ${member.user.tag}\` pour voir le nouveau nombre d'invitations de **${member.user.username}** !`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | Le système de messages d'arrivées en mp est maintenant __ACTIVÉ__ !**`,
        off: () => `**${emojis.success} | Le système de messages d'arrivées en mp est maintenant __DÉSACTIVÉ__ !**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Le système de messages d'arrivées est maintenant __ACTIVÉ__ !**`,
        off: () => `**${emojis.success} | Le système de messages d'arrivées est maintenant __DÉSACTIVÉ__ !**`
    },

    setleave: {
        on: () => `**${emojis.success} | Le système de messages de départs est maintenant __ACTIVÉ__ !**`,
        off: () => `**${emojis.success} | Le système de messages de départs est maintenant __DÉSACTIVÉ__ !**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Vous devez écrire un préfixe !`,
        success: () => `${emojis.success} | Le préfixe du serveur a été mis à jour !`
    },

    testdmjoin: {
        title: () => `:wrench: Système des messages d'arrivées en MP :`,
        description: () => `Si cela ne fonctionne pas, vérifiez les permissions du bot ou rejoignez notre [serveur support](${discord})`,
        fields: {
            enabled: () => `> Activés:`,
            message: () => `> Message:`
        },
        enabled: (prefix) => `${emojis.success} Messages d'arrivées en mp activés. Désactivez-les avec \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Messages d'arrivées en mp désactivés Activez-les avec \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Aucun message défini. Définissez-le avec \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Système des messages d'arrivées :`,
        description: () => `Si cela ne fonctionne pas, vérifiez les permissions du bot ou rejoignez notre [serveur support](${discord})`,
        fields: {
            enabled: () => `> Activés:`,
            channel: () => `> Salon:`,
            message: () => `> Message:`
        },
        enabled: (prefix) => `${emojis.success} Messages d'arrivées activés. Désactivez-les avec \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Messages d'arrivées désactivés. Activez-les avec \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Aucun message défini. Définissez-le avec \`${prefix}configjoin\`!`,
            channel: (prefix) => `Aucun salon défini. Définissez-le avec \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Système des messages de départs :`,
        description: () => `Si cela ne fonctionne pas, vérifiez les permissions du bot ou rejoignez notre [serveur support](${discord})`,
        fields: {
            enabled: () => `> Activés:`,
            channel: () => `> Salon:`,
            message: () => `> Message:`
        },
        enabled: (prefix) => `${emojis.success} Messages de départs activés. Désactivez-les avec \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Messages de départs désactivés. Activez-les avec \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Aucun message défini. Définissez-le avec \`${prefix}configleave\`!`,
            channel: (prefix) => `Aucun salon défini. Définissez-le avec \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Configuration de ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Messages d'arrivées`,
            content: (guild, data) => `
            > Activés: ${data.guild.join.enabled ? "**oui**" : "**non**"}
            > Message: ${data.guild.join.message ? "**défini**" : "**non défini**."}
            > Salon: ${!data.guild.join.channel ? "**non défini**" : (guild.channels.cache.get(data.guild.join.channel) ? "**défini**" : "**salon introuvable**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Messages de départs`,
            content: (guild, data) => `
            > Activés: ${data.guild.leave.enabled ? "**oui**" : "**non**"}
            > Message: ${data.guild.leave.message ? "**défini**" : "**non défini**."}
            > Salon: ${!data.guild.leave.channel ? "**non défini**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**défini**" : "**salon introuvable**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Messages d'arrivées en MP`,
            content: (guild, data) => `
            > Activés: ${data.guild.joinDM.enabled ? "**oui**" : "**non**"}
            > Message: ${data.guild.joinDM.message ? "**défini**" : "**non défini**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Hey, **${username}** ! Cette fonctionnalité est disponible seulement pour les serveurs premium et les partenaires. Deviens premium ici: **Comming soon** !`
    },

    antispam: {
        cooldown: (username) => `Tu envoies des messages trop vite! Veuillez patienter 5 secondes et réessayer!`
    },

    configdmjoin: {
        disable: (prefix) => `Tapez \`${prefix}setdmjoin\` pour désactiver les messages d'arrivées en mp.`,
        instruct: (str) => `
__**Plus d'informations**__
\`\`\`
{user} : Mentionne le membre qui vient de rejoindre votre serveur.
{user.name} : Le pseudo du membre qui vient de rejoindre votre serveur.
{user.tag} : Le tag du membre qui vient de rejoindre votre serveur.
{user.createdat} : L'âge du compte du membre.

{guild} : Nom du serveur.
{guild.count} : Nombre de membres que votre serveur a maintenant.

{inviter} : Mentionne l'inviteur.
{inviter.name} : Le nom de l'inviteur.
{inviter.tag} : Le tag de l'inviteur.
{inviter.invites} : Le nombre total d'invitations de l'inviteur.

{invite.code} : Le code d'invitation utilisé.
{invite.url} : L'url d'invitation utilisée.
{invite.uses} : Nombre d'utilisations du code d'invitation.
\`\`\`
Tapez \`cancel\` pour annuler. ${str}


:pencil: **| Écrivez maintenant le message d'arrivées en MP... :pencil2:**`,
        cancelled: () => `${emojis.error} | Annulé.`,
        success: () => `${emojis.success} **| Réalisé avec succès...**`,
        title: () => `**Le Msg d'Arrivées en MP a été mis en place**`,
        fields: {
            message: () => `Message:`,
            testIt: () => `Testez-le:`,
            cmd: (prefix) => `Utilisez \`${prefix}testdmjoin\` pour tester le nouveau message.`
        },
    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Votre message doit contenir moins de 850 caractères.`, 
        disable: (prefix) => `Utilisez \`${prefix}setjoin\` pour désactiver les messages d'arrivées.`,
        instructs: {
            message: (str) => `
__**Plus d'informations**__
\`\`\`
{user} : Mentionne le membre qui vient de rejoindre votre serveur.
{user.name} : Le pseudo du membre qui vient de rejoindre votre serveur.
{user.tag} : Le tag du membre qui vient de rejoindre votre serveur.
{user.createdat} : L'âge du compte du membre.

{guild} : Nom du serveur.
{guild.count} : Nombre de membres que votre serveur a maintenant.

{inviter} : Mentionne l'inviteur.
{inviter.name} : Le nom de l'inviteur.
{inviter.tag} : Le tag de l'inviteur.
{inviter.invites} : Le nombre total d'invitations de l'inviteur.

{invite.code} : Le code d'invitation utilisé.
{invite.url} : L'url d'invitation utilisée.
{invite.uses} : Nombre d'utilisations du code d'invitation.
\`\`\`
Tapez \`cancel\` pour annuler. ${str}


:pencil: **| Écrivez maintenant le message d'arrivées... :pencil2:**`,
            channel: () => `:scroll: **| Maintenant mentionnez le nom du salon des messages d'arrivées... :pencil2:**`
        },
        cancelled: () => `${emojis.error} | Annulé.`,
        success: () => `${emojis.success} **| Réalisé avec succès...**`,
        title: () => `**Le Msg d'Arrivées a été mis en place**`,
        fields: {
            message: () => `Message:`,
            channel: () => `Salon:`,
            testIt: () => `Testez-le:`,
            cmd: (prefix) => `Utilisez \`${prefix}testjoin\` pour tester le nouveau message.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Aucun salon trouvé pour \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Utilisez \`${prefix}setleave\` pour désactiver les messages de départs.`,
        instructs: {
            message: (str) => `
__**Plus d'informations**__
\`\`\`
{user} : Mentionne le membre qui vient de partir de votre serveur.
{user.name} : Le pseudo du membre qui vient de partir de votre serveur.
{user.tag} : Le tag du membre qui vient de partir de votre serveur.
{user.createdat} : L'âge du compte du membre.

{guild} : Nom du serveur.
{guild.count} : Nombre de membres que votre serveur a maintenant.

{inviter} : Mentionne l'inviteur.
{inviter.name} : Le nom de l'inviteur.
{inviter.tag} : Le tag de l'inviteur.
{inviter.invites} : Le nombre total d'invitations de l'inviteur.

{invite.code} : Le code d'invitation utilisé.
{invite.url} : L'url d'invitation utilisée.
{invite.uses} : Nombre d'utilisations du code d'invitation.
\`\`\`
Tapez \`cancel\` pour annuler. ${str}


:pencil: **| Écrivez maintenant le message de départs... :pencil2:**`,
        channel: () => `:scroll: **| Maintenant mentionnez le nom du salon des messages de départs... :pencil2:**`
        },
        cancelled: () => `${emojis.error} | Annulé.`,
        success: () => `${emojis.success} **| Done successfully...**`,
        title: () => `**Le Msg de Départs a été mis en place**`,
        fields: {
            message: () => `Message:`,
            channel: () => `Salon:`,
            testIt: () => `Testez-le:`,
            cmd: (prefix) => `Utilisez \`${prefix}testleave\` pour tester le nouveau message`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Aucun salon trouvé pour \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Vous devez entrer une langue valide !\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)`,
        success: () => `${emojis.success} | :flag_fr: La langue du serveur est maintenant en Français!`
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/v/francais/configuration/variables`
        },
        utils: {
            members: () => `membres`
        },
        conf: {
            title: () => `Configuration`
        },
        selector: {
            title: () => `Sélecteur`,
            manage: () => `Gérer`,
            no: {
                title: () => `Aucun serveur`,
                content: () => `Aucun serveur trouvé. Veuillez vérifier que vous êtes connecté avec le bon compte !`
            }
        },
        help: {
            title: () => `Aide`,
            doc: () => `Documentation`,
            support: () => `Serveur support`
        },
        ranks: {
            title: () => `🎯 Rôle récompenses`,
            no: (prefix) => `Aucun rôle récompense défini. Vous pouvez les configurer avec les commandes suivantes : ${prefix}addrank, ${prefix}removerank et ${prefix}ranks.`,
            fields: {
                role: () => `Rôle`,
                invites: () => `Invitations`
            }
        },
        forms: {
            buttons: {
                enable: () => `Activer les messages`,
                disable: () => `Désactiver les messages`,
                update: () => `Mettre à jour les messages`
            },
            basic: {
                title: () => `⚙️ Configuration basique`,
                language: () => `Langue`,
                prefix: () => `Préfixe`,
                update: () => `Mettre à jour`
            },
            join: {
                title: () => `🏁 Messages d'arrivées`,
                message: {
                    title: () => `Message`,
                    default: () => `{user} a rejoint le serveur ! Il a été invité par **{inviter.tag}** (qui a **{inviter.invites}** invitations).`
                },
                channel: {
                    title: () => `Salon`
                }
            },
            leave: {
                title: () => `🛫 Messages de départs`,
                message: {
                    title: () => `Message`,
                    default: () => `{user.username} a quitté le serveur. Il avait été invité par **{inviter.tag}** (qui a **{inviter.invites}** invitations).`
                },
                channel: {
                    title: () => `Salon`
                }
            },
            joinDM: {
                title: () => `🔔 Messages d'arrivées en MP`,
                premium: () => `Fonctionnalité disponible pour les serveurs premium et les partenaires.`,
                message: {
                    title: () => `Message`,
                    default: () => `Bienvenue {user} sur **{server} ! Tu as été invité par **{inviter.tag}**. N'oublie pas d'aller lire les règles du serveur !`
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Suppression des invitations du serveur en cours... Vous pourrez les restaurer avec la commande \`${prefix}restore-invites\` !`,
            member: (prefix, member) => `${emojis.loading} | Suppression des invitations de **${member.user.tag}** en cours... Vous pourrez les restaurer grâce à la commande \`${prefix}restore-invites ${member.user.tag}\` !`
        },
        title: () => `☄️ Invitations réinitialisées`,
        titles: {
            all: (prefix) => `${emojis.success} | Invitations du serveur réinitalisées ! Vous pouvez les restaurer grâce la commande \`${prefix}restore-invites\` !`,
            member: (prefix, member) => `${emojis.success} | Invitations de **${member.user.tag}** réinitalisées ! Vous pouvez les restaurer grâce à la commande \`${prefix}restore-invites ${member.user.tag}\` !`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Êtes-vous sur de vouloir restaurer les invitations du serveur ? Tous les membres récupèreront les invitations qu'ils avaient avant la dernière fois que la commande \`${prefix}remove-invites\` a été tapée (ou 0 si la commande n'a jamais été tapée).\n\n:information_source: **Aperçu des invitations**:\nIl sera restauré, au total: **${memberCount.invites}** ordinaires, **${memberCount.bonus}** bonus, **${memberCount.leaves}** partis, **${memberCount.fake}** fake.\n\n${emojis.success} Tapez \`-confirm\` pour confirmer.\n${emojis.error} Tapez \`cancel\` pour annuler.`,
            member: (prefix, member) => `${emojis.warn} | Êtes-vous sur de vouloir restaurer les invitations de **${member.user.tag}** ? Il récupèrera les invitations qu'il avait avant la dernière fois que la commande \`${prefix}remove-invites\` a été tapée (ou 0 si la commande n'a jamais été tapée).\n\n:information_source: **Aperçu des invitations**:\nIl sera restauré: **${member.data.old_invites}** ordinaires, **${member.data.old_bonus}** bonus, **${member.data.old_leaves}** partis, **${member.data.old_fake}** fake.\n\n${emojis.success} Tapez \`-confirm\` pour confirmer.\n${emojis.error} Tapez \`cancel\` pour annuler.`,
            cancelled: () => `${emojis.error} Annulé.`
        },
        loading: {
            all: () => `${emojis.loading} | Restauration des invitations du serveur en cours...`,
            member: (member) => `${emojis.loading} | Restauration des invitations de **${member.user.tag}** en cours...`
        },
        title: () => `☄️ Invitations restaurées`,
        titles: {
            all: () => `${emojis.success} | Invitations du serveur restaurées !`,
            member: (member) => `${emojis.success} | Invitations de **${member.user.tag}** restaurées !`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Aucune invitation à synchroniser n'est disponible.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Êtes-vous sur de vouloir synchroniser les invitations du serveur ?\n\n:information_source: **Aperçu des invitations**:\nIl sera restauré **${inviteCount}** invitations ordinaires.\n\n${emojis.success} Tapez \`-confirm\` pour confirmer.\n${emojis.error} Tapez \`cancel\` pour annuler.`,
            cancelled: () => `${emojis.error} Annulé.`
        },
        title: () => `☄️ Invitations synchronisées`,
        titles: {
            all: () => `${emojis.success} | Invitations du serveur synchronisées !`
        }
    },

    add: {
        content: (id) => `Vous pouvez m'ajouter sur votre serveur en cliquant [ici](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Demandé par ${username}`
    },

    support: {
        content: (id) => `Vous pouvez rejoindre le discord de support en cliquant [ici](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Demandé par ${username}`
    }

};
