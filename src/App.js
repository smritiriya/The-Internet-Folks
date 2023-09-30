import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './components/Banner';
import AboutUs from './components/About';
import CardContainer from './components/Cardcotainer';
import CardSlider from './components/Cardcotainer';
import CardCarousel from './components/Cardcotainer';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <CardCarousel />
      <Footer/>
    </div>
  );
}

export default App;
