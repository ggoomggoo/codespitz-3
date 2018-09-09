const generator = function*(i,j){
    let row = 1, col = 1;
    while (row <= i) {
        while (col <= j) {
            yield [row, col, row * col];
            col++;
        }
        row++;
        col = 1;
    }
}

for(const [i,j,k] of generator(9,9)){
    console.log(`${i} x ${j} = ${k}`);
}