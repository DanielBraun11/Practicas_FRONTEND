import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">{product.price} €</p>

        <Link href={`/product/${String(product.id)}`} className="product-button">
          Ver detalles
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;