import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateOrderDto {
  @ApiProperty()
  @Prop({ required: true })
  increment_id: string;

  @ApiProperty()
  @Prop({ required: true })
  email: string;

  @ApiProperty()
  @Prop({ required: true })
  payment_card: string;

  @ApiProperty()
  @Prop({ required: true })
  total: number;

  @ApiProperty()
  @Prop({ required: true })
  items: Types.ObjectId[];
}
