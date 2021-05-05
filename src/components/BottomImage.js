import React, { Component } from 'react';
import image2 from '../Assets/images/image2.webp'
import './BottomImage.css'

class BottomImage extends Component {
    render() {
        return (
            <div className="container-fluid Image ">
                <img src={image2}></img>
            </div>
        );
    }
}

export default BottomImage;