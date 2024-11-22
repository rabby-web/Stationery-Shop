import express from 'express';
import { productController } from './product.controller';
// import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', productController.createProduct);

export const ProductRoutes = router;
