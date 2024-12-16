import './App.css'
import "./index.css"
import Header from './components/Header';
import FirstMain from './components/FirstMain';
import Carousel from './components/Carousel';
import SecondMain from './components/SecondMain';
import ThridMain from './components/ThirdMain';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <FirstMain></FirstMain>
      <Carousel></Carousel>
      <SecondMain></SecondMain>
      <ThridMain></ThridMain>
      <Footer></Footer>
    </>
  );
}

export default App;
