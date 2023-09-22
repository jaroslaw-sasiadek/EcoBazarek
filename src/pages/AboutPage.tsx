import { Content } from "../components";
import { Assets } from "../assets";
import { HeaderStyles, ParagraphStyles } from "../styles";

export const AboutPage = () => {
	return (
		<Content
			title="EcoBazarek | O nas"
			description="Informacje o naszej firmie"
			keywords="about, us, nas, nasze, uprawy"
			isLoading={false}
		>
			<img src={Assets.Images.aboutUs} alt="Nasza firma" />
			<h1 className={HeaderStyles.brown}>O nas</h1>
			<p className={ParagraphStyles.default}>
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
			<h2 className={HeaderStyles.brown}>Nasze uprawy z lotu ptaka</h2>
			<iframe
				className="pb-[40px] max-w-[1040px] w-full h-[620px]"
				title="Nasze uprawy z lotu ptaka"
				src="https://player.vimeo.com/video/724732134"
			></iframe>
			{/* <video className="pb-[40px]" width="100%" autoPlay loop>
				<source src={Assets.Videos.ourCrops} type="video/mp4" />
				Twoja przeglądarka nie wspiera tagu wideo.
			</video> */}
		</Content>
	);
};
