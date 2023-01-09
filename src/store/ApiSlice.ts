import { createSlice } from "@reduxjs/toolkit";

export interface MoreData {
	data: {
		color: string;
		id: number;
		name: string;
		pantone_value: string;
		year: number;
	}[];
	page: number;
	per_page: number;
	support: {
		text: string;
		url: string;
	};
	total: number;
	total_pages: number;
}

export interface SingleData {
	data: {
		color: string;
		id: number;
		name: string;
		pantone_value: string;
		year: number;
	};
	support: {
		text: string;
		url: string;
	};
}

const tmpMoreData: MoreData = {
	data: [],
	page: 0,
	per_page: 0,
	support: { text: "", url: "" },
	total: 0,
	total_pages: 0,
};

const tmpSingleData: SingleData = {
	data: {
		color: "",
		id: 0,
		name: "",
		pantone_value: "",
		year: 0,
	},
	support: { text: "", url: "" },
};

const initialState = {
	moreData: <MoreData>tmpMoreData,
	singleData: <SingleData>tmpSingleData,
};

export const ApiSlice = createSlice({
	name: "api",
	initialState,
	reducers: {
		getMoreData: (state, action) => {
			state.moreData = action.payload;
		},
		deleteMoreData: (state) => {
			state.moreData = tmpMoreData;
		},
		getSingleData: (state, action) => {
			state.singleData = action.payload;
		},
		deleteSingleData: (state) => {
			state.singleData = tmpSingleData;
		},
	},
});

export const getMoreDataAsync =
	(page?: number, id?: number) => async (dispatch: Function) => {
		page &&
			fetch(process.env.API_KEY + `?page=${page}&per_page=5` || "")
				.then((response) => {
					if (response.ok) return response.json();
					return Promise.reject(response);
				})
				.then((data: MoreData) => {
					dispatch(getMoreData(data));
				})
				.catch((error) => {
					throw Error(error);
				});
		id &&
			fetch(process.env.API_KEY + `?id=${id}` || "")
				.then((response) => {
					if (response.ok) return response.json();
					return Promise.reject(response);
				})
				.then((data: SingleData) => {
					dispatch(getSingleData(data));
				})
				.catch((error) => {
					throw Error(error);
				});
	};

export default ApiSlice.reducer;
export const { getMoreData, getSingleData, deleteMoreData, deleteSingleData } =
	ApiSlice.actions;
