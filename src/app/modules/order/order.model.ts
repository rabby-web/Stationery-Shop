import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
  email: { type: String, required: true },
  product: {
    type: Schema.Types.ObjectId,
    required: [true, 'Product id is required'],
  },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});
export const Order = mongoose.model('Order', orderSchema);