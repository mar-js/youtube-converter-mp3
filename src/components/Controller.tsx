import { useData } from "contexts";

import { Box } from "@chakra-ui/react";
import { Alert, Download, Loader } from "components";

export const Controller: React.FC = () => {
	const { data } = useData();

	return (
		<Box textAlign="center">
			{data?.status === "processing" && <Loader />}

			{data?.status === "fail" && <Alert msg={data?.msg as string} />}

			{data?.status === "ok" && (
				<Download title={data?.title as string} link={data?.link as string} />
			)}
		</Box>
	);
};
