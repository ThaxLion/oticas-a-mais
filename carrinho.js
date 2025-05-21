function adicionarAoCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push("Óculos");
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContador();
}

function atualizarContador() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  document.getElementById("contador-carrinho").innerText = carrinho.length;
}

document.addEventListener("DOMContentLoaded", atualizarContador);
