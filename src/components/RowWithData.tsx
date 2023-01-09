import { useState } from "react";

import {
	TableRow,
	TableCell,
	Modal,
	Box,
	Table,
	TableHead,
	TableBody,
} from "@mui/material";

interface RowWithDataIF {
	data: {
		color: string;
		id: number;
		name: string;
		pantone_value: string;
		year: number;
	};
}

export default function RowWithData({ data }: RowWithDataIF) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<TableRow
				style={{ backgroundColor: data.color }}
				onClick={handleOpen}
			>
				<TableCell>{data.id}</TableCell>
				<TableCell>{data.name}</TableCell>
				<TableCell>{data.year}</TableCell>
			</TableRow>

			<Modal open={open} onClose={handleClose}>
				<Box
					sx={{
						position: "absolute" as "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "auto",
						bgcolor: data.color,
						borderRadius: "2em",
						boxShadow: 24,
						p: 2,
					}}
				>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>NAME</TableCell>
								<TableCell>YEAR</TableCell>
								<TableCell>COLOR</TableCell>
								<TableCell>PANTONE_VALUE</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>{data.id}</TableCell>
								<TableCell>{data.name}</TableCell>
								<TableCell>{data.year}</TableCell>
								<TableCell>{data.color}</TableCell>
								<TableCell>{data.pantone_value}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Box>
			</Modal>
		</>
	);
}
