const product = [
    {
        id: 0,
        image: 'montblanc.webp',
        title: 'Montblanc 1858 Geosphere UltraBlack Limited Edition',
        price: 564.84,
    },
    {
        id: 1,
        image: 'richardmille.webp',
        title: 'RICHARD MILLE RM 30 Automatic Black Dash',
        price: 970.75,
    },
    {
        id: 2,
        image: 'Rolex.webp',
        title: 'Rolex Label Noir Tourbillon',
        price: 750.25,
    },
    {
        id: 3,
        image: 'versace.webp',
        title: 'Versace Leather Watch',
        price: 350.85,
    }
];

let j = 0;

const cart = [];

document.getElementById('root').innerHTML = product.map((item) => {
    let { id, image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button onclick='addtocart(${id})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');

function addtocart(a) {
    cart.push({ ...product[a] });
    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items, index) => {
            var { image, title, price } = items;
            total = total + price;
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowing' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                    "<i class='fa-solid fa-trash' onclick='delElement(" + index + ")'></i></div>"
            );
        }).join('');
    }
    
    document.getElementById("Total").innerHTML = "$ " + total.toFixed(2);
}
