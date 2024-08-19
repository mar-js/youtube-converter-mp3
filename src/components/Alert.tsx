import {
	Alert as AlertCHUI,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Button,
	Link,
} from "@chakra-ui/react";
import type { IAlert } from "@interfaces";

export const Alert: React.FC<IAlert> = ({ msg }) => (
	<AlertCHUI status="error">
		<AlertIcon />
		<AlertTitle>Error in convert</AlertTitle>
		{msg && <AlertDescription>Message error: {msg}</AlertDescription>}
		<Button colorScheme="red">
			<Link href="/">reload page</Link>
		</Button>
	</AlertCHUI>
);
