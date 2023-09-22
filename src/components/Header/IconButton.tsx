interface IconButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
	isUsed: boolean;
}

export const IconButton = (props: IconButtonProps) => {
	const { children, isUsed, ...other } = props;

	return (
		<button
			className={"flex hover:text-c1 " + `${isUsed ? "text-c6" : ""}`}
			{...other}
		>
			{children}
		</button>
	);
};
