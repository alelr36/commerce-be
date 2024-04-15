import { Request, Response } from "express";

import { ProductInteractor } from "@src/product/application/product-interactor";

export class ProductController {

    constructor(private readonly productInteractor: ProductInteractor) {}
    
    async getAllProducts(req: Request, res: Response) {
        const products = await this.productInteractor.getAllProducts();

        res.status(200).send({ status: 'OK' , products});
    }
}