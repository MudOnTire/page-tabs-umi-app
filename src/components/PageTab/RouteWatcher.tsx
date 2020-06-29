import React, { useState, useContext, useEffect } from 'react';
import { IRoute } from 'umi';
import { History, Location } from 'history';
import { context } from './context';
import { CONTEXT_ACTIONS } from './types';

interface IRouteWatcherProps {
  children: React.ReactNode;
  history: History;
  location: any;
  match: { isExact: boolean; params: Object; path: string; url: string };
  route: IRoute;
  routes: IRoute[];
}

const RouteWatcher: React.FC<IRouteWatcherProps> = props => {
  const store = useContext(context);
  const { tabs, dispatch } = store;
  const { children, route } = props;

  const updateTabs = () => {
    const tab = { route, location, children };
    const newTabs = [...tabs];
    // 如果tab的route.path相同，认为是同一tab
    const exists = newTabs.some(t => t.route.path === tab.route.path);
    if (!exists) {
      newTabs.push(tab);
      dispatch({
        type: CONTEXT_ACTIONS.UPDATE_TABS,
        payload: newTabs,
      });
    }
  };

  useEffect(updateTabs, []);

  return <>{children}</>;
};

export default RouteWatcher;
