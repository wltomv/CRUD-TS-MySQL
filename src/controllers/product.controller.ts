import { Request, Response } from 'express'

export const getProducts = (req: Request, res: Response) => {
    res.json({
        msg: 'get products'
    })
}

export const getProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'get product',
        id
    })
}

export const postProduct = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: 'post product',
        body
    })
}


export const updateProduct = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'update product',
        id,
        body
    })
}


export const deleteProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'delete product',
        id
    })
}