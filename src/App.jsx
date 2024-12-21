import './App.css';
import About from './Component/About/About';
import Direction from './Component/Direction/Direction';
import Footer from './Component/Footer/Footer';
import Form from './Component/Form/Form';
import Gallery from './Component/Gallery/Gallery';
import Header from './Component/Header/Header';
import Price from './Component/Price/Price';
import Teachers from './Component/Teachers/Teachers';
import Try from './Component/Try/Try';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Direction/>
      <Teachers/>
      <Price/>
      <Form/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
