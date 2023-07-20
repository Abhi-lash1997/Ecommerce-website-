import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Provider } from 'react-redux';
import store from './Components/store';


function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
    </Provider>
  );
}

export default App;
