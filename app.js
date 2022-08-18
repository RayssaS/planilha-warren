//criar função
const fs = require("fs").promises
const { appendFile } = require("fs")
const path = require('path')
const fizzbuzz = require("./fizzbuzz")

main()
async function main() {
    const filepath = path.join(__dirname, 'input.txt')
    const dados = await fs.readFile(filepath, 'utf8')
    await fs.appendFile('output.txt', dados + '\n')
    const max = Number(dados)
    fizzbuzz(max)
}

// const http = require('http')
// const fs = require('fs').promises

// const hostname = 'localhost'
// const port = 3000;

// const server = htttp.createServer(trataReq);

//     function trataReq (req, res){
//         fs.readFile('./index.html', 'utf8').then(texto => {
//             res.statusCode = 200;
//             res.setHeader("Content-type", text/html);
//             res.write(texto);
//             res.end;
//         })
//     }
//     server.listen(port, hostname, () => {
//         console.log(`Server running at http://${hostname}:${port}/`)
//     })

