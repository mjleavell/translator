const frenchDict = {
    "merry": "joyeux",
    "christmas": "noël",
    "and": "et",
    "happy": "content",
    "new": "nouveau",
    "year": "an"
};

const germanDict = {
    "merry": "fröhlich",
    "christmas": "weihnachten",
    "and": "und",
    "happy": "glücklich",
    "new": "neu",
    "year": "jahr"
};

const spanishDict = {
    "merry": "feliz",
    "christmas": "navidad",
    "and": "y",
    "happy": "prospero",
    "new": "nuevo",
    "year": "ano"
};

// VARIABLES
let word = "";
let inputArr = [];

// INPUT ARRAY
const getInput = (inputId) => {
    word = document.getElementById(inputId).value;
    inputArr = word.toLowerCase().split(" ");
    return inputArr;
};

