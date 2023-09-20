import { Assets } from "../assets/_Assets";

export const SnazzyMap = () => {
	return (
		<section
			style={{ backgroundImage: `url("${Assets.Images.snazzyMap}")` }}
			className="flex justify-end  mx-auto absolute max-w-[1920px] w-[100%] h-[600px] bg-cover bg-center left-0 right-0"
		></section>
	);
};

// https://snazzymaps.com/build-a-map/preview/526345

// <iframe src="https://snazzymaps.com/embed/526345" width="1920px" height="600px" style="border:none;"></iframe>

/* 
import GoogleMapReact from "google-map-react";
import { SnazzyMapStyles } from "./SnazzyMap.styles";

export const SnazzyMap = () => {
	return (
		<div className="absolute left-0 max-w-[1920px] w-full h-[600px]">
			<GoogleMapReact
				zoom={13}
				center={{ lat: 50.038, lng: 19.89 }}
				options={{ styles: SnazzyMapStyles }}
			></GoogleMapReact>
		</div>
	);
};
 */
