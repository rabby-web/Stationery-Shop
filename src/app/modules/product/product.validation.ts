import { z } from 'zod';
import { TProductCategory } from './product.interface';

const ProductCategoryEnum = z.enum([
  TProductCategory.Writing,
  TProductCategory.OfficeSupplies,
  TProductCategory.ArtSupplies,
  TProductCategory.Educational,
  TProductCategory.Technology,
]);

const ProductValidationSchema = z.object({
  name: z.string().trim().min(1, 'product name is required'),
  brand: z.string().trim().min(1, 'brand name is required'),
  price: z
    .number()
    .min(1, 'price is Required')
    .positive({ message: 'price must be a positive number' }),
  category: ProductCategoryEnum,
  description: z.string().trim().min(1, 'description is required'),
  quantity: z.number().min(1, 'quantity must be a positive number'),
  inStock: z
    .boolean()
    .refine((value) => value === true, { message: 'inStock must be true' }),
  isDeleted: z.boolean().default(false),
});

export default ProductValidationSchema;
