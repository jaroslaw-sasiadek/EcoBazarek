import {
	MagnifyingGlassIcon,
	SparklesIcon,
	UserIcon,
} from "@heroicons/react/24/outline";

import { Assets } from "../../assets/_Assets";
import { NavItem } from "../NavItem";
import { ScrollUpButton } from "../ScrollUpButton";

export const Header = () => {
	return (
		<header className="grid grid-cols-4 fixed z-50 w-[100%] h-[64px] px-[40px] bg-[--c3] text-[--c5] shadow-md">
			<section className="flex items-center gap-[10px]">
				<img
					className="w-[42px] h-[42px]"
					src={Assets.Icons.logo}
					alt="ikona logo"
				/>
				<p className="text-[20px] font-[400]">EcoBazarek</p>
			</section>
			<nav className="grid grid-cols-3 col-span-3 w-[100%]">
				<ul className="col-span-2 flex items-center justify-center gap-[50px] left-0 w-[100%]">
					<NavItem to="/">Home</NavItem>
					<NavItem to="/o-nas">O nas</NavItem>
					<NavItem to="/produkty">Produkty</NavItem>
					<NavItem to="/kontakt">Kontakt</NavItem>
				</ul>
				<ul className="col-span-1 w-[100%] flex justify-end gap-[50px] items-center">
					<li>
						<MagnifyingGlassIcon className="w-[24px]" />
					</li>
					<li>
						<SparklesIcon className="w-[24px]" />
					</li>
					<NavItem
						className="z-[1] hover:text-[--c1] transition"
						linkTitle="login/ profil"
						to="/profil"
					>
						<UserIcon className="w-[24px]" />
					</NavItem>
				</ul>
			</nav>
			<ScrollUpButton />
		</header>
	);
};
