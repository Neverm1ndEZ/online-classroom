import { useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { FaChalkboard } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { RiSlideshowFill } from "react-icons/ri";
import { IoDocumentSharp } from "react-icons/io5";
import { MdOutlineDocumentScanner } from "react-icons/md";

const TabLayout = () => {
	const [selectedTab, setSelectedTab] = useState(2);

	const handleTabClick = (tabIndex) => {
		setSelectedTab(tabIndex);
	};

	const Data = [
		{
			id: 0,
			name: "Classroom",
			icon: <SiGoogleclassroom />,
		},
		{
			id: 1,
			name: "Whiteboards",
			icon: <FaChalkboard />,
		},
		{
			id: 2,
			name: "Videos",
			icon: <GoVideo />,
		},
		{
			id: 3,
			name: "Slideshow",
			icon: <RiSlideshowFill />,
		},
		{
			id: 4,
			name: "Documents",
			icon: <IoDocumentSharp />,
		},
		{
			id: 5,
			name: "Doc.Cam",
			icon: <MdOutlineDocumentScanner />,
		},
	];

	return (
		<div className="w-[95%] flex justify-around mx-6 p-2 bg-[#F0F1F3] rounded-full">
			{Data.map((data) => (
				<div
					key={data.id}
					onClick={() => handleTabClick(data.id)}
					className={`cursor-pointer p-4 flex items-center gap-2 ${
						selectedTab === data.id
							? "bg-[#fff] rounded-full px-8 transition ease-in-out duration-300"
							: ""
					}`}
				>
					{data.icon}
					{data.name}
				</div>
			))}
		</div>
	);
};

export default TabLayout;
