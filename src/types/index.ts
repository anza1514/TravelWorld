export interface Trip {
  id: string;
  name: string;
  from: string;
  to: string;
  price: number;
  duration: string;
  image: string;
  rating: number;
  reviews: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  tripName: string;
  comment: string;
  image: string;
}