import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-green200Lighter">
      <ContactForm />
    </div>
  );
}

export default App;
