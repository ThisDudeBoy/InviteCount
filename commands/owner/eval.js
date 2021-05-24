const Command = require("../../structures/Command.js"),
Discord = require("discord.js");

const clean = (txt) => {
    if (typeof(txt) === "string") return txt.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    return txt;   
};

class Eval extends Command {
    constructor (client) {
        super(client, {
            name: "eval",
            enabled: true,
            aliases: [ "execute" ],
            clientPermissions: [],
            permLevel: 4
        });
    }

    async run (message, args, data) {

        const content = message.content.split(" ").slice(1).join(" ");
		const result = new Promise((resolve) => resolve(eval(content)));
        
		return result.then((output) => {
			if(typeof output !== "string"){
				output = require("util").inspect(output, { depth: 0 });
			}
			if(output.includes(this.client.token)){
				output = output.replace(this.client.token, "T0K3N");
			}
			const embed = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.addField("📥 Code testé", "```js\n" + content + "\n```")
			.addField("📤 Resultat", "```js\n" + output + "\n```")
			message.channel.send(embed)
		}).catch((err) => {
			err = err.toString();
			if(err.includes(this.client.token)){
				err = err.replace(this.client.token, "T0K3N");
			}
			const embed = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.addField("📥 Code testé", "```js\n" + content + "\n```")
			.addField("📤 Resultat", "```js\n" + err + "\n```")
			message.channel.send(embed)
		});
		}

	}

module.exports = Eval;