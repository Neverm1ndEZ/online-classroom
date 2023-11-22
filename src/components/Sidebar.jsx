import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegBell, FaEye } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { MdPeopleAlt } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import Logo from "../assets/Logo.png";

const Sidebar = () => {
	return (
		<div className="bg-[#F0F1F3] w-20 h-screen flex flex-col items-center justify-around">
			<div className="flex flex-col items-center justify-around">
				<span>
					<img src={Logo} alt="logo" className="" />
				</span>
				<span className="p-5">
					<RxHamburgerMenu size={25} />
				</span>
				<span className="p-5">
					<FaRegBell size={25} />
				</span>
				<span className="p-5">
					<IoIosTimer size={25} />
				</span>
				<span className="p-5">
					<FcTodoList size={25} />
				</span>
				<span className="p-5">
					<FaEye size={25} />
				</span>
				<span className="p-5">
					<MdPeopleAlt size={25} />
				</span>
				<span className="p-5">
					<FaChartSimple size={25} />
				</span>
			</div>
			<div className="flex flex-col">
				<img
					src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_1280.png"
					alt="profile image"
				/>
			</div>
		</div>
	);
};

export default Sidebar;
