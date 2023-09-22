import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { UserProvider } from "./context";
import { Header, Footer } from "./components";
import { Pages } from "./pages";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider
			router={createBrowserRouter([
				{
					path: "/",
					element: (
						<UserProvider>
							<HelmetProvider>
								<Header />
								<Outlet />
								<Footer />
							</HelmetProvider>
						</UserProvider>
					),
					children: Pages,
				},
			])}
		/>
	</React.StrictMode>
);
