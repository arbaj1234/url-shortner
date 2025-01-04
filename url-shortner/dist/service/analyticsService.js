import ClickAnalytics from '../model/clickAnalyticsModel.js';
export const recordClick = async (shortId, country) => {
    const click = new ClickAnalytics({ shortId, country });
    await click.save();
};
export const getAnalytics = async (shortId) => {
    return ClickAnalytics.find({ shortId });
};
