import { Schema, model } from 'mongoose';
import { Market,  } from '../types/model-types';


const marketSchema = new Schema<Market>({
    id: { type: String, required: false, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});


const BookingModel = model<Market>('market', marketSchema);
export default BookingModel;