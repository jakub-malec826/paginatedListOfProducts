import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error: any = useRouteError();
	console.error(error);
	return (
		<div>
			<h1>Oops!</h1>
			<h3>Sorry, an unexpected error has occured</h3>
			<p>
				<i>{error.status || error.message}</i>
			</p>
		</div>
	);
}
