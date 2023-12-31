import {useEffect} from "react";
import Aos from "aos";

import './App.css';
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";
import {Hero} from "./component/UI/Hero";
import {Services} from "./component/UI/Services";
import {Portfolio} from "./component/UI/Portfolio";

function App() {
  useEffect(()=>{
    Aos.init();
  },[])

  return (
      <>
        <Header/>
          <main>
              <Hero/>
              <Services/>
              <Portfolio/>
          </main>
        <Footer/>
      </>

    
  );
}

export default App;
