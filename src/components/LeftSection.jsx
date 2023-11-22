import { CiVideoOn } from "react-icons/ci";
import { FaMicrophone, FaShareFromSquare } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline, IoExitOutline } from "react-icons/io5";

const LeftSection = () => {
	return (
		<div className="flex flex-col w-[17%] m-6">
			<div className="grid gap-5">
				<div className="w-full">
					<div className="relative overflow-hidden rounded-3xl shadow-lg cursor-pointer">
						<img
							className="object-cover w-full h-48"
							src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&3.5=fo[]at&[]t=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D"
							alt="Flower and sky"
						/>

						<div className="absolute top-[10rem] bottom-0 left-0 px-6 bg-[#F0F1F3] rounded-r-xl">
							<p className="text-center py-1">Ridha</p>
						</div>
					</div>
				</div>
				<div className="w-full">
					<div className="relative overflow-hidden rounded-3xl shadow-lg cursor-pointer">
						<img
							className="object-cover w-full h-48"
							src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2070&3.5=fo[]at&[]t=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Flower and sky"
						/>

						<div className="absolute top-[10rem] bottom-0 left-0 px-6 bg-[#F0F1F3] rounded-r-xl">
							<p className="text-center py-1">Ms. Kaur</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-4">
				<button className="bg-[#F0F1F3] rounded-lg text-slate-400 font-bold m-2.5 w-[3.25rem] h-[3.25rem] pl-[1.25rem]">
					<CiVideoOn />
				</button>
				<button className="bg-[#F0F1F3] rounded-lg text-slate-400 font-bold m-2.5 w-[3.25rem] h-[3.25rem] pl-[1.25rem]">
					<FaMicrophone />
				</button>
				<button className="bg-[#F0F1F3] rounded-lg text-slate-400 font-bold m-2.5 w-[3.25rem] h-[3.25rem] pl-[21px]">
					<FaShareFromSquare />
				</button>
				<button className="bg-[#F0F1F3] rounded-lg text-slate-400 font-bold m-2.5 w-[3.25rem] h-[3.25rem] pl-[1.25rem]">
					<IoChatbubbleEllipsesOutline />
				</button>
				<button className="bg-[#F0F1F3] rounded-lg text-slate-400 font-bold m-2.5 w-[3.25rem] h-[3.25rem] pl-[1.25rem]">
					<IoExitOutline />
				</button>
			</div>
		</div>
	);
};

export default LeftSection;
