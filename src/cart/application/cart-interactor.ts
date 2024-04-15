import { Cart } from "@src/cart/domain/cart";
import { IProductRepository } from "@src/product/domain/product-repository";

export class CartInteractor {
    constructor(
        private readonly cart: Cart,
        private readonly productRepository: IProductRepository
    ) {}

    async addProduct(id: string) {
        const addedProduct = await this.productRepository.getById(id);
        
        if (!addedProduct) {
            throw new Error(`Product not found. Product ID: ${id}`);
        }

        this.cart.addProduct(addedProduct);

        return addedProduct;
    }

    removeProduct(productId: string) {
        const removedProduct = this.cart.removeProduct(productId);

        return removedProduct;
    }

    emptyCart() {
        this.cart.empty();
    }

    getCart() {
        return this.cart.getCart();
    }
}