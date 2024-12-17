// This script could be used to add interactivity such as handling add-to-cart functionality

document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.btn-primary');

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to Bag Pack!');
        });
    });
});
const cart = document.getElementById('cart');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItems = document.querySelectorAll('.cart-item');
const totalPriceElement = document.getElementById('total-price');

document.addEventListener('DOMContentLoaded', function () {
    const cart = document.getElementById('cart');
    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const totalPriceElement = document.getElementById('total-price');

    // Open Cart
    openCartBtn.addEventListener('click', () => {
        cart.classList.add('open');
    });

    // Close Cart
    closeCartBtn.addEventListener('click', () => {
        cart.classList.remove('open');
    });

    // Function to update the total price
    function updateTotalPrice() {
        let totalPrice = 0;
        const cartItems = document.querySelectorAll('.cart-item');

        cartItems.forEach(item => {
            const quantity = item.querySelector('.quantity').value;
            const price = item.querySelector('.price').dataset.price;
            totalPrice += quantity * price;
        });

        totalPriceElement.textContent = `$${totalPrice}`;
    }

    // Add item to cart
    const cartItemsContainer = cart.querySelector('.cart-items');

    const cartButtons = document.querySelectorAll('.btn-primary');

    cartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const card = button.closest('.card');
            const productName = card.querySelector('.card-title').innerText;
            const productPrice = card.querySelector('.card-text').innerText.replace('Rs ', '');
            const quantity = 1; // Default quantity

            // Create cart item
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${productName}</p>
                <input type="number" value="${quantity}" class="quantity" min="1">
                <span class="price" data-price="${productPrice}">$${productPrice}</span>
                <button class="remove-btn">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);

            // Update total price
            updateTotalPrice();

            // Add event listener to the new remove button
            const removeButton = cartItem.querySelector('.remove-btn');
            removeButton.addEventListener('click', () => {
                cartItem.remove();
                updateTotalPrice();
            });

            // Add event listener to the quantity input
            const quantityInput = cartItem.querySelector('.quantity');
            quantityInput.addEventListener('change', updateTotalPrice);
        });
    });
});

function changeImage(imageSrc) {
    const productImage = document.getElementById('productImage');
    productImage.src = imageSrc;
}

function toggleFavorite() {
    const heartIcon = document.getElementById('favoriteIcon');
    const favoriteText = document.getElementById('favoriteText');
    
    heartIcon.classList.toggle('liked');
    if (heartIcon.classList.contains('liked')) {
        favoriteText.textContent = 'Added to Favorites';
    } else {
        favoriteText.textContent = 'Add to Favorites';
    }
}
