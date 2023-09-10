/* const number = Math.floor(Math.random() * 5);

let source =
	"https://api-eko-bazarek.azurewebsites.net/images/categories/icons8-";

if (number === 0) source += "blueberry-64.png";
else if (number === 1) source += "pear-64.png";
else if (number === 2) source += "raspberry-64.png";
else if (number === 3) source += "cheese-64.png";
else if (number === 4) source += "pork-64.png"; */

export const Loader = () => (
	<section className="absolute top-[20%] left-[50%]">
		<span className="Loader animate-spin" />
	</section>
);
