import { HResponse } from '../core/ApiResponse';
import MadeMarketDbServices from '../database/services/madeMarketDbServices';
import asyncHandler from '../helpers/asyncHandler';


export const createMarket = asyncHandler(async (req, res) => {
    const market = await MadeMarketDbServices.createMarket(req.body);
    res.status(201).json({
        success: true,
        data: market
    });
});

export const getAllMarkets = asyncHandler(async (req, res) => {
    const markets = await MadeMarketDbServices.getAllMarkets();
    res.status(200).json({
        success: true,
        data: markets
    });
});

export const getMarketById = asyncHandler(async (req, res) => {
    const market = await MadeMarketDbServices.getMarketById(req.params.id);
    if (!market) {
        return res.status(404).json({
            success: false,
            error: 'Market not found'
        });
    }
    res.status(200).json({
        success: true,
        data: market
    });
});

export const deleteMarket = asyncHandler(async (req, res) => {
    const market = await MadeMarketDbServices.deleteMarket(req.params.id);
    if (!market) {
        return res.status(404).json({
            success: false,
            error: 'Market not found'
        });
    }
    res.status(200).json({
        success: true,
        data: market
    });
});

