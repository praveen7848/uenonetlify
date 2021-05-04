import React, { Component } from 'react';
import image7 from '../Assets/images/image7.webp'
import image4 from '../Assets/images/image4.webp'
import './Four.css'
class Four extends Component {
    render() {
        return (
           
                <div className=" container four">
  <div className="row">
    <div className=" geeks col-sm-6 ">
     
      <img src={image7} width='500' height='600'></img>
    </div>
    <div className="geeks col-sm-6">
      
      <img src={image4}  width='500' height='500'></img>
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

export default Four;