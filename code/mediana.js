const inputMediana = document.getElementById("inputMediana");


function convertToNumbers(value) {
    const isComma = value.includes(",");
    const separator = isComma ? "," : " " //si la primera var.. es true el primer valor es el que se toma, si no se toma el segundo valor del string
    const stringList = value.split(separator);
    return stringList.map(element => Number(element));
};

function mediana() {
    const inputValue = inputMediana.value;
    const numbers = convertToNumbers(inputValue);
    const mediana = calcularMediana(numbers);
    const resultMediana = document.getElementById("resultMediana")
    resultMediana.innerText = `La mediana entre tus datos es ${mediana}`
};



inputMediana.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        e.preventDefault();
        mediana();
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