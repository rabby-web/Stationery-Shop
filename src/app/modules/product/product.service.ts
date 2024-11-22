import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (payload: TProduct): Promise<TProduct> => {
  const result = await Product.create(payload);

  return result;
};

export const productServices = {
  createProduct,
};
