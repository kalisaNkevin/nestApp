import { Injectable } from '@nestjs/common';
import { PaymentModelDto } from './dto/update-payement.dto';

@Injectable()
export class PayementsService {
  create(createPayementDto: PaymentModelDto) {
    return 'This action adds a new payement';
  }

  findAll() {
    return `This action returns all payements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payement`;
  }

  update(id: number, updatePayementDto: PaymentModelDto) {
    return `This action updates a #${id} payement`;
  }

  remove(id: number) {
    return `This action removes a #${id} payement`;
  }
}
