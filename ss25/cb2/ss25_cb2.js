const sum = (a, b) => {
    return a + b;
}

let a = +prompt("Nhập số thứ nhất: ");
let b = +prompt("Nhập số thứ hai: ");

if (Number.isInteger(a) && Number.isInteger(b)) {
    let result = sum(a, b);
    console.log("Tổng: ", result);

} else {
    console.log("Dữ liệu không hợp lệ!");

}

