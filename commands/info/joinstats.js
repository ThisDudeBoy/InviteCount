
const Command = require("../../structures/Command.js"),
Discord = require("discord.js");

const { CanvasRenderService } = require("chartjs-node-canvas");
const width = 800;
const height = 300;
// White color and bold font
const ticksOptions = [{ ticks: { fontColor: "white", fontStyle: "bold" } }];
const options = {
// Hide legend
legend: { display: false },
scales: { yAxes: ticksOptions, xAxes: ticksOptions }
};

class Tests extends Command {
constructor (client) {
    super(client, {
        name: "stats",
        enabled: true,
        aliases: [ "joinstats" ],
        clientPermissions: [ "EMBED_LINKS" ],
        permLevel: 0
    });
}

async run (message, args, data) {

    const embed = new Discord.MessageEmbed()
        .setColor(data.color)
        .setFooter(data.footer);

    let numberOfDays = args[0] || 7;
    if (isNaN(numberOfDays)) return message.language.graph.invalid();
    numberOfDays = parseInt(numberOfDays);
    if (numberOfDays <= 1 || numberOfDays > 1000) return message.language.graph.invalid();

    const members = await message.guild.members.fetch();
    const joinedXDays = this.client.functions.joinedXDays(numberOfDays, members);
    const lastXDays = this.client.functions.lastXDays(numberOfDays, message.language.graph.months());

    embed.setAuthor(message.language.graph.title(message.guild.name, numberOfDays));
    const canvasRenderService = new CanvasRenderService(width, height, () => {});
    const image = await canvasRenderService.renderToBuffer({
        type: "line",
        data: {
            labels: lastXDays,
            datasets: [
                {
                    data: joinedXDays,
                    // The color of the line (the same as the fill color with full opacity)
                    borderColor: "rgb(61,148,192)",
                    // Fill the line with color
                    fill: true,
                    // Blue color and low opacity
                    backgroundColor: "rgba(61,148,192,0.1)"
                }
            ]
        },
        options
    });
    const attachment = new Discord.MessageAttachment(image, "image.png");
    embed.attachFiles(attachment);
    embed.setImage("attachment://image.png");
    const total = joinedXDays.reduce((p, c) => p+c);
    const percent = Math.round((100*total)/members.size);
    const daysRange = [lastXDays.shift(), lastXDays.pop()];
    embed.addField("\u200B", message.language.graph.content(total, percent, daysRange[0], daysRange[1]))
    message.channel.send(embed);
    }

};

module.exports = Tests;