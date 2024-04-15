import { IProductRepository } from "@src/product/domain/product-repository";

export class ProductInteractor {
    constructor(
        private readonly productRepository: IProductRepository
    ){}

    async getAllProducts() {
        return this.productRepository.getAll();
    }
}