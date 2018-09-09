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


// INPUT ARRAY
// const getInput = (inputId) => {
//     inputText = document.getElementById(inputId).value;
//     inputArr = inputText.toLowerCase().split(" ");
//     console.log(inputArr);
//     return inputArr;
// }


// const getFrench = () => {
//     let outputString = "";
//     let arrToTranslate = getInput('word-input');
//     for (let i = 0; i < frenchKeys.length; i++) {
//         for (let j = 0; j < arrToTranslate.length; j++) {
//             if(french[frenchKeys[i]] === arrToTranslate[j]) {
//                 console.log('true');
//             } else {
//                 console.log('false');
//             }
//         }
//         output.innerHTML = outputString;
//     }
// }

    

// LOOPS THROUGH LANGUAGES AND COMPARES array to language object
// const compare = (arrayInInput, lang) => {
//         if (lang === arrayInInput[i]) {
//             return true;
//         } else if (){

//         }
//     }
// }

// BASIC BUTTON FUNCTIONALITY


// let buttons = document.getElementById('buttons');

// buttons.addEventListener("click", e => {
//     if (e.target.id === "french-btn") {
//         compare('french'); 
//     } else if (e.target.id === "german-btn") {
//         compare('german');
//     } else {
//         compare('spanish');
//     }
// });
const getFrench = () => {
    let inputText = document.getElementById('word-input').value;
    inputArr = inputText.toLowerCase().split(" ");
    printToDom(inputArr, 'word-output');
}
// PRINT TO DOM
const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML = stringToPrint;
}

frenchButton.addEventListener("click", getFrench);


// BUILD STRING TO PRINT IN DOM AKA translationStringBuilding