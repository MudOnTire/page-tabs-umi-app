import React from 'react';
import { TabLayout } from 'antd-pro-page-tabs';

const contextMenuLabels = {
  closeTab: '关闭标签',
  closeRightTabs: '关闭右侧标签',
  closeAllTabs: '关闭所有标签',
};

export default (props: any) => {
  const { children } = props;
  return <TabLayout {...props} contextMenuLabels={contextMenuLabels} />;
};
