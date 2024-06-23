
import Header from "./Componets/Header";
import './App.css'
import Slider from "./Componets/Slider";
import ProductionHouse from "./Componets/ProductionHouse";
import GenreMovieList from "./Componets/GenreMovieList";


function App() {
  

  return (
    <>
        <div>
          <Header />

          <Slider />

          <ProductionHouse />

          <GenreMovieList />
        </div>
    </>
  )
}

export default App
