const { fizzbuzz } = require("./fizzbuzz")

for (let i = 1; i <= 20; i++) {
    const mensagem = fizzbuzz(i);
    console.log(mensagem);
}

const fs = require('fs').promises;

main();

async function main() {
    try {
        const conteudo = await fs.readFile(`${__dirname}/input.txt`, 'utf-8');
        console.log(conteudo)
    }
    catch (err) {
        console.log(err);
    }
    try {
        const conteudo = 'Conteudo do arquivo!';
        await fs.writeFile(`${__dirname}/output.txt`, conteudo);
    }
    catch (err) {
        console.log(err);
    }
}