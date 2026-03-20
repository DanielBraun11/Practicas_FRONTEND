"use client";

import { useEffect, useMemo, useState } from "react";
import { Product } from "@/types";

import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import SectionContainer from "./SectionContainer";

interface ProductCatalogProps {
  products: Product[];
}

const ProductCatalog = ({ products }: ProductCatalogProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageSize = 9;

  const filteredProducts = useMemo(() => {
    const text = searchTerm.toLowerCase().trim();

    if (!text) return products;

    return products.filter((product) => {
      const matchesTitle = product.title.toLowerCase().includes(text);
      const matchesCategory = product.category.toLowerCase().includes(text);
      const matchesBrand = product.brand
        ? product.brand.toLowerCase().includes(text)
        : false;

      return matchesTitle || matchesCategory || matchesBrand;
    });
  }, [products, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage]);

  const previousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <SectionContainer title="Catálogo de productos">
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <p className="results-counter">
        Productos encontrados: <strong>{filteredProducts.length}</strong>
      </p>

      <div className="products-grid">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="empty-message">
          No se encontraron productos con ese filtro.
        </p>
      )}

      {filteredProducts.length > 0 && (
        <div className="pagination">
          <button
            type="button"
            onClick={previousPage}
            className="pagination-button"
            disabled={currentPage === 1}
          >
            ← Anterior
          </button>

          <span className="pagination-info">
            Página {currentPage} de {totalPages}
          </span>

          <button
            type="button"
            onClick={nextPage}
            className="pagination-button"
            disabled={currentPage === totalPages}
          >
            Siguiente →
          </button>
        </div>
      )}
    </SectionContainer>
  );
};

export default ProductCatalog;