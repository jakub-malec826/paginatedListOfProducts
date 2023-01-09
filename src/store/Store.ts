import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ApiSlice from "./ApiSlice";

const Store = configureStore({
	reducer: { ApiSlice },
});

export default Store;

export const useStoreDispatch = useDispatch<typeof Store.dispatch>;

export type StoreState = ReturnType<typeof Store.getState>;
