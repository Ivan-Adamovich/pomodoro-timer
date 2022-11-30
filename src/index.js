import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/* 
 const obj = {
  name: { first: "Ivan", middle: "", last: "Adams" },
  age: "N/A",
  hobbies: ["cars", "-", "girls"],
  height: "180"
};

const elementsToClean = ["-", "", "N/A"];

const result = {
  name: { first: "Ivan", last: "Adams" },
  hobbies: ["cars", "girls"],
  height: "180"
};

function clearObj (obj) {
  for (let key in obj) {
    
  }
}
*/