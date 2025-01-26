const steps = [
    ['Nome1', 'Nome2'],
    ['Nome3', 'Nome4'],
    ['Nome5', 'Nome6'],
    ['Nome7', 'Nome8'],
    ['Nome9', 'Nome10']
];
let currentStep = 0;
let choices = [];

function renderButtons() {
    const container = document.getElementById('buttonsContainer');
    container.innerHTML = '';
    steps[currentStep].forEach(name => {
        const button = document.createElement('button');
        button.innerText = name;
        button.onclick = () => chooseName(name);
        container.appendChild(button);
    });
}

function chooseName(name) {
    choices.push(name);
    currentStep++;
    if (currentStep < steps.length) {
        renderButtons();
    } else {
        showFinalChoice();
    }
}

function showFinalChoice() {
    const container = document.getElementById('buttonsContainer');
    container.innerHTML = '';
    choices.forEach(name => {
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

renderButtons();