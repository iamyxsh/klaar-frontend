import banksConst from "../constants/banks"
import fetchCall from "../utils/fetchCall"

const cahedCalls = async (city, page, setLoad) => {
	let data = []

	if (localStorage.getItem(banksConst[city])) {
		data = JSON.parse(localStorage.getItem(banksConst[city]))
	} else {
		setLoad(true)
		data = await fetchCall(banksConst[city])
		setLoad(false)
		localStorage.setItem(banksConst[city], JSON.stringify(data))
	}

	return data
}

export default cahedCalls
