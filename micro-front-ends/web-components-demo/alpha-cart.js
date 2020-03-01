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
    this.innerHTML = `<p>${state.count} article${
      state.count > 0 ? "s" : ""
    } in the basket</p>`;
  }
  refresh() {
    state.count++;
    this.render();
  }
}

window.customElements.define("alpha-cart", AlphaCart);
