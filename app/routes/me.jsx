export function meta() {
	return {
		title: "me: <alfgow/>",
	};
}

function Me() {
	return (
		<div className="me">
			<h2>
				👋Hola! Soy Alfonso, un chavo Sr. muy dinamico
				que le gusta programar sitios web.
			</h2>
			<h3>🟢 Que puedo hacer por ti actualmente?</h3>
			<span>
				➡️ Puedo hacerte sitios estáticos o dinámicos,
				consumiendo información desde cualquier API,
				puedo maquetar el diseño que tengas previamente
				realizado por tu UX/UI
			</span>
			<h3>🛠️ Skills Actuales:</h3>
			<p>Programming Languages</p>{" "}
			<img
				src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
				alt="javascript"
				width="40"
				height="40"
			/>
			<p>Frontend Development</p>
			<img
				src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
				alt="css3"
				width="40"
				height="40"
			/>{" "}
			<img
				src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
				alt="html5"
				width="40"
				height="40"
			/>
			<h3>Que estoy aprendiendo?</h3>
			<p>⚛️ Actualmente estoy aprendiendo: React</p>
		</div>
	);
}

export default Me;
