const inputVal = (id) => {
    console.log(id);
    document.querySelector('.text-right').value += id;
};

const clearScreen = () => {
    document.calc.result.value = "";
};

const calculate = () => {
    try {
        const inputString = document.querySelector('.text-right').value;
        var inputFunc = new Function(`return ${inputString}`)();
        console.log(inputFunc);
        document.querySelector('.text-right').value = inputFunc;
    } catch (err) {
        document.querySelector('.text-right').value = "Error";
    }
};


const clearButton = document.querySelector('#allClear').addEventListener('click', clearScreen);
const clearInput = document.querySelector('#clear').addEventListener('click', clearScreen);


const calResult = document.querySelector('#equals').addEventListener('click',calculate);
