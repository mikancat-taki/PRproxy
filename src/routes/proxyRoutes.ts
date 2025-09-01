import { Router } from 'express';
import ProxyController from '../controllers/proxyController';

const router = Router();
const proxyController = new ProxyController();

export const setProxyRoutes = () => {
    router.get('/proxy', proxyController.handleGetProxy);
    router.post('/proxy', proxyController.handlePostProxy);
    // 他のプロキシ関連のルートをここに追加できます

    return router;
};