import React from "react";
import vid1 from '../Assets/images/vid1.mp4'

import image9 from '../Assets/images/image9.webp'
import './Seven.css'
    class Video extends React.Component {
      componentDidMount = () => {
        this.playVideo();
      };

      componentWillUnmount = () => {
          this.pauseVideo();
      };


      playVideo = () => {
        // You can use the play method as normal on your video ref
        this.refs.vidRef.play();
      };

      pauseVideo = () => {
        // Pause as well
        this.refs.vidRef.pause();
      };

      render = () => {
        return (
       

<div class="container">
  <div class="row">

    
    <div className="col-sm-6 ">
      <div className='container mt-3'>
    <button className='plybutton ' onClick={this.playVideo}>
                
                </button>
    <video
              ref="vidRef"
              src={vid1}
              type="video/mp4"
              width={500}
              height={500}
              
            />
</div>

    </div>
    <div class="geeks col-sm ">
    <img src={image9}  width='500' height='600'></img>
    </div>

    </div>
</div>

        );
      };
    }

 export default Video;