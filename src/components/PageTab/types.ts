// eslint-disable-next-line no-unused-vars
import { IRoute } from 'umi';
import { Location } from 'history';

export enum CONTEXT_ACTIONS {
  UPDATE_TABS,
}

/**
 * Tab object
 */
export interface Tab {
  route: IRoute;
  location: any;
  children: React.ReactNode;
}

/**
 * Context state to store tab informations
 */
export interface ContextState {
  tabs: Array<Tab>;
  dispatch: Function;
}

/**
 * Context action to update context state
 */
export interface ContextAction {
  type: CONTEXT_ACTIONS;
  payload: Array<Tab>;
}
