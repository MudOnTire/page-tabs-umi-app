import React from 'react';
import { RouteWatcher } from 'antd-pro-page-tabs';
import { useIntl } from 'umi';

export default function(props: any) {
  const intl = useIntl();
  const { route } = props;
  if (route.tabLocalId) {
    route.tabLocalName = intl.formatMessage({
      id: route.tabLocalId,
      defaultMessage: route.name,
    });
  }
  return <RouteWatcher {...props} />;
}
