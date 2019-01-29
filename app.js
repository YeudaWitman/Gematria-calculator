let textInput = document.getElementById('textInput');
let resultDiv = document.getElementById('result');
let submitField = document.getElementById('submitField');
let resultContainer =  document.getElementById('resultContainer');

//TODO: check empty string
// check if english or unrecognized word
//: check if no result
//: check if combined hebrew text with on recognized chars
submitField.addEventListener("click", generateText);

function generateText(e) {
    e.preventDefault();
    let inputArray = textInput.value.split('');
    resultArr = searchText(inputArray);
    if (resultArr <= 0) {
        renderView('not found', 'fail')
        return;
    }
    let sum = resultArr.reduce((a, b) => a + b);
    renderView(sum, '')
}

function searchText(arr) {
    let resultArr = [];
    arr.forEach(letter => {
        let obj = letters.find(o => o.letter === letter);
        !obj? false : resultArr.push(obj.number);
        /*if (!obj) {
            return false;
        }
        resultArr.push(obj.number);*/
    });
    return resultArr;
}

function renderView(msg, status) {
    resultDiv.innerText = msg
    if (status === 'fail') {
        resultContainer.className = 'alert alert-danger mt-3';      
        return;
    }
    resultContainer.className = 'alert alert-success mt-3';
}


var letters = [
    {letter: 'א', number: 1},
    {letter: 'ב', number: 2},
    {letter: 'ג', number: 3},
    {letter: 'ד', number: 4},
    {letter: 'ה', number: 5},
    {letter: 'ו', number: 6},
    {letter: 'ז', number: 7},
    {letter: 'ח', number: 8},
    {letter: 'ט', number: 9},
    {letter: 'י', number: 10},
    {letter: 'כ', number: 20},
    {letter: 'ך', number: 20},
    {letter: 'ל', number: 30},
    {letter: 'מ', number: 40},
    {letter: 'ם', number: 40},
    {letter: 'נ', number: 50},
    {letter: 'ן', number: 50},
    {letter: 'ס', number: 60},
    {letter: 'ע', number: 70},
    {letter: 'פ', number: 80},
    {letter: 'ף', number: 80},
    {letter: 'צ', number: 90},
    {letter: 'ץ', number: 90},
    {letter: 'ק', number: 100},
    {letter: 'ר', number: 200},
    {letter: 'ש', number: 300},
    {letter: 'ת', number: 400}
];