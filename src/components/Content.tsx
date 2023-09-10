import { HTMLAttributes } from "react";
import { Helmet } from "react-helmet-async";

import { Loader } from "./Loader";

export interface ContentProps extends HTMLAttributes<HTMLElement> {
	title: string;
	isLoading?: boolean;
}

export const Content = (props: ContentProps) => {
	const { children, title, isLoading = true, ...other } = props;
	return (
		<main {...other}>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			{isLoading && (
				<div className="absolute w-full h-full z-10 backdrop-opacity-40 bg-[#f6f5f1]/75">
					<Loader />
				</div>
			)}
			{children}
		</main>
	);
};
