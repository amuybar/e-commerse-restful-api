export interface Order {
  id: string;
  userId: string;
  products: Array<{ productId: string; quantity: number }>;
  total: number;
}
