prompt(`Olá, seja bem vindo! Instruções para o super contador: 1° digite o número qu quer iniciar a contagem, depois o número final que será o fim da contagem escolhida e por fim de quantas em quantas casas irá pular.`)
function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById ('fim')
    let passo = document.getElementById ('passo')
    let res = document.getElementById ('res')

    if (inicio.value == 0 || fim.value == 0 || passo.value == 0 ){
        // Pode por em mensagem na tela junto // res.innerHTML = `Impossível contar!`
        window.alert('[Erro] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number (passo.value)

        if (i < f){
            // contagem crescente
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1F449} `
            }
           
    } else {
        // Contagem refressiva
        for (let c = i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1F449} `
         }
        
    }
    res.innerHTML += `\u{1F3C1}`
    }}