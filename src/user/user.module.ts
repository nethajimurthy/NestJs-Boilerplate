import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProfileController } from './profile.controller';
import { UserDataInitializerService } from './user-data-initializer.service';
import { UserService } from './user.service';
import { UserController } from './user.controller';
@Module({
  imports: [DatabaseModule],
  providers: [UserService, UserDataInitializerService],
  exports: [UserService],
  controllers: [ProfileController, UserController],
})
export class UserModule {}
