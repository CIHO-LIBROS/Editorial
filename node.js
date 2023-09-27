let inputString = ''; // Variable para almacenar la entrada del usuario
let currentLine = 0; // Variable para llevar la cuenta de la línea actual que se está leyendo

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin; // Almacenar la entrada del usuario en la variable inputString
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n'); // Dividir la entrada en líneas individuales y almacenarlas en un arreglo

    main(); // Llamar a la función principal para procesar la entrada
});

function readLine() {
    return inputString[currentLine++]; // Leer la línea actual y avanzar a la siguiente línea
}

function main() {
    const n = parseInt(readLine().trim(), 10); // Leer el tamaño de la matriz (n x n)
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix.push(readLine().split(' ').map(Number)); // Leer cada fila de la matriz y convertir los elementos a números
    }

    // Realizar los cálculos para las proporciones de positivos, negativos y cero
    let positives = 0;
    let negatives = 0;
    let zeros = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] > 0) {
                positives++; // Incrementar el contador de elementos positivos
            } else if (matrix[i][j] < 0) {
                negatives++; // Incrementar el contador de elementos negativos
            } else {
                zeros++; // Incrementar el contador de elementos cero
            }
        }
    }

    const total = n * n; // Calcular el total de elementos en la matriz
    const positiveRatio = positives / total; // Calcular la proporción de elementos positivos
    const negativeRatio = negatives / total; // Calcular la proporción de elementos negativos
    const zeroRatio = zeros / total; // Calcular la proporción de elementos cero

    // Imprimir los resultados con 6 lugares después del decimal
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}
