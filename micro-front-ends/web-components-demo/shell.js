const button = document.querySelector("alpha-buy");
const cart = document.querySelector("alpha-cart");
button.addEventListener("alpha:buy:changed", event => {
  const articlesQuantity = parseInt(cart.getAttribute("count"), 10) + 1;
  cart.setAttribute("count", articlesQuantity.toString());
});
