const state = {
  count: 0
};

class AlphaCart extends HTMLElement {

  connectedCallback() {
    this.refresh = this.refresh.bind(this);
    this.render();
    window.addEventListener("alpha:buy:changed", this.refresh);
  }

  disconnectedCallback() {
    window.removeEventListener("alpha:buy:changed", this.refresh);
  }

  render() {
    // const total = cartProducts.reduce((acc, curr) => acc + curr, 0);
    this.innerHTML = `<button type="button">${state.count} article${
      state.count > 0 ? "s" : ""
    } in the basket</button>`;
  }
  refresh() {
    state.count++;
    this.render();
  }
}

window.customElements.define("alpha-cart", AlphaCart);
