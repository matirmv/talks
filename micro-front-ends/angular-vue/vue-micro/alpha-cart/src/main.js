import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import AlphaCart from "./components/AlphaCart";

const CustomElement = wrap(Vue, AlphaCart);

window.customElements.define("alpha-cart", CustomElement);
