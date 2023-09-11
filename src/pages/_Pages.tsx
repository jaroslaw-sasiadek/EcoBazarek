import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";
import { HomePage } from "./HomePage";
import { NotFoundPage } from "./NotFoundPage";
import { PrivacyPolicyPage } from "./PrivacyPolicyPage";
import { ProductsPage } from "./ProductsPage";
import { TermsOfServicePage } from "./TermsOfServicePage";

export interface PagesProps {
	path: string;
	element: JSX.Element;
}

export const Pages: PagesProps[] = [
	{ path: "/o-nas", element: <AboutPage /> },
	{ path: "/kontakt", element: <ContactPage /> },
	{ path: "/", element: <HomePage /> },
	{ path: "/*", element: <NotFoundPage /> },
	{ path: "/polityka-prywatności", element: <PrivacyPolicyPage /> },
	{ path: "/produkty", element: <ProductsPage /> },
	{ path: "/warunki-użytkowania", element: <TermsOfServicePage /> },
];
