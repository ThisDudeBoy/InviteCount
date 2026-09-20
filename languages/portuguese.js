const { emojis, discord } = require("../config");

module.exports = {

    locale: "pt_PT",

    utils: {
        prefix: (prefix) => `Meu prefixo atual é \`${prefix}\`\nUse \`${prefix}help\` para mais ajuda.`,
        viewConf: () => `[Ver configuração no painel](https://invite-count.xyz)`,
        conf: {
            title: () => `Ver configuração no painel`,
            content: () => `[ou no painel](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} entrou no servidor usando OAuth.`,
                
                vanity: (user) => `${user} entrou no servidor usando o convite discord.gg definido pelo proprietário do servidor.`,
                unknown: (user) => `Não consigo entender como ${user} entrou no servidor.`,
                perm: (user) => `${emojis.error} | Preciso de permissão de gerenciamento do servidor para saber quem convidou ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} saiu do servidor, entrou via OAuth.`,
                vanity: (user) => `${user} saiu do servidor, entrou via convite discord.gg definido pelo proprietário do servidor.`,
                unknown: (user) => `${user} saiu do servidor, mas não consigo entender como ele entrou.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Permissões em falta**__\n\nPreciso das seguintes permissões para este comando funcionar corretamente: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | Este comando está atualmente desabilitado!`,
        permLevel: (name) => `${emojis.error} | Este comando requer nível de permissão: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | Não tenho permissão para enviar mensagens neste canal.`,
        missingAdmin: () => `${emojis.error} | Preciso da permissão \`Gerenciar Servidor\` para executar esta ação`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | O canal atual já é este canal!`,
        success: () => `<:succes:851491428563812382> | Canal de logs definido com sucesso.`
    },
    glist: {
        title: () => `🎁 Lista de Sorteios`,
        description: (prefix) => `Use \`${prefix}gstart\` para iniciar um sorteio. Apenas sorteios não concluídos são exibidos`,
        fields: {
            name: () => `> Lista`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Termina em ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | Não há sorteios não concluídos neste servidor`,

    },
    help: {
        title: () => `ℹ Página de Ajuda do InviteCount`,
        description: (guildName, prefix) => `InviteCount permite gerenciar os membros do seu servidor rastreando convites.\n\nA **documentação** pode ser acessada [aqui](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderação**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Administração**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **Geral**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Configuração**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Mensagens de Saída`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Sorteios**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Convites`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Utilitários`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Links :`,
        links: (clientID) => `[Adicione-me](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Website](https://invite-count.xyz) ● [Servidor de Suporte](${discord}) ● [Vote em mim](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount permite gerenciar os membros do seu servidor rastreando convites.`,

        dev: {
            title: () => `**Informações**`,
            content: (uptime) => `<:arrow:766358167382523944> **Desenvolvedores:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Biblioteca:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Tempo de atividade** ${uptime}\n <:arrow:766358167382523944> **Data de criação:** 12 de maio de 2019`
        },
        statistics: {
            title: () => `**Estatísticas**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Servidores:** ${guilds}\n<:arrow:766358167382523944> **Usuários**: ${channels}\n<:arrow:766358167382523944> **Canais:** ${users}`
        },
        link: {
            title: () => `**Links**`,
            content: () => `<:arrow:766358167382523944> **Servidor de Suporte:** [Clique](${discord})\n<:arrow:766358167382523944> **Convite:** [Clique](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount permite gerenciar os membros do seu servidor rastreando convites.`,

        dev: {
            title: () => `**Desenvolvedores :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inspirado por :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Agradecimentos especiais :**`,
            content: () => `⭐ **Androz** por nos ajudar com ManageInvite!\n🎁 **Pauldb09** pelo sistema de sorteio\n👨‍🏭 Todo o time & Tradutores`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Você tem` : `**${member.user.username}** tem`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** convites! (**${memberData.invites}** normais, **${memberData.bonus}** bônus, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** falsos, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** saídas)${nextRank ? `\nVocê precisa de **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** mais convites para obter o próximo rank: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | Placar limpo!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** convites (**${member.invites}** normais, **${member.bonus}** bônus, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** falsos, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** saídas)`,
        prompt: () => `{{user}}, em qual página você deseja ir? Digite \`cancel\` ou \`0\` para cancelar.`,
        title: () => `Placar de Convites`,
        empty: {
            title: () => `😕 Nenhum convite encontrado`,
            content: () => `Comece a convidar pessoas e você aparecerá nesta página!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} conta (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Criação`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Sim" : "Não"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Entrada`
            },
            joinWay: {
                title: () => `Forma de entrada`,
                oauth: () => `Convite OAuth (via discordapp.com).`,
                vanity: () => `Convite personalizado definido pelo administrador.`,
                unknown: (user) => `Não consigo entender como ${user.username} entrou no servidor.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Convites`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** convites (**${inviteData.invites}** normais, **${inviteData.bonus}** bônus, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** falsos, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** saídas)`
            },
            joinOrder: {
                title: () => `➡️ Ordem de Entrada`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Você deve ter a permissão `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Por favor, mencione um usuário",
            supperior: "<:error:753232040199192657> | Você não pode expulsar um usuário superior a você",
            noperm: "<:error:753232040199192657> | Um erro ocorreu... Por favor, verifique se tenho permissão para expulsar este membro e tente novamente!",
            
        },
        description: "<:success:753232040073101363> | Usuário expulso com sucesso",
        banneddm: (server, moderator, reason) => "Você foi expulso de **" + server + "** por **" + moderator + "**\n**Motivo** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Você deve ter a permissão `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Por favor, mencione um usuário",
            supperior: "<:error:753232040199192657> | Você não pode banir um usuário superior a você",
            noperm: "<:error:753232040199192657> | Um erro ocorreu... Por favor, verifique se tenho permissão para banir este membro e tente novamente!",
            
        },
        description: "<:success:753232040073101363> | Usuário banido com sucesso",
        banneddm: (server, moderator, reason) => "Você foi banido de **" + server + "** por **" + moderator + "**\n**Motivo** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Por favor, especifique um ID para desbanir",
        success: (user) => "<:success:753232040073101363> | " + user + " foi desbanido com sucesso",
        noban: "<:error:753232040199192657> | Este usuário não está banido"
    },

    membercount: {
        title: (guildName) => `Contagem de Membros de ${guildName}`,
        description: (guild) => `
        Total de **${guild.members.cache.size}** membros (**${guild.members.cache.filter((m) => !m.user.bot).size}** pessoas e **${guild.members.cache.filter((m) => m.user.bot).size}** bots)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} membros (não perturbe)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} membros (online)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} membros (ocioso)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} membros (offline)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Você deve especificar o número de convites bônus para adicionar. (Sintaxe: ${prefix}addbonus número @membro) **Você precisa convidar uma pessoa real para obter uma recompensa**`,
                incorrect: (prefix) => `${emojis.error} | Você deve especificar um número válido de convites bônus para adicionar. (Sintaxe: ${prefix}addbonus número @membro)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Você deve mencionar um membro para adicionar convites bônus. (Sintaxe: ${prefix}addbonus número @membro)`
            }
        },
        title: () => `📥 Convites Bônus Adicionados`,
        field: (prefix, member) => `Digite \`${prefix}invites ${member.user.tag}\` para ver o novo número de convites de **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Você deve especificar o número de convites bônus para remover. (Sintaxe: ${prefix}removebonus número @membro)`,
                incorrect: (prefix) => `${emojis.error} | Você deve especificar um número válido de convites bônus para remover. (Sintaxe: ${prefix}removebonus número @membro)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Você deve mencionar um membro para remover convites bônus. (Sintaxe: ${prefix}removebonus número @membro)`
            }
        },
        title: () => `📥 Convites Bônus Removidos`,
        field: (prefix, member) => `Digite \`${prefix}invites ${member.user.tag}\` para ver o novo número de convites de **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | Sistema DM de Entrada agora está __ATIVADO__!**`,
        off: () => `**${emojis.success} | Sistema DM de Entrada agora está __DESATIVADO__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Sistema de Entrada agora está __ATIVADO__!**`,
        off: () => `**${emojis.success} | Sistema de Entrada agora está __DESATIVADO__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Sistema de Saída agora está __ATIVADO__!**`,
        off: () => `**${emojis.success} | Sistema de Saída agora está __DESATIVADO__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | Você deve especificar um prefixo!`,
        success: () => `${emojis.success} | Prefixo do servidor atualizado!`
    },

    testdmjoin: {
        title: () => `:wrench: Sistema DM de Entrada :`,
        description: () => `Se não estiver funcionando, verifique as permissões do bot ou entre no [servidor de suporte](${discord})`,
        fields: {
            enabled: () => `> Ativado:`,
            message: () => `> Mensagem:`
        },
        enabled: (prefix) => `${emojis.success} Mensagens de entrada em DM ativadas. Desative com \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Mensagens de entrada em DM desativadas. Ative com \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Mensagem não definida. Defina com \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Sistema de Entrada :`,
        description: () => `Se não estiver funcionando, verifique as permissões do bot ou entre no [servidor de suporte](${discord})`,
        fields: {
            enabled: () => `> Ativado:`,
            channel: () => `> Canal:`,
            message: () => `> Mensagem:`
        },
        enabled: (prefix) => `${emojis.success} Mensagens de entrada ativadas. Desative com \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Mensagens de entrada desativadas. Ative com \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Mensagem não definida. Defina com \`${prefix}configjoin\`!`,
            channel: (prefix) => `Canal não definido. Defina com \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Sistema de Saída :`,
        description: () => `Se não estiver funcionando, verifique as permissões do bot ou entre no [servidor de suporte](${discord})`,
        fields: {
            enabled: () => `> Ativado:`,
            channel: () => `> Canal:`,
            message: () => `> Mensagem:`
        },
        enabled: (prefix) => `${emojis.success} Mensagens de saída ativadas. Desative com \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Mensagens de saída desativadas. Ative com \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Mensagem não definida. Defina com \`${prefix}configleave\`!`,
            channel: (prefix) => `Canal não definido. Defina com \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Configuração de ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Mensagens de Entrada`,
            content: (guild, data) => `
            > Ativado: ${data.guild.join.enabled ? "**sim**" : "**não**"}
            > Mensagem: ${data.guild.join.message ? "**definida**" : "**não definida**."}
            > Canal: ${!data.guild.join.channel ? "**não definido**" : (guild.channels.cache.get(data.guild.join.channel) ? "**definido**" : "**canal não encontrado**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Mensagens de Saída`,
            content: (guild, data) => `
            > Ativado: ${data.guild.leave.enabled ? "**sim**" : "**não**"}
            > Mensagem: ${data.guild.leave.message ? "**definida**" : "**não definida**."}
            > Canal: ${!data.guild.leave.channel ? "**não definido**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**definido**" : "**canal não encontrado**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Mensagens DM de Entrada`,
            content: (guild, data) => `
            > Ativado: ${data.guild.joinDM.enabled ? "**sim**" : "**não**"}
            > Mensagem: ${data.guild.joinDM.message ? "**definida**" : "**não definida**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | Olá, **${username}**! Este recurso está disponível apenas para servidores premium e parceiros. Obtenha premium: **em breve** !`
    },

    antispam: {
        cooldown: (username) => `Vá devagar! Por favor, aguarde 5 segundos e tente novamente!`
    },

    configdmjoin: {
        disable: (prefix) => `Digite \`${prefix}setdmjoin\` para desativar as mensagens de entrada em DM.`,
        instruct: (str) => `
__**Informações Adicionais**__
\`\`\`
{user} : Menção do membro que entrou no servidor.
{user.name} : Nome do membro que entrou no servidor.
{user.tag} : Tag do membro que entrou no servidor.
{user.createdat} : Idade da conta do membro.

{guild} : Nome do servidor.
{guild.count} : Contagem atual de membros do seu servidor.

{inviter} : Menção de quem convidou.
{inviter.name} : Nome de quem convidou.
{inviter.tag} : Tag de quem convidou.
{inviter.invites} : Total de convites de quem convidou.

{invite.code} : Código de convite usado.
{invite.url} : URL de convite usado.
{invite.uses} : Número de usos do código de convite.
\`\`\`
Digite \`cancel\` para cancelar. ${str}


:pencil: **| Agora escreva a mensagem de entrada em DM... :pencil2:**`,
        cancelled: () => `:x: Cancelado.`,
        success: () => `✅ **| Concluído com sucesso...**`,
        title: () => `**Mensagem de Entrada em DM Definida**`,
        fields: {
            message: () => `Mensagem:`,
            testIt: () => `Teste:`,
            cmd: (prefix) => `Use \`${prefix}testdmjoin\` para testar a nova mensagem.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Sua mensagem deve ter menos de 850 caracteres.`, 
        disable: (prefix) => `Digite \`${prefix}setjoin\` para desativar as mensagens de entrada.`,
        instructs: {
            message: (str) => `
__**Informações Adicionais**__
\`\`\`
{user} : Menção do membro que entrou no servidor.
{user.name} : Nome do membro que entrou no servidor.
{user.tag} : Tag do membro que entrou no servidor.
{user.createdat} : Idade da conta do membro.

{guild} : Nome do servidor.
{guild.count} : Contagem atual de membros do seu servidor.

{inviter} : Menção de quem convidou.
{inviter.name} : Nome de quem convidou.
{inviter.tag} : Tag de quem convidou.
{inviter.invites} : Total de convites de quem convidou.

{invite.code} : Código de convite usado.
{invite.url} : URL de convite usado.
{invite.uses} : Número de usos do código de convite.
\`\`\`
Digite \`cancel\` para cancelar. ${str}


:pencil: **| Agora escreva a mensagem de entrada... :pencil2:**`,
            channel: () => `:scroll: **| Agora mencione o canal... :pencil2:**`
        },
        cancelled: () => `:x: Cancelado.`,
        success: () => `✅ **| Concluído com sucesso...**`,
        title: () => `**Mensagem de Entrada Definida**`,
        fields: {
            message: () => `Mensagem:`,
            channel: () => `Canal:`,
            testIt: () => `Teste:`,
            cmd: (prefix) => `Use \`${prefix}testjoin\` para testar a nova mensagem.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Nenhum canal encontrado para \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Digite \`${prefix}setleave\` para desativar as mensagens de saída.`,
        instructs: {
            message: (str) => `
__**Informações Adicionais**__
\`\`\`
{user} : Menção do membro que saiu do servidor.
{user.name} : Nome do membro que saiu do servidor.
{user.tag} : Tag do membro que saiu do servidor.
{user.createdat} : Idade da conta do membro.

{guild} : Nome do servidor.
{guild.count} : Contagem atual de membros do seu servidor.

{inviter} : Menção de quem convidou.
{inviter.name} : Nome de quem convidou.
{inviter.tag} : Tag de quem convidou.
{inviter.invites} : Total de convites de quem convidou.

{invite.code} : Código de convite usado.
{invite.url} : URL de convite usado.
{invite.uses} : Número de usos do código de convite.
\`\`\`
Digite \`cancel\` para cancelar. ${str}


:pencil: **| Agora escreva a mensagem de saída... :pencil2:**`,
            channel: () => `:scroll: **| Agora mencione o canal... :pencil2:**`
        },
        cancelled: () => `:x: Cancelado.`,
        success: () => `✅ **| Concluído com sucesso...**`,
        title: () => `**Mensagem de Saída Definida**`,
        fields: {
            message: () => `Mensagem:`,
            channel: () => `Canal:`,
            testIt: () => `Teste:`,
            cmd: (prefix) => `Use \`${prefix}testleave\` para testar a nova mensagem`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | Nenhum canal encontrado para \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | Você deve especificar um idioma válido!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)`,
        success: () => `${emojis.success} | :flag_pt: O idioma do servidor agora é Português!`
    },

    graph: {
        title: (server, days) => `Entradas em ${server} nos últimos ${days} dias`,
        content: (total, percent, from, to) => `**${total}** membros (ou seja, **${percent}%** do servidor) entraram no servidor de ${from} para ${to}:`,
        invalid: () => `Você deve inserir um número válido de dias (maior que 1 e menor que 1000) para ser exibido!`,
        months: () =>[
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `membros`
        },
        conf: {
            title: () => `Configuração`
        },
        selector: {
            title: () => `Seletor`,
            manage: () => `Gerenciar`,
            no: {
                title: () => `Nenhum servidor`,
                content: () => `Nenhum servidor encontrado. Por favor, verifique se você está logado com a conta correta.`
            }
        },
        help: {
            title: () => `Ajuda`,
            doc: () => `Documentação`,
            support: () => `Servidor de Suporte`
        },
        forms: {
            buttons: {
                enable: () => `Ativar Mensagens`,
                disable: () => `Desativar Mensagens`,
                update: () => `Atualizar Mensagens`
            },
            basic: {
                title: () => `Configuração Básica`,
                language: () => `Idioma`,
                prefix: () => `Prefixo`,
                update: () => `Atualizar`
            },
            join: {
                title: () => `Mensagens de Entrada`,
                message: {
                    title: () => `Mensagem`,
                    default: () => `{user} entrou no servidor! Convidado por **{inviter.tag}** ({inviter.invites} convites).`
                },
                channel: {
                    title: () => `Canal`
                },
            },
            leave: {
                title: () => `Mensagens de Saída`,
                message: {
                    title: () => `Mensagem`,
                    default: () => `{user.username} saiu do servidor. Tinha sido convidado por **{inviter.tag}** ({inviter.invites} convites).`
                },
                channel: {
                    title: () => `Canal`
                }
            },
            joinDM: {
                title: () => `Mensagens DM de Entrada`,
                premium: () => `Este recurso está disponível para servidores premium e parceiros.`,
                message: {
                    title: () => `Mensagem`,
                    default: () => `Bem-vindo {user}! Você entrou em **{server}**! Convidado por **{inviter.tag}**. Não esqueça de ler as regras do servidor!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | Processo de remoção de convites do servidor iniciado... Você pode restaurá-los com o comando \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | Processo de remoção de convites de **${member.user.tag}}** iniciado... Você pode restaurá-los com o comando \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Convites Redefinidos`,
        titles: {
            all: (prefix) => `${emojis.success} | Convites do servidor redefinidos! Você pode restaurá-los com o comando \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | Convites de **${member.user.tag}}** redefinidos! Você pode restaurá-los com o comando \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | Tem certeza de que deseja restaurar os convites do servidor? Todos os membros receberão os convites antes da última execução do comando \`${prefix}remove-invites\` (ou 0 se o comando nunca foi executado).\n\n:information_source: **Resumo dos convites**:\nSerão restaurados, total: **${memberCount.invites}** normais, **${memberCount.bonus}** bônus, **${memberCount.leaves}** saídas, **${memberCount.fake}** falsos.\n\n${emojis.success} Digite \`-confirm\` para confirmar.\n${emojis.error} Digite \`cancel\` para cancelar.`,
            member: (prefix, member) => `${emojis.warn} | Tem certeza de que deseja restaurar os convites de **${member.user.tag}}**? Receberão os convites antes da última execução do comando \`${prefix}remove-invites\` (ou 0 se o comando nunca foi executado).\n\n:information_source: **Resumo dos convites**:\nSerão restaurados: **${member.data.old_invites}** normais, **${member.data.old_bonus}** bônus, **${member.data.old_leaves}** saídas, **${member.data.old_fake}** falsos.\n\n${emojis.success} Digite \`-confirm\` para confirmar.\n${emojis.error} Digite \`cancel\` para cancelar.`,
            cancelled: () => `${emojis.error} Cancelado.`
        },
        loading: {
            all: () => `${emojis.loading} | Processo de restauração de convites do servidor iniciado....`,
            member: (member) => `${emojis.loading} | Processo de restauração de convites de **${member.user.tag}}** iniciado...`
        },
        title: () => `☄️ Convites Restaurados`,
        titles: {
            all: () => `${emojis.success} | Convites do servidor restaurados!`,
            member: (member) => `${emojis.success} | Convites de **${member.user.tag}}** restaurados!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | Não há convites para sincronizar.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | Tem certeza de que deseja sincronizar os convites do servidor?\n\n:information_source: **Resumo dos convites**:\n**${Math.round(inviteCount)}** convites normais serão restaurados.\n\n${emojis.success} Digite \`-confirm\` para confirmar.\n${emojis.error} Digite \`cancel\` para cancelar.`,
            cancelled: () => `${emojis.error} Cancelado.`
        },
        title: () => `☄️ Convites Sincronizados`,
        titles: {
            all: () => `${emojis.success} | Convites do servidor sincronizados!`
        }
    },

    add: {
        content: (id) => `Você pode me adicionar ao seu servidor clicando [aqui](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Solicitado por ${username}`
    },

    support: {
        content: (id) => `Você pode entrar no nosso servidor de suporte clicando [aqui](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Solicitado por ${username}`
    }

};
