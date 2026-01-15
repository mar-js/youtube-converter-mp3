import type { IAlert } from "@interfaces";

export const Alert: React.FC<IAlert> = ({ msg }) => (
	<div className="border-2 border-neonPink bg-backgroundDark/80 px-8 py-10 rounded-xl shadow-neonPink text-center animate-pulse">
		<h3 className="text-neonPink font-futuristic font-bold text-3xl mb-2 drop-shadow-[0_0_8px_#ff00cc]">
			Error en la conversión
		</h3>
		{msg && (
			<p className="text-neonBlue text-xl mb-4 font-futuristic">
				Mensaje de error: {msg}
			</p>
		)}
		<a
			href="/"
			target="_self"
			rel="noreferrer"
			className="inline-block bg-neonPink text-backgroundDark mt-5 px-6 py-3 rounded-lg font-futuristic shadow-neonPink hover:bg-neonBlue hover:text-neonPink transition"
		>
			Recargar página
		</a>
	</div>
);
