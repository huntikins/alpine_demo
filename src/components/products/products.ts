import type { AlpineComponent } from "alpinejs";
import type { IProductComponent } from "./products.interface";

import ProductJSON from "../../products.json";

// Products Component Context
export const productsComponent = (): AlpineComponent<IProductComponent> => ({
    products: ProductJSON
});
