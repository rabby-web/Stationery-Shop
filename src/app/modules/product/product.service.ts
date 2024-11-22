import { TProduct } from './product.interface';
import { Product } from './product.model';

// create product
const createProduct = async (payload: TProduct): Promise<TProduct> => {
  const result = await Product.create(payload);

  return result;
};

// get all product
const getProduct = async () => {
  const result = await Product.find();
  return result;
};

export const productServices = {
  createProduct,
  getProduct,
};
