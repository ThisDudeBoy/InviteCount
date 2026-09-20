const { emojis, discord } = require("../config");

module.exports = {

    locale: "es_ES",

    utils: {
        prefix: (prefix) => `Mi prefijo actual es \`${prefix}\`\nUse \`${prefix}help\` para más ayuda.`,
        viewConf: () => `[Ver configuración en el panel](https://invite-count.xyz)`,
        conf: {
            title: () => `Ver configuración en el panel`,
            content: () => `[o en el panel](https://invite-count.xyz)`
        },
        specialMessages: {
            join: {
                oauth2: (user) => `${user} se unió al servidor usando OAuth.`,
                
                vanity: (user) => `${user} se unió al servidor usando la invitación discord.gg definida por el dueño del servidor.`,
                unknown: (user) => `No puedo entender cómo ${user} se unió al servidor.`,
                perm: (user) => `${emojis.error} | Necesito permiso de gestión del servidor para saber quién invitó a ${user}.`
            },
            leave: {
                oauth2: (user) => `${user} se fue del servidor, se había unido a través de OAuth.`,
                vanity: (user) => `${user} se fue del servidor, se había unido a través de la invitación discord.gg definida por el dueño del servidor.`,
                unknown: (user) => `${user} se fue del servidor, pero no puedo entender cómo se unió.`
            }
        }
    },

    errors: {
        missingPerms: (neededPermissions) => `__**${emojis.error} Permisos faltantes**__\n\nNecesito los siguientes permisos para que este comando funcione correctamente: ${neededPermissions.map((p) => "`"+p+"`").join(", ")}`,
        disabled: () => `${emojis.error} | ¡Este comando está deshabilitado actualmente!`,
        permLevel: (name) => `${emojis.error} | Este comando requiere nivel de permiso: \`${name}\`!`,
        sendPerm: () => `${emojis.error} | No tengo permiso para enviar mensajes en este canal.`,
        missingAdmin: () => `${emojis.error} | Necesito el permiso \`Gestionar Servidor\` para ejecutar esta acción`
    },
    glogs: {
        err: () => `<:error:851490719934840872> | ¡El canal actual ya es este canal!`,
        success: () => `<:succes:851491428563812382> | Canal de registro configurado con éxito.`
    },
    glist: {
        title: () => `🎁 Lista de Sorteos`,
        description: (prefix) => `Usa \`${prefix}gstart\` para iniciar un sorteo. Solo se muestran sorteos no completados`,
        fields: {
            name: () => `> Lista`,
            message: (gs) => `${gs.map(ginfos=>`<:channel:851482936787730472> [${ginfos.prize}](${ginfos.messageURL}) : Finaliza en ${ginfos.endAt}`).join("\n")} `
        },
        err: () => `<:error:851490719934840872> | No hay sorteos no completados en este servidor`,

    },
    help: {
        title: () => `ℹ Página de Ayuda de InviteCount`,
        description: (guildName, prefix) => `InviteCount te permite gestionar los miembros de tu servidor rastreando invitaciones.\n\nLa **documentación** se puede acceder [aquí](https://docs.invite-count.xyz/).`,
        // Admin
        moderation: {
            title: () => `🛡️ **Moderación**`,
            content: (prefix) => "> `ban`, `kick`, `unban`"},
        admin: {
            title: () => `⚙️ **Administración**`,
            content: (prefix) => "> `addbonus`, `removebonus`, `sync-invites`, `removeinvites`, `restoreinvites`, `setprefix`, `setlang`, `config`"},
        // Join DM Messages
        joinDM: {
            title: () => `💻 **General**`,
            content: (prefix) => "> `infos`, `add`, `membercount`, `userinfo`, `support`, `credits`, `invites`, `leaderboard`"},
        // Join Messages
        join: {
            title: () => `:tools: **Configuración**`,
            content: (prefix) => "> `configjoin`, `setjoin`, `testjoin`, `configleave`, `setleave`, `testleave`, `configdm`, `setdm`, `testdm`"},
        // Leave Messages
        leave: {
            title: () => `:envelope: Mensajes de Salida`,
            content: (prefix) => "`configleave`, `setleave`, `testleave`"},
        // Giveaways
        giveaway: {
            title: () => `🎁 **Sorteos**`,
            content: (prefix) => "> `gstart`, `gend`, `glist`, `glogs`, `greroll`"},
        // Invites
        invites: {
            title: () => `:wave: Invitaciones`,
            content: (prefix) => "`invite`, `leaderboard`"},
        // ManageInvite
        manageInvite: {
            title: () => `💠 Utilidades`,
            content: (prefix) => "`membercount`, `userinfo`, `botinfos`, `ping`, `creators`, `support`, `credits`, `add`"},
        // Others
        tip: (prefix) => `🔗 Enlaces :`,
        links: (clientID) => `[Agrégame](https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&permissions=8&scope=bot) ● [Sitio Web](https://invite-count.xyz) ● [Servidor de Soporte](${discord}) ● [Vótame](https://discord.boats/bot/${clientID}/vote)`
    },

    infos: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount te permite gestionar los miembros de tu servidor rastreando invitaciones.`,

        dev: {
            title: () => `**Información**`,
            content: (uptime) => `<:arrow:766358167382523944> **Desarrolladores:** Npg, Alex, Alboom\n <:arrow:766358167382523944> **Librería:** [discord.js v14.14.1](https://discord.js.org/#/)\n <:arrow:766358167382523944> **Tiempo de Actividad** ${uptime}\n <:arrow:766358167382523944> **Fecha de Creación:** 12 de mayo de 2019`
        },
        statistics: {
            title: () => `**Estadísticas**`,
            content: (guilds, users, channels, ping, ram, shardID) => `<:arrow:766358167382523944> **Servidores:** ${guilds}\n<:arrow:766358167382523944> **Usuarios**: ${channels}\n<:arrow:766358167382523944> **Canales:** ${users}`
        },
        link: {
            title: () => `**Enlaces**`,
            content: () => `<:arrow:766358167382523944> **Servidor de Soporte:** [Haz clic](${discord})\n<:arrow:766358167382523944> **Invitación:** [Haz clic](https://discordapp.com/api/oauth2/authorize?client_id=577236734245470228&permissions=8&scope=bot)`
        }
    },

    credits: {
        title: () => `**InviteCount**`,
        content: () => `InviteCount te permite gestionar los miembros de tu servidor rastreando invitaciones.`,

        dev: {
            title: () => `**Desarrolladores :**`,
            content: (uptime) => `[Npg](https://github.com/ThisDudeBoy)\n[Alex](https://discord.com)\n[Alboom](https://discord.com)`
        },
        statistics: {
            title: () => `**Inspirado en :**`,
            content: (guilds, users, channels, ping, ram, shardID) => `[ManageInvite](https://github.com/ManageInvite/ManageInvite)\n[InviteManager](https://github.com/SideProjectGuys/invite-manager-bot)`
        },
        link: {
            title: () => `**Agradecimientos Especiales :**`,
            content: () => `⭐ **Androz** por ayudarnos con ManageInvite!\n🎁 **Pauldb09** por el sistema de sorteo\n👨‍🏭 Todo el Equipo & Traductores`
        }
    },

    invite: {
        description: (member, memberData, isYou, nextRank, role) => `${isYou ? `Tienes` : `**${member.user.username}** tiene`} **${memberData.invites + memberData.bonus - memberData.leaves - memberData.fake}** invitaciones! (**${memberData.invites}** normales, **${memberData.bonus}** bonificación, **${memberData.fake > 0 ? `-${memberData.fake}` : `${memberData.fake}`}** falsas, **${memberData.leaves > 0 ? `-${memberData.leaves}` : `${memberData.leaves}`}** salidas)${nextRank ? `\n¡Necesitas **${Math.round(nextRank.inviteCount - (memberData.invites + memberData.bonus - memberData.leaves - memberData.fake))}** más invitaciones para obtener el siguiente rango: **${role}**!` : ""}`
    },

    inviter: {
        description: (member, inviterName) => `**${member.user.username}** was invited by **${inviterName}**`,
        unknown: () => `Unknown`,
        notFound: () => `Inviter not found (user may have been deleted)`
    },
    leaderboard: {
        cleared: () => `${emojis.success} | ¡Tabla de clasificación borrada!`,
        user: (user, member, lb) => `${lb} **${user.username}** - **${member.calculatedInvites}** invitaciones (**${member.invites}** normales, **${member.bonus}** bonificación, **${member.fake > 0 ? `-${member.fake}` : `${member.fake}`}** falsas, **${member.leaves > 0 ? `-${member.leaves}` : `${member.leaves}`}** salidas)`,
        prompt: () => `{{user}}, ¿a qué página quieres ir? Escribe \`cancel\` o \`0\` para cancelar.`,
        title: () => `Tabla de Clasificación de Invitaciones`,
        empty: {
            title: () => `😕 No se encontraron invitaciones`,
            content: () => `¡Comienza a invitar a personas y aparecerás en esta página!`
        }
    },

    userinfo: {
        title: (user) => `${user.tag} cuenta (${user.id})`,
        fields: {
            // user
            createdAt: {
                title: () => `<:createdAt:741247823269593118> Creación`
            },
            bot: {
                title: () => `<:maestro_robot:749985600110723184> Bot`,
                content: (user) => user.bot ? "Sí" : "No"
            },
            // member
            joinedAt: {
                title: () => `<:join:741252065585660014> Unión`
            },
            joinWay: {
                title: () => `Forma de Unión`,
                oauth: () => `Invitación OAuth (a través de discordapp.com).`,
                vanity: () => `Invitación personalizada configurada por el administrador.`,
                unknown: (user) => `No puedo entender cómo se unió ${user.username} al servidor.`,
                invite: (user) => user.tag
            },
            invites: {
                title: () => `✉️ Invitaciones`,
                content: (inviteData) => `**${inviteData.invites + inviteData.bonus - inviteData.leaves - inviteData.fake}** invitaciones (**${inviteData.invites}** normales, **${inviteData.bonus}** bonificación, **${inviteData.fake > 0 ? `-${inviteData.fake}` : `${inviteData.fake}`}** falsas, **${inviteData.leaves > 0 ? `-${inviteData.leaves}` : `${inviteData.leaves}`}** salidas)`
            },
            joinOrder: {
                title: () => `➡️ Orden de Unión`,
                content: (previous, next, user) => `${previous ? `**${previous.tag}** > ` : ""}**${user.tag}**${next ? ` > **${next.tag}**` : ""}`
            }
        }
    },

    kick: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Debes tener el permiso `KICK_MEMBERS`",
            nouser: "<:error:753232040199192657> | Por favor, menciona a un usuario",
            supperior: "<:error:753232040199192657> | No puedes expulsar a un usuario superior a ti",
            noperm: "<:error:753232040199192657> | Ocurrió un error... ¡Por favor, verifica que tengo permiso para expulsar a este miembro e intenta de nuevo!",
            
        },
        description: "<:success:753232040073101363> | Usuario expulsado con éxito",
        banneddm: (server, moderator, reason) => "Fuiste expulsado de **" + server + "** por **" + moderator + "**\n**Razón** : `" + reason + "`" 
    },

    ban: {
        errors:{
            missingPerms: "<:error:753232040199192657> | Debes tener el permiso `BAN_MEMBERS`",
            nouser: "<:error:753232040199192657> | Por favor, menciona a un usuario",
            supperior: "<:error:753232040199192657> | No puedes banear a un usuario superior a ti",
            noperm: "<:error:753232040199192657> | Ocurrió un error... ¡Por favor, verifica que tengo permiso para banear a este miembro e intenta de nuevo!",
            
        },
        description: "<:success:753232040073101363> | Usuario baneado con éxito",
        banneddm: (server, moderator, reason) => "Fuiste baneado de **" + server + "** por **" + moderator + "**\n**Razón** : `" + reason + "`" 
    },

    unban: {
        noid: "<:error:753232040199192657> | Por favor, especifica una ID para desbanear",
        success: (user) => "<:success:753232040073101363> | " + user + " fue desbaneado con éxito",
        noban: "<:error:753232040199192657> | Este usuario no está baneado"
    },

    membercount: {
        title: (guildName) => `Recuento de Miembros de ${guildName}`,
        description: (guild) => `
        Total de **${guild.members.cache.size}** miembros (**${guild.members.cache.filter((m) => !m.user.bot).size}** personas y **${guild.members.cache.filter((m) => m.user.bot).size}** bots)

        ➔ ${emojis.dnd} | ${guild.members.cache.filter((m) => m.presence.status === "dnd"  && !m.user.bot).size} miembros (no molestar)
        ➔ ${emojis.online} | ${guild.members.cache.filter((m) => m.presence.status === "online" && !m.user.bot).size} miembros (en línea)
        ➔ ${emojis.idle} | ${guild.members.cache.filter((m) => m.presence.status === "idle" && !m.user.bot).size} miembros (inactivo)
        ➔ ${emojis.offline} | ${guild.members.cache.filter((m) => m.presence.status === "offline" && !m.user.bot).size} miembros (desconectado)`
    },

    addbonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Debes especificar la cantidad de invitaciones de bonificación para agregar. (Sintaxis: ${prefix}addbonus número @miembro) **Necesitas invitar a una persona real para obtener una recompensa**`,
                incorrect: (prefix) => `${emojis.error} | Debes especificar una cantidad válida de invitaciones de bonificación para agregar. (Sintaxis: ${prefix}addbonus número @miembro)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Debes mencionar a un miembro para agregar invitaciones de bonificación. (Sintaxis: ${prefix}addbonus número @miembro)`
            }
        },
        title: () => `📥 Invitaciones de Bonificación Agregadas`,
        field: (prefix, member) => `¡Escribe \`${prefix}invites ${member.user.tag}\` para ver la nueva cantidad de invitaciones de **${member.user.username}**!`
    },

    removebonus: {
        errors: {
            bonus: {
                missing: (prefix) => `${emojis.error} | Debes especificar la cantidad de invitaciones de bonificación para eliminar. (Sintaxis: ${prefix}removebonus número @miembro)`,
                incorrect: (prefix) => `${emojis.error} | Debes especificar una cantidad válida de invitaciones de bonificación para eliminar. (Sintaxis: ${prefix}removebonus número @miembro)`
            },
            member: {
                missing: (prefix) => `${emojis.error} | Debes mencionar a un miembro para eliminar invitaciones de bonificación. (Sintaxis: ${prefix}removebonus número @miembro)`
            }
        },
        title: () => `📥 Invitaciones de Bonificación Eliminadas`,
        field: (prefix, member) => `¡Escribe \`${prefix}invites ${member.user.tag}\` para ver la nueva cantidad de invitaciones de **${member.user.username}**!`
    },

    setdmjoin: {
        on: () => `**${emojis.success} | Sistema de Entrada por MD ahora está __HABILITADO__!**`,
        off: () => `**${emojis.success} | Sistema de Entrada por MD ahora está __DESHABILITADO__!**`
    },

    setjoin: {
        on: () => `**${emojis.success} | Sistema de Entrada ahora está __HABILITADO__!**`,
        off: () => `**${emojis.success} | Sistema de Entrada ahora está __DESHABILITADO__!**`
    },

    setleave: {
        on: () => `**${emojis.success} | Sistema de Salida ahora está __HABILITADO__!**`,
        off: () => `**${emojis.success} | Sistema de Salida ahora está __DESHABILITADO__!**`
    },

    setprefix: {
        missing: () => `${emojis.error} | ¡Debes especificar un prefijo!`,
        success: () => `${emojis.success} | ¡Prefijo del servidor actualizado!`
    },

    testdmjoin: {
        title: () => `:wrench: Sistema de Entrada por MD :`,
        description: () => `Si no está funcionando, verifica los permisos del bot o únete al [servidor de soporte](${discord})`,
        fields: {
            enabled: () => `> Habilitado:`,
            message: () => `> Mensaje:`
        },
        enabled: (prefix) => `${emojis.success} Mensajes de entrada por MD habilitados. Deshabílita con \`${prefix}setdmjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Mensajes de entrada por MD deshabilitados. Habilita con \`${prefix}setdmjoin\`.`,
        notDefineds: {
            message: (prefix) => `Mensaje no definido. Configúralo con \`${prefix}configdm\`!`
        }
    },

    testjoin: {
        title: () => `:wrench: Sistema de Entrada :`,
        description: () => `Si no está funcionando, verifica los permisos del bot o únete al [servidor de soporte](${discord})`,
        fields: {
            enabled: () => `> Habilitado:`,
            channel: () => `> Canal:`,
            message: () => `> Mensaje:`
        },
        enabled: (prefix) => `${emojis.success} Mensajes de entrada habilitados. Deshabílita con \`${prefix}setjoin\`.`,
        disabled: (prefix) =>  `${emojis.error} Mensajes de entrada deshabilitados. Habilita con \`${prefix}setjoin\`.`,
        notDefineds: {
            message: (prefix) => `Mensaje no definido. Configúralo con \`${prefix}configjoin\`!`,
            channel: (prefix) => `Canal no definido. Configúralo con \`${prefix}configjoin\`!`
        }
    },

    testleave: {
        title: () => `:wrench: Sistema de Salida :`,
        description: () => `Si no está funcionando, verifica los permisos del bot o únete al [servidor de soporte](${discord})`,
        fields: {
            enabled: () => `> Habilitado:`,
            channel: () => `> Canal:`,
            message: () => `> Mensaje:`
        },
        enabled: (prefix) => `${emojis.success} Mensajes de salida habilitados. Deshabílita con \`${prefix}setleave\`.`,
        disabled: (prefix) =>  `${emojis.error} Mensajes de salida deshabilitados. Habilita con \`${prefix}setleave\`.`,
        notDefineds: {
            message: (prefix) => `Mensaje no definido. Configúralo con \`${prefix}configleave\`!`,
            channel: (prefix) => `Canal no definido. Configúralo con \`${prefix}configleave\`!`
        }
    },

    config: {
        title: (guildName) => `Configuración de ${guildName}`,
        join: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Mensajes de Entrada`,
            content: (guild, data) => `
            > Habilitado: ${data.guild.join.enabled ? "**sí**" : "**no**"}
            > Mensaje: ${data.guild.join.message ? "**configurado**" : "**no configurado**."}
            > Canal: ${!data.guild.join.channel ? "**no configurado**" : (guild.channels.cache.get(data.guild.join.channel) ? "**configurado**" : "**canal no encontrado**")}`
        },
        leave: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Mensajes de Salida`,
            content: (guild, data) => `
            > Habilitado: ${data.guild.leave.enabled ? "**sí**" : "**no**"}
            > Mensaje: ${data.guild.leave.message ? "**configurado**" : "**no configurado**."}
            > Canal: ${!data.guild.leave.channel ? "**no configurado**" : (guild.channels.cache.get(data.guild.leave.channel) ? "**configurado**" : "**canal no encontrado**")}`
        },
        joinDM: {
            title: (enabled) => `${(enabled ? emojis.success : emojis.error)} Mensajes de Entrada por MD`,
            content: (guild, data) => `
            > Habilitado: ${data.guild.joinDM.enabled ? "**sí**" : "**no**"}
            > Mensaje: ${data.guild.joinDM.message ? "**configurado**" : "**no configurado**."}`
        },
    },

    joinDM: {
        premium: (username) => `:crown: | ¡Hola, **${username}**! Esta función solo está disponible para servidores premium y socios. Obtén premium: **próximamente** !`
    },

    antispam: {
        cooldown: (username) => `¡Ve más lento! ¡Por favor, espera 5 segundos e intenta de nuevo!`
    },

    configdmjoin: {
        disable: (prefix) => `Escribe \`${prefix}setdmjoin\` para deshabilitar los mensajes de entrada por MD.`,
        instruct: (str) => `
__**Información Adicional**__
\`\`\`
{user} : Mención del miembro que se unió al servidor.
{user.name} : Nombre del miembro que se unió al servidor.
{user.tag} : Etiqueta del miembro que se unió al servidor.
{user.createdat} : Antigüedad de la cuenta del miembro.

{guild} : Nombre del servidor.
{guild.count} : Recuento actual de miembros de tu servidor.

{inviter} : Mención de quién invitó.
{inviter.name} : Nombre de quién invitó.
{inviter.tag} : Etiqueta de quién invitó.
{inviter.invites} : Total de invitaciones de quién invitó.

{invite.code} : Código de invitación usado.
{invite.url} : URL de invitación usada.
{invite.uses} : Número de usos del código de invitación.
\`\`\`
Escribe \`cancel\` para cancelar. ${str}


:pencil: **| Ahora escribe el mensaje de entrada por MD... :pencil2:**`,
        cancelled: () => `:x: Cancelado.`,
        success: () => `✅ **| Completado con éxito...**`,
        title: () => `**Mensaje de Entrada por MD Configurado**`,
        fields: {
            message: () => `Mensaje:`,
            testIt: () => `Pruébalo:`,
            cmd: (prefix) => `Usa \`${prefix}testdmjoin\` para probar el nuevo mensaje.`
        },

    },

    configjoin: {
        longmessage: () => `<:error:753232040199192657> | Tu mensaje debe tener menos de 850 caracteres.`, 
        disable: (prefix) => `Escribe \`${prefix}setjoin\` para deshabilitar los mensajes de entrada.`,
        instructs: {
            message: (str) => `
__**Información Adicional**__
\`\`\`
{user} : Mención del miembro que se unió al servidor.
{user.name} : Nombre del miembro que se unió al servidor.
{user.tag} : Etiqueta del miembro que se unió al servidor.
{user.createdat} : Antigüedad de la cuenta del miembro.

{guild} : Nombre del servidor.
{guild.count} : Recuento actual de miembros de tu servidor.

{inviter} : Mención de quién invitó.
{inviter.name} : Nombre de quién invitó.
{inviter.tag} : Etiqueta de quién invitó.
{inviter.invites} : Total de invitaciones de quién invitó.

{invite.code} : Código de invitación usado.
{invite.url} : URL de invitación usada.
{invite.uses} : Número de usos del código de invitación.
\`\`\`
Escribe \`cancel\` para cancelar. ${str}


:pencil: **| Ahora escribe el mensaje de entrada... :pencil2:**`,
            channel: () => `:scroll: **| Ahora menciona el canal... :pencil2:**`
        },
        cancelled: () => `:x: Cancelado.`,
        success: () => `✅ **| Completado con éxito...**`,
        title: () => `**Mensaje de Entrada Configurado**`,
        fields: {
            message: () => `Mensaje:`,
            channel: () => `Canal:`,
            testIt: () => `Pruébalo:`,
            cmd: (prefix) => `Usa \`${prefix}testjoin\` para probar el nuevo mensaje.`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | No se encontró canal para \`${channel}\``
        }
    },

    configleave: {
        disable: (prefix) => `Escribe \`${prefix}setleave\` para deshabilitar los mensajes de salida.`,
        instructs: {
            message: (str) => `
__**Información Adicional**__
\`\`\`
{user} : Mención del miembro que se fue del servidor.
{user.name} : Nombre del miembro que se fue del servidor.
{user.tag} : Etiqueta del miembro que se fue del servidor.
{user.createdat} : Antigüedad de la cuenta del miembro.

{guild} : Nombre del servidor.
{guild.count} : Recuento actual de miembros de tu servidor.

{inviter} : Mención de quién invitó.
{inviter.name} : Nombre de quién invitó.
{inviter.tag} : Etiqueta de quién invitó.
{inviter.invites} : Total de invitaciones de quién invitó.

{invite.code} : Código de invitación usado.
{invite.url} : URL de invitación usada.
{invite.uses} : Número de usos del código de invitación.
\`\`\`
Escribe \`cancel\` para cancelar. ${str}


:pencil: **| Ahora escribe el mensaje de salida... :pencil2:**`,
            channel: () => `:scroll: **| Ahora menciona el canal... :pencil2:**`
        },
        cancelled: () => `:x: Cancelado.`,
        success: () => `✅ **| Completado con éxito...**`,
        title: () => `**Mensaje de Salida Configurado**`,
        fields: {
            message: () => `Mensaje:`,
            channel: () => `Canal:`,
            testIt: () => `Pruébalo:`,
            cmd: (prefix) => `Usa \`${prefix}testleave\` para probar el nuevo mensaje`
        },
        errors: {
            channelNotFound: (channel) => `${emojis.error} | No se encontró canal para \`${channel}\``
        }
    },

    setlang: {
        invalid: () => `${emojis.error} | ¡Debes especificar un idioma válido!\n\n:flag_fr: Français (\`fr\`)\n:flag_gb: English (\`en\`)\n:flag_tr: Türkçe (\`tr\`)\n:flag_ru: Русский (\`ru\`)\n:flag_jp: 日本語 (\`jp\`)\n:flag_in: हिंदी (\`hi\`)\n:flag_pt: Português (\`pt\`)\n:flag_br: Português Brasileiro (\`br\`)\n:flag_es: Español (\`es\`)\n:flag_de: Deutsch (\`de\`)\n:flag_it: Italiano (\`it\`)\n:flag_pl: Polski (\`pl\`)\n:flag_nl: Nederlands (\`nl\`)\n:flag_se: Svenska (\`sv\`)\n:flag_no: Norsk (\`no\`)\n:flag_dk: Dansk (\`da\`)`,
        success: () => `${emojis.success} | :flag_es: ¡El idioma del servidor ahora es Español!`
    },

    graph: {
        title: (server, days) => `Entradas en ${server} en los últimos ${days} días`,
        content: (total, percent, from, to) => `**${total}** miembros (es decir, **${percent}%** del servidor) se unieron al servidor de ${from} a ${to}:`,
        invalid: () => `¡Debes ingresar un número válido de días (mayor que 1 y menor que 1000) para ser mostrado!`,
        months: () =>[
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
        ],
        
    },

    website: {
        doc: {
            variables: () => `https://invite-count.xyz/configuration/variables`
        },
        utils: {
            members: () => `miembros`
        },
        conf: {
            title: () => `Configuración`
        },
        selector: {
            title: () => `Selector`,
            manage: () => `Gestionar`,
            no: {
                title: () => `Sin servidores`,
                content: () => `No se encontró servidor. Por favor, verifica que hayas iniciado sesión con la cuenta correcta.`
            }
        },
        help: {
            title: () => `Ayuda`,
            doc: () => `Documentación`,
            support: () => `Servidor de Soporte`
        },
        forms: {
            buttons: {
                enable: () => `Habilitar Mensajes`,
                disable: () => `Deshabilitar Mensajes`,
                update: () => `Actualizar Mensajes`
            },
            basic: {
                title: () => `Configuración Básica`,
                language: () => `Idioma`,
                prefix: () => `Prefijo`,
                update: () => `Actualizar`
            },
            join: {
                title: () => `Mensajes de Entrada`,
                message: {
                    title: () => `Mensaje`,
                    default: () => `¡{user} se unió al servidor! Invitado por **{inviter.tag}** ({inviter.invites} invitaciones).`
                },
                channel: {
                    title: () => `Canal`
                },
            },
            leave: {
                title: () => `Mensajes de Salida`,
                message: {
                    title: () => `Mensaje`,
                    default: () => `{user.username} se fue del servidor. Había sido invitado por **{inviter.tag}** ({inviter.invites} invitaciones).`
                },
                channel: {
                    title: () => `Canal`
                }
            },
            joinDM: {
                title: () => `Mensajes de Entrada por MD`,
                premium: () => `Esta función está disponible para servidores premium y socios.`,
                message: {
                    title: () => `Mensaje`,
                    default: () => `¡Bienvenido {user}! ¡Te uniste a **{server}**! Invitado por **{inviter.tag}**. ¡No olvides leer las reglas del servidor!`,
                }
            }
        }
    },

    removeinvites: {
        loading: {
            all: (prefix) => `${emojis.loading} | El proceso de eliminación de invitaciones del servidor ha comenzado... ¡Puedes restaurarlas con el comando \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.loading} | El proceso de eliminación de invitaciones de **${member.user.tag}}** ha comenzado... ¡Puedes restaurarlas con el comando \`${prefix}restore-invites ${member.user.tag}\`!`
        },
        title: () => `☄️ Invitaciones Restablecidas`,
        titles: {
            all: (prefix) => `${emojis.success} | ¡Invitaciones del servidor restablecidas! ¡Puedes restaurarlas con el comando \`${prefix}restore-invites\`!`,
            member: (prefix, member) => `${emojis.success} | ¡Invitaciones de **${member.user.tag}}** restablecidas! ¡Puedes restaurarlas con el comando \`${prefix}restore-invites ${member.user.tag}\`!`
        }
    },

    restoreinvites: {
        confirmations: {
            all: (prefix, memberCount) => `${emojis.warn} | ¿Estás seguro de que quieres restaurar las invitaciones del servidor? Todos los miembros recibirán las invitaciones antes de la última ejecución del comando \`${prefix}remove-invites\` (o 0 si el comando nunca fue ejecutado).\n\n:information_source: **Resumen de Invitaciones**:\nSeán restauradas, total: **${memberCount.invites}** normales, **${memberCount.bonus}** bonificación, **${memberCount.leaves}** salidas, **${memberCount.fake}** falsas.\n\n${emojis.success} Escribe \`-confirm\` para confirmar.\n${emojis.error} Escribe \`cancel\` para cancelar.`,
            member: (prefix, member) => `${emojis.warn} | ¿Estás seguro de que quieres restaurar las invitaciones de **${member.user.tag}}**? Recibirá las invitaciones antes de la última ejecución del comando \`${prefix}remove-invites\` (o 0 si el comando nunca fue ejecutado).\n\n:information_source: **Resumen de Invitaciones**:\nSerán restauradas: **${member.data.old_invites}** normales, **${member.data.old_bonus}** bonificación, **${member.data.old_leaves}** salidas, **${member.data.old_fake}** falsas.\n\n${emojis.success} Escribe \`-confirm\` para confirmar.\n${emojis.error} Escribe \`cancel\` para cancelar.`,
            cancelled: () => `${emojis.error} Cancelado.`
        },
        loading: {
            all: () => `${emojis.loading} | El proceso de restauración de invitaciones del servidor ha comenzado....`,
            member: (member) => `${emojis.loading} | El proceso de restauración de invitaciones de **${member.user.tag}}** ha comenzado...`
        },
        title: () => `☄️ Invitaciones Restauradas`,
        titles: {
            all: () => `${emojis.success} | ¡Invitaciones del servidor restauradas!`,
            member: (member) => `${emojis.success} | ¡Invitaciones de **${member.user.tag}}** restauradas!`
        }
    },

    syncinvites: {
        no: () => `${emojis.error} | No hay invitaciones para sincronizar.`,
        confirmations: {
            all: (inviteCount) => `${emojis.warn} | ¿Estás seguro de que quieres sincronizar las invitaciones del servidor?\n\n:information_source: **Resumen de Invitaciones**:\n**${Math.round(inviteCount)}** invitaciones normales serán restauradas.\n\n${emojis.success} Escribe \`-confirm\` para confirmar.\n${emojis.error} Escribe \`cancel\` para cancelar.`,
            cancelled: () => `${emojis.error} Cancelado.`
        },
        title: () => `☄️ Invitaciones Sincronizadas`,
        titles: {
            all: () => `${emojis.success} | ¡Invitaciones del servidor sincronizadas!`
        }
    },

    add: {
        content: (id) => `Puedes agregarme a tu servidor haciendo clic [aquí](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=2146958847).`,
        requested: (username) => `Solicitado por ${username}`
    },

    support: {
        content: (id) => `Puedes unirte a nuestro servidor de soporte haciendo clic [aquí](https://discord.gg/f7f2P2q).`,
        requested: (username) => `Solicitado por ${username}`
    }

};
