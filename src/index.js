import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import home from './components/home';

const el =document.getElementById('root');

const root = ReactDOM.createRoot(document.getElementById('root'));
const App =() => {
  return( 
    <div>
      <home/>
    </div>
  );
}
root.render(<App />);



