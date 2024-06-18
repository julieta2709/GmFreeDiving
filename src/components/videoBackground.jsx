import React from "react";
import "../Styles/video.css";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src="./src/assets/Video/bubbles.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
