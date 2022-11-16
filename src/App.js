import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './home/home';
import Place from './place/place';
import Nft from './nft/nft'
import Community from './community/community'

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Home />} />       
        <Route path="/place-to-stay" element={<Place />} />       
        <Route path="/nft" element={<Nft />} />       
        <Route path="/community" element={<Community />} />       
      </Routes>
      </Router>
  );
}

export default App;
