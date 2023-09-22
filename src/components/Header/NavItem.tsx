import { NavLink, To } from "react-router-dom";

export interface NavItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
	linkTitle?: string;
	to: To;
}

export const NavItem = (props: NavItemProps) => {
	const { children, linkTitle, to, ...other } = props;
	return (
		<li className="hover:text-c1 transition select-none" {...other}>
			<NavLink
				title={linkTitle}
				className={({ isActive }) => (isActive ? "text-c6" : "")}
				to={to}
			>
				{children}
			</NavLink>
		</li>
	);
};
