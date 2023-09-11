import { HTMLAttributes } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Loader } from "../Loader";

export interface ContentProps extends HTMLAttributes<HTMLElement> {
	title: string;
	isLoading?: boolean;
}

export const Content = (props: ContentProps) => {
	const { children, title, isLoading = false, ...other } = props;
	return (
		<main {...other}>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<ToastContainer />
			{isLoading && <Loader />}
			{children}
		</main>
	);
};
