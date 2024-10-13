export interface Product {
  _id: string;
  id: string;
  imageCover: string;
  title: string;
  name: string;
  price: number;
  ratingsAverage: number;
  category: { name: string };
}
