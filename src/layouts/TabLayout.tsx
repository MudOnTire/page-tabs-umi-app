import React, { useState } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

interface ITabLayoutProps {
  children: React.ReactNode;
}

interface Tab {
  key: string;
  title: React.ReactNode;
}

const TabLayout: React.FC<ITabLayoutProps> = props => {
  const { children } = props;
  const [content, setContent] = useState<React.ReactNode>();
  const [tabs, setTabs] = useState<Tab[]>([
    { key: 'a', title: 'tab1' },
    { key: 'b', title: 'tab2' },
    { key: 'c', title: 'tab3' },
    { key: 'd', title: 'tab4' },
  ]);

  const handleTabChange = (key: string) => {
    setContent(`Tab ${key} content`);
  };

  return (
    <Tabs hideAdd type="editable-card" onChange={handleTabChange}>
      {tabs.map(tab => (
        <TabPane tab={tab.title} key={tab.key}>
          {content}
          {children}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default TabLayout;
