import './App.css';
import Ayate from './Componant/Ayate';
import Header from './Componant/Header';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   
     <Routes>
            <Route path="/Ayate/:nb" element={<Ayate/>}></Route>
            <Route path="/" element={<Header />}></Route>

        </Routes>
    </div>
  );
}

export default App;
