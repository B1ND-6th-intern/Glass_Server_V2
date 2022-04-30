import { Controller, Get, Post } from '@nestjs/common';
import BaseResponse from 'src/global/response/response';
import JoinDto from './dto/join.dto';
import User from './entities/user.entity';
import { UserService } from './user.service';
import response from 'src/global/response/response';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('join')
  async join(joinDto: JoinDto): Promise<BaseResponse<User>> {
    const userData = await this.userService.join(joinDto);
    return response.successResponse(
      '회원가입 성공. 이메일의 인증번호를 확인해 주세요.',
    );
  }
}
