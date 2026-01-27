export const Loader: React.FC = () => (
	<div className="flex flex-col items-center justify-center py-8">
		<div className="w-16 h-16 border-4 border-neonBlue border-t-neonPink rounded-full animate-spin shadow-neon" />
		<span className="mt-4 text-neonGreen font-futuristic text-xl animate-pulse">
			Convirtiendo...
		</span>
	</div>
);
