import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Personalization from './components/Personalization';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Catalog />
      <Personalization />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
