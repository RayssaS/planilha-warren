const express = require('express')
const app = express()

const port = 3000;

app.use(express.static(`${__dirname}/Public`))

app.get('/ola', (req, res) => {
    res.send("olá mundo!")
})

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
}); 