import './App.css'
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<Main/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
