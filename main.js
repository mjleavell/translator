const french = {
    "merry": "joyeux",
    "christmas": "noël",
    "and": "et",
    "happy": "content",
    "new": "nouveau",
    "year": "an"
};

const german = {
    "merry": "fröhlich",
    "christmas": "weihnachten",
    "and": "und",
    "happy": "glücklich",
    "new": "neu",
    "year": "jahr"
};

const spanish = {
    "merry": "feliz",
    "christmas": "navidad",
    "and": "y",
    "happy": "prospero",
    "new": "nuevo",
    "year": "ano"
};

// VARIABLES
let inputText = "";
let inputArr = [];
let frenchKeys = Object.keys(french);
let frenchWords = Object.values(french);
let frenchButton = document.getElementById('french-btn');
let spanishButton = document.getElementById('spanish-btn');
let germanButton = document.getElementById('german-btn');


 // takes user input and turns it into an array
const getInput = () => {
    let inputText = document.getElementById('word-input').value;
    inputArr = inputText.toLowerCase().split(" ");
    console.log(inputArr);
    return inputArr;
}

// PRINT TO DOM
const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML = stringToPrint;
}


// TRANSLATION FUNCTIONS
const getFrench = () => {
    let output= "";
    let arrToTranslate = getInput();
    for (let i = 0; i < arrToTranslate.length; i++) {
        output += french[arrToTranslate[i]] + " ";
    }
    printToDom(output, 'word-output');
    event.preventDefault();
}

const getSpanish = () => {
    let output= "";
    let arrToTranslate = getInput();
    for (let i = 0; i < arrToTranslate.length; i++) {
        output += spanish[arrToTranslate[i]] + " ";
    }
    printToDom(output, 'word-output');
    event.preventDefault();
}

const getGerman = () => {
    let output= "";
    let arrToTranslate = getInput();
    for (let i = 0; i < arrToTranslate.length; i++) {
        output += german[arrToTranslate[i]] + " ";
    }
    printToDom(output, 'word-output');
    event.preventDefault();
}

 // CLICK EVENTS
frenchButton.addEventListener("click", getFrench);
spanishButton.addEventListener("click", getSpanish);
germanButton.addEventListener("click", getGerman);
