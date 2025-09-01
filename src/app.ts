import express from 'express';
import { setProxyRoutes } from './routes/proxyRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setProxyRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});