import { useLoaderData } from "@remix-run/react";
import { getDeal } from "~/api/consolas.server";
import Button from "~/components/button";
import Gallery from "~/components/gallery";

export function meta({ data }) {
	return {
		title: `alfgow - ${data.data[0].attributes.title}`,
		description: data.data[0].attributes.description,
	};
}

export async function loader({ params }) {
	const { url } = params;
	const item = await getDeal(url);
	return item;
}

function Url() {
	const item = useLoaderData();

	const { title, price, amzn, imgUrl, description, url } =
		item.data[0].attributes;
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
		<div className="wrapperItem">
			<div className="itemTitle">
				<h3>{title}</h3>
				<p>
					{dollar} * Sujeto a cambio por parte de
					Amazon
				</p>
				<Button
					amzn={amzn}
					text="Ver en Amazon"
					target="_blank"
				/>
			</div>
			<div className="itemImg">
				<a href={amzn} target="_blank" rel="noreferrer">
					<Gallery imgUrl={imgUrl} />
				</a>
			</div>
			<div className="itemDescription">
				<p>{description}</p>
			</div>
		</div>
	);
}

export default Url;
