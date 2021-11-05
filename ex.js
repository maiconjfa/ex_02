const listadepecas = ['pecasdeteste', 'AB', 'PECA B'];
console.log('quantidade de caracteres');
if(listadepecas.length <= 10){
    console.log('As peças podem ser cadastradas')
}
for(let i = 0; i < listadepecas.length; i++){
    const pecaatual = listadepecas[index];
    if (pecaatual.length < 3){
        console.log(pecaatual + " : a peça possui nome inferior a 3 caracteres e não pode ser cadastrada")
    }else{
        console.log(pecaatual + ' :a peça pode ser cadastrada')
    }
}
console.log('peso da peça')
const pesodapecaemgrama = 50;
if(pesodapecaemgrama >= 100){
    console.log('Peso suficiente')
}else{
    console.log('Peso insificiente')
}
