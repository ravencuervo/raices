import './App.css';
import Navbar    from './components/Navbar/Navbar';
import Hero      from './components/Hero/Hero';
import Historia  from './components/Historia/Historia';
import Productos from './components/Productos/Productos';
import Atributos from './components/Atributos/Atributos';
import Esencia   from './components/Esencia/Esencia';
import Origen    from './components/Origen/Origen';
import CTA       from './components/CTA/CTA';
import Footer    from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Historia />
        <Productos />
        <Atributos />
        <Esencia />
        <Origen />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
