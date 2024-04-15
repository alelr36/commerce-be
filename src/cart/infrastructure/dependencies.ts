import { CartInteractor } from "@src/cart/application/cart-interactor";
import { Cart } from "@src/cart/domain/cart";

import { ProductRepository } from "@src/product/infrastructure/product-repository";

import { CartController } from "./cart-controller";

export const cart = new Cart('user-123');
export const productRepository = new ProductRepository();
export const cartInteractor = new CartInteractor(cart, productRepository);
export const cartController = new CartController(cartInteractor);