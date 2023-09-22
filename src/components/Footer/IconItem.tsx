import { ButtonStyles } from "../../styles";

interface IconItemProps {
	href: string;
	ariaLabel: string;
	src: string;
	alt: string;
}

export const IconItem = (props: IconItemProps) => {
	const { href, ariaLabel, src, alt } = props;
	return (
		<a className={ButtonStyles.icons} href={href} aria-label={ariaLabel}>
			<img src={src} alt={alt} />
		</a>
	);
};
