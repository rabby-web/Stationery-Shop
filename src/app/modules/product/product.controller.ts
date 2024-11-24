import { Request, Response } from 'express';
import { productServices } from './product.service';
import ProductValidationSchema from './product.validation';

// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    // zod validation
    const zodParseData = ProductValidationSchema.parse(payload);

    const result = await productServices.createProduct(zodParseData);

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
    // console.log(req.query);
    const result = await productServices.getProduct(req.query);

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

// get single product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

// update product
const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.productId;
    const updatedData = req.body;
    const result = await productServices.updateProduct(productId, updatedData);

    // success response
    res.status(200).json({
      message: 'Product updated successfully',
      status: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

// delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await productServices.deleteProduct(productId);

    res.send({
      status: true,
      message: 'Product deleted successfully',
      result: {},
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
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
