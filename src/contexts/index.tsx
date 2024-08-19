import type { IDataContextModel } from "@interfaces";
import { createContext, useContext } from "react";

export const DataContext = createContext<IDataContextModel>(
	{} as IDataContextModel,
);

export const useData = (): IDataContextModel => useContext(DataContext);
