// import './App.css'
import './css/App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import Favorite from './pages/favorite';
import Navbar from './Component/Navbar';

function App() {      //in here App is the component
  return (
    <div>
      <Navbar />
        <main className='Main-Content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
   </main>
   </div>
  );
}


export default App
