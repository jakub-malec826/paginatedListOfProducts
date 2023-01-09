import { useSelector } from "react-redux";

import { MoreData, SingleData } from "../store/ApiSlice";
import { StoreState } from "../store/Store";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";

import RowWithData from "./RowWithData";

export default function MainTable() {
	const moreData: MoreData = useSelector(
		(store: StoreState) => store.ApiSlice.moreData
	);
	const singleData: SingleData = useSelector(
		(store: StoreState) => store.ApiSlice.singleData
	);
	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>ID</TableCell>
					<TableCell>NAME</TableCell>
					<TableCell>YEAR</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{moreData.data &&
					moreData.data.map((data) => (
						<RowWithData key={data.id} data={data} />
					))}
				{singleData.data && singleData.data.id !== 0 && (
					<RowWithData data={singleData.data} />
				)}
			</TableBody>
		</Table>
	);
}
