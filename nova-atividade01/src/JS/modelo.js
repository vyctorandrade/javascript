alert('Olá, seja bem vindo!')

function carregar(){}
var msg = document.getElementById('msg')
var img = document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >=0 && hora <= 12){
    // Bom dia!
    img.src = '../nova-atividade01/src/imagens/fotomanha.png'
    document.body.style.background = '#AFBAB7'
    
} else if (hora >= 12 && hora < 18){
    // Boa tarde!
    img.src = '../nova-atividade01/src/imagens/fototarde.png'
    document.body.style.background = '#D08954'
} else{
    img.src = '../nova-atividade01/src/imagens/fotonoite.png'
    document.body.style.background = '#856FAB'
    // Boa noite!
}

