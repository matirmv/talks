const button = document.querySelector("alpha-buy");
button.addEventListener("action", event => {
  console.log(event);
});

setTimeout(() => {
  button.label = "newLabel";
}, 3000);
