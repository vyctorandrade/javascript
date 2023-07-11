function tabuada (){
    var numero = Number(document.getElementById('inumero').value)
    var tab = document.getElementById('seltab')

    if(numero == 0 ){
        window.alert(`Por favor digite um número!`)
    } else{
        var n = numero
        var i = 1   
        // Coloca esse inner para limpar os resultados( antes de começar a contar é limpado novamente).
        tab.innerHTML = ''
        while (i <= 10){
            var item = document.createElement('option')
            item.text = `${n} ✖️ ${i} = ${n*i}`
            tab.appendChild(item)
            i++
        }
    } 
    


}