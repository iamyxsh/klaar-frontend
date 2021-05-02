import { useEffect, useState } from "react"
import fetchCall from "../utils/fetchCall"
import SearchBar from "../components/HomePage/SearchBar"
import banksConst from "../constants/banks"
import DisplayTable from "../components/HomePage/Table"

export default function Home() {
	const [term, setTerm] = useState("")
	const [city, setCity] = useState(0)
	const [banks, setBanks] = useState([])
	const [filBanks, setFilBanks] = useState([])

	useEffect(() => {
		const getBanks = async () => {
			const data = await fetchCall(banksConst[city])
			setBanks(data)
			setFilBanks(data)
		}

		getBanks()
	}, [city])

	useEffect(() => {
		let banksWithTerm = []

		if (!term) {
			banksWithTerm = banks
		} else {
			banksWithTerm = banks.filter((b) => {
				if (
					b.ifsc.toLowerCase().includes(term.toLowerCase()) ||
					b.bank_id.toString().includes(term.toLowerCase()) ||
					b.address.toLowerCase().includes(term.toLowerCase()) ||
					b.bank_name.toLowerCase().includes(term.toLowerCase()) ||
					b.branch.toLowerCase().includes(term.toLowerCase()) ||
					b.city.toLowerCase().includes(term.toLowerCase()) ||
					b.district.toLowerCase().includes(term.toLowerCase()) ||
					b.state.toLowerCase().includes(term.toLowerCase())
				) {
					return b
				}
			})
		}
		setFilBanks(banksWithTerm)
	}, [term])

	return (
		<>
			<SearchBar
				city={city}
				setCity={(val) => setCity(val)}
				term={term}
				setTerm={(val) => setTerm(val)}
			/>
			<DisplayTable banks={filBanks} />
		</>
	)
}
