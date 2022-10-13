import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Roles } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
interface UserCreationAttr{
    email:string;
    password:string;
}
@Table({tableName:"users"})
export class User extends Model<User,UserCreationAttr>{
    @ApiProperty({example:"1", description:"Уникальный идентификатор"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    
    @ApiProperty({example:"user@mail.ru", description:"Почтовый адрес"})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    email:string;
    
    @ApiProperty({example:"12345556", description:"Пароль пользователя"})
    @Column({type:DataType.STRING,allowNull:false})
    password:string;
    
    @ApiProperty({example:"true", description:"Забанен или нет"})
    @Column({type:DataType.BOOLEAN, defaultValue:false})
    banned:boolean;
    
    @ApiProperty({example:"За хулиганство", description:"Причина блокировки"})
    @Column({type:DataType.STRING, allowNull:true})
    banReason:string;
    
    @BelongsToMany(()=>Roles, ()=>UserRoles)
    roles:Roles[];
    
    @HasMany(()=>Post)
    posts:Post[];
}