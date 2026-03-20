export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    stock: number;
    brand?: string;
    weight?: number;
    dimensions?: {
      width: number;
      height: number;
      depth: number;
    };
    thumbnail: string;
    images: string[];
  }
  
  export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }