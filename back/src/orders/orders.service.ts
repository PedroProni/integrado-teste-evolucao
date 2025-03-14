import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { MonthlyDto } from './dto/monthly.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('Order') private orderModel: Model<Order>) {}

  async create(createOrderDto: CreateOrderDto) {
    const createdOrder = await new this.orderModel(createOrderDto);
    return createdOrder.save();
  }

  async monthlyExpense(monthlyDto: MonthlyDto) {
    const currentYear = new Date().getFullYear();
    const startDate = new Date(currentYear, monthlyDto.month - 1, 1); // Primeiro dia do mês
    const endDate = new Date(currentYear, monthlyDto.month, 1); // Primeiro dia do mês seguinte
    console.log(startDate, endDate);

    const orders = await this.orderModel.find({
      email: monthlyDto.email,
      createdAt: {
        $gte: startDate,
        $lt: endDate
      }
    });
    return orders;
  }

  async findAll() {
    const orders = await this.orderModel.find().exec();
    return orders;
  }

  async findOne(id: number) {
    const order = await this.orderModel.findById(id).exec();
    return order;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
