import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import SectionReveal from './SectionReveal';
import { products, CATEGORIES } from '../data/products';
import type { Product } from '../data/products';
import type { CategoryFilter } from '../data/products';
import catalogoBg from '../assets/catalogo-bg.png';
import catalogoHeaderBg from '../assets/catalogo-header-bg.png';
import '../styles/Catalog.css';

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('todos');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'todos') return products;
    return products.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const displayItems = useMemo(() => {
    const items: { product: Product; imageIndex: number }[] = [];
    const expandByImage = activeFilter !== 'todos';
    filteredProducts.forEach((product) => {
      if (product.images.length === 0) {
        items.push({ product, imageIndex: 0 });
      } else if (expandByImage) {
        product.images.forEach((_, idx) => {
          items.push({ product, imageIndex: idx });
        });
      } else {
        items.push({ product, imageIndex: 0 });
      }
    });
    return items;
  }, [filteredProducts, activeFilter]);

  const groupedByProduct = useMemo(() => {
    const groups = new Map<number, { product: Product; items: { product: Product; imageIndex: number }[] }>();
    displayItems.forEach((item) => {
      const existing = groups.get(item.product.id);
      if (existing) {
        existing.items.push(item);
      } else {
        groups.set(item.product.id, { product: item.product, items: [item] });
      }
    });
    return Array.from(groups.values());
  }, [displayItems]);

  const expandByImage = activeFilter !== 'todos';

  return (
    <>
      <div id="inicio">
        <SectionReveal>
          <section
            id="catalogo"
            className="catalog section"
            style={{ backgroundImage: `url(${catalogoBg})` }}
          >
            <div className="catalog-overlay" />
            <div
              className="catalog-header"
              style={{ backgroundImage: `url(${catalogoHeaderBg})` }}
            >
              <div className="catalog-header-overlay" />
              <div className="container catalog-inner">
                <h2 className="catalog-title">Nuestros productos</h2>
                <p className="catalog-subtitle">
                  Artículos ecuestres hechos a mano con dedicación. Calidad, resistencia y estilo en
                  cada pieza.
                </p>
                <div className="catalog-filters">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`catalog-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
                </div>
              </div>
            </div>
            <div className="container catalog-inner catalog-products-wrap">
              {expandByImage ? (
                groupedByProduct.map(({ product, items }) => (
                  <div key={product.id} className="catalog-product-group">
                    <div className="catalog-section-header">
                      <h3 className="catalog-section-title">{product.name}</h3>
                      <p className="catalog-section-description">{product.description}</p>
                    </div>
                    <div className="products-grid">
                      {items.map(({ product: p, imageIndex }) => (
                        <ProductCard
                          key={`${p.id}-${imageIndex}`}
                          product={p}
                          imageIndex={imageIndex}
                          compact
                          onSelect={setSelectedProduct}
                        />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="products-grid">
                  {displayItems.map(({ product, imageIndex }) => (
                    <ProductCard
                      key={`${product.id}-${imageIndex}`}
                      product={product}
                      imageIndex={imageIndex}
                      onSelect={setSelectedProduct}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        </SectionReveal>
      </div>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default Catalog;
