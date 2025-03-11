const isPalindrome = (arr) => {
    let arrClone = [...arr].reverse();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arrClone[i]) {
            return false;
        }
    }
    return true;
}

let arr = prompt("Nhập chuỗi: ");

isPalindrome(arr) ? console.log("Là chuỗi đối xứng") : console.log("Không là chuỗi đối xứng");


