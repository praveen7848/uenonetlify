import React from 'react'
import Navbar from './components/Navbar'
import'./App.css'
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from './components/Sidebar'

import Second from './components/Second'
import Third from './components/Third'
import Four from'./components/Four'
import Five from './components/Five'
import Six from './components/Six'
import Seven from'./components/Seven'




function App() {
  return (
    <div className="App"> 

<BrowserRouter>
      
        <Sidebar />
       
    
     
    </BrowserRouter>




     
     
     
  
     
    <Navbar/>
    <Second/>
    <Third/>
    <Four/>
    
    <Six/>
    <Seven/>
    <Five/>
  
   
    </div>
  );
}

export default App;
