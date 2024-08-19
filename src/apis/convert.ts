import type { IData } from "interfaces";

export const convert = async (youtubeId: string): Promise<IData | Error> => {
	try {
		const RESPONSE = await fetch(
			`${import.meta.env.VITE_API}?id=${youtubeId}`,
			{
				method: "GET",
				headers: {
					"X-RapidAPI-Key": `${import.meta.env.VITE_API_KEY}`,
					"X-RapidAPI-Host": `${import.meta.env.VITE_API_HOST}`,
				},
			},
		);
		const DATA: IData = await RESPONSE.json();

		return DATA;
	} catch (error) {
		return new Error(error as string);
	}
};
