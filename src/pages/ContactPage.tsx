import { Data } from "../API/_Data";
import { InputText } from "../components/InputText";
import { SnazzyMap } from "../components/SnazzyMap";
import { Content } from "../components/main/Content";
import { ContactProps } from "../interfaces/ContactProps";
import { ButtonStyle } from "../styles/Button.styles";
import { TextFieldStyle } from "../styles/TextField.styles";

export const ContactPage = () => {
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
			isLoading={false}
		>
			<h1 className="pt-[72px] pb-[38px] text-[48px] font-[900] text-[--c1] uppercase">
				Kontakt
			</h1>
			<SnazzyMap />
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
							TextFieldStyle.area + " w-full mb-[34px] h-[130px] block"
						}
						name="message"
						required
					/>
					<div className="mt-[30px] flex w-full justify-end">
						<input
							className={ButtonStyle.text.enable}
							name="reset"
							type="reset"
							value="Reset"
						/>
						<input
							className={ButtonStyle.green.enable}
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
