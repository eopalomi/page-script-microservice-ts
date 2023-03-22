import express from 'express';
import { pageScriptRoutes } from './page.routes';

export const routes = express.Router();

routes.use('/page', pageScriptRoutes);