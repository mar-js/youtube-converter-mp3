import { Controller } from "@components/Controller";
import { Form } from "@components/Form";
import { Title } from "@components/Title";
import { useData } from "@contexts";

export const App: React.FC = () => {
	const { data } = useData();

	return (
		<main className="h-screen flex flex-col justify-center items-center bg-retro-brown-light-two text-center px-5">
			<section className="bg-retro-brown-light-one p-5 rounded-lg outline outline-1 outline-retro-brown-dark-one mb-5">
				<Title />
				{data ? <Controller /> : <Form />}
			</section>

			<footer className="flex flex-col justify-center items-center text-retro-brown-dark-two">
				<span>
					© {new Date().getFullYear()} Retro Converter | Todos los derechos
					reservados
				</span>
				<a
					href="https://github.com/mar-js"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:underline"
				>
					mar-js 🧑🏻‍💻
				</a>
			</footer>
		</main>
	);
};
