import { Link, useLocation } from "@remix-run/react";
import Logo from "../../public/img/logo alfgow.png";
function Header() {
	const location = useLocation();
	return (
		<header className="header">
			<div className="container bar">
				<Link to="/">
					<img
						className="logo"
						src={Logo}
						alt=""
					/>
				</Link>
				<nav className="navigation">
					<Link
						to="/"
						className={
							location.pathname == "/"
								? "active"
								: ""
						}
					>
						Inicio
					</Link>
					<Link
						to="/me"
						className={
							location.pathname ==
							"/me"
								? "active"
								: ""
						}
					>
						me
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;
