import { FormEvent } from 'react'

export type TLoading = 'processing' | 'fail' | 'ok'

export interface IDataContextModel {
  data: IData | null;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface IUrl {
  url: string;
}

export interface IDownload {
  title: string;
  link: string;
}

export interface IAlert {
  msg: string;
}

export interface IData {
  duration?: number;
  link?: string;
  msg?: string;
  progress?: number;
  status: TLoading;
  title?: string;
}
