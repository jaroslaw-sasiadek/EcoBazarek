import { SubscribeForm } from "./SubscribeForm";
import { NavItem } from "./NavItem";

export const Footer = () => (
	<footer className="flex flex-col items-center w-full mt-auto bg-[--c1] text-[--c5]">
		<label className="flex flex-col items-center text-[24px] font-medium">
			<img
				className="w-[64px] mt-[88px] mb-[30px]"
				src="envelop.svg"
				alt="ikona subskrypcji"
			/>
			<p className="text-[24px] font-medium uppercase">Subskrybuj</p>
			<p className="my-[16px] text-[16px]">
				Bądź pierwszym, który się dowie o naszych nowych produktach:
			</p>
			<SubscribeForm />
		</label>
		<section className="flex items-center gap-[40px] h-[62px]">
			<a href="https://www.facebook.com/" aria-label="odwiedź nas na facebooku">
				<img className="h-[36px]" src="fb.svg" alt="ikona facebooka" />
			</a>
			<a
				href="https://www.instagram.com/"
				aria-label="odwiedź naszego instagrama"
			>
				<img className="h-[36px]" src="instagram.svg" alt="ikona instagrama" />
			</a>
			<a
				href="https://www.linkedin.com/"
				aria-label="odwiedź nasz profil linkedin"
			>
				<img className="h-[36px]" src="linkedin.svg" alt="ikona linkedina" />
			</a>
			<a href="https://twitter.com/" aria-label="pogadaj z nami na twitterze">
				<img className="h-[36px]" src="twitter.svg" alt="ikona twittera" />
			</a>
			<a href="https://www.youtube.com/" aria-label="zobacz nas na youtube'ie">
				<img className="h-[36px]" src="youtube.svg" alt="ikona youtube'a" />
			</a>
		</section>
		<ul className="flex justify-center items-center gap-[40px] w-4/5 h-[60px] border-y-[1px] border-[--c8] text-[12px]">
			<NavItem to="/o-nas">O nas</NavItem>
			<NavItem to="/produkty">Produkty</NavItem>
			<NavItem to="/kontakt">Kontakt</NavItem>
			<NavItem to="/warunki-użytkowania">Warunki użytkowania</NavItem>
			<NavItem to="/polityka-prywatności">Polityka prywatności</NavItem>
		</ul>
		<p className="flex items-center h-[48px]">
			© 2023, EcoBazarek Store Powered By Domino, App icons by&nbsp;
			<a className="underline" href="https://icons8.com/">
				icons8
			</a>
		</p>
	</footer>
);
