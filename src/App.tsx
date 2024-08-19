import { Container } from "@chakra-ui/react";
import { Controller } from "@components/Controller";
import { Form } from "@components/Form";
import { Title } from "@components/Title";
import { useData } from "@contexts";

export const App: React.FC = () => {
	const { data } = useData();

	return (
		<Container
			h="100vh"
			maxW="100%"
			bgGradient="linear(to-b, orange.100, purple.100, purple.200, purple.300, purple.400)"
		>
			<Container
				h="100%"
				maxW="container.md"
				py={5}
				display="flex"
				justifyContent="center"
				flexDirection="column"
			>
				<Title />
				{data ? <Controller /> : <Form />}
			</Container>
		</Container>
	);
};
