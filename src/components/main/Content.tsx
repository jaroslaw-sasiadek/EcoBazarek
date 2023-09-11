import { HTMLAttributes } from "react";
import { ScrollRestoration } from "react-router-dom";
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
		<main className="flex-col py-[64px]" {...other}>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<ToastContainer />
			{isLoading && <Loader />}
			{children}
			<ScrollRestoration />
		</main>
	);
};
