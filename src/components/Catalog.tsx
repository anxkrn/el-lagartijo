import ProductCard from './ProductCard';
import '../styles/Catalog.css';

const products = [
  {
    id: 1,
    name: 'Bozales',
    description: 'Bozales artesanales de alta calidad, elaborados con materiales resistentes y duraderos.',
    handmade: true,
    customizable: true
  },
  {
    id: 2,
    name: 'Falsas Riendas',
    description: 'Falsas riendas personalizadas en diferentes colores y diseños para tu caballo.',
    handmade: true,
    customizable: true
  },
  {
    id: 3,
    name: 'Gamarras',
    description: 'Gamarras artesanales con acabados únicos y materiales de primera calidad.',
    handmade: true,
    customizable: true
  },
  {
    id: 4,
    name: 'Riendas',
    description: 'Riendas hechas a mano con atención al detalle y resistencia garantizada.',
    handmade: true,
    customizable: true
  },
  {
    id: 5,
    name: 'Llaveros',
    description: 'Llaveros personalizados con diseños únicos y materiales duraderos.',
    handmade: true,
    customizable: true
  },
  {
    id: 6,
    name: 'Sogas de Plástico',
    description: 'Sogas de plástico de alta resistencia, disponibles en diferentes colores.',
    handmade: true,
    customizable: true
  },
  {
    id: 7,
    name: 'Otros Productos Personalizados',
    description: 'Creamos productos ecuestres personalizados según tus necesidades específicas.',
    handmade: true,
    customizable: true
  }
];

const Catalog = () => {
  return (
    <section id="catalogo" className="catalog section">
      <div className="container">
        <h2 className="catalog-title">Nuestros Productos</h2>
        <p className="catalog-subtitle">
          Artículos ecuestres hechos a mano con dedicación y pasión
        </p>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              handmade={product.handmade}
              customizable={product.customizable}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
