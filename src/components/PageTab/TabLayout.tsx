import React, { useState, useContext, Fragment } from 'react';
import { Tabs } from 'antd';
import { context, provider as TabsProvider } from './context';

const { TabPane } = Tabs;

interface ITabBarProps {}

const TabBar: React.FC<ITabBarProps> = props => {
  const store = useContext(context);
  const { tabs, dispatch } = store;
  console.log('tabs === ', tabs);

  const handleTabChange = () => {};

  return (
    <Tabs hideAdd type="editable-card" onChange={handleTabChange}>
      {tabs.map(tab => (
        <TabPane tab={tab.route.title} key={tab.route.path}></TabPane>
      ))}
    </Tabs>
  );
};

interface ITabLayoutProps {
  children: React.ReactNode;
}

const TabLayout: React.FC<ITabLayoutProps> = props => {
  const { children } = props;

  return (
    <TabsProvider>
      <TabBar />
      {children}
    </TabsProvider>
  );
};

export default TabLayout;
