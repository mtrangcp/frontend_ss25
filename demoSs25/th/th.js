let carts = [];

/**
 * ham them gia vao carts
 * @param {*} price gia lay tu nguoi dung
 * @returns carts sau khi them
 * Auth: htmt (11/03/2025)
 */
const addPrice = (array, price) => {
    array.push(price);
    return array;
}

/**
 * Ham thay doi gia trong array
 * @param {*} index vi tri thay doi gia
 * @param {*} value gia tri moi
 * @returns ham sau thay doi
 * Auth: htmt (11/03/2025)
 */
const updatePrice = (array, index, value) => {
    array.splice(index, 1, value);
    return array;
}

const removePrice = (array, index) => {
    array.splice(index, 1);
    return array;
}

const formatMoney = (price) => {
    return price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

const totalAmount = (array) => {
    let total = 0;

    for (const element of array) {
        total += element;
    }
    return formatMoney(total);
}


const resultAdd1 = addPrice(carts, 10);
const resultAdd2 = addPrice(carts, 20);
const resultAdd3 = addPrice(carts, 30);
const resultAdd4 = addPrice(carts, 40);
console.log("carts: ", carts);

const resultUpdate1 = updatePrice(carts, 0, 77);
console.log("carts: ", carts);


carts = removePrice(carts, 1);
console.log("carts: ", carts);

let cost = totalAmount(carts);
console.log("Tong tien: ", cost);

