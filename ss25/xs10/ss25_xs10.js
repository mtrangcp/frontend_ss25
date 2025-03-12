let products = [["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]];
let cart = [];
let choice, check = true;

do {
    do {
        choice = +prompt("1.Xem danh sách sản phẩm có sẵn trong cửa hàng.\n2.Chọn sản phẩm để mua bằng cách nhập tên sản phẩm.\n3.Tính tổng tiền và hiển thị hóa đơn.\n4.Thoát");

        check = Number.isInteger(choice) ? false : true;
    } while (check);

    switch (choice) {
        case 1: {
            for (let i = 0; i < products.length; i++) {
                console.log(`Tên sản phẩm: ${products[i][0]} - Số lượng: ${products[i][1]} - Giá: ${products[i][2]}`);
            }
            break;
        }
        case 2: {
            let nameProduct = prompt("Nhập tên sản phẩm: ");
            check = false;
            for (let i = 0; i < products.length; i++) {
                if (products[i].includes(nameProduct) && products[i][1] !== 0) {
                    check = true;
                    if (cart.length === 0) {
                        cart.push([products[i][0], 1, products[i][2]]);

                    } else {
                        let checkcart = false;
                        for (let j = 0; j < cart.length; j++) {
                            if (cart[j].includes(nameProduct)) {
                                checkcart = true;
                                cart[j][1]++;
                                break;
                            }
                        }
                        if (!checkcart) {
                            cart.push([products[i][0], 1, products[i][2]]);
                        }
                    }
                    products[i][1]--;
                    console.log("Thêm thành công!");
                    console.log("Giỏ hàng: ");
                    for (let i = 0; i < cart.length; i++) {
                        console.log(`Tên sản phẩm: ${cart[i][0]} - Số lượng: ${cart[i][1]} - Giá: ${cart[i][2]}`);
                    }

                } else if (products[i].includes(nameProduct) && products[i][1] === 0) {
                    console.log("Sản phẩm đã hết.");
                    check = true;
                }
            }
            if (!check) console.log("Sản phẩm không có trong cửa hàng!");

            break;
        }
        case 3: {
            let total = 0;
            for (let i = 0; i < cart.length; i++) {
                total += cart[i][2] * cart[i][1];
            }
            console.log("Tổng tiền: ", total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
            break;
        }
        case 4: {
            alert("Bạn chọn thoát!");
            break;
        }
        default: {
            alert("Vui lòng chọn đúng menu(1-4)!");
            break;
        }
    }
} while (choice !== 4);
