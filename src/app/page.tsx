import Header from './components/Header'
import Footer from './components/Footer'
import Servece from './components/Servece'
import About from './components/About'; 
export default function Home() {
  return (
    <div class="overflow-x-hidden">
    <Header />
    <About />
    <Servece />
    <Footer />
    </div>
  );
}
