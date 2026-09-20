const { emojis, discord } = require("../config");

module.exports = {

    locale: "tr_TR",

    utils: {
        prefix: (prefix) => `Mevcut önek \`${prefix}\`\nDaha fazla yardım için \`${prefix}help\` kullanın.`,
        viewConf: () => `[Panodan yapılandırmayı görüntüle](https://invite-count.xyz)`,
        conf: {
            title: () => `Panodan yapılandırmayı görüntüle`,
            content: () => `[veya panodan](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} OAuth kullanarak sunucuya katıldı.`,
                
                vanity: (user) => `${user} sunucu sahibi tarafından tanımlanan discord.gg davetiyesini kullanarak sunucuya katıldı.`,
                unknown: (user) => `${user} nasıl sunucuya katıldığını anlayamıyorum.`,
                perm: (user) => `${emojis.error} | ${user} kimin davet ettiğini bilmek için sunucuyu yönetme izinlerine ihtiyacım var.`
            },
            leave: {
                oauth2: (user) => `${user} sunucudan ayrıldı, OAuth aracılığıyla katılmıştı.`,
                vanity: (user) => `${user} sunucudan ayrıldı, sunucu sahibi tarafından tanımlanan discord.gg davetiyesini kullanarak katılmıştı.`,
                unknown: (user) => `${user} sunucudan ayrıldı ama nasıl katıldığını anlayamıyorum.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} İzinler eksik**__\n\nBu komutun düzgün çalışması için aşağıdaki izinlere ihtiyacım var: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Bu komut şu anda devre dışı!`,
        permLevel: (name) => `${emojis.error} | Bu komut izin seviyesi gerektirir: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Bu kanalda mesaj gönderme iznim yok.`,
        missingAdmin: () => `${emojis.error} | Bu işlemi yapmak için \`Sunucuyu Yönet\` izni gerekli`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | Güncel kanal zaten bu kanal!`,
        success: () => `<:succes:851491428563812382> | Günlük kanalı başarıyla ayarlandı.`
    },
    glist: {
        title: () => `🎁 Çekilişlerin listesi`,
        description: (prefix) => `Çekiliş başlatmak için \`${prefix}gstart\` yazın. Yalnızca bitmeyen çekilişler gösterilir`,
        fields: {
            name: () => `> Liste`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Şu saatte bitiyor ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Bu sunucu için bitmeyen çekiliş yok`,

    },
    help: {
        title: () => `ℹ InviteCount Yardım Sayfası`,
        description: (guildName, prefix) => `InviteCount, sunucunuzun üyelerini davetlerini takip ederek yönetmenizi sağlar.\n\n**Dokümantasyon** sayfasına [buradan](https://docs.invite-count.xyz/) ulaşabilirsiniz.`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderasyon**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Yönetim**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **Genel**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Yapılandırma**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Ayrılış Mesajları`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Çekilişler**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Davetiyeler`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Araçlar`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Bağlantılar :`,
        links: (clientID) => `[Beni ekle](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Web Sitesi](https://invite-count.xyz) ● [Destek sunucusu](${discord}) ● [Bana oy ver](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount, sunucunuzun üyelerini davetlerini takip ederek yönetmenizi sağlar.`,

        dev: {
            title: () => `**Bilgiler**`,
            content: (uptime) => `<:arrow:766358167382523944> **Geliştiriciler:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Kütüphane:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Çalışma Süresi** ${uptime}\n <:arrow:766358167382523944> **Oluşturulma Tarihi:** 12 Mayıs 2019`
        },
        statistics: {
            title: () => `**İstatistikler**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Sunucular:** ${guilds}\n<:arrow:766358167382523944> **Kullanıcılar**: ${channels}\n<:arrow:766358167382523944> **Kanallar:** ${users}`
        },
        link: {
            title: () => `**Bağlantılar**`,
            content: () => `<:arrow:766358167382523944> **Destek Sunucusu:** [Tıkla](${discord})\n<:arrow:766358167382523944> **Davet:** [Tıkla](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount, sunucunuzun üyelerini davetlerini takip ederek yönetmenizi sağlar.`,

        dev: {
            title: () => `**Geliştiriciler :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**İnspirasyonu Alınan :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Özel Teşekkürler :**`,
            content: () => `⭐ **Androz** ManageInvite konusunda bize yardım ettiği için!\n🎁 **Pauldb09** çekiliş sistemi için\n👨‍🏭 Tüm Personel & Çevirmenler`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Senin` : `**${member.user.username}** un`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** davetiye var! (**${memberData.invites}** normal, **${memberData.bonus}** bonus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** sahte, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** ayrılış)${nextRank ? `\nSonraki rütbe **${role}** için **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** daha çok davetiyeye ihtiyacın var!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Sıralama temizlendi!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** davetiye (**${member.invites}** normal, **${member.bonus}** bonus, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** sahte, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** ayrılış)`,
        prompt: () => `{{user}}, hangi sayfaya gitmek istersin? İptal etmek için \`cancel\` veya \`0\` yazın.`,
        title: () => `Davetiye Sıralaması`,
        empty: {
            title: () => `😕 Davetiye bulunamadı`,
            content: () => `İnsanları davet etmeye başla ve bu sayfada görüneceksin!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} hesabı (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Oluşturulma`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Evet" : "Hayır"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Katılma`
            },
            joinWay: {
                title: () => `Katılış nedeni`,
                oauth: () => `OAuth davetiyesi (discordapp.com aracılığıyla).`,
                vanity: () => `Yönetici tarafından yapılandırılan özel davetiye.`,
                unknown: (user) => `${user.username} nasıl sunucuya katıldığını anlayamıyorum.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Davetiyeler`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** davetiye (**${inviteData.invites}** normal, **${inviteData.bonus}** bonus, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** sahte, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** ayrılış)`
            },
            joinOrder: {
                title: () => `➡️ Katılış Sırası`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | `ÜYE AT` izni olması gerekir",
            nouser: "<:error:753232040199192657> | Lütfen bir kullanıcıdan bahset",
            supperior: "<:error:753232040199192657> | Senden üstün bir kullanıcıyı atamazsın",
            noperm: "<:error:753232040199192657> | Bir hata oluştu... Lütfen bu üyeyi atma iznim olduğunu doğrula ve tekrar dene!",
            
        },
        description: "<:success:753232040073101363> | Kullanıcı başarıyla atıldı",
        banneddm: (server, moderator, reason) => "**" + server + "** sunucusundan **" + moderator + "** tarafından atıldın\n**Sebep** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | `ÜYE YASAKLA` izni olması gerekir",
            nouser: "<:error:753232040199192657> | Lütfen bir kullanıcıdan bahset",
            supperior: "<:error:753232040199192657> | Senden üstün bir kullanıcıyı yakamlayamazsın",
            noperm: "<:error:753232040199192657> | Bir hata oluştu... Lütfen bu üyeyi yasaklama iznim olduğunu doğrula ve tekrar dene!",
            
        },
        description: "<:success:753232040073101363> | Kullanıcı başarıyla yasaklandı",
        banneddm: (server, moderator, reason) => "**" + server + "** sunucusundan **" + moderator + "** tarafından yasaklandın\n**Sebep** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Lütfen yasağını kaldıracak bir kimlik belirt",
        success: (user) => "<:success:753232040073101363> | " + user + " başarıyla yasaktan çıkarıldı",
        noban: "<:error:753232040199192657> | Bu kullanıcı yasaklı değil"
    },

    membercount: {
        title: (guildName) => `${guildName}'nin Üye Sayısı`,
        description: (guild) => `
        Toplam **${guild.members.cache.size}** üye (**${guild.members.cache.filter((m) => !m.user.bot).size}** insan ve **${guild.members.cache.filter((m) => m.user.bot).size}** bot)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} üye (rahatsız etmeyin)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} üye (çevrimiçi)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} üye (hareketsiz)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} üye (çevrimdışı)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Eklemek istediğin bonus davetiye sayısını yazmalısın. (Sözdizimi: ${prefix}addbonus sayı @üye) **Ödül rütbesi almak için gerçek kişi davet etmen gerekir**`,
                incorrect: (prefix) => `${emojis.error} | Eklemek istediğin __**geçerli**__ bonus davetiye sayısını yazmalısın. (Sözdizimi: ${prefix}addbonus sayı @üye)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Bonus davetiye eklemek istediğin üyeyi etiketlemelisin. (Sözdizimi: ${prefix}addbonus sayı @üye)`
            }
        },
        title: () => `📥 Bonus Davetiyeler Eklendi`,
        field: (prefix, member) => `**${member.user.username}** un yeni davetiye sayısını görmek için \`${prefix}invites ${member.user.tag}\` yaz!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Çıkarmak istediğin bonus davetiye sayısını yazmalısın. (Sözdizimi: ${prefix}removebonus sayı @üye)`,
                incorrect: (prefix) => `${emojis.error} | Çıkarmak istediğin __**geçerli**__ bonus davetiye sayısını yazmalısın. (Sözdizimi: ${prefix}removebonus sayı @üye)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Bonus davetiye çıkarmak istediğin üyeyi etiketlemelisin. (Sözdizimi: ${prefix}removebonus sayı @üye)`
            }
        },
        title: () => `📥 Bonus Davetiyeler Çıkarıldı`,
        field: (prefix, member) => `**${member.user.username}** un yeni davetiye sayısını görmek için \`${prefix}invites ${member.user.tag}\` yaz!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | DM katılış sistemi artık __AÇIK__!**`,
        off: () => `**${emojis.success} | DM katılış sistemi artık __KAPALI__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Katılış sistemi artık __AÇIK__!**`,
        off: () => `**${emojis.success} | Katılış sistemi artık __KAPALI__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Ayrılış sistemi artık __AÇIK__!**`,
        off: () => `**${emojis.success} | Ayrılış sistemi artık __KAPALI__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Bir önek yazmalısın!`,
        success: () => `${emojis.success} | Sunucu öneki güncellendi!`
    },

    testdmjoin: {
        title: () => `:wrench: DM Katılış sistemi :`,
        description: () => `Çalışmazsa, bot izinlerini kontrol et veya [destek sunucumuza](${discord}) katıl`,
        fields: {
            enabled: () => `> Açık:`,
            message: () => `> Mesaj:`
        },
        enabled: (prefix) => `${emojis.success} DM'de katılış mesajları açık. \`${prefix}setdmjoin\` ile kapat.`,
        disabled: (prefix) =>  `${emojis.error} DM'de katılış mesajları kapalı. \`${prefix}setdmjoin\` ile aç.`,
        notDefineds: {
            message: (prefix) => `Mesaj tanımlanmadı. \`${prefix}configdm\` ile ayarla!`
        }
    },

    testjoin: {
        title: () => `:wrench: Katılış sistemi :`,
        description: () => `Çalışmazsa, bot izinlerini kontrol et veya [destek sunucumuza](${discord}) katıl`,
        fields: {
            enabled: () => `> Açık:`,
            channel: () => `> Kanal:`,
            message: () => `> Mesaj:`
        },
        enabled: (prefix) => `${emojis.success} Katılış mesajları açık. \`${prefix}setjoin\` ile kapat.`,
        disabled: (prefix) =>  `${emojis.error} Katılış mesajları kapalı. \`${prefix}setjoin\` ile aç.`,
        notDefineds: {
            message: (prefix) => `Mesaj tanımlanmadı. \`${prefix}configjoin\` ile ayarla!`,
            channel: (prefix) => `Kanal tanımlanmadı. \`${prefix}configjoin\` ile ayarla!`
        }
    },

    testleave: {
        title: () => `:wrench: Ayrılış sistemi :`,
        description: () => `Çalışmazsa, bot izinlerini kontrol et veya [destek sunucumuza](${discord}) katıl`,
        fields: {
            enabled: () => `> Açık:`,
            channel: () => `> Kanal:`,
            message: () => `> Mesaj:`
        },
        enabled: (prefix) => `${emojis.success} Ayrılış mesajları açık. \`${prefix}setleave\` ile kapat.`,
        disabled: (prefix) =>  `${emojis.error} Ayrılış mesajları kapalı. \`${prefix}setleave\` ile aç.`,
        notDefineds: {
            message: (prefix) => `Mesaj tanımlanmadı. \`${prefix}configleave\` ile ayarla!`,
            channel: (prefix) => `Kanal tanımlanmadı. \`${prefix}configleave\` ile ayarla!`
        }
    },

    config: {
        title: (guildName) => `${guildName}'nin Yapılandırması`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Katılış Mesajları`,
            content: (guild, data) => `
            > Açık: ${data.guild.join.enabled ? "**evet**" : "**hayır**"}
            > Mesaj: ${data.guild.join.message ? "**tanımlandı**" : "**tanımlanmadı**."}
            > Kanal: ${!data.guild.join.channel ? "**tanımlanmadı**" : (guild.channels.cache.get(data.guild.join.channel) ? "**tanımlandı**" : "**kanal bulunamadı**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Ayrılış Mesajları`,
            content: (guild, data) => `
            > Açık: ${data.guild.leave.enabled ? "**evet**" : "**hayır**"}
            > Mesaj: ${data.guild.leave.message ? "**tanımlandı**" : "**tanımlanmadı**."}
            > Kanal: ${!data.guild.leave.channel ? "**tanımlanmadı**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**tanımlandı**" : "**kanal bulunamadı**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} DM Katılış Mesajları`,
            content: (guild, data) => `
            > Açık: ${data.guild.joinDM.enabled ? "**evet**" : "**hayır**"}
            > Mesaj: ${data.guild.joinDM.message ? "**tanımlandı**" : "**tanımlanmadı**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Selam, **${username}**! Bu özellik yalnızca premium sunucular ve ortaklar için kullanılabilir. Premium edin: **yakında** !`
    },

    antispam: {
        cooldown: (username) => `Yavaşla! Lütfen 5 saniye bekle ve tekrar dene!`
    },

    configdmjoin: {
        disable: (prefix) => `DM katılış mesajlarını devre dışı bırakmak için \`${prefix}setdmjoin\` yazın.`,
        instruct: (str) => `
__**Daha Fazla Bilgi**__
\`\`\`
{user} : Sunucuya yeni katılan üyeye mention.
{user.name} : Sunucuya yeni katılan üyenin adı.
{user.tag} : Sunucuya yeni katılan üyenin etiketi.
{user.createdat} : Üyenin hesabının yaşı.

{guild} : Sunucu adı.
{guild.count} : Sunucunuzun şu anki üye sayısı.

{inviter} : Davet edenin mention.
{inviter.name} : Davet edenin adı.
{inviter.tag} : Davet edenin etiketi.
{inviter.invites} : Davet edenin toplam davetiye sayısı.

{invite.code} : Kullanılan davetiye kodu.
{invite.url} : Kullanılan davetiye URL'si.
{invite.uses} : Davetiye kodunun kullanım sayısı.
\`\`\`
İptal etmek için \`cancel\` yazın. ${str}


:pencil: **| Şimdi DM katılış mesajını yaz... :pencil2:**`,
        cancelled: () => `:x: İptal edildi.`,
        success: () => `✅ **| Başarıyla tamamlandı...**`,
        title: () => `**DM Katılış Mesajı Ayarlandı**`,
        fields: {
            message: () => `Mesaj:`,
            testIt: () => `Test Et:`,
            cmd: (prefix) => `Yeni mesajı test etmek için \`${prefix}testdmjoin\` kullan.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Mesajın 850 karakterden az olmalı.`, 
        disable: (prefix) => `Katılış mesajlarını devre dışı bırakmak için \`${prefix}setjoin\` yazın.`,
        instructs: {
            message: (str) => `
__**Daha Fazla Bilgi**__
\`\`\`
{user} : Sunucuya yeni katılan üyeye mention.
{user.name} : Sunucuya yeni katılan üyenin adı.
{user.tag} : Sunucuya yeni katılan üyenin etiketi.
{user.createdat} : Üyenin hesabının yaşı.

{guild} : Sunucu adı.
{guild.count} : Sunucunuzun şu anki üye sayısı.

{inviter} : Davet edenin mention.
{inviter.name} : Davet edenin adı.
{inviter.tag} : Davet edenin etiketi.
{inviter.invites} : Davet edenin toplam davetiye sayısı.

{invite.code} : Kullanılan davetiye kodu.
{invite.url} : Kullanılan davetiye URL'si.
{invite.uses} : Davetiye kodunun kullanım sayısı.
\`\`\`
İptal etmek için \`cancel\` yazın. ${str}


:pencil: **| Şimdi katılış mesajını yaz... :pencil2:**`,
            channel: () => `:scroll: **| Şimdi kanaldan bahset... :pencil2:**`
        },
        cancelled: () => `:x: İptal edildi.`,
        success: () => `✅ **| Başarıyla tamamlandı...**`,
        title: () => `**Katılış Mesajı Ayarlandı**`,
        fields: {
            message: () => `Mesaj:`,
            channel: () => `Kanal:`,
            testIt: () => `Test Et:`,
            cmd: (prefix) => `Yeni mesajı test etmek için \`${prefix}testjoin\` kullan.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | \`${channel}\` için kanal bulunamadı`
        }
    },

    configleave: {
        disable: (prefix) => `Ayrılış mesajlarını devre dışı bırakmak için \`${prefix}setleave\` yazın.`,
        instructs: {
            message: (str) => `
__**Daha Fazla Bilgi**__
\`\`\`
{user} : Sunucudan ayrılan üyeye mention.
{user.name} : Sunucudan ayrılan üyenin adı.
{user.tag} : Sunucudan ayrılan üyenin etiketi.
{user.createdat} : Üyenin hesabının yaşı.

{guild} : Sunucu adı.
{guild.count} : Sunucunuzun şu anki üye sayısı.

{inviter} : Davet edenin mention.
{inviter.name} : Davet edenin adı.
{inviter.tag} : Davet edenin etiketi.
{inviter.invites} : Davet edenin toplam davetiye sayısı.

{invite.code} : Kullanılan davetiye kodu.
{invite.url} : Kullanılan davetiye URL'si.
{invite.uses} : Davetiye kodunun kullanım sayısı.
\`\`\`
İptal etmek için \`cancel\` yazın. ${str}


:pencil: **| Şimdi ayrılış mesajını yaz... :pencil2:**`,
            channel: () => `:scroll: **| Şimdi kanaldan bahset... :pencil2:**`
        },
        cancelled: () => `:x: İptal edildi.`,
        success: () => `✅ **| Başarıyla tamamlandı...**`,
        title: () => `**Ayrılış Mesajı Ayarlandı**`,
        fields: {
            message: () => `Mesaj:`,
            channel: () => `Kanal:`,
            testIt: () => `Test Et:`,
            cmd: (prefix) => `Yeni mesajı test etmek için \`${prefix}testleave\` kullan`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | \`${channel}\` için kanal bulunamadı`
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Geçerli bir dil yazmalısın!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)`,
        success: () => `${emojis.success} | :flag_tr: Sunucu dili artık Türkçe!`
    },

    graph: {
        title: (server, days) => `${server} sunucusuna son ${days} gün katılışlar`,
        content: (total, percent, from, to) => `**${total}** üye (yani sunucunun **${percent}%** i) ${from} ile ${to} tarihleri arasında sunucuya katıldı:`,
        invalid: () => `Gösterilebilmesi için geçerli bir gün sayısı girmelisin (1'den büyük ve 1000'den küçük)!`,
        months: () =>[
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmuz",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `üyeler`
        },
        conf: {
            title: () => `Yapılandırma`
        },
        selector: {
            title: () => `Seçici`,
            manage: () => `Yönet`,
            no: {
                title: () => `Sunucu yok`,
                content: () => `Sunucu bulunamadı. Doğru hesapla giriş yaptığından emin ol!`
            }
        },
        help: {
            title: () => `Yardım`,
            doc: () => `Dokümantasyon`,
            support: () => `Destek sunucusu`
        },
        forms: {
            buttons: {
                enable: () => `Mesajları Aç`,
                disable: () => `Mesajları Kapat`,
                update: () => `Mesajları Güncelle`
            },
            basic: {
                title: () => `Temel Yapılandırma`,
                language: () => `Dil`,
                prefix: () => `Önek`,
                update: () => `Güncelle`
            },
            join: {
                title: () => `Katılış Mesajları`,
                message: {
                    title: () => `Mesaj`,
                    default: () => `{user} sunucuya katıldı! **{inviter.tag}** tarafından davet edildi ({inviter.invites} davetiye).`
                },
                channel: {
                    title: () => `Kanal`
                },
            },
            leave: {
                title: () => `Ayrılış Mesajları`,
                message: {
                    title: () => `Mesaj`,
                    default: () => `{user.username} sunucudan ayrıldı. **{inviter.tag}** tarafından davet edilmişti ({inviter.invites} davetiye).`
                },
                channel: {
                    title: () => `Kanal`
                }
            },
            joinDM: {
                title: () => `DM Katılış Mesajları`,
                premium: () => `Bu özellik premium sunucular ve ortaklar için kullanılabilir.`,
                message: {
                    title: () => `Mesaj`,
                    default: () => `Hoş geldin {user}! **{server}** sunucusuna katıldın! **{inviter.tag}** tarafından davet edildin. Sunucu kurallarını okumayı unutma!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Sunucu davetiyelerini silme işlemi başlatılıyor... \`${prefix}restore-invites\` komutuyla geri yükleyebilirsin!`,
            member: (prefix, member) => `${emojis.loading} | **${member.user.tag}}** davetiyelerini silme işlemi başlatılıyor... \`${prefix}restore-invites ${member.user.tag}\` komutuyla geri yükleyebilirsin!`
        },
        title: () => `☄️ Davetiyeler Sıfırlandı`,
        titles: {
            all: (prefix) => `${emojis.success} | Sunucu davetiyelerini sıfırlandı! \`${prefix}restore-invites\` komutuyla geri yükleyebilirsin!`,
            member: (prefix, member) => `${emojis.success} | **${member.user.tag}}** davetiyelerini sıfırlandı! \`${prefix}restore-invites ${member.user.tag}\` komutuyla geri yükleyebilirsin!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Sunucu davetiyelerini geri yüklemek istediğine emin misin? Tüm üyeler \`${prefix}remove-invites\` komutunun son çalıştırılmasından önceki davetiyelerini geri alacaklar (veya hiç çalıştırılmadıysa 0).\n\n:information_source: **Davetiye Önizlemesi**:\nGeri yüklenecek: Toplam **${memberCount.invites}** normal, **${memberCount.bonus}** bonus, **${memberCount.leaves}** ayrılış, **${memberCount.fake}** sahte.\n\n${emojis.success} Onaylamak için \`-confirm\` yazın.\n${emojis.error} İptal etmek için \`cancel\` yazın.`,
            member: (prefix, member) => `${emojis.warn} | **${member.user.tag}}** davetiyelerini geri yüklemek istediğine emin misin? \`${prefix}remove-invites\` komutunun son çalıştırılmasından önceki davetiyelerini geri alacak (veya hiç çalıştırılmadıysa 0).\n\n:information_source: **Davetiye Önizlemesi**:\nGeri yüklenecek: **${member.data.old_invites}** normal, **${member.data.old_bonus}** bonus, **${member.data.old_leaves}** ayrılış, **${member.data.old_fake}** sahte.\n\n${emojis.success} Onaylamak için \`-confirm\` yazın.\n${emojis.error} İptal etmek için \`cancel\` yazın.`,
            cancelled: () => `${emojis.error} İptal edildi.`
        },
        loading: {
            all: () => `${emojis.loading} | Sunucu davetiyelerini geri yükleme işlemi başlatılıyor...`,
            member: (member) => `${emojis.loading} | **${member.user.tag}}** davetiyelerini geri yükleme işlemi başlatılıyor...`
        },
        title: () => `☄️ Davetiyeler Geri Yüklendi`,
        titles: {
            all: () => `${emojis.success} | Sunucu davetiyelerini geri yüklendi!`,
            member: (member) => `${emojis.success} | **${member.user.tag}}** davetiyelerini geri yüklendi!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Senkronize edilecek davetiye mevcut değil.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Sunucu davetiyelerini senkronize etmek istediğine emin misin?\n\n:information_source: **Davetiye Önizlemesi**:\nGeri yüklenecek **${Math.round(inviteCount)}** normal davetiye.\n\n${emojis.success} Onaylamak için \`-confirm\` yazın.\n${emojis.error} İptal etmek için \`cancel\` yazın.`,
            cancelled: () => `${emojis.error} İptal edildi.`
        },
        title: () => `☄️ Davetiyeler Senkronize Edildi`,
        titles: {
            all: () => `${emojis.success} | Sunucu davetiyelerini senkronize edildi!`
        }
    },

    add: {
        content: (id) => `Beni sunucuna [buradan](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847) ekleyebilirsin.`,
        requested: (username) => `${username} tarafından istendi`
    },

    support: {
        content: (id) => `Destek sunucusuna [buradan](https://discord.gg/f7f2P2q) katılabilirsin.`,
        requested: (username) => `${username} tarafından istendi`
    }

};
