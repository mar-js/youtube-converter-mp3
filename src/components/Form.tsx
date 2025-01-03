import { useData } from "@contexts";

export const Form: React.FC = () => {
	const { handleSubmit } = useData();

	return (
		<form onSubmit={handleSubmit} method="GET" className="flex flex-col gap-6">
			<label
				htmlFor="url"
				className="text-2xl font-light text-retro-brown-dark-one"
			>
				Añade la URL de Youtube para convertirla en MP3.
			</label>
			<hr className="h-0.5 bg-retro-brown-dark-one" />
			<input
				type="text"
				id="url"
				name="url"
				className="bg-retro-brown-light-two text-retro-brown-dark-one text-xl outline outline-1 outline-retro-brown-dark-one rounded-lg px-4 py-5"
			/>
			<button
				type="submit"
				className="flex justify-center items-center gap-2 text-xl font-semibold rounded-lg bg-retro-brown-dark-one text-retro-brown-light-two py-5 hover:bg-retro-brown-dark-two"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<title>Icon Downoloader</title>
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="7 10 12 15 17 10" />
					<line x1="12" x2="12" y1="15" y2="3" />
				</svg>
				Convertir a MP3
			</button>
			<p className="text-retro-brown-dark-one font-light text-lg">
				Soporta videos de hasta 2 horas de duración
			</p>
		</form>
	);
};
