import React from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './components/CartHeader.js'
import CartFooter from './components/CartFooter.js'
import CartItems from './components/CartItems.js'

function App() {
  return (
    <div>
        <CartHeader/>
        <CartItems/>
        <CartFooter/>
    </div>
  );
}

export default App;
