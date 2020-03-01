const numberOfArticles = 0;
const button = document.querySelector("alpha-buy");
const cart = document.querySelector("alpha-cart");
button.addEventListener("action", event => {
  cart.setAttribute("quantite", event.detail);
});
