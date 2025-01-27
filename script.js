
const gameList = [
    ['Nome1', 'Nome2'],
    ['Nome3', 'Nome4'],
    ['Nome5', 'Nome6'],
    ['Nome7', 'Nome8'],
    ['Nome9', 'Nome10'],
    ['Nome11', 'Nome12'],
    ['Nome13', 'Nome14'],
    ['Nome15', 'Nome16']
];

let currentStep = 0;
let twoChoices = [];
let middleChoices = [];

function renderButtons(currentList) {
    const container = document.getElementById('buttonsContainer');
    container.innerHTML = '';
    currentList[currentStep].forEach(name => {
        const button = document.createElement('button');
        button.innerText = name;
        button.onclick = () => chooseName(name, currentList);
        container.appendChild(button);
    });
}

function chooseName(name, currentList) {
    console.log(name);
    twoChoices.push(name);
    if (twoChoices.length === 2) {
        middleChoices.push(twoChoices);
        twoChoices = [];
    }
    currentStep++;
    if (currentStep < currentList.length) {
        renderButtons(currentList);
    } else {
        currentStep = 0;
        if (middleChoices.length === 1) {
            showFinalChoice(middleChoices);
        } else {
            renderButtons(middleChoices);
            middleChoices = [];
        }
    }
}

function showFinalChoice(currentList) {
    const container = document.getElementById('buttonsContainer');
    container.innerHTML = '';
    currentList[0].forEach(name => {
        const button = document.createElement('button');
        button.innerText = name;
        button.onclick = () => finalChoice(name);
        container.appendChild(button);
    });
}

function finalChoice(name) {
    document.getElementById('buttonsContainer').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('chosenName').innerText = name;
}

renderButtons(gameList);