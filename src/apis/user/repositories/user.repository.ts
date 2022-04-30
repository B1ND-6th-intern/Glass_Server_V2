import User from '../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import BaseResponse from 'src/global/response/response';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public getUser(): Promise<BaseResponse<User>> {
    return this.createQueryBuilder('user').getMany();
  }

  public getUserByEmail(email: string): Promise<User> {
    return this.createQueryBuilder('user')
      .where('email = :email', { email })
      .getOne();
  }
}
