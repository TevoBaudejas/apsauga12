const { Command } = require('discord-akairo');

class HelpCommand extends Command {
    constructor() {
        super('pagalba', {
            aliases: ['pagalba', 'komandos', 'informacija'],
            channel: 'guild'
        });
    }

    async exec(message) {
        const embed = this.client.util
            .embed()
            .setColor(0x7289da)
            .setTitle('Admin/Mod Apsauga');
        const prefix = message.guild.prefix;

        const commands = [
            `*Botuko prefixas => **\`${prefix}\`***\n`,
            `*Prieinamos komandos:* **\`pagalba\` \`limitai\`**`
        ];

        const info = [
            `**1**`,
            `**2**`
        ];

        embed
            .addField('Komandos', commands.join('\n'));

        message.channel.send(embed);
    }
}

module.exports = HelpCommand;
