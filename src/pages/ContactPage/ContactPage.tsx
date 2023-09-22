import { useState } from "react";

import { Data } from "../../API";
import { Content, InputText } from "../../components";
import { ContactProps } from "../../interfaces";
import { TextFieldStyles, ButtonStyles } from "../../styles";
import { SnazzyMap } from "./SnazzyMap";

export const ContactPage = () => {
	const [loading, setLoading] = useState(true);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData) as unknown as ContactProps;
		Data.Others.Contact(event, data);
	}

	return (
		<Content
			title="EcoBazarek | Kontakt"
			keywords="kontakt, napisz, wiadomość, email, telefon, przyjedź"
			description="Skontaktuj się z nami; napisz do nas wiadomość"
			isLoading={loading}
		>
			<h1 className="pt-[72px] pb-[38px] text-[48px] font-[900] text-[--c1] uppercase">
				Kontakt
			</h1>
			<SnazzyMap onLoad={() => setLoading(false)} />
			<label className="flex flex-col cursor-pointer mt-[722px] w-[690px]">
				<h2 className="pt-[72px] pb-[38px] text-[20px] font-[900] text-[--c1] uppercase">
					Napisz wiadomość
				</h2>
				<form onSubmit={handleSubmit}>
					<InputText
						spanName="Imię i nazwisko*"
						name="fullName"
						type="text"
						autoComplete="name"
						required
					/>
					<div className="flex w-full gap-[16px]">
						<div className="w-full">
							<InputText
								spanName="Email*"
								name="email"
								type="email"
								autoComplete="email"
								required
							/>
						</div>
						<div className="w-full">
							<InputText
								spanName="Telefon"
								name="phone"
								type="tel"
								autoComplete="tel"
								required
							/>
						</div>
					</div>
					<InputText spanName="Temat*" name="subject" type="text" required />
					<span className="text-[12px] font-[500]">Wiadomość</span>
					<textarea
						className={
							TextFieldStyles.area + " w-full mb-[34px] h-[130px] block"
						}
						name="message"
						required
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
						/>
					</div>
				</form>
			</label>
		</Content>
	);
};
