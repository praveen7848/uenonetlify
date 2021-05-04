import React, { Component } from 'react';
import image4 from '../Assets/images/image4.webp'
import image9 from '../Assets/images/image9.webp'
import './Six.css'
class Six extends Component {
    render() {
        return (
           
                <div className=" container six">
  <div className="row">
    <div className=" geeks col-sm-6 ">
     
      <img src={image4} width='500' height='500'></img>
    </div>
    <div className="geeks col-sm-6">
      
      <img src={image9}  width='500' height='600'></img>
<div>
Reuters News App
Design
Product
</div>
    </div>
    
  </div>
</div>
            
        );
    }
}

export default Six;