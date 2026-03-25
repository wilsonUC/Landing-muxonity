import { Benefits } from './components/Benefits';
import { ContactSection } from './components/ContactSection';
import { DemoSection } from './components/DemoSection';
import { FloorDetailSection } from './components/FloorDetailSection';
import { FloorWalkthroughSection } from './components/FloorWalkthroughSection';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Benefits />
        <Features />
        <DemoSection />
        <FloorWalkthroughSection />
        <FloorDetailSection />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
