import { ResponseItem, ResponseErrors } from "../../interfaces";

export function gatherResponseErrors(
	response: ResponseItem[] | null | string
): ResponseErrors {
	if (response && response !== "error") {
		return (response as ResponseItem[]).reduce(
			(previous: ResponseErrors, current: ResponseItem) => {
				previous[current.path] = current.message;
				return previous;
			},
			{}
		);
	}
	return {};
}
