import express, {Router} from 'express';
import manufacturer from './controllers/manufacturer';

export default function (): Router {
    let router = express.Router();

    router.route('/manufacturer')
        .post(manufacturer.save);
    
    return router;
}