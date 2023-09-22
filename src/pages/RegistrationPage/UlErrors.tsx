export const UlErrors = ({ errors }: { errors: string[] }) => {
	return (
		<ul className="text-[12px] font-[500]">
			{errors.length ? (
				<li className="py-[2px]">Hasło musi spełniać następujące wymagania:</li>
			) : (
				<></>
			)}
			{errors.map((error) => (
				<li className="text-c7 font-[800] py-[2px]" key={error}>
					{error}
				</li>
			))}
		</ul>
	);
};
