import { Request, Response } from 'express'
import Product from '../models/product'

export const getProducts = async (req: Request, res: Response) => {
    const productList = await Product.findAll()
    res.json(productList)
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `product with id ${id} does not exist`,
        })
    }

}

export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const product = await Product.create(body)

        res.json({
            msg: 'post product',
            product
        })

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'An error occurred'
        })
    }
}


export const updateProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    const product = await Product.findByPk(id);

    try {
        if (product) {
            await product.update(body);
            res.json({
                msg: 'Product was successfully updated'
            })
        } else {
            res.json({
                msg: `product with id ${id} does not exist`,
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'An error occurred'
        })
    }
}


export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
        res.status(404).json({ msg: `product with id ${id} does not exist`, });
    } else {
        await product.destroy()
        res.json({
            msg: 'The product was successfully removed'
        })
    }
}