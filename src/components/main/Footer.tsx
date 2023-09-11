import { SubscribeForm } from "../SubscribeForm";
import { LinkItem } from "../LinkItem";
import { Assets } from "../../assets/_Assets";

export const Footer = () => (
	<footer className="flex flex-col items-center w-full mt-auto bg-[--c1] text-[--c5]">
		<label className="flex flex-col items-center cursor-pointer text-[24px] font-[400]">
			<img
				className="w-[64px] mt-[88px] mb-[30px]"
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
			<a href="https://www.facebook.com/" aria-label="odwiedź nas na facebooku">
				<img src={Assets.Icons.facebook} alt="ikona facebooka" />
			</a>
			<a
				href="https://www.instagram.com/"
				aria-label="odwiedź naszego instagrama"
			>
				<img src={Assets.Icons.instagram} alt="ikona instagrama" />
			</a>
			<a
				href="https://www.linkedin.com/"
				aria-label="odwiedź nasz profil linkedin"
			>
				<img src={Assets.Icons.linkedin} alt="ikona linkedina" />
			</a>
			<a href="https://twitter.com/" aria-label="pogadaj z nami na twitterze">
				<img src={Assets.Icons.twitter} alt="ikona twittera" />
			</a>
			<a href="https://www.youtube.com/" aria-label="zobacz nas na youtube'ie">
				<img src={Assets.Icons.youtube} alt="ikona youtube'a" />
			</a>
		</section>
		<nav className="max-w-[1600px] w-full">
			<ul className="flex justify-center items-center gap-[40px] h-[60px] border-y-[1px] border-[--c8] text-[12px]">
				<LinkItem to="/o-nas">O nas</LinkItem>
				<LinkItem to="/produkty">Produkty</LinkItem>
				<LinkItem to="/kontakt">Kontakt</LinkItem>
				<LinkItem to="/warunki-użytkowania">Warunki użytkowania</LinkItem>
				<LinkItem to="/polityka-prywatności">Polityka prywatności</LinkItem>
			</ul>
		</nav>
		<p className="flex items-center h-[48px] text-[12px]">
			© 2023, EcoBazarek Store Powered By Domino, App icons by&nbsp;
			<a className="underline" href="https://icons8.com/">
				icons8
			</a>
		</p>
	</footer>
);
