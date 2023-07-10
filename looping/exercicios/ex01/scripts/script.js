window.confirm(`Olá, seja bem vindo! Instruções para o super contador: 
1° Digite o número que quer iniciar a contagem.  
2° Agora o número final, ele será o fim da contagem. 
3° Por fim de quantas em quantas casas irá pular.`)
function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById ('fim').value)
    var passo = Number (document.getElementById ('passo').value)
    var res = document.getElementById ('res')

    if (inicio == 0 || fim == 0 || passo == 0 ){
        // Pode por em mensagem na tela junto // res.innerHTML = `Impossível contar!`
        window.alert('[Erro] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        var i = inicio
        var f = fim
        var p = passo

        if (i < f){
            // contagem crescente
            for(var c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1F449} `
            }
           
    } else {
        // Contagem refressiva
        for (var c = i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1F449} `
         }
        
    }
    res.innerHTML += `\u{1F3C1}`
    }}