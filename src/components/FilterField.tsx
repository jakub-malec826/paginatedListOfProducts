import { TextField } from "@mui/material";

interface FilterFieldIF {
	filter: number;
	setFilter: Function;
	totalItems: number;
	setSearchParams: Function;
}

export default function FilterField({
	filter,
	setFilter,
	totalItems,
	setSearchParams,
}: FilterFieldIF) {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFilter(e.target.value);
		Number(e.target.value) < totalItems &&
			setSearchParams({ id: e.target.value });
	};
	return (
		<TextField
			sx={{ width: "100%", m: "2em auto" }}
			error={(totalItems !== 1 && filter > totalItems) || filter < 0}
			helperText={
				totalItems !== 1 && filter > totalItems
					? "No item found"
					: filter < 0 && "Bad value"
			}
			type="Number"
			name="filter"
			id="filter"
			inputProps={{
				min: 1,
				max: totalItems,
			}}
			variant="standard"
			label="Find Index"
			value={filter}
			onChange={handleChange}
		/>
	);
}
