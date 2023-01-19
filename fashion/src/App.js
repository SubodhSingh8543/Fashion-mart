// import logo from './logo.svg';
import './App.css';
import BelowNavbar from './Components/BelowNavbar';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Divider } from "@chakra-ui/react";
import FooterBelow from './Components/FooterBelow';
import AllRoutes from './Components/AllRoutes';
import BackToTop from './Elements/BacktoTop';
import SwiperImage from './Elements/Swiper';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Divider/>
      <BelowNavbar/>
      <AllRoutes/>
      <SwiperImage/>
      <Footer/>
      <FooterBelow/>
      <BackToTop/>
    </div>
  );
}

export default App;
