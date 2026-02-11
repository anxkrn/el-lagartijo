import { useEffect } from 'react';
import type { Product } from '../data/products';
import { getWhatsAppUrl } from '../data/constants';
import '../styles/ProductModal.css';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  useEffect(() => {
    if (!product) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  const images = product.images ?? [];

  const whatsappMsg = encodeURIComponent(
    `Hola, me interesa cotizar: ${product.name}. ¿Podrían darme más información?`
  );

  return (
    <div
      className="product-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        className="product-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="product-modal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <span aria-hidden>×</span>
        </button>

        <div className="product-modal-body">
          <h2 id="product-modal-title" className="product-modal-title">
            {product.name}
          </h2>
          <p className="product-modal-description">{product.description}</p>
          <div className="product-modal-badges">
            {product.handmade && <span className="product-modal-badge">Hecho a mano</span>}
            {product.customizable && <span className="product-modal-badge">Personalizable</span>}
          </div>
          {product.price && (
            <p className="product-modal-price">{product.price}</p>
          )}
        </div>

        <div className="product-modal-gallery">
          {images.length > 0 ? (
            <div className="product-modal-images-grid">
              {images.map((img, idx) => (
                <div key={idx} className="product-modal-image-cell">
                  <img
                    src={img}
                    alt={`${product.name} - variante ${idx + 1}`}
                    className="product-modal-image"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="product-modal-placeholder">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
              <span>Imagen referencial</span>
            </div>
          )}
        </div>

        <div className="product-modal-footer">
          <a
            href={getWhatsAppUrl(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="product-modal-cta"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
