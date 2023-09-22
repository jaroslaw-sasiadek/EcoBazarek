import { SubscribeForm } from "./SubscribeForm";
import { LinkItem } from "../LinkItem";
import { Assets } from "../../assets";
import { IconItem } from "./IconItem";

export const Footer = () => (
	<footer className="mt-auto flex flex-col items-center z-40 w-full bg-c1 text-c5">
		<label className="flex flex-col items-center cursor-pointer text-[24px] font-[400]">
			<img
				className="mt-[88px] mb-[30px] w-[64px]"
				src={Assets.Icons.envelop}
				alt="ikona subskrypcji"
			/>
			<p className="text-[24px] font-[500] uppercase">Subskrybuj</p>
			<p className="my-[16px] font-[300] text-[16px]">
				Bądź pierwszym, który się dowie o naszych nowych produktach:
			</p>
			<SubscribeForm />
		</label>
		<section className="flex items-center gap-[40px] h-[62px]">
			<IconItem
				href="https://www.facebook.com/"
				ariaLabel="odwiedź nas na facebooku"
				src={Assets.Icons.facebook}
				alt="ikona facebooka"
			/>
			<IconItem
				href="https://www.instagram.com/"
				ariaLabel="odwiedź naszego instagrama"
				src={Assets.Icons.instagram}
				alt="ikona instagrama"
			/>
			<IconItem
				href="https://www.linkedin.com/"
				ariaLabel="odwiedź nasz profil linkedin"
				src={Assets.Icons.linkedin}
				alt="ikona linkedina"
			/>
			<IconItem
				href="https://twitter.com/"
				ariaLabel="pogadaj z nami na twitterze"
				src={Assets.Icons.twitter}
				alt="ikona twittera"
			/>
			<IconItem
				href="https://www.youtube.com/"
				ariaLabel="zobacz nas na youtube'ie"
				src={Assets.Icons.youtube}
				alt="ikona youtube'a"
			/>
		</section>
		<nav className="max-w-[1040px] w-full">
			<ul className="flex justify-center items-center gap-[40px] h-[60px] border-y-[1px] border-c8 text-[12px]">
				<LinkItem to="/o-nas">O nas</LinkItem>
				<LinkItem to="/produkty">Produkty</LinkItem>
				<LinkItem to="/kontakt">Kontakt</LinkItem>
				<LinkItem to="/warunki-użytkowania">Warunki użytkowania</LinkItem>
				<LinkItem to="/polityka-prywatności">Polityka prywatności</LinkItem>
			</ul>
		</nav>
		<p className="flex items-center h-[48px] text-[12px]">
			© 2023, EcoBazarek Store Powered By Domino, App icons by&nbsp;
			<a
				className="underline hover:text-c6 transition"
				href="https://icons8.com/"
			>
				icons8
			</a>
		</p>
	</footer>
);
