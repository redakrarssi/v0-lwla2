import type { NextApiRequest, NextApiResponse } from "next"
import { rateLimitMiddleware } from "@/lib/rateLimit"

export function withRateLimit(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await rateLimitMiddleware(req, res)
    } catch (error) {
      return res.status(429).json({ message: "Too Many Requests" })
    }
    return handler(req, res)
  }
}

