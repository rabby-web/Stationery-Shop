import { Request, Response } from 'express';
import { orderService } from './order.service';
import orderValidationSchema from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    // zod validation
    const zodParsedData = orderValidationSchema.parse(payload);

    const result = await orderService.createOrder(zodParsedData);

    res.json({
      status: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// revenueOrder
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await orderService.revenueOrder();

    res.json({
      status: true,
      message: 'Revenue calculated successfully',
      data: {
        totalRevenue,
      },
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const orderController = {
  createOrder,
  calculateRevenue,
};
