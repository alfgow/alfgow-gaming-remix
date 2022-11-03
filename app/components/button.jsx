function Button({ amzn, text, target }) {
	return (
		<a
			href={amzn}
			className="btnAmzn"
			target={target}
			rel="noreferrer"
		>
			{text}
		</a>
	);
}

export default Button;
