import Portfolio from './Componentes/Portfolio';
import { Route, Routes } from 'react-router-dom';

import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';



function App() {
  return (
    <div className="App">
      <Routes>

        <Route 

          path="/"
          element={[<NavBar key={"nav"}></NavBar>, <Portfolio key={"portfolio"} />, <Footer></Footer>]}>

        </Route>

</Routes>
     
    </div>
  );
}

export default App;
