import { Assets } from "../../assets/Assets";

const index = Math.floor(Math.random() * Assets.Loader.length);
const source = Assets.Loader[index];

export const Loader = () => (
	<section className="flex flex-col w-[100%] h-[100%] left-0 top-0 pt-[40vh] z-40 fixed items-center backdrop-opacity-40 bg-[#f6f5f1]/75">
		<img className="w-[150px] h-[150px] animate-bounce" src={source} alt="" />
		<span className="absolute top-[34vh] w-[200px] h-[200px] border-[16px] animate-ping border-c3 rounded-full" />
	</section>
);
