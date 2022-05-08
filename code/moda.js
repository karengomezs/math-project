const inputModa = document.getElementById("inputMode");

function buttonClick() {

    const inputValue = inputModa.value;

    const isComma = inputValue.includes(",");
    const separator = isComma ? "," : " ";

    const stringList = inputValue.split(separator);
    const numberList = stringList.map(element => Number(element));

    const moda = mode(numberList);

    const resultModa = document.getElementById("resultModa")
    resultModa.innerText = `La moda entre tus datos es ${moda}`

};

inputModa.addEventListener("keydown", (e) => {
    console.log("kjgv");
    if (e.key === "Enter") {
        e.preventDefault();
        buttonClick();
    }
});

function mode(arr) {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length -
        arr.filter(v => v === b).length
    ).pop();
};