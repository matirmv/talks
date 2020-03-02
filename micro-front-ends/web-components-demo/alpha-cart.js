class AlphaCart extends HTMLElement {
  static get observedAttributes() {
    return ["count"];
  }
  connectedCallback() {
    this.setAttribute("count", 0);
    this.render();
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this.render();
  }

  disconnectedCallback() {}

  render() {
    console.log("rerendered !");

    this.innerHTML = `<p>${this.getAttribute("count")} article${
      this.getAttribute("count") > 0 ? "s" : ""
    } in the basket</p>`;
  }
}

window.customElements.define("alpha-cart", AlphaCart);
