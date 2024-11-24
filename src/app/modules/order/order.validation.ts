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
    .min(1, 'email is required')
    .email({ message: 'invalid email type' }),
  product: objectIdValidation,
  quantity: z
    .number()
    .positive('quantity must be a positive number')
    .min(1, 'quantity is required'),
  totalPrice: z
    .number()
    .min(1, 'total price is required')
    .positive('total price must be a positive number'),
});

export default orderValidationSchema;
