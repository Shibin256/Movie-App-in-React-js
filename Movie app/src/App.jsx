// import './App.css'
import './css/App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import Favorite from './pages/Favorite';
import Navbar from './Component/Navbar';
import { movieProvider } from './Context/MovieContext';

function App() {      //in here App is the component
  return (
    <movieProvider>
      <Navbar />
        <main className='Main-Content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
   </main>
   </movieProvider>
  );
}


export default App
