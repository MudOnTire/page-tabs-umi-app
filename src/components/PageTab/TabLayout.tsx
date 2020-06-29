import React, { useState, useContext, Fragment } from 'react';
import { Tabs } from 'antd';
import { history } from 'umi';
import { context, provider as TabsProvider } from './context';
import { UmiComponentProps, CONTEXT_ACTIONS } from './types';
import { isTabActive } from './utils';

const { TabPane } = Tabs;

/**
 * TabBar component placed on top of a page
 */
const TabBar: React.FC<{ location: any }> = () => {
  const store = useContext(context);
  const { tabs, dispatch } = store;

  const handleTabChange = (key: string) => {
    const tab = tabs.find(t => t.route.path === key);
    if (tab) {
      history.push(tab.location);
    }
  };

  /**
   * Handle tab remove
   * @param tabKey Key of tab to be removed
   * @param action Name of action
   */
  const handleEdit = (tabKey: any, action: 'add' | 'remove') => {
    if (action === 'remove') {
      const tabIndex = tabs.findIndex(tab => tab.route.path === tabKey);
      if (tabIndex < 0) return;
      let nextActiveTab;
      if (isTabActive(tabKey, location)) {
        nextActiveTab = tabs[tabIndex + 1] ||
          tabs[tabIndex - 1] || { location: '/' };
      }
      if (nextActiveTab) {
        history.push(nextActiveTab.location);
      }
      const newTabs = [...tabs];
      newTabs.splice(tabIndex, 1);
      dispatch({
        type: CONTEXT_ACTIONS.UPDATE_TABS,
        payload: newTabs,
      });
    }
  };

  return (
    <Tabs
      hideAdd
      type="editable-card"
      onChange={handleTabChange}
      onEdit={handleEdit}
      activeKey={location.pathname}
    >
      {tabs.map(tab => {
        return (
          <TabPane tab={tab.route.name} key={tab.route.path}>
            {tab.route.children}
          </TabPane>
        );
      })}
    </Tabs>
  );
};

/**
 * Tab content to display pages
 */
const TabContent: React.FC<{
  location: any;
  defaultChildren: React.ReactNode;
}> = props => {
  const store = useContext(context);
  const { tabs } = store;
  const { location, defaultChildren } = props;
  const isLocationInTab = tabs.some(
    tab => tab.route.path === location.pathname,
  );
  return (
    <>
      {tabs.map(tab => {
        const isActive = tab.route.path === location.pathname;
        return (
          <div
            key={tab.route.path}
            style={{ display: isActive ? 'block' : 'none' }}
          >
            {tab.children}
          </div>
        );
      })}
      {!isLocationInTab && defaultChildren}
    </>
  );
};

const TabLayout: React.FC<UmiComponentProps> = props => {
  const { children, location } = props;
  return (
    <TabsProvider>
      <TabBar location={location} />
      <TabContent location={location} defaultChildren={children} />
    </TabsProvider>
  );
};

export default TabLayout;
