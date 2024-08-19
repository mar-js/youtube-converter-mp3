import { Heading } from "@chakra-ui/react";

export const Title: React.FC = () => (
	<Heading
		as="h1"
		mb={5}
		size="xl"
		bgGradient="linear(to-l, #7928CA, #b87ff1, #e1c3ff)"
		bgClip="text"
		textAlign="center"
	>
		{" "}
		Youtube Converter MP3
	</Heading>
);
