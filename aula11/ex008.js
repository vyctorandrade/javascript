var vel = 150

console.log(`A velocidade so seu carro está em: ${vel} Km/h`)

if (vel >= 100){
    vel = 100
    console.log(`A velocidade do seu carro foi reduzida automaticamente para para: ${vel} Km/h, o que é permitido. `)
} else {   
    console.log(`Velocidade está ótima ${vel} KM/h , continuie assim.`)
}

