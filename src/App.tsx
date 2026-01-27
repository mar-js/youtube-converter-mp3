import { Controller } from "@components/Controller";
import { Form } from "@components/Form";
import { Title } from "@components/Title";
import { useData } from "@contexts";

export const App: React.FC = () => {
	const { data } = useData();

	return (
		<main className="min-h-screen flex flex-col justify-center items-center bg-backgroundDark text-center px-5 font-futuristic">
			<section className="bg-gradient-to-br from-backgroundDark via-neonBlue/10 to-neonPink/10 p-8 rounded-2xl shadow-neon mb-8 border-2 border-neonPink backdrop-blur-md">
				<Title />
				{data ? <Controller /> : <Form />}
			</section>

			<footer className="flex flex-col justify-center items-center text-neonBlue mt-8">
				<span className="text-neonGreen drop-shadow-[0_0_6px_#39ff14]">
					© {new Date().getFullYear()} Futuristic Converter | Todos los derechos
					reservados
				</span>
				<a
					href="https://github.com/mar-js"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-neonPink underline mt-2"
				>
					mar-js 🧑🏻‍💻
				</a>
			</footer>
		</main>
	);
};
