import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";
import { HomePage } from "./HomePage";
import { NotFoundPage } from "./NotFoundPage";
import { PrivacyPolicyPage } from "./PrivacyPolicyPage";
import { ProductsPage } from "./ProductsPage";
import { ProfilePage } from "./ProfilePage";
import { RegistrationPage } from "./RegistrationPage";
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
	{ path: "/profil", element: <ProfilePage /> },
	{ path: "/rejestracja", element: <RegistrationPage /> },
	{ path: "/warunki-użytkowania", element: <TermsOfServicePage /> },
];
