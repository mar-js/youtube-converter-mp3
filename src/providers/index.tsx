import { convert } from "@apis/convert";
import { DataContext } from "@contexts";
import { getIdYoutube } from "@helpers/getIdYoutube";
import { getValueForm } from "@helpers/getValueForm";
import type { IData } from "@interfaces";
import { REGEX_YOUTUBE } from "@utils/regexYoutube";
import { type FormEvent, type PropsWithChildren, useState } from "react";

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [data, setData] = useState<IData | null>(null);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const { url } = getValueForm(e);

		if (!REGEX_YOUTUBE.test(url)) {
			setData({ status: "fail" });

			return;
		}

		setData({ status: "processing" });

		const YOUTUBE_ID = getIdYoutube(url) as string;

		try {
			const DATA = (await convert(YOUTUBE_ID)) as unknown as IData;

			setData(DATA);
		} catch (error) {
			console.error("Error: ", error);

			setData({ status: "fail" });
		}
	};

	const VALUE = {
		data,
		handleSubmit,
	};

	return <DataContext.Provider value={VALUE}>{children}</DataContext.Provider>;
};
