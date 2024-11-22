import { Request, Response } from 'express';
import { productServices } from './product.service';

// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await productServices.createProduct(payload);

    res.json({
      status: true,
      message: 'Product created successfully',
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

// get all product
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getProduct();

    res.send({
      status: true,
      message: 'Products retrieved successfully',
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

export const productController = {
  createProduct,
  getAllProduct,
};
