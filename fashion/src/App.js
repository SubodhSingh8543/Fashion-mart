// import logo from './logo.svg';
import './App.css';
import BelowNavbar from './Components/BelowNavbar';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Divider } from "@chakra-ui/react";
import FooterBelow from './Components/FooterBelow';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Divider/>
      <BelowNavbar/>
      
      <Footer/>
      <FooterBelow/>
    </div>
  );
}

export default App;
