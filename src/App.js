import './App.css';
import CalculaterNav from './Components/CalculaterBox/CalculaterNav';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import RoutesBox from './Components/Routes/Routes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <CalculaterNav/>
      <RoutesBox />
    </div>
  );
}

export default App;
