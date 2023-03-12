import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Length, IsString, IsEmail } from 'class-validator';
import { Types } from 'mongoose';

@ObjectType()
export class User {
  @Field(() => ID)
  id: Types.ObjectId;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  username!: string;

  @Field()
  biography!: string;

  @Field()
  location!: string;

  @Field()
  profilePicture!: string;

  @Field()
  profileHeaderPicture!: string;

  @Field()
  media!: string;

  @Field(() => [Number])
  followers!: number[];

  @Field(() => [Number])
  following!: number[];

  @Field(() => [Number])
  tweets!: number[];

  @Field(() => [Number])
  likes!: number[];

  @Field(() => [Number])
  bookmarks!: number[];

  @Field(() => [Number])
  retweets!: number[];

  @Field(() => [Number])
  replies!: number[];

  @Field()
  dateOfBirth!: string;
}

@InputType()
export class RegisterUserInput {
  @Field()
  @Length(1, 20)
  @IsString()
  name: string;

  @Field()
  @IsEmail()
  @IsString()
  email!: string;

  @Field()
  @Length(1, 10)
  @IsString()
  dateOfBirth!: string;
}
