import { NowRequest, NowResponse } from '@vercel/node'
import * as requestIp from 'request-ip';

export default async (req: NowRequest, res: NowResponse) => {
  const ip = requestIp.getClientIp(req);

  return res.status(200).json({ ip })
}