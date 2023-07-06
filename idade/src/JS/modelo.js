window.confirm('Olá, seja bem vindo!')
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = Number(document.getElementById('txtano').value)
    var res = document.getElementById('res')
    var idade = ano - fano
    var fsex = document.getElementsByName('radsex')
    var genero = ''
    var img = document.getElementById('foto')
    
    // Nesse if se o ano que for digitado for maior que o ano atual da a mesnagem de erro
    if (fano.length == 0 || (fano) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }if(fsex[0].checked){
        genero = 'Homem'
        if(idade >=0 && idade <10){
            // Criança
            img.src = '../idade/src/imagens/foto-homemcrianca.png'
        } else if (idade < 21){
            // Jovem
            img.src = '../idade/src/imagens/foto-homemjovem.png'
        }else if ( idade <50){
            // Adulto
            img.src = '../idade/src/imagens/foto-homemadulto.png'
        } else{
            // Idoso
            img.src = '../idade/src/imagens/foto-homemidoso.png'
        }
    } else if(fsex [1].checked){
        genero = 'Mulher'
        if(idade >=0 && idade <10){
            // Criança
            img.src = '../idade/src/imagens/foto-mulhercrianca.png'
        } else if (idade < 21){
            // Jovem
            img.src = '../idade/src/imagens/foto-mulherjovem.png'
        }else if ( idade <50){
            // Adulto
            img.src = '../idade/src/imagens/foto-mulheradulta.png'
        } else{
            // Idoso
            img.src = '../idade/src/imagens/foto-mulheridosa.png'
        }
    }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild (img)       
    }
