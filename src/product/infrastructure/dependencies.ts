import { ProductInteractor } from '../application/product-interactor';
import { ProductController } from './product-controller';
import { ProductRepository } from './product-repository';

export const productRepository = new ProductRepository();
export const productInteractor = new ProductInteractor(productRepository);
export const productController = new ProductController(productInteractor);