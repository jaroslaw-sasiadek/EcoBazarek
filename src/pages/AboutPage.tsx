import { Content } from "../components/main/Content";
import { Assets } from "../assets/_Assets";

export const AboutPage = () => {
	return (
		<Content title="EcoBazarek | O nas">
			<img className="w-full" src={Assets.Images.aboutUs} alt="Nasza firma" />
			<h1 className="py-[40px] text-[48px] font-[900] text-[--c1] uppercase">
				O nas
			</h1>
			<p className="text-[16px] text-[--c1]">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
				reiciendis autem ad esse laudantium? Dolorem debitis voluptatum delectus
				omnis enim, aliquid aliquam eos pariatur quos dolor! Optio ipsum
				architecto quae. Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Dolores asperiores ad placeat consequuntur et iusto aliquid
				voluptate labore exercitationem. Est, dicta sequi. Est iure animi
				incidunt temporibus repellat facilis suscipit.
				<br />
				<br />
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
				reiciendis autem ad esse laudantium? Dolorem debitis voluptatum delectus
				omnis enim, aliquid aliquam eos pariatur quos dolor! Optio ipsum
				architecto quae. Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Dolores asperiores ad placeat consequuntur et iusto aliquid
				voluptate labore exercitationem. Est, dicta sequi. Est iure animi
				incidunt temporibus repellat facilis suscipit.
				<br />
				<br />
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
				reiciendis autem ad esse laudantium? Dolorem debitis voluptatum delectus
				omnis enim, aliquid aliquam eos pariatur quos dolor! Optio ipsum
				architecto quae. Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Dolores asperiores ad placeat consequuntur et iusto aliquid
				voluptate labore exercitationem. Est, dicta sequi. Est iure animi
				incidunt temporibus repellat facilis suscipit.
			</p>
			<h2 className="py-[40px] text-[48px] font-[900] text-[--c1] uppercase">
				Nasze uprawy z lotu ptaka
			</h2>
			<video className="pb-[40px]" width="100%" autoPlay loop>
				<source src={Assets.Videos.ourCrops} type="video/mp4" />
				Twoja przeglądarka nie wspiera tagu wideo.
			</video>
		</Content>
	);
};
