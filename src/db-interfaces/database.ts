import { Category } from './category';
import { Subcategory } from './subcategory';
import { Country } from './country';
import { City } from './city';
import { Product } from './product';
import { Comment } from './comment';

export interface Database {
  categories: Category[];
  subcategories: Subcategory[];
  countries: Country[];
  cities: City[];
  products: Product[];
  comments: Comment[];
}
