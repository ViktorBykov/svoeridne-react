import { Seller } from './seller';

export interface Product {
  id: string;
  categoryId: number;
  subcategoryId: number;
  name: string;
  price: number;
  currency: string;
  rating: number;
  ratingCount: number;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  isMadeByUkrainian: boolean;
  isPremiumProduct: boolean;
  updatedAt: string;
  createdAt: string;
  countryId: number;
  cityId: number;
  seller: Seller;
  comments: (string | number)[];
  slug: string;
}