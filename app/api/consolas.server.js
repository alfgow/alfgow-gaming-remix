export async function getConsoles() {
	const data = await fetch(`${process.env.API_URL}items?populate=*`);
	return await data.json();
}

export async function getDeal(url) {
	const data = await fetch(
		`${process.env.API_URL}items?filters[url]=${url}&populate=*`
	);
	return await data.json();
}
