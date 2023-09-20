import { Link, To } from "react-router-dom";

export interface LinkItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
	to: To;
}

export const LinkItem = (props: LinkItemProps) => {
	const { children, to, ...other } = props;
	return (
		<li className="hover:text-[--c6] transition" {...other}>
			<Link to={to}>{children}</Link>
		</li>
	);
};
