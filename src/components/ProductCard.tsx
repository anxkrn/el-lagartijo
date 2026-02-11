import type { Product } from '../data/products';
import '../styles/ProductCard.css';

interface ProductCardProps {
  product: Product;
  imageIndex?: number;
  compact?: boolean;
  onSelect: (product: Product) => void;
}

const ProductCard = ({ product, imageIndex = 0, compact = false, onSelect }: ProductCardProps) => {
  const displayImage = product.images?.length ? product.images[imageIndex] ?? product.images[0] : null;
  return (
    <article
      className="product-card"
      onClick={() => onSelect(product)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(product);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles de ${product.name}`}
    >
      <div className="product-image-container">
        {displayImage ? (
          <img src={displayImage} alt={product.name} className="product-image" />
        ) : (
          <div className="product-image-placeholder">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}
        <div className="product-badges">
          {product.handmade && <span className="badge badge-handmade">Hecho a mano</span>}
          {product.customizable && <span className="badge badge-customizable">Personalizable</span>}
        </div>
      </div>
      <div className="product-info">
        {!compact && (
          <>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
          </>
        )}
        <button
          type="button"
          className="product-button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
        >
          Ver detalles y cotizar
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
