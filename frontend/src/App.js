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
        <Route path="/dashboard" element={ <DataCollector user={{toRender: "dashboard",name: "boy",email:"fjk"}}/> } />
        <Route path="/user-profile" element={ <DataCollector  user={{toRender: "profile", name: "boy",email:"fjk"}}/> } />
        <Route path="/data-collection" element={ <DataCollector user={{toRender: "data-Collection",name: "boy",email:"fjk"}}/> } />
        <Route path="/data-visualisation" element={ <DataCollector user={{toRender: "data-visualisation",name: "boy",email:"fjk"}}/> } />
      </Routes>
    </>
  );
}

export default App;
