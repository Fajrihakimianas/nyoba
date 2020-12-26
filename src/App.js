// import Header from 'Component/Header';
import { BrowserRouter, Router } from 'react-router-dom';
import "Assets/scss/style.scss";
import Hero from 'Component/Hero';
// import Hero from 'Component/Hero';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Coba-coba</h1>
        <Hero/>
      </div>

    </BrowserRouter>
  );
}

export default App;
