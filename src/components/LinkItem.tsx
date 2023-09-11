import { LiHTMLAttributes } from "react";
import { Link, To } from "react-router-dom";

export interface LinkItemProps extends LiHTMLAttributes<HTMLLIElement> {
	to: To;
}

export const LinkItem = (props: LinkItemProps) => {
	const { children, to, ...other } = props;
	return (
		<li {...other}>
			<Link to={to}>{children}</Link>
		</li>
	);
};
