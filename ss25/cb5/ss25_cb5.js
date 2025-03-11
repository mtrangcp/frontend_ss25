const check = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(+arr[i]) && +arr[i] > 0) {
            count++;
        }
    }
    return count;
}

let arr = [];
let n = +prompt("Nhập số phần tử: ");

for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Nhập phần tử thứ ${i + 1}: `);
}

if (check(arr) === 0) {
    console.log("Không có số nguyên dương trong mảng");

} else {
    let result = check(arr);
    console.log("Result: ", result);

}
