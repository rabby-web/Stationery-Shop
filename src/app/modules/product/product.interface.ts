/* eslint-disable no-unused-vars */
export enum TProductCategory {
  Writing = 'Writing',
  OfficeSupplies = 'Office Supplies',
  ArtSupplies = 'Art Supplies',
  Educational = 'Educational',
  Technology = 'Technology',
}

export type TProduct = {
  name: string;
  brand: string;
  price: number;
  category: TProductCategory;
  description: string;
  quantity: number;
  inStock: boolean;
  isDeleted: boolean;
};
