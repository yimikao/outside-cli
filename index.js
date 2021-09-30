const minimist = require(
    'minimist'
)

module.exports = () => {
    const arguments = minimist(process.argv.slice(2))
    //arguments { _: [ 'command1', 'command2 ], flag1: '', flag2: '' }
    console.log(arguments);

    let command = arguments._[0] || 'help' //Default to help if no command is given

    //these will reset command as only one of them could be used at a time
    if (arguments.version || arguments.v) command = 'version'

    if (arguments.help || arguments.h) command = 'help'

    switch (command) {
        case 'today':
            require('./commands/today')(arguments)
            break;
        case 'version':
            require('./commands/version.js')(arguments)
            break;
        case 'help':
            require('./commands/help')(arguments)
            break;
        case 'forecast':
            require('./cmds/forecast')(args)
            break
        default:
            console.error(`"${command}" is not a valid command`);
            break;
    }
  }