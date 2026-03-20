import { api } from "./api";
import { Product, ProductsResponse } from "@/types";

export const getAllProducts = async () => {
  const firstResponse = await api.get<ProductsResponse>("/products?limit=1");
  const total = firstResponse.data.total;

  return api.get<ProductsResponse>(`/products?limit=${total}&skip=0`);
};

export const getProductById = async (id: string) => {
  return api.get<Product>(`/products/${id}`);
};