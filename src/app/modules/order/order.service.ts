/* eslint-disable @typescript-eslint/no-explicit-any */
// import { TOrder } from './order.interface';
// import { Order } from './order.model';

// const createOrder = async (payload: TOrder): Promise<TOrder> => {

//   const { product, quantity } = payload;
//   console.log(product, quantity);

//   const result = await Order.create(payload);

//   return result;
// };

// export const orderService = {
//   createOrder,
// };
import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';// Assuming Product model manages inventory

const createOrder = async (payload: TOrder): Promise<any> => {
  const { email, product: productId, quantity, totalPrice } = payload;

  // Fetch the product to check inventory
  const product = await Product.findById(productId);
  if (!product) {
    return {
      status: false,
      message: 'Product not found',
    };
  }

  // Check if sufficient stock is available
  if (product.quantity < quantity) {
    return {
      status: false,
      message: 'Insufficient stock for this product',
    };
  }

  // Adjust inventory
  product.quantity -= quantity;
  if (product.quantity === 0) {
    product.inStock = false;
  }
  await product.save();

  // Create the order
  const result = await Order.create({
    email,
    product: productId,
    quantity,
    totalPrice,
  });

  return {
    message: 'Order created successfully',
    status: true,
    data: result,
  };
};

export const orderService = {
  createOrder,
};
