import Alpine from "alpinejs";
import { productsComponent } from "./components/products/products";
import { cartComponent } from "./components/cart/cart";
import { modalComponent } from "./components/modal/modal";

document.addEventListener("alpine:init", () => {
  // Register Components
  Alpine.data('products', productsComponent);
  Alpine.data('cart', cartComponent);
  Alpine.data('modal', modalComponent);
});

// Register Alpine to the window
window.Alpine = Alpine;
Alpine.start();
