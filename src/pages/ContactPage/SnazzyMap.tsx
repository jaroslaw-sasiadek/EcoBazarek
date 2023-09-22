interface SnazzyMapProps
	extends React.IframeHTMLAttributes<HTMLIFrameElement> {}

export const SnazzyMap = (props: SnazzyMapProps) => {
	const { ...other } = props;
	return (
		<section>
			<iframe
				{...other}
				className="flex justify-end mx-auto absolute max-w-[1920px] w-full h-[600px] bg-cover bg-center left-0 right-0"
				src="https://snazzymaps.com/embed/526345"
			></iframe>
			<div className="pt-[20px] pl-[34px] mt-[100px] mr-[200px] right-0 absolute w-[500px] h-[200px] bg-c2">
				<span className="text-[20px] text-c1 font-[900]">Przyjedź do nas</span>
				<p className="mt-[8px]">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
					maxime quibusdam dolore, excepturi reiciendis culpa consectetur
					aperiam quas tempore nulla alias pariatur voluptas facere expedita
					distinctio ab recusandae unde hic.
				</p>
			</div>
		</section>
	);
};
