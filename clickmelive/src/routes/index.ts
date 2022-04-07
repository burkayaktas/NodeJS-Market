import express, { Router } from 'express';

import { createMarket, getAllMarkets, getMarketById, deleteMarket } from '../controllers/market';

const router: Router = express.Router(); 

router.get('/', getAllMarkets);
router.get('/:id', getMarketById);
router.post('/', createMarket);
router.delete('/:id', deleteMarket);


export default router;