import { Request, Response } from 'express'
import { getPageLoadScript } from '../services/page.service';

export const getPageController = async (req: Request, res: Response) => {
    const { id_pagina } = req.query;

    try {
        const page = await getPageLoadScript(id_pagina?.toString()!);
        if (!page) {
            res.status(404).json({
                message: 'not find script'
            });
        }

        res.status(200).json({
            status: 'ok',
            valpag: page
        })
    } catch (error: any) {
        res.status(500).json({
            error: error,
            stack: error.stack
        });
    }
};