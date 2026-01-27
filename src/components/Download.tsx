import type { IDownload } from "@interfaces";

export const Download: React.FC<IDownload> = ({ title, link }) => (
	<div className="flex flex-col items-center">
		<h2 className="text-5xl sm:text-6xl mt-5 mb-10 text-neonGreen font-futuristic drop-shadow-[0_0_12px_#39ff14]">
			{title}
		</h2>
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="text-3xl sm:text-4xl py-4 px-8 bg-neonPink text-backgroundDark font-futuristic rounded-lg shadow-neonPink cursor-pointer hover:bg-neonBlue hover:text-neonPink hover:shadow-neonBlue transition"
		>
			Descargar MP3
		</a>
	</div>
);
