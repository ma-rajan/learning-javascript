const cart = [
  { item: "Shoes", price: 2500, qty: 1 },
  { item: "T-Shirt", price: 800, qty: 2 }
];
let total = 0;
cart.forEach(product => {
  total += product.price * product.qty;
});
console.log("Total:", total);