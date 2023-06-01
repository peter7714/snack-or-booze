function unroll(squareArray) {
    let result = [];
    let count = 0;
    squareArray.map(i => {
        if(count % 2 === 0){
            i.map(j => (
                result.push(j)
            ));
            count++;
            console.log(i);
        } else {
            let arr = [];
            i.map(j => {
                arr.unshift(j);
            });
            arr.map(n => {
                result.push(n);
            });
            console.log(arr);
            count++;
        }
    });
    return result;
}

module.exports = unroll;
