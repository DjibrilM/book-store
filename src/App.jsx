
import './App.css';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import React from 'react';
import Books from './screens/Books';
import Form from './components/Form';

function App() {
  return (
    <main className='w-full h-screen bg-slate-200'>
      <Header />
      <Routes>
        <Route element={<Books />} path='/' />
      </Routes>
    </main>
  );
}

export default App;
