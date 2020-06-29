import React, { useContext, useEffect } from 'react';
import { context } from './context';
import { CONTEXT_ACTIONS, UmiComponentProps } from './types';

const RouteWatcher: React.FC<UmiComponentProps> = props => {
  const store = useContext(context);
  const { tabs, dispatch } = store;
  const { children, route, location } = props;

  const updateTabs = () => {
    const newTabs = [...tabs];
    const exists = newTabs.some(t => t.route.path === route.path);
    if (!exists) {
      const tab = { route, location, children };
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
