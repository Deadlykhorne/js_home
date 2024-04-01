function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}
drawTriangle(5, '*'); // Висота 5, символ '*'