let total = 0;
let orderItems = [];

function addToOrder(item, price) {
    const orderList = document.getElementById('order-list');
    const orderItem = document.createElement('li');
    orderItem.textContent = `${item} - ₹${price.toFixed(2)}`;
    orderList.appendChild(orderItem);

    total += price;
    orderItems.push({ item, price });
    document.getElementById('total-price').textContent = `Total: ₹${total.toFixed(2)}`;
    alert(`${item} added to your order!`);
}

function checkout() {
    if (orderItems.length === 0) {
        alert('Your order is empty!');
    } else {
        const orderDetails = orderItems.map(order => `${order.item}: ₹${order.price.toFixed(2)}`).join('\n');
        alert(`Your Order:\n${orderDetails}\nTotal: ₹${total.toFixed(2)}`);
        resetOrder();
    }
}

function resetOrder() {
    total = 0;
    orderItems = [];
    document.getElementById('order-list').innerHTML = '';
    document.getElementById('total-price').textContent = `Total: ₹0.00`;
}
