import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
	return (
		<div className={`flex items-center justify-center py-3 h-fit`}>
			<ReactPlayer
				url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
				controls={true}
				width={1150}
				height={550}
				style={{
					borderRadius: "10px",
					overflow: "hidden",
					transform: "scale(0.95)",
				}}
			/>
		</div>
	);
};

export default VideoPlayer;
