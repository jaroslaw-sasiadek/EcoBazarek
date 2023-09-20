import { ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Toastify.styles.css";

import { Loader } from "../Loader";

export interface ContentProps extends React.HTMLAttributes<HTMLElement> {
	title: string;
	keywords: string;
	description: string;
	isLoading: boolean;
}

export const Content = (props: ContentProps) => {
	const { children, title, keywords, description, isLoading, ...other } = props;
	return (
		<main className="max-w-[1040px] pt-[64px] pb-[200px] w-full" {...other}>
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
