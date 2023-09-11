const aiElements = ['FIRE', 'LEAF', 'WATER'];
const choiceContainer = document.querySelectorAll('#choice-container');
const resultText = document.querySelector('#result');
const ai = document.querySelector('#ai-choice');
const aiIcon = document.getElementById('ai-icon');

choiceContainer.forEach(button => button.addEventListener("click", () => {
    const playerChoice = button.querySelector('#choice').textContent;
    const aiChoice = aiElements[Math.floor(Math.random() * 3)];
    ai.textContent = aiChoice;
    resultText.textContent = play(playerChoice, aiChoice);
    aiClass(aiChoice);
}));

function play(player, ai) {
    if (player === ai) {
        return "IT'S A TIE!";
    } else if (
        (player === 'FIRE' && ai === 'LEAF') ||
        (player === 'LEAF' && ai === 'WATER') ||
        (player === 'WATER' && ai === 'FIRE')
    ) {
        return "YOU WIN!";
    } else {
        return "YOU LOSE!";
    }


}

function aiClass(ai) {
    aiIcon.classList.remove("fa-solid", "fa-fire", "fa-water", "fa-leaf", "fa-question");

    if (ai == 'FIRE') {
        aiIcon.classList.add("fa-solid", "fa-fire");
    } else if (ai == "WATER") {
        aiIcon.classList.add("fa-solid", "fa-water");
    } else if (ai == "LEAF") {
        aiIcon.classList.add("fa-solid", "fa-leaf");
    } else {
        aiIcon.classList.add("fa-solid", "fa-question");
    }
};



// const aiElements = ['FIRE', 'LEAF', 'WATER'];
// const choiceContainer = document.querySelectorAll('#choice-container')
// const resultText = document.querySelector('#result')
// const ai = document.querySelector('#ai-choice')


// choiceContainer.forEach (button => button.addEventListener("click", () => {

//     const playerChoice = button.querySelector('#choice');
//     const aiChoice = aiElements[Math.floor(Math.random() * 3)];
//     ai.textContent = aiChoice;
//     resultText.textContent = play(playerchoice, ai);
//     console.log(choice.textContent)
// }))

// function play(choice, ai) {
//  if (choice.textContent == ai.textContent) {
//     resultText.textContent = "IT'S A TIE!"
//  }  else if (
//     (choice.textContent == 'FIRE' && ai.textContent === 'LEAF') ||
//     (choice.textContent == 'LEAF' && ai.textContent === 'WATER') ||
//     (choice.textContent == 'WATER' && ai.textContent === 'FIRE')
// ) {
//     resultText.textContent = "YOU WIN!";
// } else {
//     resultText.textContent = "YOU LOSE!";
// }
// }
