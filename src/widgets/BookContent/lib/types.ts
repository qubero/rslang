import { URLSearchParamsInit } from 'react-router-dom';

type IMuiColor = 'success' | 'warning' | 'error' | 'info';

type ISetQuery = (
  nextInit: URLSearchParamsInit,
  navigateOptions?:
    | {
        replace?: boolean | undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        state?: any;
      }
    | undefined
) => void;

type IGroup = {
  color: IMuiColor;
  value: string;
  title: string;
  subtitle: string;
};
interface IGroupPanel {
  isLearning: boolean;
}

export type { IMuiColor, IGroup, IGroupPanel, ISetQuery };
