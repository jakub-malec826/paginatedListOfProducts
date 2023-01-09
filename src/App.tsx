import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import {
	MoreData,
	getMoreDataAsync,
	deleteMoreData,
	deleteSingleData,
} from "./store/ApiSlice";
import { useStoreDispatch, StoreState } from "./store/Store";

import { Box } from "@mui/material";

import FilterField from "./components/FilterField";
import PageNavigation from "./components/PageNavigation";
import MainTable from "./components/MainTable";

export default function App() {
	const moreData: MoreData = useSelector(
		(store: StoreState) => store.ApiSlice.moreData
	);
	const dispatch = useStoreDispatch();

	const [searchParams, setSearchParams] = useSearchParams();

	const [totalItems, setTotal] = useState(1);

	const [filter, setFilter] = useState<number>(
		Number(searchParams.get("id"))
	);

	useEffect(() => {
		moreData.total !== 0 && setTotal(moreData.total);

		if (filter) {
			dispatch(getMoreDataAsync(undefined, filter));
			return () => {
				dispatch(deleteSingleData());
			};
		} else {
			dispatch(getMoreDataAsync(Number(searchParams.get("page")) || 1));
			return () => {
				dispatch(deleteMoreData());
			};
		}
	}, [dispatch, filter]);

	return (
		<Box
			style={{
				width: "75vw",
				margin: "2vh auto",
			}}
		>
			<FilterField
				filter={filter}
				setFilter={setFilter}
				totalItems={totalItems}
				setSearchParams={setSearchParams}
			/>
			<MainTable />
			<PageNavigation
				totalPages={moreData.total_pages}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			/>
		</Box>
	);
}
