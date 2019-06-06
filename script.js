const inputVal = (id) => {
    console.log(id);
    return function () {
        document.querySelector('.text-right').value += id;
    };
};

const clearScreen = () => {
    document.querySelector('.text-right').value = '';
};

const calculate = () => {
    try {
        const inputString = document.querySelector('.text-right').value;
        var result = new Function(`return ${inputString}`)();

        if (result !== undefined) {
            console.log(result.toFixed(2));
            document.querySelector('.text-right').value = result;
        }

    } catch (err) {
        document.querySelector('.text-right').value = "Error";
    }
};

const clearButton = document.querySelector('#allClear').addEventListener('click', clearScreen);
const clearInput = document.querySelector('#clear').addEventListener('click', clearScreen);

const calResult = document.querySelector('#equals').addEventListener('click', calculate);

const inputQuery = document.querySelectorAll('.input__query');

for (const op in inputQuery) {
    if (op < inputQuery.length) {
        document.getElementById(`${inputQuery[op].id}`).addEventListener('click', inputVal(inputQuery[op].id));
    }
}