import Portfolio from './Componentes/Portfolio';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import NavBar from './Componentes/NavBar';



function App() {
  return (
    <div className="App">
      <Routes>

        <Route 

          path="/"
          element={[<NavBar key={"nav"}></NavBar>, <Portfolio key={"portfolio"} />]}>

        </Route>

</Routes>
     
    </div>
  );
}

export default App;
