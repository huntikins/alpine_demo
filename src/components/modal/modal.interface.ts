import type { ProductReview } from "../products/products.interface";

export interface IModalComponent {
  open: boolean;
  productName: string;
  reviews: ProductReview[];
}
