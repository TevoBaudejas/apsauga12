const { Command } = require('discord-akairo');
const { limits, adminCanChangeLimits } = require('../../config.js');

class LimitsCommand extends Command {
    constructor() {
        super('limitai', {
            aliases: ['limitai', 'limitas'],
            args: [
                {
                    id: 'index',
                    type: 'integer'
                },
                {
                    id: 'value',
                    type: 'integer'
                }
            ],
            channel: 'guild'
        });
    }

    async exec(message, args) {
        const embed = this.client.util.embed();
        const guild = message.guild;

        if (args.value) {
            if (
                adminCanChangeLimits &&
                !message.member.hasPermission('ADMINISTRATOR') &&
                message.member.id !== message.guild.ownerID
            )
                adminCanChangeLimitsembed.setDescription(
                    adminCanChangeLimits
                        ? "*Tau butinai reikia ADMIN perms kad prieiti prie sio skydelio*"
                        : '*Tik primenu limitai negali buti pakeisti nebent savininkas pakeis nustatymus*'
                );
            else {
                if (
                    args.index >
                        Object.values(limits).reduce(
                            (acc, cur) => acc + Object.keys(cur).length,
                            0
                        ) ||
                    args.index < 1
                )
                    return message.channel.send('S-[1-12]');
                if (args.value > 30 || args.value < 1)
                    return message.channel.send('S-[1-30]');

                let key = Object.keys(limits)[Math.ceil(args.index / 2) - 1];
                let duration = args.index % 2 === 0 ? 'valanda' : 'minute';

                guild.set(`limits.${key}.${duration}`, args.value);
                embed.setDescription(
                    `*${this.client.Utils.toProperCase(
                        key
                    )} per ${duration} buvo pakeista i **\`${
                        args.value
                    }\`**.*`
                );
            }
        }

        embed
            .setTitle(` ${message.guild.name} serverio apsaugos limitai`)
            .setColor(0x7289da)
            .setFooter(
                "Pasiekiant netiketa apsaugos limita busite atsikratytas serverio"
            );
        if (!embed.description)
            embed.setDescription(
                `**ADMIN/MOD apsaugos limitai [ KIEMAS 24/7 Nuosavybe ] **`
            );

        var index = 1;
        var guildLimits = guild.limits;
        for (var k in guildLimits) {
            let minuteText = `**${index++}.** Per Minute: **\`${
                guildLimits[k].minute
            }\`**`;
            let hourText = `**${index++}.** Per Valanda: **\`${
                guildLimits[k].hour
            }\`**`;

            embed.addField(
                this.client.Utils.toProperCase(k),
                `${minuteText}\n${hourText}`,
                true
            );
        }

        message.channel.send(embed);
    }
}

module.exports = LimitsCommand;
