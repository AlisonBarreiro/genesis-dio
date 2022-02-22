let order = [];
let clickedOrder = [];
let score = 0;
let elements = [];

for(let i = 0; i < 6; i++){
    elements[i] = document.getElementById("slice"+i);
}


//cria ordem aletoria de cores
let shuffleOrder = () => {
    let slicesOrder = Math.floor(Math.random() * 6);
    order[order.length] = slicesOrder;
    clickedOrder = [];
    console.log("shuffleOrder: "+slicesOrder);
    for(let i in order) {
        let elementSlices = createSlicesElement(order[i]);
        lightSlices(elementSlices, Number(i) + 1);
    }
}

//acende a proxima cor
let lightSlices = (element, number) => {
    number = number * 500;
    setTimeout(() => {
    console.log("lightSlices: "+element.innerHTML);
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let theFunction = (slice) => {
    clickedOrder[clickedOrder.length] = slice;
    createSlicesElement(slice).classList.add('selected');
    setTimeout(() => {
       createSlicesElement(slice).classList.remove('selected');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createSlicesElement = (slice) => {
    switch(slice) {
            case 0:
                return elements[0];
                case 1:
                return elements[1];
                case 2:
                return elements[2];
                case 3:
                return elements[3];
                case 4:
                return elements[4];
                case 5:
                return elements[5];   
        default:
          // code block
      }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis Pizza 🍕! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}



//inicio do jogo
playGame();
