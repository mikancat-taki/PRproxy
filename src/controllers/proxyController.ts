import { Request, Response } from 'express';

class ProxyController {
    async handleRequest(req: Request, res: Response) {
        try {
            const url = req.query.url as string;
            if (!url) {
                return res.status(400).json({ error: 'URL is required' });
            }

            const response = await fetch(url, {
                method: req.method,
                headers: req.headers as any,
                body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
            });

            const data = await response.json();
            res.status(response.status).json(data);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while processing the request' });
        }
    }
}

export default new ProxyController();