import { Router } from 'express'
import { getProducts, getProduct, deleteProduct, postProduct, updateProduct } from '../controllers/product.controller'

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', postProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;