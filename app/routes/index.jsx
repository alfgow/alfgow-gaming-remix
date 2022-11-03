import { useLoaderData } from "@remix-run/react";
import Consoles from "~/components/consoles";
import { getConsoles } from "../api/consolas.server";

export async function loader() {
	const consoles = await getConsoles();
	return consoles.data;
}

function Index() {
	const consoles = useLoaderData();

	return (
		<div>
			<main className="container">
				<h2 className="heading">
					Hablemos de Videojuegos
				</h2>
				{consoles?.length && (
					<div className="consoles-grid">
						{consoles.map((data) => (
							<Consoles
								key={data?.id}
								data={
									data?.attributes
								}
							/>
						))}
					</div>
				)}
			</main>
		</div>
	);
}

export default Index;
