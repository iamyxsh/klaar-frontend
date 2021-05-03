const fetchCall = async (endpoint) => {
	const data = await fetch(
		`https://vast-shore-74260.herokuapp.com/banks?city=${endpoint}`,
		{
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		}
	).then((response) => response.json())

	return data
}

export default fetchCall
