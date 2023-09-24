import { InputText, InputTextArea } from "..";
import { FormFieldsProps } from "../../interfaces";

export const FormFarmFields = (props: FormFieldsProps) => {
	const { getFieldProps, errors } = props;
	return (
		<>
			<h2 className="py-[30px] text-[14px] font-[900] text-c1 uppercase">
				Adres i informacje o gospodarstwie
			</h2>
			<InputText
				spanName="Nazwa gospodarstwa"
				{...getFieldProps("farmName")}
				type="text"
				errorText={errors.farmName}
				isRequired={true}
			/>
			<InputTextArea
				spanName="Opis gospodarstwa"
				inputClass={`mb-[34px] block`}
				{...getFieldProps("farmDesc")}
				errorText={errors.farmDesc}
			/>
			<div className="flex w-full gap-[16px]">
				<div className="w-[50%]">
					<InputText
						spanName="Ulica"
						{...getFieldProps("street")}
						type="text"
						errorText={errors.street}
						isRequired={true}
					/>
				</div>
				<div className="flex w-[50%] gap-[16px]">
					<InputText
						spanName="Numer domu"
						{...getFieldProps("streetNumber")}
						type="text"
						errorText={errors.streetNumber}
						isRequired={true}
					/>
					<InputText
						spanName="Numer mieszkania"
						{...getFieldProps("flatNumber")}
						type="text"
					/>
				</div>
			</div>
			<div className="flex gap-[16px]">
				<InputText
					spanName="Miasto/ Wieś"
					{...getFieldProps("city")}
					type="text"
					errorText={errors.city}
					isRequired={true}
				/>
				<InputText
					spanName="Kod pocztowy"
					{...getFieldProps("postCode")}
					type="text"
					errorText={errors.postCode}
					isRequired={true}
				/>
			</div>
			<div className="flex gap-[16px]">
				<InputText
					spanName="Województwo"
					{...getFieldProps("voivodeship")}
					type="text"
					errorText={errors.voivodeship}
				/>
				<InputText
					spanName="Powiat"
					{...getFieldProps("county")}
					type="text"
					errorText={errors.county}
				/>
			</div>
			<div className="flex gap-[16px]">
				<InputText
					spanName="Gmina"
					{...getFieldProps("district")}
					type="text"
					errorText={errors.district}
				/>
				<InputText
					spanName="Kraj"
					{...getFieldProps("country")}
					type="text"
					errorText={errors.country}
					isRequired={true}
				/>
			</div>
		</>
	);
};
