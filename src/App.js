import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';

function App() {
  return (
    <div className="App">
 <Navigation logoTitle='React Portofolio'/>
 <Header title='Stylish Portofolio' button='Find out more'/>
 <Services/>
    </div>
  );
}
 
export default App;
