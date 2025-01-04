import ClickAnalytics from '../model/clickAnalyticsModel';

export const recordClick = async (shortId: string, country: string):Promise<any> => {
  const click = new ClickAnalytics({ shortId, country });
  await click.save();
};

export const getAnalytics = async (shortId: string):Promise<any> => {
  return ClickAnalytics.find({ shortId });
};
