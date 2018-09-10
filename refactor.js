// const french = {
//     "merry": "joyeux",
//     "christmas": "noël",
//     "and": "et",
//     "happy": "content",
//     "new": "nouveau",
//     "year": "an"
// };

// const german = {
//     "merry": "fröhlich",
//     "christmas": "weihnachten",
//     "and": "und",
//     "happy": "glücklich",
//     "new": "neu",
//     "year": "jahr"
// };

// const spanish = {
//     "merry": "feliz",
//     "christmas": "navidad",
//     "and": "y",
//     "happy": "prospero",
//     "new": "nuevo",
//     "year": "ano"
// };

const languages = {
    french: {
        "merry": "joyeux",
        "christmas": "noël",
        "and": "et",
        "happy": "content",
        "new": "nouveau",
        "year": "an"
    },
    german: {
        "merry": "fröhlich",
        "christmas": "weihnachten",
        "and": "und",
        "happy": "glücklich",
        "new": "neu",
        "year": "jahr"
    },
    spanish: {
        "merry": "feliz",
        "christmas": "navidad",
        "and": "y",
        "happy": "prospero",
        "new": "nuevo",
        "year": "ano"
    }
};

// VARIABLES
let inputText = "";
let inputArr = [];
let frenchButton = document.getElementById('french-btn');
let spanishButton = document.getElementById('spanish-btn');
let germanButton = document.getElementById('german-btn');
let randomButton = document.getElementById('random-btn');
// let languageKeys = Object.keys(languages);
// let random = languages[Math.floor(Math.random() * languageKeys.length)];
let buttons = document.getElementById('buttons');


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

const getTranslation = (language) => {
    let output = "";
    let language = "";
    let arrToTranslate = getInput();
    for (let i = 0; i < arrToTranslate.length; i++) {
        output += languages[language][arrToTranslate[i]] + " ";
    }
    return output;
}

// buttons.addEventListener("click", (e) => {
//     if (e.target.id === "french-btn") {
//         getTranslation('french');
//     } else if (e.target.id === "german-btn") {
//         getTranslation('german');
//     } else {
//         getTranslation('spanish');
//     }
// });

const finalString = () => {
    let translatedArr = getTranslation.output;
    for (let i = 0; i < translatedArr.length; i++) {
        if (translatedArr.includes(undefined)) {
            outputString = `Sorry! The word you entered is not in my vocabulary.`;
        } else {
            outputString = `Translation: ${translatedArr}`;
        }
    }
    printToDom(outputString, 'word-output');
    event.preventDefault();
}



// TRANSLATION FUNCTIONS
// const getFrench = () => {
//     let output= "";
//     let arrToTranslate = getInput();
//     for (let i = 0; i < arrToTranslate.length; i++) {
//         if (frenchKey.includes("") === true) {
//             output = `Sorry! The word you entered is not in my vocabulary.`
//         } else {
//             output += `Translation: ${french[arrToTranslate][i]} `;
//         }
//     }
//     printToDom(output, 'word-output');
//     event.preventDefault();
// }



// // ERROR AND FINAL STRING PRINT
// const frenchFinalOutput = () => {
//     let outputString = "";
//     let translatedString = getFrench();
//     for (let i = 0; i < translatedString.length; i++) {
//         if (translatedString === "undefined ") {
//             outputString = `Sorry! The word you entered is not in my vocabulary.`;

//         } else {
//             outputString = `Translation: ${translatedString}`;
//         }
//     }
//     printToDom(outputString, 'word-output');
//     event.preventDefault();
// }

// const spanishFinalOutput = () => {
//     let outputString = "";
//     let translatedString = getSpanish();
//     for (let i = 0; i < translatedString.length; i++) {
//         if (translatedString === "undefined ") {
//             outputString = `Sorry! The word you entered is not in my vocabulary.`;

//         } else {
//             outputString = `Translation: ${translatedString}`;
//         }
//     }
//     printToDom(outputString, 'word-output');
//     event.preventDefault();
// }

// const germanFinalOutput = () => {
//     let outputString = "";
//     let translatedString = getGerman();
//     for (let i = 0; i < translatedString.length; i++) {
//         if (translatedString === "undefined ") {
//             outputString = `Sorry! The word you entered is not in my vocabulary.`;

//         } else {
//             outputString = `Translation: ${translatedString}`;
//         }
//     }
//     printToDom(outputString, 'word-output');
//     event.preventDefault();
// }


 // CLICK EVENTS
// frenchButton.addEventListener("click", frenchFinalOutput);
// spanishButton.addEventListener("click", spanishFinalOutput);
// germanButton.addEventListener("click", germanFinalOutput);
