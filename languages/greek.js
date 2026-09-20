const { emojis, discord } = require("../config");

module.exports = {

    locale: "el_GR",

    utils: {
        prefix: (prefix) => `Το τρέχον πρόθεμά μου είναι \`${prefix}\`\nΧρησιμοποιήστε \`${prefix}help\` για περισσότερη βοήθεια.`,
        viewConf: () => `[Προβολή ρυθμίσεων στον πίνακα ελέγχου](https://invite-count.xyz)`,
        conf: {
            title: () => `Προβολή ρυθμίσεων στον πίνακα ελέγχου`,
            content: () => `[ή στον πίνακα ελέγχου](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} συμμετείχε στο διακομιστή μέσω OAuth.`,
                
                vanity: (user) => `${user} συμμετείχε στο διακομιστή μέσω της προσκλήσης discord.gg που ορίστηκε από τον ιδιοκτήτη του διακομιστή.`,
                unknown: (user) => `Δεν μπορώ να καταλάβω πώς ${user} συμμετείχε στο διακομιστή.`,
                perm: (user) => `${emojis.error} | Χρειάζομαι δικαιώματα διαχείρισης διακομιστή για να ξέρω ποιος προσκάλεσε ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} έφυγε από το διακομιστή, είχε συμμετάσχει μέσω OAuth.`,
                vanity: (user) => `${user} έφυγε από το διακομιστή, είχε συμμετάσχει μέσω της προσκλήσης discord.gg που ορίστηκε από τον ιδιοκτήτη του διακομιστή.`,
                unknown: (user) => `${user} έφυγε από το διακομιστή, αλλά δεν μπορώ να καταλάβω πώς αυτό συμμετείχε.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Ελλείπουσες δικαιώματα**__\n\nΧρειάζομαι τα ακόλουθα δικαιώματα για να λειτουργήσει σωστά αυτή η εντολή: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Αυτή η εντολή είναι προς το παρόν απενεργοποιημένη!`,
        permLevel: (name) => `${emojis.error} | Αυτή η εντολή απαιτεί επίπεδο δικαιώματος: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Δεν έχω δικαίωμα να στέλνω μηνύματα σε αυτό το κανάλι.`,
        missingAdmin: () => `${emojis.error} | Χρειάζομαι την άδεια \`Διαχείρισης Διακομιστή\` για να εκτελέσω αυτήν την ενέργεια`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Το τρέχον κανάλι είναι ήδη αυτό το κανάλι!`,
        success: () => `<:succes:851491428563812382> | Το κανάλι αρχείου καταγραφής ορίστηκε με επιτυχία.`
    },
    glist: {
        title: () => `🎁 Λίστα διανομών`,
        description: (prefix) => `Χρησιμοποιήστε \`${prefix}gstart\` για να ξεκινήσετε μια διανομή. Εμφανίζονται μόνο ημιτελείς διανομές`,
        fields: {
            name: () => `> Λίστα`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Λήγει σε ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Δεν υπάρχουν ημιτελείς διανομές σε αυτό το διακομιστή`,

    },
    help: {
        title: () => `ℹ Σελίδα βοήθειας InviteCount`,
        description: (guildName, prefix) => `Το InviteCount σας επιτρέπει να διαχειριστείτε τα μέλη του διακομιστή παρακολουθώντας τις προσκλήσεις.\n\n**Η τεκμηρίωση** είναι διαθέσιμη [εδώ](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Διαμεσολάβηση**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Διαχείριση**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **Γενικά**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Ρύθμιση**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Μηνύματα αναχώρησης`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Διανομές**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Προσκλήσεις`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Εργαλεία`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Σύνδεσμοι :`,
        links: (clientID) => `[Προσθέστε με](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Ιστοσελίδα](https://invite-count.xyz) ● [Διακομιστή υpoστήριξης](${discord}) ● [Ψηφίστε με](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `Το InviteCount σας επιτρέπει να διαχειριστείτε τα μέλη του διακομιστή παρακολουθώντας τις προσκλήσεις.`,

        dev: {
            title: () => `**Πληροφορίες**`,
            content: (uptime) => `<:arrow:766358167382523944> **Ανάπτυξη:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Βιβλιοθήκη:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Χρόνος λειτουργίας** ${uptime}\n <:arrow:766358167382523944> **Ημερομηνία δημιουργίας:** 12 Μαΐου 2019`
        },
        statistics: {
            title: () => `**Στατιστικά**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Διακομιστές:** ${guilds}\n<:arrow:766358167382523944> **Χρήστες**: ${channels}\n<:arrow:766358167382523944> **Κανάλια:** ${users}`
        },
        link: {
            title: () => `**Σύνδεσμοι**`,
            content: () => `<:arrow:766358167382523944> **Διακομιστή υpoστήριξης:** [Κάντε κλικ](${discord})\n<:arrow:766358167382523944> **Πρόσκληση:** [Κάντε κλικ](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `Το InviteCount σας επιτρέπει να διαχειριστείτε τα μέλη του διακομιστή παρακολουθώντας τις προσκλήσεις.`,

        dev: {
            title: () => `**Ανάπτυξη :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Εμπνευσμένα από :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Ειδικά ευχαριστώ :**`,
            content: () => `⭐ **Androz** για τη βοήθεια με ManageInvite!\n🎁 **Pauldb09** για το σύστημα δώρων\n👨‍🏭 Ολόκληρη η ομάδα & Μεταφραστές`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Έχετε` : `**${member.user.username}** έχει`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** προσκλήσεις! (**${memberData.invites}** κανονικές, **${memberData.bonus}** μπόνους, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** ψευδείς, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** αναχωρήσεις)${nextRank ? `\nΧρειάζεστε **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** περισσότερες προσκλήσεις για να φτάσετε την επόμενη βαθμίδα: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Κατάλογος κατάταξης διαγράφηκε!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** προσκλήσεις (**${member.invites}** κανονικές, **${member.bonus}** μπόνους, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** ψευδείς, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** αναχωρήσεις)`,
        prompt: () => `{{user}}, σε ποια σελίδα θέλετε να πάτε; Πληκτρολογήστε \`cancel\` ή \`0\` για ακύρωση.`,
        title: () => `Κατάλογος κατάταξης προσκλήσεων`,
        empty: {
            title: () => `😕 Δεν βρέθηκαν προσκλήσεις`,
            content: () => `Αρχίστε να προσκαλείτε ανθρώπους και θα εμφανιστείτε σε αυτήν τη σελίδα!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} λογαριασμό (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Δημιουργία`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Μπότ`,
                content: (user) => user.bot ? "Ναι" : "Όχι"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Συμμετείχε`
            },
            joinWay: {
                title: () => `Τρόπος συμμετοχής`,
                oauth: () => `Πρόσκληση OAuth (μέσω discordapp.com).`,
                vanity: () => `Προσαρμοσμένη πρόσκληση που ορίστηκε από τον διαχειριστή.`,
                unknown: (user) => `Δεν μπορώ να καταλάβω πώς ο χρήστης ${user.username} συμμετείχε στο διακομιστή.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Προσκλήσεις`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** προσκλήσεις (**${inviteData.invites}** κανονικές, **${inviteData.bonus}** μπόνους, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** ψευδείς, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** αναχωρήσεις)`
            },
            joinOrder: {
                title: () => `➡️ Σειρά συμμετοχής`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Πρέπει να έχετε δικαίωμα `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Παρακαλώ αναφέρετε έναν χρήστη",
            supperior: "<:error:753232040199192657> | Δεν μπορείτε να διώξετε έναν χρήστη που είναι ψηλότερος από εσάς",
            noperm: "<:error:753232040199192657> | Προέκυψε σφάλμα... Παρακαλώ ελέγξτε ότι έχω δικαίωμα να διώξω αυτό το μέλος και δοκιμάστε ξανά!",
            
        },
        description: "<:success:753232040073101363> | Χρήστης διώχθηκε.",
        banneddm: (server, moderator, reason) => "Διωχθήκατε από **" + server + "** από **" + moderator + "**\n**Λόγος** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Πρέπει να έχετε δικαίωμα `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Παρακαλώ αναφέρετε έναν χρήστη",
            supperior: "<:error:753232040199192657> | Δεν μπορείτε να αποκλείσετε έναν χρήστη που είναι ψηλότερος από εσάς",
            noperm: "<:error:753232040199192657> | Προέκυψε σφάλμα... Παρακαλώ ελέγξτε ότι έχω δικαίωμα να αποκλείσω αυτό το μέλος και δοκιμάστε ξανά!",
            
        },
        description: "<:success:753232040073101363> | Χρήστης αποκλείστηκε.",
        banneddm: (server, moderator, reason) => "Αποκλείστηκατε από **" + server + "** από **" + moderator + "**\n**Λόγος** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Παρακαλώ δώστε ένα ID για άρση απαγόρευσης",
        success: (user) => "<:success:753232040073101363> | " + user + " αρθείσης απαγόρευσης επιτυχώς",
        noban: "<:error:753232040199192657> | Αυτός ο χρήστης δεν έχει αποκλειστεί"
    },

    membercount: {
        title: (guildName) => `Αριθμός μελών ${guildName}`,
        description: (guild) => `
        Συνολικά **${guild.members.cache.size}** μέλη (**${guild.members.cache.filter((m) => !m.user.bot).size}** άνθρωποι και **${guild.members.cache.filter((m) => m.user.bot).size}** μπότ)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} μέλη (μην ενοχλείτε)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} μέλη (ενεργός)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} μέλη (αδρανής)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} μέλη (χωρίς σύνδεση)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Πρέπει να καθορίσετε τον αριθμό των προσκλήσεων μπόνους που θα προστεθούν. (Σύνταξη: ${prefix}addbonus αριθμός @μέλος) **Πρέπει να προσκαλέσετε ένα πραγματικό άτομο για να λάβετε ένα δώρο**`,
                incorrect: (prefix) => `${emojis.error} | Πρέπει να καθορίσετε έναν έγκυρο αριθμό προσκλήσεων μπόνους που θα προστεθούν. (Σύνταξη: ${prefix}addbonus αριθμός @μέλος)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Πρέπει να αναφέρετε ένα μέλος για να προσθέσετε προσκλήσεις μπόνους. (Σύνταξη: ${prefix}addbonus αριθμός @μέλος)`
            }
        },
        title: () => `📥 Προσθήκη προσκλήσεων μπόνους`,
        field: (prefix, member) => `Πληκτρολογήστε \`${prefix}invites ${member.user.tag}\` για να δείτε τον νέο αριθμό προσκλήσεων για **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Πρέπει να καθορίσετε τον αριθμό των προσκλήσεων μπόνους που θα αφαιρεθούν. (Σύνταξη: ${prefix}removebonus αριθμός @μέλος)`,
                incorrect: (prefix) => `${emojis.error} | Πρέπει να καθορίσετε έναν έγκυρο αριθμό προσκλήσεων μπόνους που θα αφαιρεθούν. (Σύνταξη: ${prefix}removebonus αριθμός @μέλος)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Πρέπει να αναφέρετε ένα μέλος για να αφαιρέσετε προσκλήσεις μπόνους. (Σύνταξη: ${prefix}removebonus αριθμός @μέλος)`
            }
        },
        title: () => `📥 Αφαίρεση προσκλήσεων μπόνους`,
        field: (prefix, member) => `Πληκτρολογήστε \`${prefix}invites ${member.user.tag}\` για να δείτε τον νέο αριθμό προσκλήσεων για **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | Το σύστημα DM join είναι τώρα __ΕΝΕΡΓΟΠΟΙΗΜΕΝΟ__!**`,
        off: () => `**${emojis.success} | Το σύστημα DM join είναι τώρα __ΑΠΕΝΕΡΓΟΠΟΙΗΜΕΝΟ__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Το σύστημα join είναι τώρα __ΕΝΕΡΓΟΠΟΙΗΜΕΝΟ__!**`,
        off: () => `**${emojis.success} | Το σύστημα join είναι τώρα __ΑΠΕΝΕΡΓΟΠΟΙΗΜΕΝΟ__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Το σύστημα leave είναι τώρα __ΕΝΕΡΓΟΠΟΙΗΜΕΝΟ__!**`,
        off: () => `**${emojis.success} | Το σύστημα leave είναι τώρα __ΑΠΕΝΕΡΓΟΠΟΙΗΜΕΝΟ__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Πρέπει να καθορίσετε ένα πρόθεμα!`,
        success: () => `${emojis.success} | Το πρόθεμα του διακομιστή ενημερώθηκε με επιτυχία!`
    },

    testdmjoin: {
        title: () => `:wrench: Σύστημα DM join :`,
        description: () => `Εάν αυτό δεν λειτουργεί, ελέγξτε τα δικαιώματα του μπότ ή συμμετάσχετε στο [διακομιστή υποστήριξης](${discord})`,
        fields: {
            enabled: () => `> Ενεργοποιημένο:`,
            message: () => `> Μήνυμα:`
        },
        enabled: (prefix) => `${emojis.success} Τα μηνύματα DM join είναι ενεργοποιημένα. Απενεργοποιήστε με \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Τα μηνύματα DM join είναι απενεργοποιημένα. Ενεργοποιήστε με \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Μήνυμα δεν ορίστηκε. Ορίστε με \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Σύστημα join :`,
        description: () => `Εάν αυτό δεν λειτουργεί, ελέγξτε τα δικαιώματα του μπότ ή συμμετάσχετε στο [διακομιστή υποστήριξης](${discord})`,
        fields: {
            enabled: () => `> Ενεργοποιημένο:`,
            channel: () => `> Κανάλι:`,
            message: () => `> Μήνυμα:`
        },
        enabled: (prefix) => `${emojis.success} Τα μηνύματα join είναι ενεργοποιημένα. Απενεργοποιήστε με \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Τα μηνύματα join είναι απενεργοποιημένα. Ενεργοποιήστε με \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Μήνυμα δεν ορίστηκε. Ορίστε με \`${prefix}configjoin\`!`,
            channel: (prefix) => `Κανάλι δεν ορίστηκε. Ορίστε με \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Σύστημα leave :`,
        description: () => `Εάν αυτό δεν λειτουργεί, ελέγξτε τα δικαιώματα του μπότ ή συμμετάσχετε στο [διακομιστή υποστήριξης](${discord})`,
        fields: {
            enabled: () => `> Ενεργοποιημένο:`,
            channel: () => `> Κανάλι:`,
            message: () => `> Μήνυμα:`
        },
        enabled: (prefix) => `${emojis.success} Τα μηνύματα leave είναι ενεργοποιημένα. Απενεργοποιήστε με \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Τα μηνύματα leave είναι απενεργοποιημένα. Ενεργοποιήστε με \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Μήνυμα δεν ορίστηκε. Ορίστε με \`${prefix}configleave\`!`,
            channel: (prefix) => `Κανάλι δεν ορίστηκε. Ορίστε με \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Διαμόρφωση του ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Μηνύματα join`,
            content: (guild, data) => `
            > Ενεργοποιημένο: ${data.guild.join.enabled ? "**ναι**" : "**όχι**"}
            > Μήνυμα: ${data.guild.join.message ? "**ορίστηκε**" : "**δεν ορίστηκε**."}
            > Κανάλι: ${!data.guild.join.channel ? "**δεν ορίστηκε**" : (guild.channels.cache.get(data.guild.join.channel) ? "**ορίστηκε**" : "**κανάλι δεν βρέθηκε**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Μηνύματα leave`,
            content: (guild, data) => `
            > Ενεργοποιημένο: ${data.guild.leave.enabled ? "**ναι**" : "**όχι**"}
            > Μήνυμα: ${data.guild.leave.message ? "**ορίστηκε**" : "**δεν ορίστηκε**."}
            > Κανάλι: ${!data.guild.leave.channel ? "**δεν ορίστηκε**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**ορίστηκε**" : "**κανάλι δεν βρέθηκε**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Μηνύματα DM join`,
            content: (guild, data) => `
            > Ενεργοποιημένο: ${data.guild.joinDM.enabled ? "**ναι**" : "**όχι**"}
            > Μήνυμα: ${data.guild.joinDM.message ? "**ορίστηκε**" : "**δεν ορίστηκε**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Γεια σας, **${username}**! Αυτή η λειτουργία είναι διαθέσιμη μόνο για διακομιστές premium και συνεργάτες. Αποκτήστε premium: **σύντομα** !`
    },

    antispam: {
        cooldown: (username) => `Χαλάρωση! Παρακαλώ περιμένετε 5 δευτερόλεπτα και δοκιμάστε ξανά!`
    },

    configdmjoin: {
        disable: (prefix) => `Πληκτρολογήστε \`${prefix}setdmjoin\` για απενεργοποίηση των μηνυμάτων DM join.`,
        instruct: (str) => `
__**Πρόσθετες Πληροφορίες**__
\`\`\`
{user} : Αναφορά του μέλους που συμμετείχε στο διακομιστή.
{user.name} : Όνομα του μέλους που συμμετείχε στο διακομιστή.
{user.tag} : Ετικέτα του μέλους που συμμετείχε στο διακομιστή.
{user.createdat} : Ηλικία του λογαριασμού του μέλους.

{guild} : Όνομα του διακομιστή.
{guild.count} : Τρέχων αριθμός μελών του διακομιστή σας.

{inviter} : Αναφορά του προσκαλούντος.
{inviter.name} : Όνομα του προσκαλούντος.
{inviter.tag} : Ετικέτα του προσκαλούντος.
{inviter.invites} : Σύνολο προσκλήσεων του προσκαλούντος.

{invite.code} : Χρησιμοποιούμενος κώδικας πρόσκλησης.
{invite.url} : Χρησιμοποιούμενη διεύθυνση URL πρόσκλησης.
{invite.uses} : Πόσες φορές έχει χρησιμοποιηθεί ο κωδικός πρόσκλησης.
\`\`\`
Πληκτρολογήστε \`cancel\` για ακύρωση. ${str}


:pencil: **| Πληκτρολογήστε τώρα το μήνυμα DM join... :pencil2:**`,
        cancelled: () => `:x: Ακύρωση.`,
        success: () => `✅ **| Ολοκληρώθηκε.**`,
        title: () => `**Μήνυμα DM join ορίστηκε**`,
        fields: {
            message: () => `Μήνυμα:`,
            testIt: () => `Δοκιμή:`,
            cmd: (prefix) => `Χρησιμοποιήστε \`${prefix}testdmjoin\` για δοκιμή του νέου μηνύματος.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Το μήνυμά σας πρέπει να είναι μικρότερο από 850 χαρακτήρες.`, 
        disable: (prefix) => `Πληκτρολογήστε \`${prefix}setjoin\` για απενεργοποίηση των μηνυμάτων join.`,
        instructs: {
            message: (str) => `
__**Πρόσθετες Πληροφορίες**__
\`\`\`
{user} : Αναφορά του μέλους που συμμετείχε στο διακομιστή.
{user.name} : Όνομα του μέλους που συμμετείχε στο διακομιστή.
{user.tag} : Ετικέτα του μέλους που συμμετείχε στο διακομιστή.
{user.createdat} : Ηλικία του λογαριασμού του μέλους.

{guild} : Όνομα του διακομιστή.
{guild.count} : Τρέχων αριθμός μελών του διακομιστή σας.

{inviter} : Αναφορά του προσκαλούντος.
{inviter.name} : Όνομα του προσκαλούντος.
{inviter.tag} : Ετικέτα του προσκαλούντος.
{inviter.invites} : Σύνολο προσκλήσεων του προσκαλούντος.

{invite.code} : Χρησιμοποιούμενος κώδικας πρόσκλησης.
{invite.url} : Χρησιμοποιούμενη διεύθυνση URL πρόσκλησης.
{invite.uses} : Πόσες φορές έχει χρησιμοποιηθεί ο κωδικός πρόσκλησης.
\`\`\`
Πληκτρολογήστε \`cancel\` για ακύρωση. ${str}


:pencil: **| Πληκτρολογήστε τώρα το μήνυμα join... :pencil2:**`,
            channel: () => `:scroll: **| Αναφέρετε τώρα το κανάλι... :pencil2:**`
        },
        cancelled: () => `:x: Ακύρωση.`,
        success: () => `✅ **| Ολοκληρώθηκε.**`,
        title: () => `**Μήνυμα join ορίστηκε**`,
        fields: {
            message: () => `Μήνυμα:`,
            channel: () => `Κανάλι:`,
            testIt: () => `Δοκιμή:`,
            cmd: (prefix) => `Χρησιμοποιήστε \`${prefix}testjoin\` για δοκιμή του νέου μηνύματος.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Δεν βρέθηκε κανάλι για \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Πληκτρολογήστε \`${prefix}setleave\` για απενεργοποίηση των μηνυμάτων leave.`,
        instructs: {
            message: (str) => `
__**Πρόσθετες Πληροφορίες**__
\`\`\`
{user} : Αναφορά του μέλους που έφυγε από το διακομιστή.
{user.name} : Όνομα του μέλους που έφυγε από το διακομιστή.
{user.tag} : Ετικέτα του μέλους που έφυγε από το διακομιστή.
{user.createdat} : Ηλικία του λογαριασμού του μέλους.

{guild} : Όνομα του διακομιστή.
{guild.count} : Τρέχων αριθμός μελών του διακομιστή σας.

{inviter} : Αναφορά του προσκαλούντος.
{inviter.name} : Όνομα του προσκαλούντος.
{inviter.tag} : Ετικέτα του προσκαλούντος.
{inviter.invites} : Σύνολο προσκλήσεων του προσκαλούντος.

{invite.code} : Χρησιμοποιούμενος κώδικας πρόσκλησης.
{invite.url} : Χρησιμοποιούμενη διεύθυνση URL πρόσκλησης.
{invite.uses} : Πόσες φορές έχει χρησιμοποιηθεί ο κωδικός πρόσκλησης.
\`\`\`
Πληκτρολογήστε \`cancel\` για ακύρωση. ${str}


:pencil: **| Πληκτρολογήστε τώρα το μήνυμα leave... :pencil2:**`,
            channel: () => `:scroll: **| Αναφέρετε τώρα το κανάλι... :pencil2:**`
        },
        cancelled: () => `:x: Ακύρωση.`,
        success: () => `✅ **| Ολοκληρώθηκε.**`,
        title: () => `**Μήνυμα leave ορίστηκε**`,
        fields: {
            message: () => `Μήνυμα:`,
            channel: () => `Κανάλι:`,
            testIt: () => `Δοκιμή:`,
            cmd: (prefix) => `Χρησιμοποιήστε \`${prefix}testleave\` για δοκιμή του νέου μηνύματος`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Δεν βρέθηκε κανάλι για \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Πρέπει να καθορίσετε μια έγκυρη γλώσσα!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)\n:flag_se: Svenska (\`sv\`)\n:flag_no: Norsk (\`no\`)\n:flag_dk: Dansk (\`da\`)\n:flag_fi: Suomi (\`fi\`)\n:flag_gr: Ελληνικά (\`el\`)\n:flag_cz: Čeština (\`cs\`)`,
        success: () => `${emojis.success} | :flag_gr: Η γλώσσα του διακομιστή είναι τώρα Ελληνικά!`
    },

    graph: {
        title: (server, days) => `Συμμετοχή στο ${server} τις τελευταίες ${days} ημέρες`,
        content: (total, percent, from, to) => `**${total}** μέλη (δηλαδή **${percent}%** του διακομιστή) συμμετείχαν στο διακομιστή από ${from} έως ${to}:`,
        invalid: () => `Πρέπει να καθορίσετε έναν έγκυρο αριθμό ημερών (μεγαλύτερο από 1 και μικρότερο από 1000) να εμφανίσετε!`,
        months: () =>[
            "Ιαν",
            "Φεβ",
            "Μαρ",
            "Απρ",
            "Μάι",
            "Ιουν",
            "Ιουλ",
            "Αυγ",
            "Σεπ",
            "Οκτ",
            "Νοε",
            "Δεκ"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `μέλη`
        },
        conf: {
            title: () => `Διαμόρφωση`
        },
        selector: {
            title: () => `Επιλογέας`,
            manage: () => `Διαχείριση`,
            no: {
                title: () => `Δεν υπάρχουν διακομιστές`,
                content: () => `Δεν βρέθηκε διακομιστή. Παρακαλώ ελέγξτε ότι είστε συνδεδεμένοι με το σωστό λογαριασμό.`
            }
        },
        help: {
            title: () => `Βοήθεια`,
            doc: () => `Τεκμηρίωση`,
            support: () => `Διακομιστή υpoστήριξης`
        },
        forms: {
            buttons: {
                enable: () => `Ενεργοποίηση μηνυμάτων`,
                disable: () => `Απενεργοποίηση μηνυμάτων`,
                update: () => `Ενημέρωση μηνυμάτων`
            },
            basic: {
                title: () => `Βασική διαμόρφωση`,
                language: () => `Γλώσσα`,
                prefix: () => `Πρόθεμα`,
                update: () => `Ενημέρωση`
            },
            join: {
                title: () => `Μηνύματα join`,
                message: {
                    title: () => `Μήνυμα`,
                    default: () => `{user} συμμετείχε στο διακομιστή! Προσκλήθηκε από **{inviter.tag}** ({inviter.invites} προσκλήσεις).`
                },
                channel: {
                    title: () => `Κανάλι`
                },
            },
            leave: {
                title: () => `Μηνύματα leave`,
                message: {
                    title: () => `Μήνυμα`,
                    default: () => `{user.username} έφυγε από το διακομιστή. Προσκλήθηκε από **{inviter.tag}** ({inviter.invites} προσκλήσεις).`
                },
                channel: {
                    title: () => `Κανάλι`
                }
            },
            joinDM: {
                title: () => `Μηνύματα DM join`,
                premium: () => `Αυτή η λειτουργία είναι διαθέσιμη για διακομιστές premium και συνεργάτες.`,
                message: {
                    title: () => `Μήνυμα`,
                    default: () => `Καλώς ήλθατε {user}! Συμμετείχατε **{server}**! Προσκλήθηκες από **{inviter.tag}**. Μην ξεχάσετε να διαβάσετε τους κανόνες του διακομιστή!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Η διαδικασία αφαίρεσης των προσκλήσεων του διακομιστή έχει ξεκινήσει... Μπορείτε να τις αποκαταστήσετε με την εντολή \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Η διαδικασία αφαίρεσης των προσκλήσεων του **${member.user.tag}}** έχει ξεκινήσει... Μπορείτε να τις αποκαταστήσετε με την εντολή \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Προσκλήσεις επανα-ορίστηκαν`,
        titles: {
            all: (prefix) => `${emojis.success} | Οι προσκλήσεις του διακομιστή έχουν επανα-οριστεί! Μπορείτε να τις αποκαταστήσετε με την εντολή \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Οι προσκλήσεις του **${member.user.tag}}** έχουν επανα-οριστεί! Μπορείτε να τις αποκαταστήσετε με την εντολή \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Είστε σίγουρος ότι θέλετε να αποκαταστήσετε τις προσκλήσεις του διακομιστή; Όλα τα μέλη θα λάβουν τις προσκλήσεις από πριν την τελευταία εκτέλεση της εντολής \`${prefix}remove-invites\` (ή 0 εάν η εντολή δεν έχει ποτέ εκτελεστεί).\n\n:information_source: **Περίληψη προσκλήσεων**:\nΘα αποκατασταθούν, σύνολο: **${memberCount.invites}** κανονικές, **${memberCount.bonus}** μπόνους, **${memberCount.leaves}** αναχωρήσεις, **${memberCount.fake}** ψευδείς.\n\n${emojis.success} Πληκτρολογήστε \`-confirm\` για επιβεβαίωση.\n${emojis.error} Πληκτρολογήστε \`cancel\` για ακύρωση.`,
            member: (prefix, member) => `${emojis.warn} | Είστε σίγουρος ότι θέλετε να αποκαταστήσετε τις προσκλήσεις του **${member.user.tag}}**; Θα λάβετε τις προσκλήσεις από πριν την τελευταία εκτέλεση της εντολής \`${prefix}remove-invites\` (ή 0 εάν η εντολή δεν έχει ποτέ εκτελεστεί).\n\n:information_source: **Περίληψη προσκλήσεων**:\nΘα αποκατασταθούν: **${member.data.old_invites}** κανονικές, **${member.data.old_bonus}** μπόνους, **${member.data.old_leaves}** αναχωρήσεις, **${member.data.old_fake}** ψευδείς.\n\n${emojis.success} Πληκτρολογήστε \`-confirm\` για επιβεβαίωση.\n${emojis.error} Πληκτρολογήστε \`cancel\` για ακύρωση.`,
            cancelled: () => `${emojis.error} Ακύρωση.`
        },
        loading: {
            all: () => `${emojis.loading} | Η διαδικασία αποκατάστασης των προσκλήσεων του διακομιστή έχει ξεκινήσει....`,
            member: (member) => `${emojis.loading} | Η διαδικασία αποκατάστασης των προσκλήσεων του **${member.user.tag}}** έχει ξεκινήσει...`
        },
        title: () => `☄️ Προσκλήσεις αποκατασταθείσες`,
        titles: {
            all: () => `${emojis.success} | Οι προσκλήσεις του διακομιστή έχουν αποκατασταθεί!`,
            member: (member) => `${emojis.success} | Οι προσκλήσεις του **${member.user.tag}}** έχουν αποκατασταθεί!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Δεν υπάρχουν προσκλήσεις για συγχρονισμό.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Είστε σίγουρος ότι θέλετε να συγχρονίσετε τις προσκλήσεις του διακομιστή;\n\n:information_source: **Περίληψη προσκλήσεων**:\n**${Math.round(inviteCount)}** κανονικές προσκλήσεις θα αποκατασταθούν.\n\n${emojis.success} Πληκτρολογήστε \`-confirm\` για επιβεβαίωση.\n${emojis.error} Πληκτρολογήστε \`cancel\` για ακύρωση.`,
            cancelled: () => `${emojis.error} Ακύρωση.`
        },
        title: () => `☄️ Προσκλήσεις συγχρονίστηκαν`,
        titles: {
            all: () => `${emojis.success} | Οι προσκλήσεις του διακομιστή έχουν συγχρονιστεί!`
        }
    },

    add: {
        content: (id) => `Μπορείτε να με προσθέσετε στο διακομιστή σας κάνοντας κλικ [εδώ](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Ζητήθηκε από το χρήστη ${username}`
    },

    support: {
        content: (id) => `Μπορείτε να συμμετάσχετε στο διακομιστή υποστήριξής μας κάνοντας κλικ [εδώ](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Ζητήθηκε από το χρήστη ${username}`
    }

};
