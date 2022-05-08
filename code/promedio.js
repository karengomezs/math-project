const input = document.getElementById("inputPromedio");
// const inputValue = input.value;
const button = document.getElementById("buttonPromedio");

function buttonClick() {
    const inputValue = input.value;

    const isComma = inputValue.includes(",");

    const separator = isComma ? "," : " "

    const stringList = inputValue.split(separator);
    const numberList = stringList.map(element => Number(element));
    const promedio = calcularPromedio(numberList);

    const resultPromedio = document.getElementById("resultPromedio")
    resultPromedio.innerText = `El promedio entre tus datos es ${promedio}`
}


input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        buttonClick();
    };

});


function calcularPromedio(lista) {

    const sumaLista = lista.reduce((acumulador = 0, nexNumber) => acumulador + nexNumber)

    const promedioLista = sumaLista / lista.length;

    return promedioLista

}