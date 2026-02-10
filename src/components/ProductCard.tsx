import '../styles/ProductCard.css';

interface ProductCardProps {
  name: string;
  description: string;
  image?: string;
  handmade?: boolean;
  customizable?: boolean;
}

const ProductCard = ({ 
  name, 
  description, 
  image, 
  handmade = true, 
  customizable = false 
}: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {image ? (
          <img src={image} alt={name} className="product-image" />
        ) : (
          <div className="product-image-placeholder">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
        )}
        <div className="product-badges">
          {handmade && (
            <span className="badge badge-handmade">Hecho a mano</span>
          )}
          {customizable && (
            <span className="badge badge-customizable">Personalizable</span>
          )}
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <button className="product-button" onClick={() => {
          const contacto = document.getElementById('contacto');
          if (contacto) {
            contacto.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          Consultar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
