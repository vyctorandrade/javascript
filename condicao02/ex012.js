/Esses dois VAR serve para puxar a hora atual com esses comando, o primeiro trás a hora e o segundo puxa para outra variável podendo usar a var HORA/ 
var agora = new Date()
var hora = agora.getHours()
console.log(`HORÀRIO ATUAL`)
if(hora <= 12){
    console.log(`Bom dia! agora são ${hora} horas.`)
} else if (hora > 12 && hora < 18) {
    console.log(`Boa tarde! Agora são ${hora} horas.`)
} else if (hora <= 23) {
    console.log(`Boa noite! Agora são ${hora} horas.`)

}