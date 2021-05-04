import React, { Component } from 'react';
import image1 from '../Assets/images/image1.webp'
import image4 from '../Assets/images/image4.webp'
import './Five.css'
class Five extends Component {
    render() {
        return (
           
                <div className=" container five">
  <div className="row">
    <div className=" geeks col-sm-6 ">
     
      <img src={image1} width='500' height='500'></img>
    </div>
    <div className="geeks col-sm-6">
      
      <img src={image4}  width='500' height='600'></img>
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

export default Five;