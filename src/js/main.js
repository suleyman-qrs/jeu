const board = document.querySelector("#board");
var extSourceOfImg = "https://raw.githubusercontent.com/alnero/Zipline-data/master/Taro/img/"; 

const cardnumbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const doubledCardNumbers = [...cardnumbers, ...cardnumbers];

shuffleArray(doubledCardNumbers);


let firstChoice = null;
let secondChoice = null;
let lockboard = false;

doubledCardNumbers.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.style.backgroundImage = `url(${extSourceOfImg}back.jpg)`;
    
    cardElement.addEventListener("click", () => {
        if (lockboard) {
            return;
        }
        if (firstChoice === null) {
            firstChoice = cardElement;
            cardElement.style.backgroundImage = `url(${extSourceOfImg}${card}.jpg)`;

            return;
        }

        
       if (cardElement === firstChoice) {
            return;
        }

        secondChoice = cardElement;
        cardElement.style.backgroundImage = `url(${extSourceOfImg}${card}.jpg)`;
        lockboard = true;

        if (firstChoice.style.backgroundImage === secondChoice.style.backgroundImage) {
            firstChoice = null;
            secondChoice = null;
            lockboard = false;
            return;
        }

        setTimeout(() => {
            firstChoice.style.backgroundImage = `url(${extSourceOfImg}back.jpg)`;
            secondChoice.style.backgroundImage = `url(${extSourceOfImg}back.jpg)`;
            firstChoice = null;
            secondChoice = null;
            lockboard = false;
        }, 1000);
    });

    board.appendChild(cardElement);
});



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


