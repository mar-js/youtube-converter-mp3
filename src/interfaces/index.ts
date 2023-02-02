export type TLoading = 'processing' | 'fail' | 'ok'

export interface IData {
  duration: number;
  link: string;
  msg: TLoading;
  progress: number;
  status: string;
  title: string;
}
