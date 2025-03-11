const change = (arr) => {
    arr = arr.split(" ");

    for (let i = 0; i < arr.length; i++) {
        let firstChar = arr[i][0].toUpperCase();
        let others = arr[i].slice(1).toLowerCase();

        arr[i] = firstChar + others;
    }
    return arr;
}

let arr = prompt("Nhập chuỗi: ");


arr = change(arr);
console.log("Kết quả: ", arr.join(" "));


