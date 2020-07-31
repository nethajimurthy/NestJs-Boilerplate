import {
  Inject,
  Injectable,
  OnModuleInit
} from '@nestjs/common';
import { Model } from 'mongoose';
import { USER_MODEL } from '../database/database.constants';
import { RoleType } from '../common/enum/role-type.enum';
import { User } from '../database/user.model';

@Injectable()
export class UserDataInitializerService
  implements OnModuleInit {
  constructor(@Inject(USER_MODEL) private userModel: Model<User>) { }

  async onModuleInit(): Promise<void> {
    console.log('(UserModule) is initialized...');
    await this.userModel.deleteMany({});
    const user = {
      username: 'hantsy',
      password: 'password',
      email: 'hantsy@example.com',
      roles: [RoleType.USER],
    };

    const admin = {
      username: 'admin',
      password: 'password',
      email: 'admin@example.com',
      roles: [RoleType.ADMIN],
    };
    await this.userModel.insertMany([user, admin]);
  }

}
