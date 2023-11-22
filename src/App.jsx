import React from "react";
import Sidebar from "./components/Sidebar";
import Headingbar from "./components/Headingbar";
import TabLayout from "./components/TabLayout";
import LeftSection from "./components/LeftSection";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex flex-col flex-1">
				<Headingbar />
				<TabLayout />
				<div className="flex flex-row flex-1">
					<LeftSection />
					<VideoPlayer />
				</div>
			</div>
		</div>
	);
};

export default App;
