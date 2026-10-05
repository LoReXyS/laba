import { lazy, Suspense } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';
import './App.css';

const WeatherSection = lazy(
  () => import('./components/WeatherSection/WeatherSection'),
);
const Pets = lazy(() => import('./components/Pets/Pets'));
const NatureSection = lazy(
  () => import('./components/NatureSection/NatureSection'),
);

function Loader() {
  return <div className="loader">Loading...</div>;
}

function FogReveal({ children }) {
  return <div className="fogWrapper">{children}</div>;
}

function App() {
  return (
    <>
      <Header />
      <Hero />

      <ScrollReveal>
        <WeatherSection />
      </ScrollReveal>

      <ScrollReveal>
        <Pets />
      </ScrollReveal>

      <ScrollReveal>
        <NatureSection />
      </ScrollReveal>

      <Footer />
    </>
  );
}

export default App;
