for(let i=0; i<=max; i++){
    let mensagem = ""
    
    if(i%3 === 0) {
        
        mensagem = mensagem + 'FIZZ'
        console.log(mensagem)
    }
    else if(i%5===0){
        mensagem = mensagem + 'BUZZ'
         console.log(mensagem)
    }
    else if(i%3 === 0 && i%5 ===0){
        mensagem = mensagem + 'FIZZBUZZ'
        console.log(mensagem)
    }
    else{
        console.log(i)
    }
    
}