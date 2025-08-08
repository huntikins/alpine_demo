import type { AlpineComponent } from "alpinejs";
import type { IModalComponent } from "./modal.interface";

// Modal Component Context
export const modalComponent = (): AlpineComponent<IModalComponent> => ({
  open: false,
  reviews: [],
  productName: "",
  launchModal($event: CustomEvent<any>): void {
    this.open = true;
    this.reviews = $event.detail.reviews;
    this.productName = $event.detail.productName;
  },
});
