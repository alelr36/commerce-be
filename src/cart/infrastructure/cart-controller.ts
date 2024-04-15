import { Request, Response } from "express";
import { CartInteractor } from "@src/cart/application/cart-interactor";

export class CartController {

  constructor(private readonly cartInteractor: CartInteractor) {}

  async addProductToCart(req: Request, res: Response) {
    const id = req.body.id;

    const addedProduct = await this.cartInteractor.addProduct(id);

    res.status(200).send({ status: 'OK', addedProduct });
  }

  removeProductFromCart(req: Request, res: Response) {
    const id = req.body.id;

    const removedProduct = this.cartInteractor.removeProduct(id);

    res.status(200).send({ status: 'OK', removedProduct });
  }

  emptyCart(req: Request, res: Response) {
    this.cartInteractor.emptyCart();

    res.status(200).send({ status: 'OK' });
  }

  getCart(req: Request, res: Response) {
    const cart = this.cartInteractor.getCart();

    res.status(200).send({ status: 'OK' , cart});
  }
}
