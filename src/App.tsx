import Header from './components/Header';
import Catalog from './components/Catalog';
import Personalization from './components/Personalization';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import SectionReveal from './components/SectionReveal';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <SectionReveal>
        <Personalization />
      </SectionReveal>
      <SectionReveal>
        <Contact />
      </SectionReveal>
      <SectionReveal>
        <Footer />
      </SectionReveal>
      <WhatsAppFloating />
    </div>
  );
}

export default App;
