let users = ["ha@gmail.com"];
const emailRegex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;

const checkEmail = (email) => {
    let text = "";
    if (emailRegex.test(email)) {

        if (!users.includes(email)) {
            users.push(email);
            text += "Thêm tk thành công!";

        } else {
            text += "Tk đã tồn tại!";
        }

    } else {
        text += "Email không hợp lệ";
    }
    return text;
}

let email = prompt("Nhập email: ");

let result = checkEmail(email);
console.log(result);
