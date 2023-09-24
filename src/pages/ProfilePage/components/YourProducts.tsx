import { FormFarmFields, FormButtons } from "../../../components";
import { UserCreateProps, UserProfileProps } from "../../../interfaces";
import { useFarmDataForm } from "./FarmForm/useFarmDataForm";

export const YourProducts = () => {
	const { getFieldProps, states, handles } = useFarmDataForm();
	return (
		<form onSubmit={handles.submit} onReset={handles.reset} noValidate>
			<label className="flex flex-col w-[690px]">
				<FormFarmFields
					getFieldProps={(key: keyof UserCreateProps) =>
						getFieldProps(key) as UserProfileProps
					}
					errors={states.errors}
				/>
				<FormButtons
					buttonStyle={states.buttonStyle}
					isDisabled={states.isDisabled}
				/>
			</label>
		</form>
	);
};
