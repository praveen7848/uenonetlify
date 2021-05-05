import React from 'react'
import Navbar from './components/Navbar'
import'./App.css'
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from './components/Sidebar'

import Second from './components/Second'
import Middletext from './components/Middletext'
import Third from './components/Third'
import Four from'./components/Four'
import Five from './components/Five'
import Six from './components/Six'
import Seven from'./components/Seven'
import BottomImage from'./components/BottomImage'
import FinalText from './components/FinalText'
import Footer from './components/Footer'




function App() {
  return (
    <div className="App"> 

<BrowserRouter>  
        <Sidebar />
      
    </BrowserRouter>

    <Navbar/>
    <Second/>
    
    <Third/>
    <Middletext/>
    <Four/>
    
    <Six/>
    <Seven/>
    <Five/>
    <Middletext/>
    <BottomImage/>
    <FinalText/>
    <Footer/>
   
    </div>
  );
}

export default App;
