import {execQuery} from '../db/pg.connect';

/**
 * Service for load Script
 * @param idPage 
 * @returns 
 */
export const getPageLoadScript = async (idPage: string): Promise<string> => {
    const { rows } = await execQuery(`select * from frame.get_pagina_valpag(${idPage});`, null);

    return rows[0].valpag;
};

export const setPageLoadScript = async (idPage: string, loadScript: string ): Promise<void> => {
    const { rows } = await execQuery(`select * from frame.set_pagina_valpag(${idPage},'${loadScript}');`, null);
};

/**
 * Service for Process Script
 * @param idPage 
 * @returns 
 */
export const getPageProcesScript = async (idPage: string): Promise<string> => {
    const { rows } = await execQuery(`select * from frame.get_pagina_propag(${idPage});`, null);

    return rows[0].propag;
};

export const setPageProcesScript = async (idPage: string, procesScript: string ): Promise<void> => {
    const { rows } = await execQuery(`select * from frame.set_pagina_propag(${idPage},'${procesScript}');`, null);
};

/**
 * Service for React Script
 * @param idPage 
 * @returns 
 */
export const getPageReactScript = async (idPage: string): Promise<string> => {
    const { rows } = await execQuery(`select * from frame.get_pagina_propos(${idPage});`, null);

    return rows[0].propos;
};

export const setPageReactScript = async (idPage: string, reactScript: string ): Promise<void> => {
    const { rows } = await execQuery(`select * from frame.set_pagina_propos(${idPage},'${reactScript}');`, null);
};