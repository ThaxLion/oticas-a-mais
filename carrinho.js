
document.addEventListener("DOMContentLoaded", function () {
    const contador = document.getElementById("contador-carrinho");
    contador.textContent = localStorage.getItem("carrinho") || "0";
});
