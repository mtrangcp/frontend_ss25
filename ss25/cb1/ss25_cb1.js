const minOfArr = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > +arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
const checkArrInteger = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(+arr[i])) {
            return false;
        }
    }
    return true;
}

let arr = [];
let check = true, n;

do {
    n = +prompt("Nhập số lượng phần tử mảng: ");
    check = Number.isInteger(n) && n >= 0 ? false : true;

} while (check);

for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Nhập phần tử thứ ${i + 1}: `);
}

if (arr.length === 0) {
    console.log("Mảng không chứa phần tử");

} else if (checkArrInteger(arr) === false) {
    console.log("Giá trị không hợp lệ");

} else {
    let min = minOfArr(arr);
    console.log("Phần tử nhỏ nhất trong mảng là: ", min);

}
