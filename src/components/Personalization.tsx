import { getWhatsAppUrl } from '../data/constants';
import personalizaBg from '../assets/personaliza-bg.png';
import '../styles/Personalization.css';

const Personalization = () => {
  return (
    <section
      id="personaliza"
      className="personalization section"
      style={{ backgroundImage: `url(${personalizaBg})` }}
    >
      <div className="container">
        <div className="personalization-content">
          <h2 className="personalization-title">
            Personaliza tu pedido
          </h2>
          <p className="personalization-text">
            Diseñamos y elaboramos piezas artesanales ecuestres en colores y diseños a tu gusto. Cuéntanos qué necesitas, mandanos tu foto y te cotizamos sin compromiso.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="personalization-cta"
          >
            Pedir cotización
          </a>
        </div>
      </div>
    </section>
  );
};

export default Personalization;
