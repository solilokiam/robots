const readline = require('readline');
const fs = require('fs');
const parser = require('./parser');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const readFile = (path) => {
    try {
        return fs.readFileSync(path, 'utf8')
    } catch (err) {
        console.error(err)
    }
}

const askPath = () => {
    return new Promise((resolve) => {
        rl.question('Welcome to the Mars Surface!\nPlease enter file path with the instructions:', (path) => {
            rl.close();
            resolve(path);
        });
    })
}

const getMission = async () => {
    const path = await askPath();
    const instructions = await readFile(path);
    return parser.parseInstructions(instructions);
};

const renderResults = results => {
    const textResults = results
        .map(result => {
            return `${result[0]} ${result[1]} ${result[2]}${result[3] ? ' LOST' : ''
                }`;
        })
        .join('\n');

    console.log(textResults);
};

module.exports = {
    getMission,
    renderResults,
};
