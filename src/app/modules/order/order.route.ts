import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

// create product
router.post('/', orderController.createOrder);
router.get('/revenue', orderController.calculateRevenue);

export const OrderRoutes = router;
