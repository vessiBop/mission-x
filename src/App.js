import Homepage from './Homepage-Components/Homepage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './Login Components/Login';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
