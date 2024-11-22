import express from 'express';
import { productController } from './product.controller';
// import { ProductControllers } from './product.controller';

const router = express.Router();

// post
router.post('/', productController.createProduct);
// get
router.get('/', productController.getAllProduct);

export const ProductRoutes = router;
