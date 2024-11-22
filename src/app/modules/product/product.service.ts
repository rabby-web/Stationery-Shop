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

// get product by productId
const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// update product
const updateProduct = async (productId: string, updatedData: TProduct) => {
  const result = await Product.findByIdAndUpdate(productId, updatedData, {
    new: true,
  });
  return result;
};

// delete product
const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productServices = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
