import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await orderService.createOrder(payload);

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
