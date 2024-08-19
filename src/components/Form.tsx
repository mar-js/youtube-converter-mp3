import { useData } from "@contexts";

export const Form: React.FC = () => {
	const { handleSubmit } = useData();

	return (
		<form onSubmit={handleSubmit} method="GET">
			<label htmlFor="">Add the URL of Youtube for convert in an MP3</label>
			<input type="text" name="url" />
			<button type="submit">Convert</button>
		</form>
	);
};
