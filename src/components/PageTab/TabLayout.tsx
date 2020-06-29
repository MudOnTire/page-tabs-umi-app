import React, { useState, useContext, Fragment } from 'react';
import { Tabs } from 'antd';
import { context, provider as TabsProvider } from './context';
import { UmiComponentProps } from './types';

const { TabPane } = Tabs;

const TabBar: React.FC<{}> = () => {
  const store = useContext(context);
  const { tabs } = store;
  const handleTabChange = () => {};

  return (
    <Tabs hideAdd type="editable-card" onChange={handleTabChange}>
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

const TabBarContent: React.FC<{
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
      {isLocationInTab
        ? tabs.map(tab => {
            const isActive = tab.route.path === location.pathname;
            return (
              <div
                key={tab.route.path}
                style={{ display: isActive ? 'block' : 'none' }}
              >
                {tab.children}
              </div>
            );
          })
        : defaultChildren}
    </>
  );
};

const TabLayout: React.FC<UmiComponentProps> = props => {
  const { children, location } = props;

  return (
    <TabsProvider>
      <TabBar />
      <TabBarContent location={location} defaultChildren={children} />
    </TabsProvider>
  );
};

export default TabLayout;
