import { Injectable } from '@nestjs/common';
import { validationData } from 'src/global/utils/validationData';
import JoinDto from './dto/join.dto';
import { UserRepository } from './repositories/user.repository';
import response from 'src/global/response/response';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async join(joinDto: JoinDto) {
    const checkUser = await this.userRepository.getUserByEmail(joinDto.email);
    if (validationData(checkUser)) {
      response.errorResponse(
        401,
        '이 email은 이미 사용되고 있습니다. 다른 email로 바꿔주세요.',
      );
    }

    await this.userRepository.save(joinDto);
  }
}
