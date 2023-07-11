window.confirm(`Olá, seja bem vindo! Instruções para o super contador: 
1° Digite o número que quer iniciar a contagem.  
2° Agora o número final, ele será o fim da contagem. 
3° Por fim de quantas em quantas casas irá pular.`)
function contar(){
    var i = Number(document.getElementById('inicio').value)
    var f = Number(document.getElementById ('fim').value)
    var p = Number (document.getElementById ('passo').value)
    var res = document.getElementById ('res')

    if (i == 0 || f == 0 || p == 0 ){
        // Pode por em mensagem na tela junto // res.innerHTML = `Impossível contar!`
        window.alert('[Erro] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        if (i < f){
            // contagem crescente
            for(var c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1F449} `
            }
           
    } else {
        // Contagem regressiva
        for (var c = i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1F449} `
         }
        
    }
    res.innerHTML += `\u{1F3C1}`
    }}


    // Depois tentar entender a lógica do  +=
    // += não substitui somente acrescenta.