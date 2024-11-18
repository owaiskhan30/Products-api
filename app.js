const div = document.querySelector(".products");

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((res) => {
   res.products.map(function (item, index) {
        div.innerHTML += `
        <div class="card" id="card_${item.id}">
            <img src="${item.thumbnail}">
            <h2 class="title">${item.title}</h2>
            <h2>Category: ${item.category}</h2>
            <h2>Rating: ${item.rating}</h2>
            <h2>Stock: ${item.stock}</h2>
            <h2>Brand: ${item.brand }</h2>
            <h1>Price: $${item.price}</h1>
            <button onclick="productDetails(${item.id})">Read More</button>
        </div>`  
    });
});

function productDetails(id) {
    localStorage.setItem("productId", id);
    window.location = "single-product.html";
}
