import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import { Grid } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import TextField from "@material-ui/core/TextField"

import banks from "../../constants/banks"
import { Container } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}))

const SearchBar = ({ setTerm, term, setCity, city, page, setPage }) => {
	const classes = useStyles()

	const handleChange = (event) => {
		setCity(event.target.value)
	}

	return (
		<Container maxWidth="md">
			<Grid
				container
				style={{ padding: "2rem 0.5rem" }}
				alignItems="flex-end"
				spacing={2}
			>
				<Grid item xs={4}>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label">Age</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={city}
							onChange={handleChange}
						>
							{banks.map((c, ind) => (
								<MenuItem key={ind} value={ind}>
									{c}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={4}>
					<TextField
						value={page}
						type="number"
						onChange={(e) => {
							console.log(parseInt(e.target.value))
							setPage(parseInt(e.target.value))
						}}
						id="standard-basic"
						label="Result Count"
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						value={term}
						onChange={(e) => {
							localStorage.setItem("city", e.target.value)
							setTerm(e.target.value)
						}}
						id="standard-basic"
						label="Search Term"
						fullWidth
					/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default SearchBar
