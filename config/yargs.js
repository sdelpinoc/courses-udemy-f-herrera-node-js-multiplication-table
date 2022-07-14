const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Base number to be multiply from 1 to 10'
        },
        'l': {
            alias: 'list',
            type: 'boolean',
            default: false,
            describe: 'Show the operations'
        },
        't': {
            alias: 'to',
            type: 'number',
            default: 10,
            describe: 'Set the limit of the multiplications'
        }
    }).check((argv, options) => {
        // console.log('args: ', argv);
        if (isNaN(argv.b)) {
            throw 'Base must be a number';
        }

        if (isNaN(argv.t)) {
            throw 'To must be a number';
        }

        // if (argv.l && typeof argv.l !== 'boolean') {
        //     throw 'List must be a boolean';
        // }

        return true;
    })
    .argv;

module.exports = argv;