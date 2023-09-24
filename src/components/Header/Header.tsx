import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";

import { Assets } from "../../assets";
import { NavItem } from "./NavItem";
import { ScrollUpButton } from "./ScrollUpButton";
import { Favourites } from "./Favourites";
import { Search } from "./Search";

export const Header = () => {
	const [isOpen, setIsOpen] = useState({ search: false, favourite: false });

	function handleToggle(type: "search" | "favourites") {
		setIsOpen((prev) => ({
			search: type === "search" ? !prev.search : false,
			favourite: type === "favourites" ? !prev.favourite : false,
		}));
	}

	return (
		<header className="grid grid-cols-4 fixed z-50 w-full h-[64px] px-[40px] bg-c3 text-c5 shadow-md">
			<section className="flex items-center gap-[10px]">
				<img
					className="w-[42px] h-[42px]"
					src={Assets.Icons.logo}
					alt="ikona logo"
				/>
				<p className="text-[20px] font-[400] select-none">EcoBazarek</p>
			</section>
			<nav className="grid grid-cols-3 col-span-3 w-full">
				<ul className="col-span-2 flex items-center justify-center gap-[50px] left-0 w-full">
					<NavItem to="/">Home</NavItem>
					<NavItem to="/o-nas">O nas</NavItem>
					<NavItem to="/produkty">Produkty</NavItem>
					<NavItem to="/kontakt">Kontakt</NavItem>
				</ul>
				<ul className="col-span-1 w-full flex justify-end gap-[50px] items-center">
					<Search
						onClick={() => handleToggle("search")}
						isUsed={isOpen.search}
					/>
					<Favourites
						onClick={() => handleToggle("favourites")}
						isUsed={isOpen.favourite}
					/>
					<NavItem
						className="hover:text-c1 z-[1]"
						linkTitle="profil"
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
