
function fizzBuzz(max) {
    for (let i = 0; i <= max; i++) {
        let mensagem = ""
        if (i % 3 === 0 && i % 5 === 0) {
            return 'FIZZBUZZ'
        }
        if (i % 3 === 0) {
            return 'FIZZ'
        }
        else if (i % 5 === 0) {
            return 'BUZZ'
        }
        else {
            return String(max)
        }
    }
}

module.exports = fizzBuzz