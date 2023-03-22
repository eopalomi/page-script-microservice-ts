import  {Router} from 'express'
import { getLoadScript, setLoadScript, getProcesScript, setProcesScript, getReactScript, setReactScript } from '../controllers/page.controller';

export const pageScriptRoutes = Router();

/**
 * ENDPOINTS FOR LOAD SCRIPT
 */
pageScriptRoutes.get('/load-script', getLoadScript);
pageScriptRoutes.post('/load-script', setLoadScript);

/**
 * ENDPOINTS FOR PROCESS SCRIPT
 */
pageScriptRoutes.get('/process-script', getProcesScript);
pageScriptRoutes.post('/process-script', setProcesScript);

/**
 * ENDPOINTS FOR REACT SCRIPT
 */
pageScriptRoutes.get('/react-script', getReactScript);
pageScriptRoutes.post('/react-script', setReactScript);