import {
	MagnifyingGlassIcon,
	SparklesIcon,
	UserIcon,
} from "@heroicons/react/24/outline";

import { NavItem } from "./NavItem";
import ScrollUpButton from "./ScrollUpButton";

/*globalne wyszukiwanie produktu*/
/*dodawanie do ulubionych*/
/*edycja profilu*/

export const Header = () => {
	return (
		<header className="flex justify-between items-center sticky z-1 top-0 w-full h-[64px] px-[40px] bg-[--c3] text-[--c5]">
			<section className="flex items-center gap-[10px]">
				<img src="logo-main.png" alt="ikona logo" />
				<p className="text-[20px] font-normal">EcoBazarek</p>
			</section>
			<nav>
				<ul className="flex gap-[50px] text-[14px]">
					<NavItem to="/">Home</NavItem>
					<NavItem to="/o-nas">O nas</NavItem>
					<NavItem to="/produkty">Produkty</NavItem>
					<NavItem to="/kontakt">Kontakt</NavItem>
				</ul>
			</nav>
			<section className="flex gap-[50px]">
				<MagnifyingGlassIcon className="w-[24px]" />
				<SparklesIcon className="w-[24px]" />
				<UserIcon className="w-[24px]" />
			</section>
			<ScrollUpButton />
		</header>
	);
};
