"use client";

import Link from "next/link";
import { getProductById } from "@/api-lib/products";
import ProductImageCarousel from "@/app/components/ProductImageCarousel";
import { Product } from "@/types";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import "./page.css";

const ProductDetailPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    getProductById(id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e: AxiosError) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <main className="detail-page">
      <div className="detail-container">
        <Link href="/" className="back-button">
          ← Volver
        </Link>

        {loading && <h2 className="status-message">Cargando producto...</h2>}
        {error && <h2 className="status-message">Error: {error}</h2>}

        {!loading && !error && product && (
          <section className="detail-main">
            <ProductImageCarousel
              images={product.images}
              title={product.title}
            />

            <div className="detail-info">
              <span className="detail-category">{product.category}</span>
              <h1>{product.title}</h1>
              <p className="detail-description">{product.description}</p>

              <div className="detail-grid">
                <div className="detail-box">
                  <h3>Precio</h3>
                  <p>{product.price} €</p>
                </div>

                <div className="detail-box">
                  <h3>Marca</h3>
                  <p>{product.brand ?? "No especificada"}</p>
                </div>

                <div className="detail-box">
                  <h3>Valoración</h3>
                  <p>{product.rating}</p>
                </div>

                <div className="detail-box">
                  <h3>Stock</h3>
                  <p>{product.stock}</p>
                </div>

                <div className="detail-box">
                  <h3>Peso</h3>
                  <p>{product.weight ?? "No disponible"}</p>
                </div>

                <div className="detail-box">
                  <h3>Dimensiones</h3>
                  <p>
                    {product.dimensions
                      ? `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`
                      : "No disponibles"}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {!loading && !error && !product && (
          <h2 className="status-message">Producto no encontrado.</h2>
        )}
      </div>
    </main>
  );
};

export default ProductDetailPage;