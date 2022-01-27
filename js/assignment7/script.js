
var word = document.getElementById("word");
var wrongLetters = document.getElementById('wrong-letters');
var notification = document.getElementById('notification');
var figParts = document.querySelectorAll(".figure-part");


var dictionary = ["application", "programming", "interface", "javascript", "saturday"];

var selectedWords = dictionary[Math.floor(Math.random() * dictionary.length)];

var correctLetters = [];
var incorrectLetters = [];

//display letters 
function displayWord() {
    word.innerHTML = `
    ${selectedWords.split('').map(
        letter => `
            <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `
        )
        .join('')}
    `;
}

displayWord();

var letters = selectedWords.length;
var count = 0;

//display figure parts
function displayFigure() 
{
    figParts[count].style.display = 'block';
    count++;
}


//display wrong letters
function displayWrong() {
    wrongLetters.innerHTML = `
        ${incorrectLetters.length > 0 ? '<h2>Wrong</h2>' : ''}
       ${incorrectLetters.map(letter => `<span>${letter}</span>`)}
    `;
    displayFigure();

    if (incorrectLetters.length >= figParts.length) {
        var message = incorrectLetters.innerText = 'You lost!!';
        alert(message);
      }

}



//display notification
function displayNotification() {
    notification.classList.add('show');
  
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2500);
  }

  
//check pressed letters
function check(event){
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var character = event.key;

        if (selectedWords.includes(character)) {
            if (!correctLetters.includes(character)) {
                correctLetters.push(character);
                displayWord();
            }
            else{
                displayNotification();
            }
        }else
        {
            if (!incorrectLetters.includes(character)){
                incorrectLetters.push(character);
                displayWrong();

            }else{
                displayNotification();
            }
        }
    }
}


window.addEventListener('keydown', check);