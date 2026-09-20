const config = require("../config");
const { EmbedBuilder, PermissionFlagsBits } = require("discord.js");
let cooldown = new Set();
let cseconds = "2";

module.exports = class {

    constructor (client) {
        this.client = client;
    }

    async run (message) {

        const data = { color: this.client.config.color, footer: this.client.config.footer };

        if(!message.guild || message.author.bot) return;

        let guildData = await this.client.findOrCreateGuild({ id: message.guild.id });
        data.guild = guildData;
        message.language = require("../languages/"+data.guild.language);
        
        const embeded = new EmbedBuilder()
            .setColor(this.client.config.color)
            .setDescription(message.language.utils.prefix(data.guild.prefix))
            .setFooter({ text: this.client.config.footer });

        if(message.content.match(new RegExp(`^<@!?${this.client.user.id}>( |)$`))) return message.channel.send({ embeds: [embeded] });

        let memberData = await this.client.findOrCreateGuildMember({ id: message.author.id, guildID: message.guild.id, bot: message.author.bot });
        data.member = memberData;

        let usedPrefix = false;
        let usedNoPrefix = false;
        let commandName = null;
        let args = [];

        if (message.content.toLowerCase().startsWith(guildData.prefix)) {
            usedPrefix = true;
            args = message.content.slice(guildData.prefix.length).trim().split(/ +/g);
            commandName = args.shift().toLowerCase();
        } else if (guildData.noPrefix) {
            const messageArgs = message.content.trim().split(/ +/g);
            const potentialCommand = messageArgs[0].toLowerCase();
            
            const cmd = this.client.commands.get(potentialCommand) || this.client.commands.get(this.client.aliases.get(potentialCommand));
            
            if (cmd) {
                usedNoPrefix = true;
                commandName = potentialCommand;
                args = messageArgs.slice(1);
            }
        }

        if (!usedPrefix && !usedNoPrefix) {
            memberData.messagesCount = memberData.messagesCount + 1;
            memberData.markModified("messagesCount");
            await memberData.save();
            return;
        }

        if (cooldown.has(message.author.id)){
            message.delete().catch(() => {});
            const spam_embed = new EmbedBuilder()
                .setColor(this.client.config.color)
                .setDescription(message.language.antispam.cooldown())
                .setFooter({ text: this.client.config.footer });
            return message.channel.send({ embeds: [spam_embed] });
        }
        cooldown.add(message.author.id);
    
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, cseconds * 1000)

        const cmd = this.client.commands.get(commandName) || this.client.commands.get(this.client.aliases.get(commandName));

        if(!cmd) return;
        else message.cmd = cmd;

        const neededPermissions = [];
        cmd.conf.clientPermissions.forEach((permission) => {
            if(!message.channel.permissionsFor(message.guild.members.me).has(permission)) {
                neededPermissions.push(permission);
            }
        });
        if(neededPermissions.length > 0) {
            return message.channel.send(message.language.errors.missingPerms(neededPermissions));
        }

        if(!cmd.conf.enabled){
            return message.channel.send(message.language.errors.disabled());
        }

        const permLevel = await this.client.getLevel(message);
        if(permLevel < cmd.conf.permLevel){
            return message.channel.send(message.language.errors.permLevel(this.client.permLevels[cmd.conf.permLevel].name));
        }

        this.client.logger.log(`${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`, "cmd");

        cmd.run(message, args, data);

    }

};
