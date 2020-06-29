export const isTabActive = (tabKey: string, location: any) => {
  return tabKey === location.pathname;
};
