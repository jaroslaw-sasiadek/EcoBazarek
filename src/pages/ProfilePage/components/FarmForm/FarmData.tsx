import {
	FormButtons,
	FormFarmFields,
	FormUserFields,
} from "../../../../components";
import { UserCreateProps, UserProfileProps } from "../../../../interfaces";
import { useFarmDataForm } from "./useFarmDataForm";

export const FarmData = () => {
	const { getFieldProps, states, handles } = useFarmDataForm();
	return (
		<form onSubmit={handles.submitFarmData} onReset={handles.reset} noValidate>
			<label className="flex flex-col w-[690px]">
				<FormUserFields
					getFieldProps={(key: keyof UserCreateProps) =>
						getFieldProps(key) as UserProfileProps
					}
					errors={states.errors}
				/>
				<FormFarmFields
					getFieldProps={(key: keyof UserCreateProps) =>
						getFieldProps(key) as UserProfileProps
					}
					errors={states.errors}
				/>
				<FormButtons
					children={
						<input
							className={states.buttonStyle + " absolute left-0"}
							onClick={handles.logOut}
							name="logOut"
							type="button"
							value="Wyloguj"
						/>
					}
					buttonStyle={states.buttonStyle}
					isDisabled={states.isDisabled}
				/>
			</label>
		</form>
	);
};
