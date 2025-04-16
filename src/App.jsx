import { Box } from "@chakra-ui/react";
import "./App.css";
import CalculaterNav from "./Components/CalculaterBox/CalculaterNav";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import RoutesBox from "./Components/Routes/Routes";

function App() {
  return (
    <Box h={"100vh"} backgroundColor={"black"} className="App">
      <Navbar />
      <Home />
      <CalculaterNav />
        <RoutesBox />
    </Box>
  );
}

export default App;
