import { toast } from "react-toastify";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import {
	Content,
	InputText,
	InputTextArea,
	FormButtons,
} from "../../components";
import { HeaderStyles, ButtonStyles } from "../../styles";
import {
	InputTextList,
	DataListTypes,
	DataListCategories,
	DataListUnits,
} from "./components";
import { useAddProductForm } from "./useAddProductForm";

export const AddProductPage = () => {
	const { isLoggedIn, getFieldsProps, handles, states, errors } =
		useAddProductForm();
	return (
		<Content
			title="EcoBazarek | Dodaj produkt"
			description="Dodaj swój produkt"
			keywords="twój, prdukt"
			isLoading={states.isLoading}
		>
			<h1 className={HeaderStyles.brown}>Dodaj produkt</h1>
			{isLoggedIn ? (
				<form
					className="w-[780px]"
					onReset={handles.reset}
					onSubmit={handles.submit}
					noValidate
				>
					<label className="flex flex-col">
						<div className="mb-[12px] w-[515px] h-[260px] bg-c5" />
						<div className="mb-[45px] flex items-center gap-[12px]">
							<ExclamationTriangleIcon className="w-[25px]" />
							<span className="text-[12px]">
								Maksymalny rozmiar pliku 1 MB. Wspieramy formaty *.jpg, *.gif,
								*.png
							</span>
						</div>
						<div className="flex flex-col">
							<InputText
								spanName="Nazwa produktu"
								{...getFieldsProps.name}
								errorText={errors.name}
							/>
							<InputTextArea
								spanName="Opis"
								{...getFieldsProps.desc}
								errorText={errors.desc}
							/>
						</div>
						<div className="flex gap-[16px]">
							<InputTextList
								list="type"
								spanName="Typ produktu"
								isRequired={true}
								{...getFieldsProps.type}
								errorText={errors.type}
							/>
							<DataListTypes types={states.types} />
							<InputTextList
								list="category"
								spanName="Kategoria"
								isRequired={true}
								{...getFieldsProps.category}
								errorText={errors.category}
							/>
							<DataListCategories categories={states.categories} />
							<InputText
								spanName="Cena za jednostkę w PLN"
								{...getFieldsProps.price}
								errorText={errors.price}
							/>
						</div>
						<InputTextList
							list="unit"
							labelClass="w-[32%]"
							spanName="Jednostka"
							isRequired={true}
							{...getFieldsProps.unit}
							errorText={errors.unit}
						/>
						<DataListUnits units={states.units} />
						<FormButtons
							buttonStyle={ButtonStyles.green.enable}
							isDisabled={states.isDisabled}
						/>
					</label>
				</form>
			) : (
				<>
					<h2>Musisz być zalogowany aby dodać produkt!</h2>
					{toast.error("Zaloguj się!")}
				</>
			)}
		</Content>
	);
};
