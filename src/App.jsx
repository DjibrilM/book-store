
import './App.css';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import React from 'react';
import Books from './screens/Books';
import Category from './components/Category';



function App() {
  return (
    <main className='w-full max-w-[1350px] border bg-[#fafafa] m-auto mt-20  min-h-screen'>
      <Header />
      <Routes>
        <Route element={<Books />} path='/' />
        <Route path='categories' element={<Category />} />
      </Routes>
    </main>
  );
}

export default App;
