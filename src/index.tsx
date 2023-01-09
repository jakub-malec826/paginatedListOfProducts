import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

import Store from "./store/Store";

const rootDiv = document.getElementById("root") as HTMLElement;

const root = createRoot(rootDiv);

root.render(
	<Provider store={Store}>
		<RouterProvider router={router} />
	</Provider>
);
