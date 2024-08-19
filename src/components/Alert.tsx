import type { IAlert } from "@interfaces";

export const Alert: React.FC<IAlert> = ({ msg }) => (
	<div className="outline outline-red-500 px-5 py-10">
		<h3 className="text-red-500 font-semibold text-3xl">Error in convert</h3>
		{!msg && <p className="text-red-400 text-2xl">Mensaje de error: {msg}</p>}
		<a
			href="/"
			target="_self"
			rel="noreferrer"
			className="inline-block text-white mt-5 outline p-5 hover:text-black hover:bg-white"
		>
			reload page
		</a>
	</div>
);
