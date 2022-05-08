const input = document.getElementById("inputMediana");
// const inputValue = input.value;
const button = document.getElementById("buttonMediana");

function buttonClick() {
    const inputValue = input.value;

    const isComma = inputValue.includes(",");

    const separator = isComma ? "," : " " //si la primera var.. es true el primer valor es el que se toma, si no se toma el segundo valor del string

    const stringList = inputValue.split(separator);
    const numberList = stringList.map(element => Number(element));
    const mediana = calcularMediana(numberList);
    const resultMediana = document.getElementById("resultMediana")
    resultMediana.innerText = `La mediana entre tus datos es ${mediana}`
}



input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        e.preventDefault();
        buttonClick();
    };
});


function calcularPromedio(lista) {
    const sumaLista = lista.reduce((acumulador = 0, nexNumber) => acumulador + nexNumber);

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
};

function esPar(number) {

    return (number % 2 === 0)

};


function calcularMediana(lista) {

    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if (esPar(lista.length)) {
        const first = lista[mitadLista - 1];
        const second = lista[mitadLista];

        const promedio = calcularPromedio([first, second])
        mediana = promedio
    } else {
        mediana = lista[mitadLista]
    }

    return mediana
};