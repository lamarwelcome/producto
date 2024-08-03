// Estructura del carrito
let carrito = {
    items: {},
    totalItems: 0,
    totalCost: 0
};

// Función para agregar productos al carrito
function agregarAlCarrito(id, precio) {
    if (!carrito.items[id]) {
        carrito.items[id] = { cantidad: 0, precio: precio };
    }
    carrito.items[id].cantidad++;
    carrito.totalItems++;
    carrito.totalCost += precio;
    actualizarCarrito();
}

// Función para actualizar el carrito en la interfaz
function actualizarCarrito() {
    document.getElementById('total-items').textContent = `Artículos: ${carrito.totalItems}`;
    document.getElementById('total-cost').textContent = `Total: $${carrito.totalCost.toFixed(2)}`;
}

