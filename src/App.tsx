import { Controller } from "@components/Controller";
import { Form } from "@components/Form";
import { Title } from "@components/Title";
import { useData } from "@contexts";

export const App: React.FC = () => {
	const { data } = useData();

	return (
		<main className="h-screen flex flex-col justify-center items-center bg-slate-600 text-center px-5">
			<Title />
			{data ? <Controller /> : <Form />}
		</main>
	);
};
