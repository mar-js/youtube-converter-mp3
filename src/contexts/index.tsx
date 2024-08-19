import { createContext, useContext } from "react";

import type { IDataContextModel } from "interfaces";

export const DataContext = createContext<IDataContextModel>(
	{} as IDataContextModel,
);

export const useData = (): IDataContextModel => useContext(DataContext);
