import { Content } from "../components";
import { HeaderStyles, ParagraphStyles } from "../styles";

export const TermsOfServicePage = () => {
	return (
		<Content
			title="EcoBazarek | Warunki użytkowania"
			keywords="warunki, użytkowania"
			description="Zapoznaj się z warunkami użytkowania aplikacji"
			isLoading={false}
		>
			<h1 className={HeaderStyles.brown}>Warunki użytkowania</h1>
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
		</Content>
	);
};
