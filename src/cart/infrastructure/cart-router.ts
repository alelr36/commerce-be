import express from "express";

import { cartController } from "./dependencies";

const cartRouter = express.Router();

cartRouter.post("/add", cartController.addProductToCart.bind(cartController));
cartRouter.post("/remove", cartController.removeProductFromCart.bind(cartController));
cartRouter.post("/empty", cartController.emptyCart.bind(cartController));
cartRouter.get("/", cartController.getCart.bind(cartController));

export { cartRouter };
