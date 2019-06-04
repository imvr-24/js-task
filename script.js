const inputVal = (id) => {
    console.log(id);
    // document.calc.result.value += id;
    document.querySelector('.text-right').value += id;
};

const clearScreen = () => {
    document.calc.result.value = "";
};

const calculate = () => {
    try {
        var input = eval(document.querySelector('.text-right').value);
        document.querySelector('.text-right').value = input;
    } catch (err) {
        document.querySelector('.text-right').value = "Error";
    }
};


const clearButton = document.querySelector('#allClear').addEventListener('click', clearScreen);
const clearInput = document.querySelector('#clear').addEventListener('click', clearScreen);


const calResult = document.querySelector('#equals').addEventListener('click',calculate);