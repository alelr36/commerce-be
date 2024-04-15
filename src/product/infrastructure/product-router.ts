import express from "express";

import { productController } from "./dependencies";

const productRouter = express.Router();

productRouter.get("/", productController.getAllProducts.bind(productController));

export { productRouter };
