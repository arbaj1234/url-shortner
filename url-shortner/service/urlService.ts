import Url from '../model/urlModel';
import shortid from 'shortid';

export const createShortUrl = async (originalUrl: string, expirationDate?: Date) => {
  const shortId = shortid.generate();
  const url = new Url({ originalUrl, shortId, expirationDate });
  await url.save();
  return shortId;
};

export const getOriginalUrl = async (shortId: string):Promise<any> => {
  const url = await Url.findOne({ shortId });
  if (!url || (url.expirationDate && url.expirationDate < new Date())) {
    return null;
  }
  return url.originalUrl;
};
