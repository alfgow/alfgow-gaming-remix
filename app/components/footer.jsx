function Footer() {
	return (
		<footer className="footer">
			<div className="container content">
				<div className="copyR">
					<p>
						&#169; alfgow{" "}
						{new Date().getFullYear()}
					</p>
				</div>
				<div className="myProjects">
					<a href="https://alfgow.app/">
						Mis Proyectos
					</a>
				</div>
				<div className="mail">
					<a href="#">me@alfgow.app</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
