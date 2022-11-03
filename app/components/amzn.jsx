import Button from "./button";

function Amzn({ dollar, amzn }) {
	return (
		<div className="amzn">
			<p>{dollar}*</p>
			<p>*Sujeto a cambios por parte de Amazon</p>
			<Button amzn={amzn} text="Ver más Info" />
		</div>
	);
}

export default Amzn;
