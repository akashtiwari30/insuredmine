import './App.css';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.scss";


function App() {
  return (
    <div className="App">
     <Router>
      
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/Campaigns/campaigns" element={<Campaigns />} /> */}
            {/* other routes */}
          </Routes>
        
    </Router>
    </div>
  );
}

export default App;
