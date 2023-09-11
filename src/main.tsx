import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import { Pages } from "./pages/_Pages.tsx";
import { Header } from "./components/main/Header.tsx";
import { Footer } from "./components/main/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider
			router={createBrowserRouter([
				{
					path: "/",
					element: (
						<HelmetProvider>
							<Header />
							<Outlet />
							<Footer />
						</HelmetProvider>
					),
					children: Pages,
				},
			])}
		/>
	</React.StrictMode>
);
