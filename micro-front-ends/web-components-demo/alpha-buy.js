const prices = {
  b_easy: "460,00 €",
  b_burton: "540,00 €",
  b_nitro: "580,00 €"
};

class AlphaBuy extends HTMLElement {
  static get observedAttributes() {
    return ["board-brand"];
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {
    this.addToCart = this.addToCart.bind(this);
    this.render();
    this.firstChild.addEventListener("click", this.addToCart);
  }

  disconnectedCallback() {
    this.firstChild.removeEventListener("click", this.addToCart);
  }

  addToCart() {
    const boardBrand = this.getAttribute("board-brand");
    const price = prices[boardBrand];

    this.dispatchEvent(
      new CustomEvent("alpha:buy:changed", {
        bubbles: true,
        detail: {
          price: price
        }
      })
    );
  }

  render() {
    const boardBrand = this.getAttribute("board-brand");
    const price = prices[boardBrand];
    this.innerHTML = `<button type="button">buy board ${boardBrand.replace(
      "b_",
      ""
    )} : ${price}</button>`;
  }
}

window.customElements.define("alpha-buy", AlphaBuy);
