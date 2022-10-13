import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { Post } from 'src/posts/posts.model';
import { RolesModule } from 'src/roles/roles.module';
import { Roles } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController], 
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User,Roles,UserRoles,Post]),
    RolesModule,
    forwardRef(()=>AuthModule),
  ],
  exports: [UsersService]
})
export class UsersModule {}