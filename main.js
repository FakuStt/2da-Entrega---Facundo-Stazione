let btnAgregarCarrito = document.getElementByClassName("btnAgregarCarrito");

btnAgregarCarrito.addEventListener("click", () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se ha agregado correctamente al carrito",
        showConfirmButton: false,
        timer: 1500
      });
})

let btnGuardado = document.getElementByClassName("btnGuardado")

btnGuardado.addEventListener("click", () => {
    Swal.fire({
        title: "Producto guardado!",
        text: "Se ha guardado con exito!",
        icon: "success"
      });
})
