import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import {
	HomePage,
	AboutPage,
	ProductsPage,
	ContactPage,
	TermsOfServicePage,
	PrivacyPolicyPage,
	NotFoundPage,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/o-nas", element: <AboutPage /> },
			{ path: "/produkty", element: <ProductsPage /> },
			{ path: "/kontakt", element: <ContactPage /> },
			{ path: "/warunki-użytkowania", element: <TermsOfServicePage /> },
			{ path: "/polityka-prywatności", element: <PrivacyPolicyPage /> },
			{ path: "/*", element: <NotFoundPage /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
