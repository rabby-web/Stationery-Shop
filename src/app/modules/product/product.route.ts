import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

// create product
router.post('/', productController.createProduct);
// get all product
router.get('/', productController.getAllProduct);
// get single product
router.get('/:productId', productController.getSingleProduct);
// update product
router.put('/:productId', productController.updateProduct);
// delete product
router.delete('/:productId', productController.deleteProduct);

export const ProductRoutes = router;
