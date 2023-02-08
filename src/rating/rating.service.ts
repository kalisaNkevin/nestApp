import { Injectable } from '@nestjs/common';
import { RatingModelDto } from './dto/update-rating.dto';

@Injectable()
export class RatingService {
  create(createRatingDto: RatingModelDto) {
    return 'This action adds a new rating';
  }

  findAll() {
    return `This action returns all rating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rating`;
  }

  update(id: number, updateRatingDto: RatingModelDto) {
    return `This action updates a #${id} rating`;
  }

  remove(id: number) {
    return `This action removes a #${id} rating`;
  }
}
