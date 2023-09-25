import { RequestTypesProp } from "../../../interfaces";

export const DataListTypes = ({ types }: { types: RequestTypesProp }) => {
	return types && types !== "error" ? (
		<datalist id="type">
			{types.map((type) => (
				<option key={type.id} value={type.name} />
			))}
		</datalist>
	) : null;
};
