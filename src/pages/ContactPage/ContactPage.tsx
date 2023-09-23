import { useState } from "react";

import { Content, InputText, InputTextArea } from "../../components";
import { ButtonStyles, HeaderStyles } from "../../styles";
import { SnazzyMap } from "./SnazzyMap";
import { useContactForm } from "./useContactForm";

export const ContactPage = () => {
	const [loading, setLoading] = useState(true);
	const { getFieldProps, states, handles } = useContactForm();
	return (
		<Content
			title="EcoBazarek | Kontakt"
			keywords="kontakt, napisz, wiadomość, email, telefon, przyjedź"
			description="Skontaktuj się z nami; napisz do nas wiadomość"
			isLoading={loading}
		>
			<h1 className={HeaderStyles.brown}>Kontakt</h1>
			<SnazzyMap onLoad={() => setLoading(false)} />
			<label className="flex flex-col cursor-pointer mt-[722px] w-[690px]">
				<h2
					className={
						"pt-[72px] pb-[38px] text-[20px] font-[900] text-c1 uppercase"
					}
				>
					Napisz wiadomość
				</h2>
				<form
					className="flex flex-col"
					onSubmit={handles.submit}
					onReset={handles.reset}
					noValidate
				>
					<InputText
						spanName="Imię i nazwisko"
						type="text"
						autoComplete="name"
						{...getFieldProps("fullName")}
						errorText={states.errors.fullName}
						isRequired={true}
					/>
					<div className="flex w-full gap-[16px]">
						<div className="flex w-full">
							<InputText
								spanName="Email"
								type="email"
								autoComplete="email"
								{...getFieldProps("email")}
								errorText={states.errors.email}
								isRequired={true}
							/>
						</div>
						<div className="flex w-full">
							<InputText
								spanName="Telefon"
								type="tel"
								autoComplete="tel"
								{...getFieldProps("phone")}
								errorText={states.errors.phone}
								isRequired={true}
							/>
						</div>
					</div>
					<InputText
						spanName="Temat"
						type="text"
						{...getFieldProps("subject")}
						errorText={states.errors.subject}
						isRequired={true}
					/>
					<InputTextArea
						spanName="Wiadomość"
						inputClass={`mb-[34px] block`}
						{...getFieldProps("message")}
						errorText={states.errors.message}
						isRequired={true}
					/>
					<div className="mt-[30px] flex w-full justify-end">
						<input
							className={ButtonStyles.text.enable}
							name="reset"
							type="reset"
							value="Reset"
						/>
						<input
							className={ButtonStyles.green.enable}
							name="add"
							type="submit"
							value="Dodaj"
							disabled={states.isDisabled}
						/>
					</div>
				</form>
			</label>
		</Content>
	);
};
