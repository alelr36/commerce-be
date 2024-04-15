import { Product } from "@src/product/domain/product";
import { IProductRepository } from "../domain/product-repository";

const products: Product[] = [
    {
        id: '1',
        name: 'Small Lego',
        price: 10.50
    },
    {
        id: '2',
        name: 'Big Lego',
        price: 20.50
    },
    {
        id: '3',
        name: 'Bike',
        price: 30.50
    },
    {
        id: '4',
        name: 'Darts',
        price: 40.50
    },
    {
        id: '5',
        name: 'Puzzle',
        price: 50.50
    },
    {
        id: '6',
        name: 'Play-Do',
        price: 60.50
    },
    {
        id: '7',
        name: 'Hot Wheels',
        price: 70.50
    }
];

export class ProductRepository implements IProductRepository {
    async getById(id: string): Promise<Product | null> {
        const product = products.find((p) => p.id === id);

        if (!product) {
            return null;
        }

        return new Product(id, product.name, product.price);
    }

    async getAll(): Promise<Product[]> {
        return products;
    }
}