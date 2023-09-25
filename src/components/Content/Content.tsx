import { ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../styles/Toastify.styles.css";

import { Loader } from "./Loader";
import { ContentProps } from "../../interfaces";

export const Content = (props: ContentProps) => {
	const { children, title, keywords, description, isLoading, ...other } = props;
	return (
		<main className="pt-[64px] pb-[200px] max-w-[1048px] w-full" {...other}>
			<Helmet>
				<title>{title}</title>
				<meta name="keywords" content={keywords} />
				<meta name="description" content={description} />
			</Helmet>
			<ScrollRestoration />
			<ToastContainer className="toastMessage" />
			{isLoading && <Loader />}
			{children}
		</main>
	);
};
