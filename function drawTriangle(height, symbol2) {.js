function drawTriangle(height, symbol) {
    let triangle = '';
    for (let i = 1; i <= height; i++) {
        triangle += symbol.repeat(i) + '\n';
    }
    console.log(triangle);
}
drawTriangle(5, '*'); // Висота 5, символ '*'