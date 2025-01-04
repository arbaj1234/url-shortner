import Url from '../model/urlModel.js';
import shortid from 'shortid';
export const createShortUrl = async (originalUrl, expirationDate) => {
    const shortId = shortid.generate();
    const url = new Url({ originalUrl, shortId, expirationDate });
    await url.save();
    return shortId;
};
export const getOriginalUrl = async (shortId) => {
    const url = await Url.findOne({ shortId });
    if (!url || (url.expirationDate && url.expirationDate < new Date())) {
        return null;
    }
    return url.originalUrl;
};
