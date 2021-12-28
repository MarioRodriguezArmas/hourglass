import HeaderRender from "./components/header/HeaderRender";
import CarouselRender from "./components/carousel/CarouselRender";
import CarouselSmallRender from "./components/carousel/CarouselSmallRender";
import "../src/style/App.css";
import FooterRender from "./components/footer/FooterRender";

function App() {
  return (
    <div className="App">
      <HeaderRender />
      <CarouselRender />
      <CarouselSmallRender/>
      <FooterRender />
    </div>
  );
}

export default App;
