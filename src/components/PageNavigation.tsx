import { getMoreDataAsync } from "../store/ApiSlice";
import { useStoreDispatch } from "../store/Store";

import { Pagination } from "@mui/material";

interface PageNavigationIF {
	totalPages: number;
	searchParams: URLSearchParams;
	setSearchParams: Function;
}

export default function PageNavigation({
	totalPages,
	searchParams,
	setSearchParams,
}: PageNavigationIF) {
	const dispatch = useStoreDispatch();

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setSearchParams({ page: value });
		dispatch(getMoreDataAsync(value));
	};

	return (
		<Pagination
			sx={{ width: "fit-content", m: "2em auto" }}
			count={totalPages}
			page={Number(searchParams.get("page")) || 1}
			onChange={handleChange}
			showFirstButton
			showLastButton
		/>
	);
}
