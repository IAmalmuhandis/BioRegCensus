import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import DataCollector from './Pages/DataCollector/DataCollector';
function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/dashboard" element={ <DataCollector user={{name: "boy"}}/> } />
      </Routes>
    </>
  );
}

export default App;
