import { Spinner } from "@chakra-ui/react";

export const Loader: React.FC = () => (
	<Spinner
		thickness="5px"
		speed="0.5s"
		emptyColor="white"
		color="purple.500"
		size="xl"
	/>
);
