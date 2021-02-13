import { Response, Request } from 'express'

/**
 * Example API endpoint
 * @route GET /api/:input
 */
export const inputController = async (req: Request, res: Response) => {
  res.json({ input: req.params.input })
}
