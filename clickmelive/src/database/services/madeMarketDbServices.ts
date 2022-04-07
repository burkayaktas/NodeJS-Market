import MarketModel from '../models/MarketModel';



export default class MadeMarketDbServices {
    public static async getAllMarkets(): Promise<any[]> {
        return MarketModel.find();
    }

    public static async getMarketById(id: string): Promise<any> {
        return MarketModel.findById(id);
    }

    public static async createMarket(market: any): Promise<any> {
        return MarketModel.create(market);
    }

    public static async updateMarket(id: string, market: any): Promise<any> {
        return MarketModel.findByIdAndUpdate(id, market, { new: true });
    }

    public static async deleteMarket(id: string): Promise<any> {
        return MarketModel.findByIdAndDelete(id);
    }
}