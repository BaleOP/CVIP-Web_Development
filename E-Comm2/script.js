let cartItems = [];
function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    const currentItem = event.target.closest(".featured-item-content");
    const itemTitle = currentItem.querySelector("h2").textContent;
    const itemPrice = currentItem.querySelector(".item-price").textContent;
    
    // Check if the item is already in the cart
    const existingItem = cartItems.find(item => item.title === itemTitle);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ title: itemTitle, price: parseFloat(itemPrice), quantity: 1 });
    }
    
    // Update the cart count in the UI
    let totalQuantity = 0;
    cartItems.forEach(item => {
      totalQuantity += item.quantity;
    });
    cartCountElement.textContent = totalQuantity;
    console.log(cartItems)
    alert("Added to cart")
  }
  