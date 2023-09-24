import { Link } from "react-router-dom";
import { InputText } from "../../../components";
import { ButtonStyles, HeaderStyles } from "../../../styles";

export const SignIn = ({
	submit,
}: {
	submit: React.FormEventHandler<HTMLFormElement>;
}) => {
	return (
		<>
			<h1 className={HeaderStyles.brown}>Zaloguj się</h1>
			<label className="flex flex-col w-[515px] cursor-pointer">
				<form className="flex flex-col" onSubmit={submit} noValidate>
					<InputText
						spanName="Email"
						name="email"
						type="email"
						autoComplete="email"
						isRequired={true}
					/>
					<InputText
						spanName="Hasło"
						name="password"
						type="password"
						autoComplete="current-password"
						isRequired={true}
					/>
					<div className="mt-[30px] flex w-full justify-end">
						<Link
							className={ButtonStyles.text.enable + " items-center"}
							to="/rejestracja"
						>
							Zarejestruj się
						</Link>
						<input
							className={ButtonStyles.green.enable}
							name="submit"
							type="submit"
							value="Zaloguj"
						/>
					</div>
				</form>
			</label>
		</>
	);
};
