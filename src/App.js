import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Routes>
          <Route index strict exact path="" element={<Home />} />
          <Route strict exact path="cart/" element={<Cart />} />
          <Route strict exact path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
