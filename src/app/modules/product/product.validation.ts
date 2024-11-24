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
  name: z.string().trim().min(1, 'Product name is required'),
  brand: z.string().trim().min(1, 'Brand name is required'),
  price: z
    .number()
    .min(1, 'Price is Required')
    .positive({ message: 'Price must be a positive number' }),
  category: ProductCategoryEnum,
  description: z.string().trim().min(1, 'Description is required'),
  quantity: z.number().min(1, 'Quantity must be a positive number'),
  inStock: z
    .boolean()
    .refine((value) => value === true, { message: 'inStock must be true' }),
  isDeleted: z.boolean().default(false),
});

export default ProductValidationSchema;
