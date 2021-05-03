import React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import StarIcon from "@material-ui/icons/Star"
import StarBorderIcon from "@material-ui/icons/StarBorder"

export default function DisplayTable({ banks, likes, setLikes }) {
	const handleLike = (ifsc) => {
		if (likes.includes(ifsc)) {
			setLikes(likes.filter((i) => i != ifsc))
		} else {
			setLikes([...likes, ifsc])
		}
	}

	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>IFSC</TableCell>
						<TableCell align="center">Bank_id</TableCell>
						<TableCell align="center">Address</TableCell>
						<TableCell align="center">Bank Name</TableCell>
						<TableCell align="center">Branch</TableCell>
						<TableCell align="center">City</TableCell>
						<TableCell align="center">District</TableCell>
						<TableCell align="center">State</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{banks.length ? (
						banks.map((row, ind) => (
							<TableRow key={ind}>
								<TableCell component="th" scope="row">
									{row.ifsc}
								</TableCell>
								<TableCell align="center">{row.bank_id}</TableCell>
								<TableCell align="center">{row.address}</TableCell>
								<TableCell align="center">{row.bank_name}</TableCell>
								<TableCell align="center">{row.branch}</TableCell>
								<TableCell align="center">{row.city}</TableCell>
								<TableCell align="center">{row.district}</TableCell>
								<TableCell align="center">{row.state}</TableCell>
								<TableCell
									align="center"
									onClick={() => handleLike(row.ifsc)}
									style={{ cursor: "pointer" }}
								>
									{likes.includes(row.ifsc) ? (
										<StarIcon style={{ fill: "#219EBC" }} />
									) : (
										<StarBorderIcon />
									)}
								</TableCell>
							</TableRow>
						))
					) : (
						<h1 style={{ textAlign: "center" }}>Oops, cannot find anything</h1>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
