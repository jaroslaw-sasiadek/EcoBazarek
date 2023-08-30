import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header, Footer } from "./components";

function App() {
	return (
		<>
			<HelmetProvider>
				<Header />
				<Outlet />
				<Footer />
			</HelmetProvider>
			<ToastContainer />
		</>
	);
}

export default App;
