import type { IDownload } from "@interfaces";

export const Download: React.FC<IDownload> = ({ title, link }) => (
	<div>
		<h2>{title}</h2>
		<a href={link} target="_blank" rel="noreferrer">
			Download MP3
		</a>
	</div>
);
