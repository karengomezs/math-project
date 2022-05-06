function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeDescuentoCalculado = (100 - descuento) / 100; // /100 para que se ponga el 0.7 por ejemplo
    const precioConDescuento = (precio * porcentajeDescuentoCalculado);
    debugger; // pausa acá, no procesa más

    return precioConDescuento;
}

function finalPriceButton() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = parseInt(inputPrice.value); //estaba pasando el valor como un string, así que se pone parseInt para pasarlo como número

    const coupon = document.getElementById("coupon")
    const couponValue = parseInt(coupon.value);

    const coupons = [{
            name: 2020,
            discount: 20
        },
        {
            name: 2021,
            discount: 30
        },
        {
            name: 2022,
            discount: 40
        },
        {
            name: 2023,
            discount: 50
        }
    ];


    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert(`El cupón ${couponValue} no es válido`);
    } else {
        const discount = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);

        const resultP = document.getElementById("resultP");

        resultP.innerText = `El precio con descuento es:${precioConDescuento}`

    }

}