
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.tsx"
import MenuManagement from './components/create.tsx'; 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-menu" element={<MenuManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
