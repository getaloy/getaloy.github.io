
import './App.css';
import GlimpseOne from './glimpse_one';
import GlimpseTwo from './glimpse_two';

import ScreenHero from './screen_hero.js';
import './styles.css';
import Wroking from './working';
import BrandLove from './brand_love';
import Footer from './footer';


// import { useRef } from "react";
// import useScrollSnap from "react-use-scroll-snap";

function App() {
  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 50, delay: 20});
  return (
    <div className="App" >
      <ScreenHero/>
      <GlimpseOne/>
      <Wroking/>
      <GlimpseTwo/>
      <BrandLove/>
      <Footer/>
    </div>
  );
}

export default App;
