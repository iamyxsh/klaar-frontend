import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import fetchCall from "../utils/fetchCall"
import { Grid, Typography } from "@material-ui/core"

const IFSC = () => {
	const router = useRouter()
	const { city, ifsc } = router.query

	const [bank, setBank] = useState()

	useEffect(() => {
		const banks = JSON.parse(localStorage.getItem(city))

		const fetchBank = banks && banks.filter((b) => b.ifsc === ifsc)
		setBank(fetchBank[0])
	}, [])

	return (
		<Grid
			container
			style={{ padding: "1rem 2rem", textAlign: "center" }}
			spacing={2}
		>
			<Grid item xs={12}>
				<Typography variant="h3">{bank.bank_name}</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h6">{bank.ifsc}</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h6">{bank.bank_id}</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h6">{bank.city}</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h6">{bank.state}</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h6">{bank.country}</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h6">{bank.bank_name}</Typography>
			</Grid>
		</Grid>
	)
}

export default IFSC
