import { Controller } from "@components/Controller";
import { Form } from "@components/Form";
import { Title } from "@components/Title";
import { useData } from "@contexts";

export const App: React.FC = () => {
	const { data } = useData();

	return (
		<main className="relative h-screen flex flex-col justify-center items-center bg-slate-600 text-center px-5">
			<Title />
			{data ? <Controller /> : <Form />}

			<footer className="absolute bottom-5 text-white opacity-50">
				@ Todos los derechos reservados |
				<a
					href="https://github.com/mar-js"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:underline"
				>
					mar-js
				</a>
			</footer>
		</main>
	);
};
