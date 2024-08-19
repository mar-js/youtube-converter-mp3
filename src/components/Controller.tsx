import { Box } from "@chakra-ui/react";
import { Alert } from "@components/Alert";
import { Download } from "@components/Download";
import { Loader } from "@components/Loader";
import { useData } from "@contexts";

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
