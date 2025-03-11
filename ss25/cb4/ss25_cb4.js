const checkElement = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < n - 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let a = +prompt("Nhập số: ");

if (Number.isInteger(a)) {
    checkElement(a) ? console.log(`Là số nguyên tố`) : console.log(`Không phải là số nguyên tố`);

} else {
    console.log("Dữ liệu không hợp lệ!");

}
