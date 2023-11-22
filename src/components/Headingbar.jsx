import { IoCall } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";

const Headingbar = () => {
	return (
		<nav className="mx-6 my-4 flex flex-row justify-between h-10">
			<div className="flex flex-row items-center">
				<button className="bg-[#F0F1F3] rounded-lg text-slate-400 font-bold w-10 h-10">
					&lt;
				</button>
				<h1 className="ml-2 text-[2rem] font-bold">Basic Mathematics 101</h1>
			</div>
			<div className="flex flex-row font-bold">
				<span className="p-2 flex items-center gap-2">
					<IoCall size={20} />
					Call Teacher
				</span>
				<span className="p-2 flex items-center gap-2">
					<MdOutlineContactSupport size={20} />
					Support
				</span>
			</div>
		</nav>
	);
};

export default Headingbar;
