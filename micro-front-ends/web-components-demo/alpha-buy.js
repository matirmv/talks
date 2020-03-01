const prices = {
  b_easy: "460,00 €",
  b_burton: "540,00 €",
  b_nitro: "580,00 €"
};

class AlphaBuy extends HTMLElement {
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
    this.dispatchEvent(
      new CustomEvent("alpha:buy:changed", {
        bubbles: true
      })
    );
  }

  render() {
    const boardBrand = this.getAttribute("board-brand");
    const price = prices[boardBrand];
    this.innerHTML = `<button type="button">buy board ${this.formatBrandName(
      boardBrand
    )} : ${price}</button>`;
  }

  formatBrandName(name) {
    return name.replace("b_", "");
  }
}

window.customElements.define("alpha-buy", AlphaBuy);
