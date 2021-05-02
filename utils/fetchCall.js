const fetchCall = async (endpoint) => {
	const data = await fetch(
		`https://vast-shore-74260.herokuapp.com/banks?city=${endpoint}`,
		{
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		}
	)
		.then((response) => response.json())
		.then((res) => {
			return res.splice(0, 10)
		})

	return data
}

export default fetchCall
