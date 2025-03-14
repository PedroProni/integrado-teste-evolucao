import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class Order extends Document {

    @Prop({ required: true, unique: true })
    increment_id: string;
    
    @Prop({ required: true })
    email: string;
    
    @Prop({ required: true })
    payment_card: string;
    
    @Prop({ required: true })
    total: number;

    @Prop({ required: true })
    items: Types.ObjectId[];

}

export const OrderSchema = SchemaFactory.createForClass(Order);
