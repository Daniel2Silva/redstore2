import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Produto from './Components/Produtos/Produto';
import { UserStorage } from './UserContext';
import Login from './Components/login/Login';
import User from './Components/User/User';
import Produtos from './Components/Produtos/Produtos';
import Cart from './Components/Cart/Cart';
import ProtectRoute from './Components/Helps/ProtectRoute';

function App() {
  return (
    <HashRouter className="App">
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="produto/:id" element={<Produto />}></Route>
          <Route path="login/*" element={<Login />}></Route>
          <Route
            path="conta/*"
            element={
              <ProtectRoute>
                <User />
              </ProtectRoute>
            }
          ></Route>
        </Routes>
        <Cart />
      </UserStorage>
    </HashRouter>
  );
}

export default App;
