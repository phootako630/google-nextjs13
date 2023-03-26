import React from 'react';

const CustomVideoPlayer = ({ src, thumbnail, title }) => {
    return (
        <div className="video-player-wrapper">
            <video
                className="video-player"
                src={src}
                poster={thumbnail}
                controls
                width="100%"
                height="auto"
            >
                {title && <track kind="captions" />}
            </video>
        </div>
    );
};

export default CustomVideoPlayer;