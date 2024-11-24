import mongoose from 'mongoose';
import { z } from 'zod';

const objectIdValidation = z.custom<mongoose.Types.ObjectId>(
  (value) => {
    return mongoose.Types.ObjectId.isValid(value);
  },
  { message: 'Invalid ObjectId' },
);

const orderValidationSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email({ message: 'Invalid email type' }),
  product: objectIdValidation,
  quantity: z
    .number()
    .positive('Quantity must be a positive number')
    .min(1, 'Quantity is required'),
  totalPrice: z
    .number()
    .min(1, 'Total price is required')
    .positive('Total price must be a positive number'),
});

export default orderValidationSchema;
