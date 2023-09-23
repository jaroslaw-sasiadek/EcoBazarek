import { useCheckErrors } from "./useCheckErrors";

export const UlErrors = ({ password }: { password: string }) => {
	const { text, icon } = useCheckErrors(password);

	return (
		<ul className="text-[12px] font-[500]">
			<li className="flex py-[2px]">
				Hasło musi spełniać następujące wymagania:
			</li>
			<li className={text.character}>
				<span className="text-[16px]">{icon.character}</span>
				<span>Przynajmniej jedna duża litera</span>
			</li>
			<li className={text.long}>
				<span className="text-[16px]">{icon.long}</span>
				<span>Przynajmniej osiem znaków</span>
			</li>
			<li className={text.number}>
				<span className="text-[16px]">{icon.number}</span>
				<span>Przynajmniej jedna cyfra</span>
			</li>
			<li className={text.symbol}>
				<span className="text-[16px]">{icon.symbol}</span>
				<span>Znak specjalny</span>
			</li>
		</ul>
	);
};
