import Amzn from "./amzn";

function Consoles({ data }) {
	const { title, description, price, url, video, amzn, imgUrl } = data;

	function currencyFormatter({ currency, value }) {
		const formatter = new Intl.NumberFormat("en-US", {
			style: "currency",
			minimumFractionDigits: 2,
			currency,
		});
		return formatter.format(value);
	}

	const value = parseInt(price);
	const dollar = currencyFormatter({
		currency: "USD",
		value,
	});

	return (
		<div className="consoleCard">
			<div className="consoleTitle">
				<h3 className="">{title}</h3>
			</div>
			<p className="consoleDescription">{description}</p>
			<Amzn dollar={dollar} amzn={`/deals/${url}`} />
			<div className="imgs">
				<a href={`/deals/${url}`} rel="noreferrer">
					<img
						src={imgUrl}
						alt={`Imagen ${title}`}
						title={`${title}`}
						className="consoleImg"
					/>
				</a>
			</div>
		</div>
	);
}

export default Consoles;
