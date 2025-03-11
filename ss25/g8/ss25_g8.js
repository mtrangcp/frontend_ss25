const isStrongPassword = (password) => {
    let checkUp = false, checkLow = false, checkNumber = false, check = false;
    if (pass.length >= 8) {
        for (let i = 0; i < pass.length; i++) {
            if (pass[i] = pass[i].toUpperCase()) checkUp = true;
            if (pass[i] = pass[i].toLowerCase()) checkLow = true;
            if (Number.isInteger(+pass[i])) checkNumber = true;
        }
    }

    if (checkLow && checkUp && checkNumber) check = true;

    return check;
}

let pass = prompt("Nhập chuỗi: ");

let result = isStrongPassword(pass);
console.log(result);





