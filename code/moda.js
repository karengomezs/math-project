const inputModa = document.getElementById("inputMode");

function modeClick() {

    const inputValue = inputModa.value;
    const numbers = convertToNumbers(inputValue)
    const moda = mode(numbers);

    const resultModa = document.getElementById("resultModa")
    resultModa.innerText = `La moda entre tus datos es ${moda}`

};

inputModa.addEventListener("keydown", (e) => {
    console.log("kjgv");
    if (e.key === "Enter") {
        e.preventDefault();
        modeClick();
    }
});

function mode(arr) {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length -
        arr.filter(v => v === b).length
    ).pop();
};