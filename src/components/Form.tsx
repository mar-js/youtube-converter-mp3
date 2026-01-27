import { useData } from "@contexts";

export const Form: React.FC = () => {
	const { handleSubmit } = useData();

	return (
		<form
			onSubmit={handleSubmit}
			method="GET"
			className="flex flex-col gap-6 items-center"
		>
			<label
				htmlFor="url"
				className="text-2xl font-futuristic text-neonBlue drop-shadow-[0_0_8px_#00eaff]"
			>
				Añade la URL de Youtube para convertirla en MP3.
			</label>
			<hr className="h-0.5 w-full bg-neonPink" />
			<input
				type="text"
				id="url"
				name="url"
				className="w-full max-w-md text-xl font-futuristic px-4 py-5 border-2 border-neonBlue bg-backgroundDark text-neonGreen rounded-lg shadow-neonBlue focus:border-neonPink focus:shadow-neonPink transition"
			/>
			<button
				type="submit"
				className="flex justify-center items-center gap-2 text-xl font-futuristic font-semibold rounded-lg bg-neonGreen text-backgroundDark py-5 px-8 shadow-neon hover:bg-neonPink hover:text-neonBlue hover:shadow-neonPink transition"
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
			<p className="text-neonPurple font-futuristic text-lg mt-2">
				Soporta videos de hasta 2 horas de duración
			</p>
		</form>
	);
};
