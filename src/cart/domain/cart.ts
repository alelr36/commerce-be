import { Product } from "@src/product/domain/product";

export class Cart {
    constructor(
        private readonly userId: string,
        private readonly products: Product[] = [], 
        private total: number = 0
    ) {}

    addProduct(product: Product) {
        this.products.push(product);
        this.calculateTotal();
    }

    removeProduct(productId: string) {
        const index = this.products.findIndex((product) => product.id === productId);

        const removedProduct = this.products[index];

        if (index !== -1) {
            this.products.splice(index, 1);
        }

        this.calculateTotal();

        return removedProduct;
    }

    empty() {
        this.products.length = 0;
        this.calculateTotal();
    }

    getCart() {
        // Primitive
        const { userId, total } = this;
        // Reference
        const products = [...this.products];

        return { userId, products, total };
    }

    private calculateTotal() {
        this.total = this.products.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    }
}