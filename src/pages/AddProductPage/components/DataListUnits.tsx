import { RequestUnitsProp } from "../../../interfaces";

export const DataListUnits = ({ units }: { units: RequestUnitsProp }) => {
	return units && units !== "error" ? (
		<datalist id="unit">
			{units.map((unit) => (
				<option key={unit.id} value={unit.name} />
			))}
		</datalist>
	) : null;
};
