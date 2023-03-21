import {execQuery} from '../db/pg.connect';

export const getPageLoadScript = async (idPage: string): Promise<string> => {
    const { rows } = await execQuery(`select * from frame.get_pagina_valpag(${idPage});`, null);
    console.log (`select * from frame.get_pagina_valpag(${idPage});`)

    return rows[0].valpag;
};