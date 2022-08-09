let numberChar = 0;
renderCharacter(numberChar)
//fetch
async function funcLer() {
    let apiEva = await fetch('/scripts/eva.json');
    let dadosEva = await apiEva.json();
    return dadosEva
}

//atributos
const id = document.querySelector('.id');
const name = document.querySelector('.nome');
const quote = document.querySelector('.frase'); 
const image = document.querySelector('.imagem'); 
const age = document.querySelector('.idade');
const status = document.querySelector('.status'); 
const species = document.querySelector('.especie'); 
const display = document.querySelector('.displaynm'); 
const desc = document.querySelector('.desc'); 
const pilota = document.querySelector('.pilota'); 
const ocupacao = document.querySelector('.ocupacao'); 
const filiacao = document.querySelector('.filiacao'); 
const imgimg = document.querySelector('#imgimg'); 

//botoes
const btnPrev = document.querySelector('#esquerda');
const btnNext = document.querySelector('#direita');
const btnApagar = document.querySelector('#apagar');


//renderizar personagem
async function renderCharacter(numberChar) {
    let dadosAPI = await funcLer();
    id.innerHTML = "0" + dadosAPI[numberChar].id
    name.innerHTML = dadosAPI[numberChar].nome
    quote.innerHTML = dadosAPI[numberChar].frase
    age.innerHTML = dadosAPI[numberChar].idade 
    species.innerHTML = dadosAPI[numberChar].especie
    status.innerHTML = dadosAPI[numberChar].status
    display.innerHTML = dadosAPI[numberChar].displayname
    desc.innerHTML = dadosAPI[numberChar].desc
    pilota.innerHTML = dadosAPI[numberChar].pilota
    ocupacao.innerHTML = dadosAPI[numberChar].ocupacao
    filiacao.innerHTML = dadosAPI[numberChar].filiacao
    imgimg.src = dadosAPI[numberChar].img
}


//botaoanterior
btnPrev.addEventListener('click', () => {
    if(numberChar > 0 ){
        numberChar -= 1;
        renderCharacter(numberChar);
    }
});

//proximobotao
btnNext.addEventListener('click', () => {
    proximobotao()
});
async function proximobotao() {
    let dadosdados = await funcLer();
    let lengthDados = dadosdados.length-1
    if(numberChar < lengthDados){
        numberChar += 1;
        renderCharacter(numberChar);
    }
}
