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
    return output;
}

const getSpanish = () => {
    let output= "";
    let arrToTranslate = getInput();
    for (let i = 0; i < arrToTranslate.length; i++) {
        output += spanish[arrToTranslate[i]] + " ";
    }
    return output;
}

const getGerman = () => {
    let output= "";
    let arrToTranslate = getInput();
    for (let i = 0; i < arrToTranslate.length; i++) {
            output += german[arrToTranslate[i]] + " ";
    }
    return output;
}

// ERROR AND FINAL STRING PRINT
const frenchFinalOutput = () => {
    let outputString = "";
    let frenchString = getFrench();
    for (let i = 0; i < frenchString.length; i++) {
        if (frenchString.includes(undefined)) {
            outputString = `Sorry! The word you entered is not in my vocabulary.`;
        } else {
            outputString = `Translation: ${frenchString}`;
        }
    }
    printToDom(outputString, 'word-output');
    event.preventDefault();
    let msg = new SpeechSynthesisUtterance(outputString);
    msg.lang = 'fr-FR'
    window.speechSynthesis.speak(msg);
}

const spanishFinalOutput = () => {
    let outputString = "";
    let spanishString = getSpanish();
    for (let i = 0; i < spanishString.length; i++) {
        if (spanishString.includes(undefined)) {
            outputString = `Sorry! The word you entered is not in my vocabulary.`;
        } else {
            outputString = `Translation: ${spanishString}`;
        }
    }
    printToDom(outputString, 'word-output');
    event.preventDefault();
    let msg = new SpeechSynthesisUtterance(outputString);
    msg.lang = 'es-ES'    
    window.speechSynthesis.speak(msg);
}

const germanFinalOutput = () => {
    let outputString = "";
    let germanString = getGerman();
    for (let i = 0; i < germanString.length; i++) {
        if (germanString.includes(undefined)) {
            outputString = `Sorry! The word you entered is not in my vocabulary.`;
        } else {
            outputString = `Translation: ${germanString}`;
        }
    }
    printToDom(outputString, 'word-output');
    event.preventDefault();
    let msg = new SpeechSynthesisUtterance(outputString);
    msg.lang = 'de-DE'    
    window.speechSynthesis.speak(msg);
}


 // CLICK EVENTS
frenchButton.addEventListener("click", frenchFinalOutput);
spanishButton.addEventListener("click", spanishFinalOutput);
germanButton.addEventListener("click", germanFinalOutput);
