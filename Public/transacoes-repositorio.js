const transacoes = {
    transacoes: [
        {
            valor: 10,
            descricao: 'Pastel'
        },
        {
            valor: 3,
            descricao: 'Doce'
        }
    ]
}
class TransacoesRepositorio {
    
    listarTransacoes() {
        return transacoes;

    }
    criarTransacoes(transacoes) {
        const lista = transacoes.transacoes
        lista.push(transacoes)
    }
}

module.exports = TransacoesRepositorio