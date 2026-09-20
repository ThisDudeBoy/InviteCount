const { emojis, discord } = require("../config");

module.exports = {

    locale: "ja_JP",

    utils: {
        prefix: (prefix) => `現在のプレフィックスは\`${prefix}\`です\n詳しくは\`${prefix}help\`を使用してください。`,
        viewConf: () => `[ダッシュボードで設定を表示](https://invite-count.xyz)`,
        conf: {
            title: () => `ダッシュボードで設定を表示`,
            content: () => `[またはダッシュボードで](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user}がOAuthを使用してサーバーに参加しました。`,
                
                vanity: (user) => `${user}がサーバー所有者によって定義されたdiscord.ggの招待を使用してサーバーに参加しました。`,
                unknown: (user) => `${user}がどのようにしてサーバーに参加したのか理解できません。`,
                perm: (user) => `${emojis.error} | ${user}を誰が招待したかを知るには、サーバー管理権限が必要です。`
            },
            leave: {
                oauth2: (user) => `${user}はサーバーを離れました、OAuthで参加していました。`,
                vanity: (user) => `${user}はサーバーを離れました、サーバー所有者によって定義されたdiscord.ggの招待を使用して参加していました。`,
                unknown: (user) => `${user}はサーバーを離れましたが、どのようにして参加したのか理解できません。`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} 権限がありません**__\n\nこのコマンドが正常に機能するには、次の権限が必要です: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | このコマンドは現在無効です!`,
        permLevel: (name) => `${emojis.error} | このコマンドは権限レベルが必要です: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | このチャネルでメッセージを送信する権限がありません。`,
        missingAdmin: () => `${emojis.error} | このアクションを実行するには\`サーバー管理\`権限が必要です`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | 現在のチャネルはすでにこのチャネルです!`,
        success: () => `<:succes:851491428563812382> | ログチャネルが正常に設定されました。`
    },
    glist: {
        title: () => `🎁 ギブアウェイリスト`,
        description: (prefix) => `ギブアウェイを開始するには\`${prefix}gstart\`を使用します。終了していないギブアウェイのみ表示されます`,
        fields: {
            name: () => `> リスト`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : ${ginfos.endAt}に終了`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | このサーバーには終了していないギブアウェイがありません`,

    },
    help: {
        title: () => `ℹ InviteCountヘルプページ`,
        description: (guildName, prefix) => `InviteCountはサーバーのメンバーを招待を追跡することで管理できます。\n\n**ドキュメント**は[ここ](https://docs.invite-count.xyz/)からアクセスできます。`,
        // Admin
        moderation: {
            title: () => `🛡️ **モデレーション**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **管理**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **一般**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **設定**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: 退出メッセージ`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **ギブアウェイ**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: 招待`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 ユーティリティ`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 リンク :`,
        links: (clientID) => `[私を追加](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [ウェブサイト](https://invite-count.xyz) ● [サポートサーバー](${discord}) ● [投票する](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `InviteCountはサーバーのメンバーを招待を追跡することで管理できます。`,

        dev: {
            title: () => `**情報**`,
            content: (uptime) => `<:arrow:766358167382523944> **開発者:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **ライブラリ:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **稼働時間** ${uptime}\n <:arrow:766358167382523944> **作成日:** 2019年5月12日`
        },
        statistics: {
            title: () => `**統計**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **サーバー:** ${guilds}\n<:arrow:766358167382523944> **ユーザー**: ${channels}\n<:arrow:766358167382523944> **チャネル:** ${users}`
        },
        link: {
            title: () => `**リンク**`,
            content: () => `<:arrow:766358167382523944> **サポートサーバー:** [ここをクリック](${discord})\n<:arrow:766358167382523944> **招待:** [ここをクリック](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCountはサーバーのメンバーを招待を追跡することで管理できます。`,

        dev: {
            title: () => `**開発者 :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**インスピレーション元 :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**特別な感謝 :**`,
            content: () => `⭐ **Androz** ManageInviteをサポートしてくれてありがとう!\n🎁 **Pauldb09** ギブアウェイシステムのために\n👨‍🏭 すべてのスタッフ & 翻訳者`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `あなた` : `**${member.user.username}**`}は**${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}**の招待を持っています! (**${memberData.invites}**通常、**${memberData.bonus}**ボーナス、**${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}**偽、**${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}**退出)${nextRank ? `\n次のランク**${role}**に到達するには、さらに**${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}**の招待が必要です!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | リーダーボードがクリアされました!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}**招待 (**${member.invites}**通常、**${member.bonus}**ボーナス、**${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}**偽、**${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}**退出)`,
        prompt: () => `{{user}}、どのページに移動したいですか? キャンセルするには\`cancel\`または\`0\`と入力します。`,
        title: () => `招待リーダーボード`,
        empty: {
            title: () => `😕 招待が見つかりません`,
            content: () => `人々を招待し始めると、このページに表示されます!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag}アカウント (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> 作成`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> ボット`,
                content: (user) => user.bot ? "はい" : "いいえ"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> 参加`
            },
            joinWay: {
                title: () => `参加方法`,
                oauth: () => `OAuth招待 (discordapp.com経由)。`,
                vanity: () => `管理者が設定したカスタム招待。`,
                unknown: (user) => `${user.username}がどのようにしてサーバーに参加したのか理解できません。`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ 招待`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}**招待 (**${inviteData.invites}**通常、**${inviteData.bonus}**ボーナス、**${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}**偽、**${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}**退出)`
            },
            joinOrder: {
                title: () => `➡️ 参加順序`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | `KICK_MEMBERS`権限が必要です",
            nouser: "<:error:753232040199192657> | ユーザーをメンションしてください",
            supperior: "<:error:753232040199192657> | あなたより上位のユーザーをキックすることはできません",
            noperm: "<:error:753232040199192657> | エラーが発生しました...このメンバーをキックする権限があることを確認して、もう一度試してください!",
            
        },
        description: "<:success:753232040073101363> | ユーザーが正常にキックされました",
        banneddm: (server, moderator, reason) => "**" + server + "**から**" + moderator + "**によってキックされました\n**理由** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | `BAN_MEMBERS`権限が必要です",
            nouser: "<:error:753232040199192657> | ユーザーをメンションしてください",
            supperior: "<:error:753232040199192657> | あなたより上位のユーザーをバンすることはできません",
            noperm: "<:error:753232040199192657> | エラーが発生しました...このメンバーをバンする権限があることを確認して、もう一度試してください!",
            
        },
        description: "<:success:753232040073101363> | ユーザーが正常にバンされました",
        banneddm: (server, moderator, reason) => "**" + server + "**から**" + moderator + "**によってバンされました\n**理由** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | バン解除するIDを指定してください",
        success: (user) => "<:success:753232040073101363> | " + user + "が正常にバン解除されました",
        noban: "<:error:753232040199192657> | このユーザーはバンされていません"
    },

    membercount: {
        title: (guildName) => `${guildName}のメンバー数`,
        description: (guild) => `
        合計**${guild.members.cache.size}**メンバー (**${guild.members.cache.filter((m) => !m.user.bot).size}**人と**${guild.members.cache.filter((m) => m.user.bot).size}**ボット)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size}メンバー (邪魔しないで)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size}メンバー (オンライン)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size}メンバー (アイドル)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size}メンバー (オフライン)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | 追加するボーナス招待の数を指定する必要があります。 (構文: ${prefix}addbonus 数字 @メンバー) **報酬ランクを取得するには、実在する人物を招待する必要があります**`,
                incorrect: (prefix) => `${emojis.error} | 追加するボーナス招待の有効な数を指定する必要があります。 (構文: ${prefix}addbonus 数字 @メンバー)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | ボーナス招待を追加するメンバーをメンションする必要があります。 (構文: ${prefix}addbonus 数字 @メンバー)`
            }
        },
        title: () => `📥 ボーナス招待が追加されました`,
        field: (prefix, member) => `\`${prefix}invites ${member.user.tag}\`と入力して**${member.user.username}**の新しい招待数を確認してください!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | 削除するボーナス招待の数を指定する必要があります。 (構文: ${prefix}removebonus 数字 @メンバー)`,
                incorrect: (prefix) => `${emojis.error} | 削除するボーナス招待の有効な数を指定する必要があります。 (構文: ${prefix}removebonus 数字 @メンバー)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | ボーナス招待を削除するメンバーをメンションする必要があります。 (構文: ${prefix}removebonus 数字 @メンバー)`
            }
        },
        title: () => `📥 ボーナス招待が削除されました`,
        field: (prefix, member) => `\`${prefix}invites ${member.user.tag}\`と入力して**${member.user.username}**の新しい招待数を確認してください!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | DM参加システムは現在__有効__です!**`,
        off: () => `**${emojis.success} | DM参加システムは現在__無効__です!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | 参加システムは現在__有効__です!**`,
        off: () => `**${emojis.success} | 参加システムは現在__無効__です!**`
    },

    setleave: {
        on: () => `**${emojis.success} | 退出システムは現在__有効__です!**`,
        off: () => `**${emojis.success} | 退出システムは現在__無効__です!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | プレフィックスを指定する必要があります!`,
        success: () => `${emojis.success} | サーバープレフィックスが更新されました!`
    },

    testdmjoin: {
        title: () => `:wrench: DM参加システム :`,
        description: () => `機能しない場合は、ボットの権限を確認するか、[サポートサーバー](${discord})に参加してください`,
        fields: {
            enabled: () => `> 有効:`,
            message: () => `> メッセージ:`
        },
        enabled: (prefix) => `${emojis.success} DM参加メッセージが有効です。\`${prefix}setdmjoin\`で無効にします。`,
        disabled: (prefix) =>  `${emojis.error} DM参加メッセージが無効です。\`${prefix}setdmjoin\`で有効にします。`,
        notDefineds: {
            message: (prefix) => `メッセージが定義されていません。\`${prefix}configdm\`で設定します!`
        }
    },

    testjoin: {
        title: () => `:wrench: 参加システム :`,
        description: () => `機能しない場合は、ボットの権限を確認するか、[サポートサーバー](${discord})に参加してください`,
        fields: {
            enabled: () => `> 有効:`,
            channel: () => `> チャネル:`,
            message: () => `> メッセージ:`
        },
        enabled: (prefix) => `${emojis.success} 参加メッセージが有効です。\`${prefix}setjoin\`で無効にします。`,
        disabled: (prefix) =>  `${emojis.error} 参加メッセージが無効です。\`${prefix}setjoin\`で有効にします。`,
        notDefineds: {
            message: (prefix) => `メッセージが定義されていません。\`${prefix}configjoin\`で設定します!`,
            channel: (prefix) => `チャネルが定義されていません。\`${prefix}configjoin\`で設定します!`
        }
    },

    testleave: {
        title: () => `:wrench: 退出システム :`,
        description: () => `機能しない場合は、ボットの権限を確認するか、[サポートサーバー](${discord})に参加してください`,
        fields: {
            enabled: () => `> 有効:`,
            channel: () => `> チャネル:`,
            message: () => `> メッセージ:`
        },
        enabled: (prefix) => `${emojis.success} 退出メッセージが有効です。\`${prefix}setleave\`で無効にします。`,
        disabled: (prefix) =>  `${emojis.error} 退出メッセージが無効です。\`${prefix}setleave\`で有効にします。`,
        notDefineds: {
            message: (prefix) => `メッセージが定義されていません。\`${prefix}configleave\`で設定します!`,
            channel: (prefix) => `チャネルが定義されていません。\`${prefix}configleave\`で設定します!`
        }
    },

    config: {
        title: (guildName) => `${guildName}の設定`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} 参加メッセージ`,
            content: (guild, data) => `
            > 有効: ${data.guild.join.enabled ? "**はい**" : "**いいえ**"}
            > メッセージ: ${data.guild.join.message ? "**定義**" : "**未定義**."}
            > チャネル: ${!data.guild.join.channel ? "**未定義**" : (guild.channels.cache.get(data.guild.join.channel) ? "**定義**" : "**チャネルが見つかりません**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} 退出メッセージ`,
            content: (guild, data) => `
            > 有効: ${data.guild.leave.enabled ? "**はい**" : "**いいえ**"}
            > メッセージ: ${data.guild.leave.message ? "**定義**" : "**未定義**."}
            > チャネル: ${!data.guild.leave.channel ? "**未定義**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**定義**" : "**チャネルが見つかりません**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} DM参加メッセージ`,
            content: (guild, data) => `
            > 有効: ${data.guild.joinDM.enabled ? "**はい**" : "**いいえ**"}
            > メッセージ: ${data.guild.joinDM.message ? "**定義**" : "**未定義**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | こんにちは、**${username}**! この機能はプレミアムサーバーとパートナーのみが利用できます。プレミアムを取得: **近日公開** !`
    },

    antispam: {
        cooldown: (username) => `落ち着いてください! 5秒待ってから再度お試しください!`
    },

    configdmjoin: {
        disable: (prefix) => `DM参加メッセージを無効にするには\`${prefix}setdmjoin\`と入力してください。`,
        instruct: (str) => `
__**詳細情報**__
\`\`\`
{user} : サーバーに参加したばかりのメンバーへのメンション。
{user.name} : サーバーに参加したばかりのメンバーの名前。
{user.tag} : サーバーに参加したばかりのメンバーのタグ。
{user.createdat} : メンバーのアカウント年齢。

{guild} : サーバーの名前。
{guild.count} : サーバーの現在のメンバー数。

{inviter} : 招待者へのメンション。
{inviter.name} : 招待者の名前。
{inviter.tag} : 招待者のタグ。
{inviter.invites} : 招待者の総招待数。

{invite.code} : 使用された招待コード。
{invite.url} : 使用された招待URL。
{invite.uses} : 招待コードの使用回数。
\`\`\`
キャンセルするには\`cancel\`と入力してください。 ${str}


:pencil: **| 次にDM参加メッセージを入力してください... :pencil2:**`,
        cancelled: () => `:x: キャンセルされました。`,
        success: () => `✅ **| 正常に完了しました...**`,
        title: () => `**DM参加メッセージが設定されました**`,
        fields: {
            message: () => `メッセージ:`,
            testIt: () => `テスト:`,
            cmd: (prefix) => `新しいメッセージをテストするには\`${prefix}testdmjoin\`を使用してください。`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | メッセージは850文字未満である必要があります。`, 
        disable: (prefix) => `参加メッセージを無効にするには\`${prefix}setjoin\`と入力してください。`,
        instructs: {
            message: (str) => `
__**詳細情報**__
\`\`\`
{user} : サーバーに参加したばかりのメンバーへのメンション。
{user.name} : サーバーに参加したばかりのメンバーの名前。
{user.tag} : サーバーに参加したばかりのメンバーのタグ。
{user.createdat} : メンバーのアカウント年齢。

{guild} : サーバーの名前。
{guild.count} : サーバーの現在のメンバー数。

{inviter} : 招待者へのメンション。
{inviter.name} : 招待者の名前。
{inviter.tag} : 招待者のタグ。
{inviter.invites} : 招待者の総招待数。

{invite.code} : 使用された招待コード。
{invite.url} : 使用された招待URL。
{invite.uses} : 招待コードの使用回数。
\`\`\`
キャンセルするには\`cancel\`と入力してください。 ${str}


:pencil: **| 次に参加メッセージを入力してください... :pencil2:**`,
            channel: () => `:scroll: **| 次にチャネルをメンションしてください... :pencil2:**`
        },
        cancelled: () => `:x: キャンセルされました。`,
        success: () => `✅ **| 正常に完了しました...**`,
        title: () => `**参加メッセージが設定されました**`,
        fields: {
            message: () => `メッセージ:`,
            channel: () => `チャネル:`,
            testIt: () => `テスト:`,
            cmd: (prefix) => `新しいメッセージをテストするには\`${prefix}testjoin\`を使用してください。`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | \`${channel}\`のチャネルが見つかりません`
        }
    },

    configleave: {
        disable: (prefix) => `退出メッセージを無効にするには\`${prefix}setleave\`と入力してください。`,
        instructs: {
            message: (str) => `
__**詳細情報**__
\`\`\`
{user} : サーバーを離れたばかりのメンバーへのメンション。
{user.name} : サーバーを離れたばかりのメンバーの名前。
{user.tag} : サーバーを離れたばかりのメンバーのタグ。
{user.createdat} : メンバーのアカウント年齢。

{guild} : サーバーの名前。
{guild.count} : サーバーの現在のメンバー数。

{inviter} : 招待者へのメンション。
{inviter.name} : 招待者の名前。
{inviter.tag} : 招待者のタグ。
{inviter.invites} : 招待者の総招待数。

{invite.code} : 使用された招待コード。
{invite.url} : 使用された招待URL。
{invite.uses} : 招待コードの使用回数。
\`\`\`
キャンセルするには\`cancel\`と入力してください。 ${str}


:pencil: **| 次に退出メッセージを入力してください... :pencil2:**`,
            channel: () => `:scroll: **| 次にチャネルをメンションしてください... :pencil2:**`
        },
        cancelled: () => `:x: キャンセルされました。`,
        success: () => `✅ **| 正常に完了しました...**`,
        title: () => `**退出メッセージが設定されました**`,
        fields: {
            message: () => `メッセージ:`,
            channel: () => `チャネル:`,
            testIt: () => `テスト:`,
            cmd: (prefix) => `新しいメッセージをテストするには\`${prefix}testleave\`を使用してください`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | \`${channel}\`のチャネルが見つかりません`
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | 有効な言語を指定する必要があります!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)`,
        success: () => `${emojis.success} | :flag_jp: サーバー言語が日本語に設定されました!`
    },

    graph: {
        title: (server, days) => `${server}への過去${days}日間の参加`,
        content: (total, percent, from, to) => `**${total}**メンバー（つまりサーバーの**${percent}%**）が${from}から${to}の間にサーバーに参加しました:`,
        invalid: () => `表示するには有効な日数を入力する必要があります(1より大きく1000より小さい)!`,
        months: () =>[
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `メンバー`
        },
        conf: {
            title: () => `設定`
        },
        selector: {
            title: () => `セレクター`,
            manage: () => `管理`,
            no: {
                title: () => `サーバーなし`,
                content: () => `サーバーが見つかりません。正しいアカウントでログインしているかご確認ください。`
            }
        },
        help: {
            title: () => `ヘルプ`,
            doc: () => `ドキュメント`,
            support: () => `サポートサーバー`
        },
        forms: {
            buttons: {
                enable: () => `メッセージを有効にする`,
                disable: () => `メッセージを無効にする`,
                update: () => `メッセージを更新`
            },
            basic: {
                title: () => `基本設定`,
                language: () => `言語`,
                prefix: () => `プレフィックス`,
                update: () => `更新`
            },
            join: {
                title: () => `参加メッセージ`,
                message: {
                    title: () => `メッセージ`,
                    default: () => `{user}がサーバーに参加しました! **{inviter.tag}**が招待しました({inviter.invites}招待)。`
                },
                channel: {
                    title: () => `チャネル`
                },
            },
            leave: {
                title: () => `退出メッセージ`,
                message: {
                    title: () => `メッセージ`,
                    default: () => `{user.username}がサーバーを離れました。**{inviter.tag}**が招待していました({inviter.invites}招待)。`
                },
                channel: {
                    title: () => `チャネル`
                }
            },
            joinDM: {
                title: () => `DM参加メッセージ`,
                premium: () => `この機能はプレミアムサーバーとパートナーが利用できます。`,
                message: {
                    title: () => `メッセージ`,
                    default: () => `{user}へようこそ! **{server}**に参加しました! **{inviter.tag}**が招待しました。サーバーのルールを読むのを忘れずに!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | サーバー招待の削除処理を開始しています... \`${prefix}restore-invites\`コマンドで復元できます!`,
            member: (prefix, member) => `${emojis.loading} | **${member.user.tag}}**の招待の削除処理を開始しています... \`${prefix}restore-invites ${member.user.tag}\`コマンドで復元できます!`
        },
        title: () => `☄️ 招待がリセットされました`,
        titles: {
            all: (prefix) => `${emojis.success} | サーバー招待がリセットされました! \`${prefix}restore-invites\`コマンドで復元できます!`,
            member: (prefix, member) => `${emojis.success} | **${member.user.tag}}**の招待がリセットされました! \`${prefix}restore-invites ${member.user.tag}\`コマンドで復元できます!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | サーバー招待を復元してもよろしいですか? すべてのメンバーは\`${prefix}remove-invites\`コマンドの最後の実行前の招待を取得します(コマンドが実行されたことがない場合は0)。\n\n:information_source: **招待の概要**:\n復元されます、合計: **${memberCount.invites}**通常、**${memberCount.bonus}**ボーナス、**${memberCount.leaves}**退出、**${memberCount.fake}**偽。\n\n${emojis.success} 確認するには\`-confirm\`と入力してください。\n${emojis.error} キャンセルするには\`cancel\`と入力してください。`,
            member: (prefix, member) => `${emojis.warn} | **${member.user.tag}}**の招待を復元してもよろしいですか? \`${prefix}remove-invites\`コマンドの最後の実行前の招待を取得します(コマンドが実行されたことがない場合は0)。\n\n:information_source: **招待の概要**:\n復元されます: **${member.data.old_invites}**通常、**${member.data.old_bonus}**ボーナス、**${member.data.old_leaves}**退出、**${member.data.old_fake}**偽。\n\n${emojis.success} 確認するには\`-confirm\`と入力してください。\n${emojis.error} キャンセルするには\`cancel\`と入力してください。`,
            cancelled: () => `${emojis.error} キャンセルされました。`
        },
        loading: {
            all: () => `${emojis.loading} | サーバー招待の復元処理を開始しています....`,
            member: (member) => `${emojis.loading} | **${member.user.tag}}**の招待の復元処理を開始しています...`
        },
        title: () => `☄️ 招待が復元されました`,
        titles: {
            all: () => `${emojis.success} | サーバー招待が復元されました!`,
            member: (member) => `${emojis.success} | **${member.user.tag}}**の招待が復元されました!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | 同期する招待がありません。`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | サーバー招待を同期してもよろしいですか?\n\n:information_source: **招待の概要**:\n**${Math.round(inviteCount)}**通常招待が復元されます。\n\n${emojis.success} 確認するには\`-confirm\`と入力してください。\n${emojis.error} キャンセルするには\`cancel\`と入力してください。`,
            cancelled: () => `${emojis.error} キャンセルされました。`
        },
        title: () => `☄️ 招待が同期されました`,
        titles: {
            all: () => `${emojis.success} | サーバー招待が同期されました!`
        }
    },

    add: {
        content: (id) => `[ここ](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847)をクリックしてボットをサーバーに追加できます。`,
        requested: (username) => `${username}により要求されました`
    },

    support: {
        content: (id) => `[ここ](https://discord.gg/f7f2P2q)をクリックしてサポートサーバーに参加できます。`,
        requested: (username) => `${username}により要求されました`
    }

};
