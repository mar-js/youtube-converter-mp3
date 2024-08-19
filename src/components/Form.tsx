import { useData } from "@contexts";

export const Form: React.FC = () => {
	const { handleSubmit } = useData();

	return (
		<form onSubmit={handleSubmit} method="GET" className="flex flex-col gap-6">
			<label htmlFor="url" className="text-2xl text-white">
				Añade la URL de Youtube para convertirla en MP3.
			</label>
			<input type="text" id="url" name="url" className="px-4 py-6" />
			<button
				type="submit"
				className="bg-emerald-500 text-white py-5 font-bold hover:text-emerald-500 hover:bg-white hover:outline hover:outline-emerald-500 hover:shadow-xl hover:shadow-emerald-500"
			>
				CONVERTIR
			</button>
		</form>
	);
};
