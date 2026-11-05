function maxnum(arr) {
    let maxvalue = arr[0][0];
     for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxvalue) {
                maxvalue = arr[i][j];
            }
    }}
    
    return maxvalue;

}


console.log(maxnum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 9