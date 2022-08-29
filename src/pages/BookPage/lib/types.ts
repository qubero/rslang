import { URLSearchParamsInit } from 'react-router-dom';

interface IWordsPanel {
  group: string;
  page: string;
  setQuery: (
    nextInit: URLSearchParamsInit,
    navigateOptions?:
      | {
          replace?: boolean | undefined;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          state?: any;
        }
      | undefined
  ) => void;
}
export type { IWordsPanel };
