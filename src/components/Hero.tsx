import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <p className="hero-badge">Artesanía ecuestre</p>
        <h1 className="hero-title">
          Calidad, resistencia y estilo en cada detalle
        </h1>
        <p className="hero-subtitle">
          Diseñamos y elaboramos piezas artesanales ecuestres. Bozales, riendas, sogas y accesorios personalizados.
        </p>
        <a
          href="#catalogo"
          className="hero-cta"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Ver catálogo
        </a>
      </div>
    </section>
  );
};

export default Hero;
