const evenOfArr = (arr) => {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
    }
    return even;
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
    check = Number.isInteger(n) && n > 0 ? false : true;

} while (check);

for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Nhập phần tử thứ ${i + 1}: `);
}

if (checkArrInteger(arr) === false) {
    console.log("Dữ liệu không hợp lệ");

} else {
    let result = evenOfArr(arr);
    if (result.length === 0) {
        console.log("Mảng không chứa số chẵn");

    } else {
        console.log("Mảng số chẵn: ", result);

    }

}
