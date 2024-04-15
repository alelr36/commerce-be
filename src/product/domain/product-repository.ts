import { Product } from "./product";

export interface IProductRepository {
    getById(id: string): Promise<Product | null>;
    getAll(): Promise<Product[]>;
}