import { useEffect, useState } from "react"

import SearchBar from "../components/HomePage/SearchBar"

import DisplayTable from "../components/HomePage/Table"
import Loader from "../components/Loader/Loader"
import cachedCall from "../utils/useFetch"

export default function Home() {
	const [term, setTerm] = useState("")
	const [city, setCity] = useState(0)
	const [page, setPage] = useState(10)
	const [load, setLoad] = useState(false)
	const [banks, setBanks] = useState([])
	const [filBanks, setFilBanks] = useState([])
	const [likes, setLikes] = useState([])

	useEffect(() => {
		setLikes(
			JSON.parse(localStorage.getItem("likes")) &&
				JSON.parse(localStorage.getItem("likes")).length > 0
				? JSON.parse(localStorage.getItem("likes"))
				: []
		)
	}, [])

	useEffect(() => {
		localStorage.setItem("likes", JSON.stringify(likes))
	}, [likes])

	useEffect(() => {
		const getBanks = async () => {
			const data = await cachedCall(city, page, setLoading)

			setBanks(data)
			setFilBanks(data.splice(0, page))
		}

		getBanks()
	}, [city, page])

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
		setFilBanks(banksWithTerm.splice(0, page))
	}, [term, page])

	const setLoading = (val) => {
		setLoad(val)
	}

	if (load) {
		return <Loader />
	}

	return (
		<>
			<SearchBar
				city={city}
				setCity={(val) => setCity(val)}
				term={term}
				setTerm={(val) => setTerm(val)}
				page={page}
				setPage={(val) => setPage(val)}
			/>
			<DisplayTable
				banks={filBanks}
				likes={likes}
				setLikes={(val) => {
					setLikes(val)
				}}
			/>
		</>
	)
}
