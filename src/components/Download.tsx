import type { IDownload } from "@interfaces";

export const Download: React.FC<IDownload> = ({ title, link }) => (
	<div>
		<h2 className="text-6xl mt-5 mb-10 text-white">{title}</h2>
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="text-4xl py-4 px-8 bg-emerald-400 text-white cursor-pointer hover:shadow-xl hover:shadow-emerald-400 hover:bg-white hover:text-emerald-400"
		>
			Download MP3
		</a>
	</div>
);
