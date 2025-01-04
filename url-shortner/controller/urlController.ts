import { Request, Response } from 'express';
import { createShortUrl, getOriginalUrl } from '../service/urlService';
import { recordClick } from '../service/analyticsService';

export const shortenUrl = async (req: Request, res: Response) => {
  const { originalUrl, expirationDate } = req.body;
  const shortId = await createShortUrl(originalUrl, expirationDate);
  res.status(201).json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortId}` });
};

export const redirectUrl = async (req: Request, res: Response):Promise<any> => {
  const { shortId } = req.params;
  const originalUrl = await getOriginalUrl(shortId);
  if (!originalUrl) {
    return res.status(404).json({ message: 'URL not found or expired.' });
  }
  await recordClick(shortId, req.ip); // Optional: Geolocation can be added here.
  res.status(200).json({
    success: true,
    originalUrl
  })
  // res.redirect(originalUrl);
};
