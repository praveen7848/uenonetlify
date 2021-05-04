import React, { Component } from 'react';
import image5 from '../Assets/images/image5.webp'
import './Second.css'


class Second extends Component {
    render() {
        return (
            <div className="second">
                <div className="container">
                    <div class="row">
                        <div className="text col-sm-5 ">
                            <div className="smalltext">
                                Featured Project
                                       </div>
                            <div className="bigtext">
                                <div className="bigtext">
                                    ESPN Body Issue
                                </div>
                                <div className="bigtext">impressive body of </div>
                                <div className="bigtext"> Work</div>
                            </div>
                        </div>
                        <div class=" image col-sm-6">
                            <img className='image' src={image5} ></img>
                                     </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Second;