import type { IUrl } from "@interfaces";
import type { FormEvent } from "react";

export const getValueForm = (e: FormEvent): { url: string } => {
	const TARGET = e.target as HTMLFormElement;
	const DATA = Object.fromEntries(new FormData(TARGET));
	const { url } = DATA as unknown as IUrl;

	return { url };
};
