import type { IAlert } from "@interfaces";

export const Alert: React.FC<IAlert> = ({ msg }) => (
	<div>
		<h3>Error in convert</h3>
		{msg && <p>Message error: {msg}</p>}
		<a href="/" target="_self" rel="noreferrer">
			reload page
		</a>
	</div>
);
