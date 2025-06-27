// Menu data based on the image
const menuData = [
    // Chinese
    { id: 1, name: "Veg Chow Hakka", price: 50, category: "chinese", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Egg Chow Hakka", price: 60, category: "chinese", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Paneer Chow Hakka", price: 70, category: "chinese", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Chicken Chow Hakka", price: 80, category: "chinese", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Egg Chili Chow Hakka", price: 90, category: "chinese", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Veg Chow Gravy", price: 70, category: "chinese", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Egg Chow Gravy", price: 90, category: "chinese", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Paneer Chow Gravy", price: 110, category: "chinese", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 9, name: "Chicken Chow Gravy", price: 120, category: "chinese", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 10, name: "Veg Manchurian (6PCS)", price: 70, category: "chinese", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 11, name: "Chicken Manchurian (6PCS)", price: 100, category: "chinese", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 12, name: "Chilli Chicken (6PCS)", price: 110, category: "chinese", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 13, name: "Paneer Chilli (6PCS)", price: 80, category: "chinese", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 14, name: "Lemon Chicken (6PCS)", price: 120, category: "chinese", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 15, name: "Garlic Chicken (6PCS)", price: 120, category: "chinese", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 16, name: "Hot Garlic Chicken (6PCS)", price: 140, category: "chinese", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 17, name: "Chicken 65 (6PCS)", price: 130, category: "chinese", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 18, name: "Chicken Manchurian 65 (6PCS)", price: 110, category: "chinese", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 19, name: "Salt Paper Chicken (6PCS)", price: 150, category: "chinese", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 20, name: "Kung Pao Chicken (6PCS)", price: 140, category: "chinese", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },

    // Fried Rice
    { id: 21, name: "Chicken Biryani", price: 130, category: "fried-rice", image: "https://images.unsplash.com/photo-1563379091339-03246963d582?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 22, name: "Mutton Biryani", price: 150, category: "fried-rice", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 23, name: "Veg Fried Rice", price: 50, category: "fried-rice", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 24, name: "Egg Fried Rice", price: 60, category: "fried-rice", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 25, name: "Chicken Fried Rice", price: 70, category: "fried-rice", image: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 26, name: "Egg Chicken Fried Rice", price: 90, category: "fried-rice", image: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 27, name: "Egg Chicken Burnt Garlic Rice", price: 100, category: "fried-rice", image: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 28, name: "Steam Fried Rice", price: 130, category: "fried-rice", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 29, name: "Jeera Fried Rice", price: 80, category: "fried-rice", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },

    // Momo
    { id: 30, name: "Veg Momo (5PCS)", price: 50, category: "snacks", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 31, name: "Veg Fried Momo (5PCS)", price: 60, category: "snacks", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 32, name: "Veg Pan Fried Momo (5PCS)", price: 70, category: "snacks", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 33, name: "Chicken Momo (5PCS)", price: 60, category: "snacks", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 34, name: "Chicken Fried Momo (5PCS)", price: 70, category: "snacks", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 35, name: "Chicken Pan Fried Momo (5PCS)", price: 80, category: "snacks", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },

    // Rolls
    { id: 36, name: "Veg Roll", price: 30, category: "snacks", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 37, name: "Egg Roll", price: 40, category: "snacks", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 38, name: "Double Egg Roll", price: 50, category: "snacks", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 39, name: "Paneer Roll", price: 50, category: "snacks", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 40, name: "Chicken Roll", price: 60, category: "snacks", image: "https://images.unsplash.com/photo-1619740455993-a42b9e77154b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 41, name: "Egg Chicken Roll", price: 70, category: "snacks", image: "https://images.unsplash.com/photo-1619740455993-a42b9e77154b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 42, name: "Dahi Chicken Roll", price: 70, category: "snacks", image: "https://images.unsplash.com/photo-1619740455993-a42b9e77154b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 43, name: "Egg Paneer Roll", price: 70, category: "snacks", image: ""},
    { id: 44, name: "Egg Veg Roll", price: 60, category: "snacks", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }, 



             ];

        let cart = [];
        let currentFilter = 'all';

        // Initialize the menu
        function displayMenu(items = menuData) {
            const menuGrid = document.getElementById('menu-grid');
            menuGrid.innerHTML = '';

            items.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <div class="menu-item-content">
                        <h3>${item.name}</h3>
                        <div class="menu-item-price">₹${item.price}</div>
                        <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
                    </div>
                `;
                menuGrid.appendChild(menuItem);
            });
        }

        // Filter menu by category
        function filterMenu(category) {
            currentFilter = category;
            
            // Update active button
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            // Filter items
            const filteredItems = category === 'all' 
                ? menuData 
                : menuData.filter(item => item.category === category);
            
            displayMenu(filteredItems);
        }

        // Add item to cart
        function addToCart(itemId) {
            const item = menuData.find(item => item.id === itemId);
            const existingItem = cart.find(cartItem => cartItem.id === itemId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...item, quantity: 1 });
            }

            updateCartCount();
            
            // Show feedback
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'Added!';
            button.style.background = '#28a745';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 1000);
        }

        // Update cart count
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            document.getElementById('cart-count').textContent = count;
        }

        // Open cart modal
        function openCart() {
            const modal = document.getElementById('cart-modal');
            const cartItems = document.getElementById('cart-items');
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
                document.getElementById('cart-total').textContent = 'Total: ₹0';
            } else {
                cartItems.innerHTML = '';
                let total = 0;

                cart.forEach(item => {
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <div>
                            <h4>${item.name}</h4>
                            <span>₹${item.price} each</span>
                        </div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <div>₹${item.price * item.quantity}</div>
                    `;
                    cartItems.appendChild(cartItem);
                    total += item.price * item.quantity;
                });

                document.getElementById('cart-total').textContent = `Total: ₹${total}`;
            }
            
            modal.style.display = 'block';
        }

        // Close cart modal
        function closeCart() {
            document.getElementById('cart-modal').style.display = 'none';
        }

        // Update quantity
        function updateQuantity(itemId, change) {
            const item = cart.find(cartItem => cartItem.id === itemId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    cart = cart.filter(cartItem => cartItem.id !== itemId);
                }
            }
            updateCartCount();
            openCart(); // Refresh cart display
        }

        // Proceed to payment
        function proceedToPayment() {
            if (cart.length === 0) return;
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.getElementById('payment-total').textContent = `₹${total}`;
            
            // Update QR code with total amount
            const qrCode = document.getElementById('payment-qr');
            qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=snackshut@paytm&pn=Snacks%20Hut&am=${total}&cu=INR`;
            
            closeCart();
            document.getElementById('payment-modal').style.display = 'block';
        }

        // Close payment modal
        function closePayment() {
            document.getElementById('payment-modal').style.display = 'none';
        }

        // Confirm order
        function confirmOrder() {
            alert('Thank you for your order! Your food will be prepared and delivered soon.');
            cart = [];
            updateCartCount();
            closePayment();
        }

        // Scroll to menu
        function scrollToMenu() {
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        }

        // Close modals when clicking outside
        window.onclick = function(event) {
            const cartModal = document.getElementById('cart-modal');
            const paymentModal = document.getElementById('payment-modal');
            
            if (event.target === cartModal) {
                closeCart();
            }
            if (event.target === paymentModal) {
                closePayment();
            }
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            displayMenu();
        });
