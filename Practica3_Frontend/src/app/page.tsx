"use client";

import { getAllProducts } from "@/api-lib/products";
import { Product } from "@/types";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

import ProductCatalog from "./components/ProductCatalog";

import "./page.css";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getAllProducts()
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((e: AxiosError) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="home-page">
      <section className="hero">
        <h1>Catálogo de productos</h1>
        <p>Listado general con filtrado y paginación.</p>
      </section>

      {loading && <h2 className="status-message">Cargando productos...</h2>}
      {error && <h2 className="status-message">Error: {error}</h2>}

      {!loading && !error && <ProductCatalog products={products} />}
    </main>
  );
};

export default Home;