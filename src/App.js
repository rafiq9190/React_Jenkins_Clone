import React from 'react';
import Header from './Components/Navbar/Header';
import HeroImage from './Components/HeroImage/HeroImage';
import Carusal from './Components/Carusal/Carusal';
import AllConnection from './Components/AllConnection/AllConnection';
import MainBlog from './Components/Blog/MainBlog';
import MainDate from './Components/MainDate/MainDate';
import CompaneyLogos from './Components/ComponeyLogos/CompaneyLogos';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from './Components/Video/Video';



function App() {
  return (
    <div>
      <Header />
      <HeroImage />
      <Carusal />
      <AllConnection />
      <Video />
      <MainDate />
      <MainBlog />
      <CompaneyLogos />
      <Footer />
    </div>
  );
}

export default App;
