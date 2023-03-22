import { Request, Response } from 'express'
import { getPageLoadScript, setPageLoadScript, getPageProcesScript, setPageProcesScript, getPageReactScript, setPageReactScript } from '../services/page.service';

export const getLoadScript = async (req: Request, res: Response) => {
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
            script: page
        })
    } catch (error: any) {
        res.status(500).json({
            error: error,
            stack: error.stack
        });
    }
};

export const setLoadScript = async (req: Request, res: Response) => {
    const { id_pagina, script } = req.body;

    try {
        await setPageLoadScript(id_pagina, String(script).split("'").join("''"));

        res.status(200).json({
            status: 'ok'
        })
    } catch (error: any) {
        res.status(500).json({
            error: error,
            stack: error.stack
        });
    }
};

export const getProcesScript = async (req: Request, res: Response) => {
    const { id_pagina } = req.query;

    try {
        const page = await getPageProcesScript(id_pagina?.toString()!);

        if (!page) {
            res.status(404).json({
                message: 'not find script'
            });
        }

        res.status(200).json({
            status: 'ok',
            script: page
        })
    } catch (error: any) {
        res.status(500).json({
            error: error,
            stack: error.stack
        });
    }
};

export const setProcesScript = async (req: Request, res: Response) => {
    const { id_pagina, script } = req.body;

    try {
        await setPageProcesScript(id_pagina, String(script).split("'").join("''"));

        res.status(200).json({
            status: 'ok'
        })
    } catch (error: any) {
        4.
        res.status(500).json({
            error: error,
            stack: error.stack
        });
    }
};


export const getReactScript = async (req: Request, res: Response) => {
    const { id_pagina } = req.query;

    try {
        const page = await getPageReactScript(id_pagina?.toString()!);

        if (!page) {
            res.status(404).json({
                message: 'not find script'
            });
        }

        res.status(200).json({
            status: 'ok',
            script: page
        })
    } catch (error: any) {
        res.status(500).json({
            error: error,
            stack: error.stack
        });
    }
};

export const setReactScript = async (req: Request, res: Response) => {
    const { id_pagina, script } = req.body;

    try {
        await setPageReactScript(id_pagina, String(script).split("'").join("''"));

        res.status(200).json({
            status: 'ok'
        })
    } catch (error: any) {
        4.
        res.status(500).json({
            error: error,
            stack: error.stack
        });
    }
};
